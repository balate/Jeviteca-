
angular.module("jeviteca").directive("elementAlbums", function () {

    return {

        restrict: "AE",

        templateUrl: "views/ElementoAlbums.html",

        scope: {

            album: "=",
            clickDetails: "&"

        },
        link: function(scope){

            scope.notificarClick = function(){
                scope.clickDetails({id: scope.album.id });
            }

        }
    };

});
