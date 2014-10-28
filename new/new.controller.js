// JavaScript Document
'use strict';

angular.module('App')
.controller('NewCtrl', function($scope, $location, appFirebase) {
	$scope.save = function() {

		appFirebase.$add({
			name: $scope.project.name,
			site: $scope.project.site,
			description: $scope.project.description
		});
		
		$location.path('/');
	}
});