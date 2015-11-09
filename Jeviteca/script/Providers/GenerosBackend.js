// Backend de Generos
angular.module("jeviteca").provider("GenerosBackend", function($httpProvider) {

    var urlGenero = "";

    return {
        establecerUrlGengers: function(value) {
            urlGenero = value;
        },

        //obtener Genero
        $get: ["$http", function($http) {

            return {

                obtenerGengers: function() {

                    return $http.get(urlGenero,{

                        cache: true
                    });


                }
            };
        }]
    };

});
