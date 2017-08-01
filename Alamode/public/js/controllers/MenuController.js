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