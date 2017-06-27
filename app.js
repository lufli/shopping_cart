(function(){
	var app = angular.module('store',[]);

	app.controller('StoreController',function($scope){
		$scope.test="test message";
		$scope.newItem = {};
		$scope.addItem = function (item) {
			$scope.cart.push($scope.newItem);
			$scope.newItem = {};
		}
		// reduce qualities
		$scope.minus = function (id) {
			var result = $scope.cart.filter(function( item ) {
			  return item.id === id;
			});
			result[0].quantity = result[0].quantity>=1? result[0].quantity-1: result[0].quantity;
		}
		// add qualities
		$scope.add = function (id) {
			var result = $scope.cart.filter(function( item ) {
				return item.id === id;
			});
			result[0].quantity += 1;
		}
		// remove item
		$scope.remove = function (id) {
			var result = $scope.cart.filter(function( item ) {
				return item.id !== id;
			});
			$scope.cart = result;
		}
		// total item
		$scope.totalQuantity = function() {
			return $scope.cart.reduce(function (sum, item) {
				return sum+item.quantity;
			},0)
		}
		$scope.totalPrice = function() {
			return $scope.cart.reduce(function (sum, item) {
				return sum+item.quantity*item.price;
			},0)
		}
		// cart
		$scope.cart = [
			{
					id: 1000,
					name: 'iphone5s',
					quantity: 3,
					price: 4300
			},
			{
					id: 3300,
					name: 'iphone5',
					quantity: 30,
					price: 3300
			},
			{
					id: 232,
					name: 'imac',
					quantity: 4,
					price: 23000
			},
			{
					id: 1400,
					name: 'ipad',
					quantity: 5,
					price: 6900
			}
		];

	});

})();
