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

// ::::::::: INDEX CONTROLLER ::::::::: //
app.controller('IndexController', function(){
  var index = this;
  index.header = 'Bringing people together, then separating them since 2016.';
});

// ::::::::: HOME CONTROLLER ::::::::: //
app.controller('HomeController', function(){
  var home = this;
  home.header= 'Generate groups';
});

// ::::::::: LOGIN CONTROLLER ::::::::: //
app.controller('LoginController', ['$http', function($http){
  var login = this;
  login.new = {};
  login.existing = {};


  login.signIn = function(){

  };

  login.signOut = function(){

  };

  login.newUser = function(){
    $http.post('register/new', {
      username: login.new.username,
      password: login.new.password
    })
    .then(function(response){
      console.log(response);
      console.log('Added user: ' + login.new.username);
    });
  };

}]); // ::::::::: END LOGIN ::::::::: //



// ::::::::: PROFILE CONTROLLER ::::::::: //
app.controller('ProfileController', function(){
  var profile = this;
  profile.header = 'Create, edit, and update cohorts';
});

// ::::::::: FACTORIES ::::::::: //
