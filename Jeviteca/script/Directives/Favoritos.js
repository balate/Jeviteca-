
angular.module("jeviteca").directive("favoritos",function() {

    return{
        restrict: "AE",
        replace: true,
        templateUrl:"views/Favoritos.html",
        scope: {
            id: "=",
            tipo: "@"
        },
        link: function(scope) {

            var webStorageKey = scope.tipo + "_" + scope.id + "_fav";

            scope.compatibilidad = function() {
                return typeof(Storage) !== "undefined";
            };

            scope.selFav = function() {
                return localStorage.getItem(webStorageKey) == "true";
            };

            scope.marcar = function() {
                scope.selFav() ? localStorage.removeItem(webStorageKey) : localStorage.setItem(webStorageKey, "true");
            };
        }
    };
});