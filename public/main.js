var module = angular.module('todoApp', []);

module.controller('mainController', function($scope, $http, todoService) {

  $http.get('/api/todos').success(function(data) {
    $scope.todos = data;
  }).error(function(error) {
    console.log(error);
  });

  $scope.createTodo = function() {
    $http.post('/api/todos', $scope.formData)
      .success(function(data) {
        $scope.formData = {};
        $scope.todos = data;
        console.log(data);
      })
        .error(function(error) {
        console.log(error);
    });
  };

  $scope.deleteTodo = function(id) {
    todoService.deleteTodo(id);
      .success(function(data) {
        $scope.todos = data;
      })
      .error(function(error) {
        console.log(error);
            });
  }
});

module.factory('todoService', function($http) {
  var factoryObj = {};

  factoryObj.deleteTodo = $http.delete('api/todos/' + id);
  return factoryObj;
});
