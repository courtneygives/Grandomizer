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
      var query = client.query(
      'CREATE TABLE IF NOT EXISTS account('+
      'id SERIAL PRIMARY KEY,' +
      'username varchar(255) NOT NULL,' +
      'password varchar(100) NOT NULL);');

      query.on('end', function(){
        console.log('Users table exists');
        done();
      });

      query.on('error', function(err){
        console.log('Error creating Users table: ' + err);
        process.exit(1);
      });

    }
  });
}

module.exports.connectionString = connectionString;
module.exports.initializeDB = initializeDB;
