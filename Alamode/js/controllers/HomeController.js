app.controller('HomeController', ['$scope', function($scope) {
  $scope.products = [ 
  	{ 
    	img: 'imgs/applogo.png', 
    	title: 'MOVE', 
    	ingredients: 'MOVE, Inc.', 
    	price: 0.99 
  	}, 
 	 	{ 
    	icon: 'imgs/applogo.png', 
    	title: 'Shutterbugg', 
    	ingredients: 'Chico Dusty', 
    	price: 2.99 
  	}, 
 	 	{ 
    	icon: 'imgs/applogo.png', 
    	title: 'Gameboard', 
    	ingredients: 'Armando Perez', 
    	price: 1.99 
  	},  
 	 	{
      icon: 'imgs/applogo.png',
      title: 'Forecast',
      ingredients: 'Forecast',
      price: 1.99
    } 
	]
}]);
