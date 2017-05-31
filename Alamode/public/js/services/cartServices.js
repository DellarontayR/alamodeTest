"use strict";

angular.module('cartServices',[])

.factory('Cart',function($http){
    var cartFactory = {};
    cartFactory.addItemToCart = function(item){
        return $http.post('/api/add-cart-item',item);
    };

    cartFactory.removeItemFromCart = function(item){
        return $http.post('/api/remove-cart-item',item);
    };

    cartFactory.checkout = function(checkout){
        return $http.post('/api/cart-checkout',checkout);
    };
});