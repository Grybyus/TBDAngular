(function(){

    angular.module('angularSpa', [
    'ngRoute'
    ])
    .config(function($routeProvider){
        $routeProvider
        .when('/home', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
          })
        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'AboutCtrl'
          })
        .when('/actors/:id', {
            templateUrl: 'views/showActor.html',
            controller: 'showActorCtrl'
        })
        .when('/actors', {
            templateUrl: 'views/actors.html',
            controller: 'actorsCtrl'
          })
        
          
        /*.when('/showActor', {
            templateUrl: 'views/showActor.html',
            controller: 'showActorCtrl'
          })*/
        .otherwise({
            redirectTo: '/home'
          });
    });

})();
