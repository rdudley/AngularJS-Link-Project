// JavaScript Document
'use strict';

angular.module('App')
.controller('EditCtrl', function($scope, $location, $routeParams, appFirebase) {
	$scope.project = appFirebase.child($routeParams.projectId);
});

//function EditCtrl($scope, $location, $routeParams, angularFire, fbURL) {
//  var fbRef = new Firebase(fbURL + $routeParams.projectId);
//  var project = 
//  angularFire(fbRef, $scope, 'remote', {}).
//  then(function() {
//    $scope.project = angular.copy($scope.remote);
//    $scope.project.$id = $routeParams.projectId;
//    $scope.isClean = function() {
//      return angular.equals($scope.remote, $scope.project);
//    }
//    $scope.destroy = function() {
//      $scope.remote = null;
//      $location.path('/');
//    };
//    $scope.save = function() {
//      $scope.remote = angular.copy($scope.project);
//      $location.path('/');
//    };
//  });
//}