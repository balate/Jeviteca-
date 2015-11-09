// Backend de Albums
angular.module("jeviteca").provider("AlbumsBackend", function($httpProvider) {

    var urlLocal = "";

    return {
        establecerUrlAlbums: function(value) {
            urlLocal = value;
        },

        //obtener Albums
        $get: ["$http", function($http) {

            return {

                obtenerAlbums: function() {

                    return $http.get(urlLocal,{

                        cache: true
                    });


                }
            };
        }]
    };

});
