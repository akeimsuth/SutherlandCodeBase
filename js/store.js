var app = angular.module('storeApp',['firebase']);

app.controller('storeController',function($scope,$firebaseObject){
	$scope.test = "Blank";
	var ref = new Firebase('https://api-project-121750468263.firebaseio.com/stores');
	var fb = $firebaseObject(ref);
	var store = [];
	$scope.one = [];
$('#item').change(function(){
    store = [];
    test();
  });

var test = function(){
	angular.forEach(fb,function(values,keys){
		if($scope.item in values){
			
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

$scope.addToCart = function(){

};

$scope.calculateAll = function(){

};

	
});