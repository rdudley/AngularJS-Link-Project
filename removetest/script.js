angular.module("Test", ["firebase"])
	.controller("TestController", ["$scope", "$firebase", function($scope, $firebase) {
		$scope.Items = $firebase(new Firebase("https://randolphdudley.firebaseio.com/removetest")).$asArray();
	}
]);
