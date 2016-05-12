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
app.controller('IndexController', ['$route', '$routeParams', '$location',
  function($route, $routeParams, $location) {
    this.$route = $route;
    this.$location = $location;
    this.$routeParams = $routeParams;
  }]);

// ::::::::: HOME CONTROLLER ::::::::: //
app.controller('HomeController', function(){
  var home = this;
  home.message= 'This is the home page.';
});


// ::::::::: LOGIN CONTROLLER ::::::::: //
app.controller('LoginController', function(){
  var login = this;
  login.message = 'This is the login and registration page.';
});


// ::::::::: LOGIN CONTROLLER ::::::::: //
app.controller('ProfileController', function(){
  var profile = this;
  profile.message = 'This is the user profile page.';
});

// ::::::::: FACTORIES ::::::::: //
