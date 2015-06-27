var module = angular.module('todoApp', []);

module.controller('mainController', function($scope, mySampleFactory, mySampleService) {
  $scope.formData = {foo: "bar"};

  $scope.serviceData = mySampleService.serviceData;
});

module.controller('secondController' function($scope, mySampleFactory) {
  $scope.formData = {hey: "yaaa"};

  $scope.factoryData = mySampleFactory.factoryData;
});

module.factory('mySampleFactory', function() {
  var factoryObj = {};

  factoryObj.factoryData = [1,2,3,4,5];
  factoryObj.alertMessage = function() {
   alert('HEY');
  };

  return factoryObj;
});

module.service('mySampleService', function() {
  this.serviceData = [6,7,8,9];
});
