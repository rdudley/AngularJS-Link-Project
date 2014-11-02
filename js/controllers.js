'use strict';

angular.module('App.controllers', [])

.controller('ListCtrl', ['$rootScope', '$scope', 'fb', 'Ratings', function($rootScope, $scope, fb, Ratings) {
	
	$rootScope.section = "A distinctive and opinionated collection";
	
	$scope.linkCountRef = fb.linkCountRef();
	
	$scope.Links = fb.getLinks();
	
	$scope.Links.$loaded().then(function(l) {
		$scope.Links === l;
		updateLinkCount();
	});
	
	$scope.predicate = 'name';
	
	$scope.Links.$watch(function(e) {
		if (e.event == "child_added" || e.event == "child_removed") {
			updateLinkCount();
		}
	});
	
	function updateLinkCount() {
		$scope.linkCount = $scope.Links.length;
		$scope.linkCountRef.$value = $scope.linkCount;
		$scope.linkCountRef.$save();
	}
}])

.controller('AddCtrl', ['$rootScope', '$scope', '$location', 'fb', 'Ratings', function($rootScope, $scope, $location, fb, Ratings) {
	
	$rootScope.section = "Add a new choice link";
	
	$scope.Ratings = Ratings;
	
	// Add Controller functions
	$scope.save = function() {
		fb.addLink($scope.project);		
		$location.path('/');
	}
	
	$scope.cancel = function() {
		$location.path('/');
	}
}])

.controller('EditCtrl', ['$rootScope', '$scope', '$location', '$routeParams', 'fbutil', 'Ratings', function($rootScope, $scope, $location, $routeParams, fbutil, Ratings) {
	
	$rootScope.section = "Edit your link 3-way data binding style";
	
	$scope.Ratings = Ratings;
	
	// For this controller, bypass the fb service, and instead create a 3-way data bind between $scope.project and Firebase
	// No save button required, just edit away and changes are automagically updated on Firebase
	$scope.linkDetail = fbutil.syncObject("/links/" + $routeParams.projectId).$bindTo($scope, "linkDetail");
		
	// Edit Controller functions
	$scope.done = function() {
		$location.path('/');
    };
	
}])

.controller('DeleteCtrl', ['$rootScope', '$scope', '$location', '$routeParams', 'fb', function($rootScope, $scope, $location, $routeParams, fb) {
	
	$rootScope.section = "Remove your link forever and ever";
	
	$scope.project = fb.getLink($routeParams.projectId);	
		
	// Delete Controller functions
	$scope.cancel = function() {
		$location.path('/');
    };
	
	$scope.remove = function() {
		fb.removeLink($scope.project);
		$location.path('/');
	}
}]);