// Backend de Albums
angular.module("jeviteca").provider("BandasBackend", function($httpProvider) {

    var urlBanda = "";

    return {
        establecerUrlBands: function(value) {
            urlBanda = value;
        },

        //obtener bandas
        $get: ["$http", function($http) {

            return {

                obtenerBands: function() {

                    return $http.get(urlBanda,{

                        cache: true
                    });


                }
            };
        }]
    };

});
