
angular.module("jeviteca").controller("ColecionAlbumsCtrl",["$scope","Albums",function($scope, Albums) {

    $scope.albums =Albums.data;

}]);

