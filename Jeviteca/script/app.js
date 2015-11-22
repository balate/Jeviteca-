
//definición de la aplicación
angular.module("jeviteca", ["ngRoute", "angular-loading-bar"]);

angular.module("jeviteca").config(function(AlbumsBackendProvider,BandasBackendProvider, GenerosBackendProvider, settings) {
    AlbumsBackendProvider.establecerUrlAlbums(settings.albumsUrl);
    BandasBackendProvider.establecerUrlBands(settings.bandasUrl);
    GenerosBackendProvider.establecerUrlGengers(settings.generosUrl);


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

    //defino ruta detalle Albums
    $routeProvider.when("/detalle/:id",{
        controller:"AlbumsDetailCtrl",
        templateUrl:"views/AlbumsDetail.html",
        resolve:{

            Album:["AlbumsBackend", "$route",function(AlbumsBackend, $route){

                return AlbumsBackend.obtenerAlbum($route.current.params.id);

            }]
        }
    });

    //defino ruta Bandas
    $routeProvider.when("/bandas",{
        controller:"ColecionBandasCtrl",
        templateUrl:"views/ColeccionBandas.html",
        resolve:{
            Bandas:["BandasBackend", function(BandasBackend){
                return BandasBackend.obtenerBands();

            }]
        }
    });


    //defino ruta Géneros
    $routeProvider.when("/generos",{
        controller:"ColecionGenerosCtrl",
        templateUrl:"views/ColeccionGeneros.html",
        resolve:{
            Generos:["GenerosBackend", function(GenerosBackend){
                return GenerosBackend.obtenerGengers();

            }]
        }
    });



    //ruta por defecto
    $routeProvider.otherwise({
       redirectTo: "/albums"
    });


});