// Backend de Albums
angular.module("jeviteca").provider("AlbumsBackend", function() {

    var urlAlbums = "";

    return {
        establecerUrlAlbums: function(value) {
            urlAlbums = value;
        },

        //obtener Albums
        $get: ["$http", function($http) {

            return {

                obtenerAlbums: function() {

                    return $http.get(urlAlbums, {

                        cache: true
                    });
                }
            };
        }]
    };

});
