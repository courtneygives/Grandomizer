var express = require('express');
var bodyParser = require('body-parser');
var initializeDB = require('./db/connection.js').initializeDB;
var pg = require('pg');

var connectionString = require('./db/connection.js').connectionString;
var passport = require('passport');
var session = require('express-session');
var localStrategy = require('passport-local').Strategy;
var GoogleStrategy = require('passport-google-oauth').OAuthStrategy;
var path = require('path');
var app = express();
var port = process.env.PORT || 3000;

// :::::::: import modules :::::::: //
var index = require('./routes/index.js');
var register = require('./routes/register.js');

// :::::::: configuration :::::::: //
app.use(express.static('server/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/*', function(request, response){
  response.sendFile(path.join(__dirname, 'public/views/index.html'));
});

app.use(passport.initialize());
app.use(passport.session());
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: false,
  cookie: { maxAge: 60000, secure: false }
}));

// :::::::: Passport Strategies :::::::: //
passport.use('local', new localStrategy({
  passReqToCallback : true,
  usernameField: 'username' },

  function(request, username, password, done) {
    console.log('Called local strategy');
    pg.connect(connectionString, function (err, client){
      console.log('called local - pg');
      var user = {};

      var query = client.query("SELECT * FROM accounts WHERE username = $1", [username]);

      query.on('row', function(row){
        console.log('User object: ', row);
        console.log('Password: ', password);
        user = row;
        if (password == user.password){
          console.log('Password match');
          done(null, user);
        } else {
          done(null, false, {message: 'Incorrect username or password.'});
        }
      });

      // When data is returned, close the connection and return results //
      query.on('end', function(){
        client.end();
      });

      // Error handling
      if (err) {
        console.log('Error with Passport: ', err);
      }
    });

  }
));

passport.serializeUser(function(user, done){
  done(null, user.id);
});

passport.deserializeUser(function(id, done){
  console.log('Called deserializeUser');
  pg.connect(connection, function (err, client){

    var user = {};
    console.log('Called deserializeUser - pg');
    var query = client.query("SELECT * FROM accounts WHERE id = $1", [id]);

    query.on('row', function(row) {
      console.log('User row', row);
      user = row;
      done(null, user);
    });

    // When data is returned, close the connection and return results //
    query.on('end', function(){
      client.end();
    });

    // Error handling
    if (err) {
      console.log('Error with Passport: ', err);
    }
  });
});

//http://passportjs.org/docs/google  <-- TO DO: finish google oauth
// passport.use(new GoogleStrategy({
//     consumerKey: GOOGLE_CONSUMER_KEY,
//     consumerSecret: GOOGLE_CONSUMER_SECRET,
//     callbackURL: "http://www.example.com/auth/google/callback"
//   },
//   function(token, tokenSecret, profile, done) {
//       User.findOrCreate({ googleId: profile.id }, function (err, user) {
//         return done(err, user);
//       });
//   }
// ));



initializeDB();


// :::::::: routes :::::::: //
app.use('/', index);
app.use('/register', register);




// :::::::: server :::::::: //
app.listen(port, function() {
  console.log('listening on port', port);
});
