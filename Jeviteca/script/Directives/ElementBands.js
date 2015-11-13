
angular.module("jeviteca").directive("elementBands", function () {

    return {

        restrict:"AE",

        templateUrl:"views/ElementoBandas.html",

        scope:{

            band:"="
        }

    };
});
