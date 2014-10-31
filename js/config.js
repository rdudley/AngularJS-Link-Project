'use strict';

angular.module('App.config', [])
	
	// Firebase version number
	.constant('version', '0.8.2')

	// base Firebase data URL goes here, no trailing slash
	.constant('FBURL', 'https://randolphdudley.firebaseio.com')
	
	.value('Ratings', [
		{ value: 5, name: "Excellent" },
		{ value: 4, name: "Pretty good" },
		{ value: 3, name: "Decent at best" },
		{ value: 2, name: "Pretty bad" },
		{ value: 1, name: "Rock Bottom" }
	]);