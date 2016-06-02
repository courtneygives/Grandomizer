var express = require('express');
var router = express.Router();
var passport = require('passport');
var path = require('path');
var pg = require('pg');
var groupmaker = require('../../modules/groupmaker.js');

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

// ::::::::: ADD NEW COHORT ::::::::: //
router.post('/add-cohort', function(request, response) {
  console.log('/add-cohort');
  if(!request.isAuthenticated) {
    response.sendStatus(401);
    response.send('Please log in.');
  } else {
    pg.connect(connectionString, function(err, client) {
      var cohortName = request.body.name;
      var userID = request.session.passport.user;
      var pantsArray = request.body.participants;
      console.log('/add-cohort', cohortName, userID, pantsArray);

      var cohortInsert = client.query('INSERT INTO cohorts (name, owner_id) VALUES ($1, $2);', [cohortName, userID]);
      cohortInsert.on('end', function() {
        console.log('Finished first.');

        var cohortSelect = client.query('SELECT id FROM cohorts WHERE name = $1 AND owner_id = $2 ', [cohortName, userID]);
        cohortSelect.on('row', function(rowData){
          var cohortID = rowData.id;
          console.log('Row second.');
          console.log('Rowdata: ', rowData,cohortID);

          for (var c = 0; c < pantsArray.length; c++){
            console.log(pantsArray[c], cohortID);
            if (pantsArray[c] !== ''){
              var pantsQuery = client.query('INSERT INTO participants (name, cohort_id, leader) VALUES ($1, $2, $3);', [pantsArray[c], cohortID, false], function(err){
              //   console.log(err);  //write something that knows when pantsQuery is done.
              });
            }
          }
          response.sendStatus(201);
          // client.end();
        });

      });
    });
  }
});

// ::::::::: DELETE COHORT ::::::::: //


// ::::::::: GET PARTICIPANTS ::::::::: //


// ::::::::: DELETE PARTICIPANT ::::::::: //


// ::::::::: GENERATE GROUPS ::::::::: //

// ::::::::: CLEAR GENERATED GROUPS ::::::::: //
module.exports = router;
