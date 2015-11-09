//controlador barra de navegación
angular.module("jeviteca").controller("BarraNavegacionCrtl",function($scope, $route){

    $scope.pathAlbums = function(){

        return $route.current && $route.current.$$route.originalPath === "/albums";
    };

    $scope.pathBands = function(){

        return $route.current && $route.current.$$route.originalPath === "/bandas";
    };

    $scope.pathGengers = function(){

        return $route.current && $route.current.$$route.originalPath === "/generos";
    };
});
