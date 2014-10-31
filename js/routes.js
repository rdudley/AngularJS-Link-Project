'use strict';

angular.module('App.routes', ['ngRoute'])

.config(function($routeProvider) {
	$routeProvider.
		when('/', { controller:'ListCtrl', templateUrl:'partials/list.html' }).
		when('/add', { controller:'AddCtrl', templateUrl:'partials/add.html' }).
		when('/edit/:projectId', { controller:'EditCtrl', templateUrl:'partials/edit.html' }).
		when('/delete/:projectId', { controller:'DeleteCtrl', templateUrl:'partials/delete.html' }).
		otherwise({ redirectTo:'/' });
});