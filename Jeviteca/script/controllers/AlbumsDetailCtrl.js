
angular.module("jeviteca").controller("AlbumsDetailCtrl",function($scope, Album) {

    $scope.album = Album;

    //boton volver
    $scope.volver= function(){
        history.back();
    };

});
