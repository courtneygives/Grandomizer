var router = require('express').Router();
var path = require('path');


// ::::::::: GET HTML ::::::::: //
router.get('/', function(request, response, next){
  console.log('get /');
  response.sendFile(path.join(__dirname, '../public/views/index.html'));
});

router.get('/profile', function(request, response, next){
  console.log('get /');
  response.sendFile(path.join(__dirname, '../public/views/partials/profile.html'));
});

module.exports = router;
