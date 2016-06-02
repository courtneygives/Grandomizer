var app = angular.module('GrandomizerApp', ['ngRoute']);

// ::::::::: CLIENT ROUTES ::::::::: //
app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'views/partials/home.html',
    controller: 'HomeController',
    controllerAs: 'home'
  })
  .when('/login', {
    templateUrl: 'views/partials/login.html',
    controller: 'LoginController',
    controllerAs: 'login'
  })

  .when('/profile', {
    templateUrl: 'views/partials/profile.html',
    controller: 'ProfileController',
    controllerAs: 'profile'
  });
  $locationProvider.html5Mode(true);
}]);

// app.factory('currentUser', ['$http', function($http) {
//     var user = {};
//     var getUser = function() {
//         $http.get('/register/user').then(function(response) {
//         console.log(response);
//         user.info = response.data;
//         console.log('Current user: ', user.info);
//       });
//     };
//       return {user: user, getUser: getUser};
// }]);

// ::::::::: INDEX CONTROLLER ::::::::: //
app.controller('IndexController', function(){
  var index = this;
  index.header = 'Bringing people together, then separating them since 2016.';
});

// ::::::::: PROFILE CONTROLLER ::::::::: //
app.controller('ProfileController', ['$http',  function($http){
  var home = this;
  home.cohortName = '';
  home.participants = '';
  home.cohortList = [];

  home.savePants = function(){
    home.pantsList = home.participants.split(",");
    console.log(home.pantsList);
    $http.post('/routes/add-cohort',
    {
      name: home.cohortName,
      participants: home.pantsList
    }
    ).then(function(response, err){
      if (response.status !== 201){
        console.log('There was an error saving the entry: ', err, response.status);
      } else {
        console.log('Saved cohort');
        home.cohortList.push(home.cohortName);
        console.log(home.cohortList);
      }
    });
  };

  home.saveName = function(){

  };

}]);

// ::::::::: LOGIN CONTROLLER ::::::::: //
app.controller('LoginController', ['$location', '$http', function($location, $http){
  var login = this;
  login.new = {};
  login.existing = {};
  login.attempt = {};

  login.signIn = function(){
    console.log('sign in called');
    $http.post('/register/login', {
      username: login.existing.username,
      password: login.existing.password
    }).then(function(response, err){
      if (response.status == 200) {
        $location.path('/profile');
      }
      console.log('Logged in as: ', login.existing.username);
    }, function(response){
      console.log('Could not log in');
    });
  };

  login.signOut = function(userID){
    console.log('logging out');
    $http.post('/register/logout', {

    }).then(function(response, err){
      console.log('Could not log' + user.info);
    });
  };

  login.newUser = function(){
    $http.post('register/new', {
      username: login.new.username,
      password: login.new.password
    })
    .then(function(response){
      console.log('Added user: ' + login.new.username);
    });
  };

}]); // ::::::::: END LOGIN ::::::::: //



// ::::::::: PROFILE CONTROLLER ::::::::: //
app.controller('HomeController', function(){
  var profile = this;
  profile.header = 'Create, edit, and update cohorts';
});
