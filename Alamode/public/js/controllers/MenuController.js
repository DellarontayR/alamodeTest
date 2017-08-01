'use strict';
// angular.module('alamode.controllers',['authServices','userServices','cartServices'])
alamode.controller('MenuController',function($scope, Product,Cart, User) {

	var app = this;

	app.getProducts = function(){
		app.products = Product.getProducts();
	};
	app.userList ={};
	app.list = User.getUsers().then(function(users){
		console.log("users" + users);
		app.userList = users;
	});
	
	console.log("user list below");
	console.log(app.userList);

	app.getProducts();
});


// app.products = [ 
//   	{ 
//     	img: 'imgs/Competition.jpg', 
//     	title: 'MOVE', 
//     	ingredients: 'MOVE, Inc.', 
//     	price: 0.99 
// 	}, 
//  	{ 
//     	img: 'imgs/Competition.jpg', 
//     	title: 'Shutterbugg', 
//     	ingredients: 'Chico Dusty', 
//     	price: 2.99 
//   	}, 
//  	{ 
//     	img: 'imgs/Competition.jpg', 
//     	title: 'Gameboard', 
//     	ingredients: 'Armando Perez', 
//     	price: 1.99 
//   	},  
//  	{
// 		img: 'imgs/Competition.jpg',
// 		title: 'Forecast',
// 		ingredients: 'Forecast',
// 		price: 1.99
//     } 
// 	];