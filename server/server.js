var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 3000;

// :::::::: import modules :::::::: //
var index = require('./routes/index.js');
var names = require('./routes/names.js');


// :::::::: configuration :::::::: //
app.use(express.static('server/public'));
app.use(bodyParser.json());




// :::::::: routes :::::::: //
app.use('/', index);
app.use('/names');











// :::::::: server :::::::: //
app.listen(port, function() {
  console.log('listening on port', port);
});
