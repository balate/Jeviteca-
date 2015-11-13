
angular.module("jeviteca").filter("instruments", function(){
   return function(collection){
       return "Instrumentos: " + collection.join("","");
   }
});