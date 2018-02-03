/* global angular */
(function() {
  var app = angular.module('katelynnsStore', ['store-directives']);

app.controller('carController', ['$http', function($http){
  var car = this;
  car.cars = [];

  $http.get('/cars.json').success(function(data){
    car.cars = data;
  });
}]);
})();