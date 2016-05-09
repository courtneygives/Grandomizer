var express = require('express');
var router = express.Router();
var passport = require('passport');
var path = require('path');
var pg = require('pg');

var connectionString = require('../db/connection.js').connectionString;

router.get('/', function(request, response, next){
  response.sendFile(path.join(__dirname, '../public/views/index.html'));
});


router.get('/', function(request, response, next) {
   response.send(request.isAuthenticated());
});

router.get('/home', function(request, response, next){
  response.sendFile(path.join(__dirname, '../public/views/home.html'));
});

router.get('/profile', function(request, response, next){
  response.sendFile(path.join(__dirname, '../public/views/profile.html'));
});


router.get('/login', function(request, response, next){
  response.sendFile(path.join(__dirname, '../public/views/login.html'));
});

router.post('/login', passport.authenticate('local', {
  successRedirect: '/home',
  failureRedirect: '/'
})
);






module.exports = router;
