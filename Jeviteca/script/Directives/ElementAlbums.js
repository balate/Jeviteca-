
angular.module("jeviteca").directive("elementAlbums", function () {

    return {

        restrict: "AE",

        templateUrl: "views/ElementoAlbums.html",

        scope: {

            album: "="

        }
    };

});
