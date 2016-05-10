var pg = require('pg');

var connectionString;

if (process.env.DATABASE_URL){
  pg.defaults.ssl = true;
  console.log('environment var');
  connectionString = process.env.DATABASE_URL;
} else {
  console.log('local var');
  connectionString = 'postgres://localhost:5432/grandomizer';
}

function initializeDB(){
  pg.connect(connectionString, function(err, client, done){
    if (err){
      console.log('Error connecting to Grandomizer database: ', err);
      process.exit(1);
    } else {

      var accountTable = client.query(
        'CREATE TABLE IF NOT EXISTS accounts('+
        'id SERIAL PRIMARY KEY,' +
        'username varchar(255) NOT NULL,' +
        'password varchar(100) NOT NULL);'
      );

      var cohortTable = client.query(
        'CREATE TABLE IF NOT EXISTS cohorts('+
        'id SERIAL PRIMARY KEY,' +
        'name varchar(255) NOT NULL,' +
        'owner_id INT REFERENCES accounts(id));'
      );

      var participantTable = client.query(
        'CREATE TABLE IF NOT EXISTS participants('+
        'id SERIAL PRIMARY KEY,' +
        'name varchar(255) NOT NULL,' +
        'leader BOOLEAN NOT NULL,' +
        'cohort_id INT REFERENCES cohorts(id));'
      );


      accountTable.on('end', function(){
        console.log('Account table exists');
        done();
      });

      accountTable.on('error', function(err){
        console.log('Error creating accounts table: ' + err);
        process.exit(1);
      });

      cohortTable.on('end', function(){
        console.log('Cohort table exists');
        done();
      });

      cohortTable.on('error', function(){
        console.log('Error creating cohorts table: ' + err);
        process.exit(1);
      });

      participantTable.on('end', function(){
        console.log('Participants table exists');
        done();
      });

      participantTable.on('error', function(){
        console.log('Error creating participants table: ', err);
        process.exit(1);
      });

    }
  });
}

module.exports.connectionString = connectionString;
module.exports.initializeDB = initializeDB;
