var express = require('express');
var bodyParser = require('body-parser');
var initializeDB = require('./db/connection.js').initializeDB;
var pg = require('pg');
var bcrypt = require('bcrypt');
var connectionString = require('./db/connection.js').connectionString;
var passport = require('passport');
var session = require('express-session');
var localStrategy = require('passport-local').Strategy;
 var path = require('path');
var app = express();
var port = process.env.PORT || 3000;

// :::::::: import modules :::::::: //
var index = require('./routes/index.js');
var register = require('./routes/register.js');
var groupmaker = require('../modules/groupmaker.js');
var routes = require('./routes/routes.js');

// :::::::: configuration :::::::: //
app.use(express.static('server/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: false,
  cookie: { maxAge: 60000, secure: false }
}));
app.use(passport.initialize());
app.use(passport.session());

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
      });

      // When data is returned, close the connection and return results //
      query.on('end', function(){
      if (password == user.password){
        console.log('Password match');
        done(null, user);
      } else {
        console.log('Wrong Password!');
        done(null, false, {message: 'Incorrect username or password.'});
      }
        client.end();
      });

      // Error handling
      if (err) {
        console.log('Error with DB connection: ', err);
      }
    });

  }
));

passport.serializeUser(function(user, done){
  console.log('call serializeUser');
  done(null, user.id);
});

passport.deserializeUser(function(id, done){
  console.log('Called deserializeUser');
  pg.connect(connectionString, function (err, client){

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


initializeDB();

// :::::::: routes :::::::: //
app.use('/', index);
app.use('/register', register);
app.use('/routes', routes);
app.use('/*', function(request, response){
  console.log('catch all!');
  response.sendFile(path.join(__dirname, 'public/views/index.html'));
});

// :::::::: server :::::::: //
app.listen(port, function() {
  console.log('listening on port', port);
});
