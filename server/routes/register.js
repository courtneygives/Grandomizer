var express = require('express');
var router = express.Router();
var passport = require('passport');
var path = require('path');
var pg = require('pg');

var connectionString = require('../db/connection.js').connectionString;


router.get('/', function(request, response, next){
  response.sendFile(path.join(__dirname, '../public/views/login.html'));
});


router.post('/', function(request, response, next){

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

module.exports = router;
