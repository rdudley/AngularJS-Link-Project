'use strict';

angular.module('App.routes', ['ngRoute'])

.config(function($routeProvider) {
	$routeProvider.
		when('/', { controller:'ListCtrl', templateUrl:'views/list.html' }).
		when('/edit/:projectId', { controller:'EditCtrl', templateUrl:'views/edit.html' }).
		when('/new', { controller:'NewCtrl', templateUrl:'views/new.html' }).
		otherwise({ redirectTo:'/' });
});