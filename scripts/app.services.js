'use strict';
 
angular.module('App')

.factory('appFirebase', function($firebase) {
	var fbURL = "https://randolphdudley.firebaseio.com/";	
	var fbRef = new Firebase(fbURL);
	
	return $firebase(fbRef);
	
//	return {
//		getLink: function(key) {
//			return $firebase(fbRef + '/' + key);
//		},
//		getLinks: function() {
//			return $firebase(fbRef).$asArray();
//		},
//		addLink : function() {
//			return $firebase(fbRef).$save(return $firebase(fbRef).$asArray(););
//		}
//	};
});