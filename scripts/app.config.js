'use strict';

angular.module('App')

.config(function($routeProvider) {
	$routeProvider.
		when('/', { controller:'ListCtrl', templateUrl:'list/list.html' }).
		when('/edit/:projectId', { controller:'EditCtrl', templateUrl:'edit/edit.html' }).
		when('/new', { controller:'NewCtrl', templateUrl:'new/new.html' }).
		otherwise({ redirectTo:'/' });
});