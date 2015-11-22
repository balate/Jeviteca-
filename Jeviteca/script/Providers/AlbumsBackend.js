// Backend de Albums
angular.module("jeviteca").provider("AlbumsBackend", function($httpProvider) {

    var urlLocal = "";

    return {
        establecerUrlAlbums: function(value) {
            urlLocal = value;
        },

        //obtener Albums
        $get: ["$http","$q","$filter", function($http,$q,$filter) {

            return {

                obtenerAlbums: function() {

                    return $http.get(urlLocal,{

                        cache: true
                    });


                },

                obtenerAlbum: function(id) {
                    // Creas un objeto diferido.
                    var diferido = $q.defer();
                    // Obtienes la colección de álbumes.
                    $http.get(urlLocal).then(function(respuesta) {
                        // Filtras la colección por el identificador.
                        var albumes = $filter("filter")(respuesta.data, {"id": id});
                        // Resuelves el objeto diferido con el primer elemento de la colección filtrada.
                        diferido.resolve(albumes[0]);
                    });
                    // Retornas la promesa.
                    return diferido.promise;
                }

        };
        }]


    };

});
