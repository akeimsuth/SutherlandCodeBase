var app = angular.module('storeApp',['firebase']);

app.controller('storeController',function($scope,$firebaseObject){
	$scope.test = "Blank";
	var ref = new Firebase('https://api-project-121750468263.firebaseio.com/stores');
	var fb = $firebaseObject(ref);
	var store = [];
	var items = [];
	var add = [];
	$scope.one = [];
	$scope.count = 0;
$('#item').change(function(){
    store = [];
    test();
  });

var test = function(){
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
	$scope.count += 1;
	items = {name : nam, product: prod, brand : brands, prices: price }
	add.push(items);
	$scope.cart = add;
	console.log($scope.cart);
};

$scope.calculateAll = function(){

};

	
});