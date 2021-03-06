 angular.module('App.services', [])
	
	.factory('fb', ['fbutil', function(fbutil) {
		
		var Links = fbutil.syncArray("/links");
		
		var lcRef = fbutil.syncObject("linkCount");
			
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
		
		var linkCountRef = function() {
			return lcRef;
		}
		return {
			getLinks : getLinks,
			getLink : getLink,
			removeLink : removeLink,
			updateLink : updateLink,
			addLink : addLink,
			linkCountRef : linkCountRef			
		}
	}
	
]);