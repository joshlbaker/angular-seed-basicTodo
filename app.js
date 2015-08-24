
var app = angular.module('starterApp', [])
app.controller("MainCtrl", ['$scope', '$rootScope', function ($scope, $rootScope) {
 $scope.term = "text"
 $scope.showAlert = function() {
   alert($scope.term);
 }
}])
app.controller("TodoCtrl", ['$scope', function ($scope) {
	$scope.todos = [{title: "Stuff"},
									{title: "More Stuff"}]

	$scope.addTodo = function(todo){
		$scope.todos.push($scope.todo)
		$scope.todo = {};
	}
	$scope.delete = function(todo){
		var index = $scope.todos.indexOf(todo);
		$scope.todos.splice(index, 1);
	}
}])

