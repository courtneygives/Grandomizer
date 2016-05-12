var express = require('express');
var router = express.Router();
var passport = require('passport');
var path = require('path');
var pg = require('pg');

var connectionString = require('../db/connection.js').connectionString;

// ::::::::: GET COHORTS ::::::::: //
router.get('/cohorts', function(request, response){
  pg.connect(connectionString, function(err, client, done){
    if (err){
      console.log('Error getting cohorts: ', err);
      response.sendStatus(500);
    } else {
      var query = client.query('SELECT * FROM cohorts');
      var cohortList = [];
      query.on('error', function(err){
        console.log('Query error: ', err);
        done();
        response.sendStatus(500);
      });
      query.on('row', function(rowData){
        results.push(rowData);
      });
      query.on('end', function(){
        response.send(cohortList);
        done();
      });
    }
  });
});

// ::::::::: EDIT COHORT ::::::::: //


// ::::::::: DELETE COHORT ::::::::: //


// ::::::::: GET PARTICIPANTS ::::::::: //


// ::::::::: DELETE PARTICIPANT ::::::::: //
