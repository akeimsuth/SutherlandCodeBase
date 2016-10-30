var app = angular.module('storeApp',['firebase']);

app.controller('storeController',function($scope,$firebaseObject){
	$scope.test = "Blank";
	var ref = new Firebase('https://api-project-121750468263.firebaseio.com/stores');
	var fb = $firebaseObject(ref);
	var store = [];
	var items = [];
	var add = [];
	var key = 0;
	$scope.empty = "Empty Cart";
	$scope.one = [];
	$scope.count = 0;
$('#item').change(function(){
    store = [];
    getFirebaseData();
  });

var getFirebaseData = function(){
	angular.forEach(fb,function(values,keys){
		if($scope.item.toLowerCase() in values){
			
			var item = $scope.item.toLowerCase();
			$scope.objects =
			{name : keys,
			product : item,
			brand : values[item].brand,
			price : values[item].price}
			store.push($scope.objects);	
		}
	});
};

$scope.butt = function(){
	$scope.one = store;
};

$scope.addToCart = function(nam,prod,brands,price){
	$scope.empty = null;
	$scope.count += 1;
	items = {id : key, name : nam, product: prod, brand : brands, prices: price }
	add.push(items);
	$scope.cart = add;
	console.log($scope.cart);
};
$scope.tot = "Total Price"
$scope.total = 0;
$scope.calculateAll = function(price){

	$scope.total += parseFloat(price);
};
$scope.remove = function(prices){
	$scope.emptyCart();
	if($('.lst').text() == prices){
		console.log($scope.cart.indexOf(prices));
		var lst = $scope.cart.indexOf(prices);
	}
	$scope.cart.splice(lst,1);
	$scope.count -= 1;
	$scope.total -= parseFloat(prices);
}
$scope.emptyCart = function(){
	if($scope.cart == null){
		return $scope.empty = "Empty Cart";
	}
}
	
});