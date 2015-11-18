angular.module('angularSpa')
    .service('actorsService', function($http){
        var urlBase = 'http://grybyus:8080/sakila-backend-master/actors';
        var urlBaseE = 'http://grybyus:8080/sakila-backend-master/actors/';
        this.getActors = function(){
            return $http.get(urlBase);

    this.getActor = function(id){
            return $http.get(urlBaseE.concat(id));}
    });
