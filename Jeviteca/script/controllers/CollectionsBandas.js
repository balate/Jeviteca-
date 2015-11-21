angular.module("jeviteca").controller("ColecionBandasCtrl", function($scope, Bandas){

   $scope.bandas =Bandas.data;

});
