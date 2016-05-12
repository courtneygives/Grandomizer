var express = require('express');
var router = express.Router();
var passport = require('passport');
var path = require('path');
var pg = require('pg');
var app = express();
var connectionString = require('../db/connection.js').connectionString;


//
// router.get('/', function(request, response, next){
//   response.sendFile(path.join(__dirname, '../public/views/index.html'));
// });
//
// router.get('/', function(request, response, next) {
//    response.send(request.isAuthenticated());
// });
//
// router.get('/home', function(request, response, next){
//   response.sendFile(path.join(__dirname, '../public/views/partials/home.html'));
// });
//
// router.get('/profile', function(request, response, next){
//   response.sendFile(path.join(__dirname, '../public/views/partials/profile.html'));
// });
//
//
// router.get('/login', function(request, response, next){
//   response.sendFile(path.join(__dirname, '../public/views/partials/login.html'));
// });

router.post('/login', passport.authenticate('local', {
  successRedirect: '/home',
  failureRedirect: '/'
})
);


exports.index = function(request, response){
  response.render('layout');
};

module.exports = router;
