var express = require('express');
var router = express.Router();
var passport = require('passport');
var path = require('path');
var pg = require('pg');
var flash = require('connect-flash');

var connectionString = require('../db/connection.js').connectionString;

// ::::::::: GET HTML ::::::::: //
router.get('/', function(request, response, next){
  response.sendFile(path.join(__dirname, '../public/views/login.html'));
});


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
router.post('/login', passport.authenticate('local', {
  successRedirect: '/home',
  failureRedirect: '/login',
}), function(request, response){
  response.redirect('/users/' + request.user.username);
}
);

// ::::::::: LOG OUT ::::::::: //
router.get('/logout', function(request, response){
  request.logout();
  response.redirect('/login');
});

// ::::::::: EDIT USER NAME ::::::::: //


// ::::::::: EDIT USER PASSWORD ::::::::: //


// ::::::::: DELETE USER ::::::::: //


module.exports = router;
