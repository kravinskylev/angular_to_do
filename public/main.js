var module = angular.module('todoApp', []);

module.controller('mainController', function($scope) {
  $scope.formData = {foo: "bar"};
});

//module.factory('mySampleFactory', function() {
//  var factoryObj = {};
//
//  factoryObj.factoryData = [1,2,3,4,5];
//  factoryObj.alertMessage = function() {
//   alert('HEY');
//  };
//
//  return factoryObj;
//});
//
//module.service('mySampleService', function() {
//  this.serviceData = [6,7,8,9];
//});
