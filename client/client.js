var app = angular.module('GrandomizerApp', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'views/home.html',
    controller: 'HomeController',
    controllerAs: 'home'
  })
  .when('/login', {
    templateUrl: 'views/login.html',
    controller: 'LoginController',
    controllerAs: 'login'
  })
  .when('/profile', {
    templateUrl: 'views/profile.html',
    controller: 'ProfileController',
    controllerAs: 'profile'
  });
  $locationProvider.html5Mode(true);
}]);

// ::::::::: Home Controller ::::::::: //


app.controller('HomeController',
['NewService', function (NewService){
  this.data = NewService.data;
  NewService.makeCall();
}]);

app.factory('NewService', function($http){
  var makeCall = function(){
    $http.get('/thing').then(function(results){
      console.log(results);
      data.results = results;
    });
  };

  var data = {};
  return {
    makeCall : makeCall,
    data : data
  };
});

// ::::::::: Login Controller ::::::::: //


app.controller('LoginController', function(){

});

// ::::::::: Profile Controller ::::::::: //

app.controller('ProfileController', function(){

});
