 angular.module('App.services', ['firebase', 'App.config'])
	
	.factory('fb', ['FBURL', '$firebase', function(FBURL, $firebase) {
		var ref = new Firebase(FBURL + "/links")
		var Links = $firebase(ref).$asArray();
			
		var getLinks = function() {
			return Links;	
		}
		
		var getLink = function(id) {
			return Links.$getRecord(id);
		}
		
		var removeLink = function(id) {
			Links.$remove(id);	
		}
		
		var updateLink = function(l) {
			Links.$save(l);	
		}
		
		var addLink = function(i) {
			Links.$add(i);
		}
		
		return {
			getLinks : getLinks,
			getLink : getLink,
			removeLink : removeLink,
			updateLink : updateLink,
			addLink : addLink			
		}
	}
	
]);