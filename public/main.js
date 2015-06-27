var module = angular.module('todoApp', []);

module.controller('mainController', function($scope) {
  $scope.formData = {foo: "bar"};
});

module.controller('secondController' function($scope) {
  $scope.formData = {hey: "yaaa"}
});
