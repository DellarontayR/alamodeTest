angular.module('alamode.controllers',['authServices','userServices','cartServices']).controller('MenuController', ['$scope', function($scope) {
	$scope.addToCheckout = function(productId){
		$scope.products.push({img:"imgs/applogo.png",title:'DANCE',ingredients:'Ingredients',price:4.00});
	};

	$scope.attemptRemoveFromCheckout = function(productId){

	};

//Menu controller needs to get nearest kiosk's inventory
//MVP would be a  list of products from MongoDB
	$scope.getProducts = function(){

	};
	
  $scope.products = [ 
  	{ 
    	img: 'imgs/nomedia.png', 
    	title: 'MOVE', 
    	ingredients: 'MOVE, Inc.', 
    	price: 0.99 
	}, 
 	{ 
    	img: 'imgs/nomedia.png', 
    	title: 'Shutterbugg', 
    	ingredients: 'Chico Dusty', 
    	price: 2.99 
  	}, 
 	{ 
    	img: 'imgs/nomedia.png', 
    	title: 'Gameboard', 
    	ingredients: 'Armando Perez', 
    	price: 1.99 
  	},  
 	{
		img: 'imgs/nomedia.png',
		title: 'Forecast',
		ingredients: 'Forecast',
		price: 1.99
    } 
	];
}]);
