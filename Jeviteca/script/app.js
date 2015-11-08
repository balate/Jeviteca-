
//definición de la aplicación
angular.module("jeviteca", ["ngRoute"]);

angular.module("jeviteca").config(function(AlbumsBackendProvider, settings) {
    AlbumsBackendProvider.establecerUrlAlbums(settings.albumsUrl);

});


//fase de config inyecta $routeProvider para configurar las rutas de la aplicación
angular.module("jeviteca").config(function ($routeProvider) {

    //defino ruta Albums
    $routeProvider.when("/albums",{
        controller:"ColecionAlbumsCtrl",
        templateUrl:"views/ColeccionAlbums.html",
        resolve:{
            Albums:["AlbumsBackend", function(AlbumsBackend){
                return AlbumsBackend.obtenerAlbums();
            }]
        }
    });

    //defino ruta Bandas
    $routeProvider.when("/bandas",{
        controller:"ColecionBandasCtrl",
        templateUrl:"views/ColeccionBandas.html"
    });

    //defino ruta Géneros
    $routeProvider.when("/generos",{
        controller:"ColecionGenerosCtrl",
        templateUrl:"views/ColeccionGeneros.html"
    });

    //ruta por defecto
    $routeProvider.otherwise({
       redirectTo: "/albums"
    });


});