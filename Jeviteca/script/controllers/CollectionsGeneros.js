
angular.module("jeviteca").controller("ColecionGenerosCtrl", function($scope, Generos){

    $scope.generos = Generos.data;
});
