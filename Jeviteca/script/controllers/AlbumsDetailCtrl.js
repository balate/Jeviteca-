
angular.module("jeviteca").controller("AlbumsDetailCtrl",function($scope, Album, settings, Utilidades) {

    $scope.album = Album;

    //boton volver
    $scope.volver= function(){
        history.back();
    };

    $scope.enlazarYoutube = function(banda, cancion) {
        return Utilidades.youtubeUrl(banda, cancion)
    };

    $scope.enlazarWikipedia = function(banda) {
        return Utilidades.wikipediaUrl(banda);
    };


});
