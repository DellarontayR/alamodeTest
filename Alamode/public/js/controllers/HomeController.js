angular.module('alamode.controllers',[]).controller('HomeController', ['$scope', function($scope) {
	$scope.addToCheckout = function(productId){
		$scope.products.push({img:"imgs/applogo.png",title:'DANCE',ingredients:'Ingredients',price:4.00});
	};

	$scope.attemptRemoveFromCheckout = function(productId){

	};

  $scope.products = [ 
  	{ 
    	img: 'imgs/alamode.png', 
    	title: 'MOVE', 
    	ingredients: 'MOVE, Inc.', 
    	price: 0.99 
	}, 
 	{ 
    	img: 'imgs/alamode.png', 
    	title: 'Shutterbugg', 
    	ingredients: 'Chico Dusty', 
    	price: 2.99 
  	}, 
 	{ 
    	img: 'imgs/alamode.png', 
    	title: 'Gameboard', 
    	ingredients: 'Armando Perez', 
    	price: 1.99 
  	},  
 	{
		img: 'imgs/alamode.png',
		title: 'Forecast',
		ingredients: 'Forecast',
		price: 1.99
    } 
	];
}]);
