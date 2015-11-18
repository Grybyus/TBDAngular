    angular.module('angularSpa')
    .controller('showActorCtrl', function($scope,$routeParams ,actorsService){
        $scope.actors =[];
        $scope.actor = $routeParams.id;
        /*function getActors(){
            actorsService.getActors()
            .success(function(data){
                $scope.actors = data;
            })
            .error(function(error){
                $scope.status = 'Error al consultar por actores';
            });
        }*/


        //var urlBaseE = 'http://grybyus:8080/sakila-backend-master/actors/';
        //this.getActor = function(id){
        //    return $http.get(urlBaseE.concat(id));}
        
        function getActor(id){
            actorsService.getActor(id)
            .success(function(data){
                $scope.actor = data;
            })
            .error(function(error){
                $scope.status = 'Error al consultar por actores';
            });
        }

        //getActors();
        console.log("Parametros"+$routeParams.id);
        getActor($scope.actor);
        
    });