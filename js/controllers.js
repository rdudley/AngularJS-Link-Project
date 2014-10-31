'use strict';

angular.module('App.controllers', ['App.services'])

.controller('NewCtrl', ['$scope', '$location', 'fb', function($scope, $location, fb) {
	$scope.save = function() {
		fb.addLink($scope.project);		
		$location.path('/');
	}
}])

.controller('ListCtrl', ['$scope', 'fb', function($scope, fb) {
	$scope.Projects = fb.getLinks();
}])

.controller('EditCtrl', ['$scope', '$location', '$routeParams', 'fb', function($scope, $location, $routeParams, fb) {
	
	$scope.project = fb.getLink($routeParams.projectId);	
		
	$scope.save = function() {
		fb.updateLink($scope.project);
		$location.path('/');
    };
	
	$scope.remove = function() {
		fb.removeLink($scope.project);
		$location.path('/');
	}
}]);

