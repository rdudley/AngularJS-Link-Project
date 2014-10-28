'use strict';
 
angular.module('app.controllers')

.controller('ListCtrl', ['$scope', 'appFireBase', function ($scope, $appFireBase) {
	$scope.Projects = appFireBase;
}])

.controller('CreateCtrl', ['$scope', '$location', '$timeout', 'appFireBase', function ($scope, $location, $timeout, appFireBase) {
	$scope.save = function() {
		appFireBase.add($scope.project, function() {
			$timeout(function() { $location.path('/'); });
		});
	}
}]);

//.controller('EditCtrl', ['$scope', '$location', '$routeParams', 'angularFire', 'fbURL', function ($scope, $location, $routeParams, angularFire, fbURL) {
//	var fbRef = new Firebase(fbURL + $routeParams.projectId);
//	angularFire(fbRef, $scope, 'remote', {}).
//	then( function() {
//		$scope.project = angular.copy($scope.remote);
//		$scope.project.$id = $routeParams.projectId;
//		$scope.isClean = function() {
//			return angular.equals($scope.remote, $scope.project);
//		}
//		$scope.destroy = function() {
//			$scope.remote = null;
//			$location.path('/');
//		};
//		$scope.save = function() {
//      		$scope.remote = angular.copy($scope.project);
//      	$location.path('/');
//    	};
//  	});
//}]);
