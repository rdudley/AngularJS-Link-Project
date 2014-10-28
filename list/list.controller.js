// JavaScript Document
'use strict';

angular.module('App')
.controller('ListCtrl', function($scope, appFirebase) {
	$scope.Projects = appFirebase.$asArray();
});