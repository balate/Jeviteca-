
angular.module("jeviteca").controller("ColecionAlbumsCtrl",function($scope, Albums, $location) {

    $scope.albums =Albums.data;


   $scope.navDetails = function(id){

       $location.path("/detalle/" + id);

   };

});

