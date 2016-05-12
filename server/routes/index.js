var express = require('express');
var router = express.Router();
var passport = require('passport');
var path = require('path');
var pg = require('pg');
var app = express();
var connectionString = require('../db/connection.js').connectionString;


router.post('/login', passport.authenticate('local', {
  successRedirect: '/home',
  failureRedirect: '/'
}
));

module.exports = router;
