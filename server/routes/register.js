var express = require('express');
var router = express.Router();
var passport = require('passport');
var session = require('express-session');
var path = require('path');
var pg = require('pg');
var flash = require('connect-flash');

var connectionString = require('../db/connection.js').connectionString;



// ::::::::: REGISTRATION ::::::::: //
router.post('/new', function(request, response, next){
  console.log(request.body);
  pg.connect(connectionString, function(err, client){
    var query = client.query('INSERT INTO accounts (username, password) VALUES ($1, $2)', [request.body.username, request.body.password]);
    query.on('error', function(err){
      console.log('Error registering user: ', err);
    });

    query.on('end', function(){
      response.sendStatus(200);
      client.end();
    });
  });
});

// ::::::::: LOG IN ::::::::: //
router.post('/login', passport.authenticate('local'), function(request, response){
  response.sendStatus(200);
});

// ::::::::: GET USER ::::::::: //
router.get('/user', function(request, response, next) {
  console.log('requested session info for', request.session);
  var userId = request.session.passport.user;
  pg.connect(connectionString, function(err, client, done){
    if(err){
      console.log('Error connecting to DB!', err);
      process.exit(1);
    } else {
      var user = {};
      var query = client.query('SELECT * FROM accounts WHERE id = $1;', [userId]);

      query.on('row', function(row) {
        user = row;
      });
      query.on('end', function() {
        // client.end();
        console.log(user);
        response.send({username: user.username, display_name: user.display_name, id: user.id, isLogged: passport.authenticate()});
        done();
      });
    }
  });
});


// ::::::::: LOG OUT ::::::::: //
router.get('/logout', function(request, response){
  request.logout();
  response.sendStatus(200);
});

// ::::::::: EDIT USER NAME ::::::::: //


// ::::::::: EDIT USER PASSWORD ::::::::: //


// ::::::::: DELETE USER ::::::::: //


module.exports = router;
