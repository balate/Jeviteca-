angular.module("jeviteca").service("Utilidades", function(settings) {

    this.wikipediaUrl = function(banda) {

        var query = encodeURIComponent(banda);
        return settings.wikipediaUrl + query;
    };

    this.youtubeUrl = function(banda, cancion) {

        var query = encodeURIComponent((banda + " " + cancion).toLowerCase());
        return settings.youtubeUrl + query;
    };
});
