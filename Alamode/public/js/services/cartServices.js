"use strict";

angular.module('cartServices',[])

.factory('Cart',function($http){
    var cartFactory = {};

    cartFactory.seedCart = function(cartData){
        return $http.post('/api/seedCart',cartData);
    };
    
    cartFactory.getAProduct = function(){
        return $http.get('/api/getAProduct');
    };

    cartFactory.addCartToUser = function(userData){
        return $http.post('/api/addCartToUser',userData);
    };

    cartFactory.getCart = function(cartId){
        return $http.get('/api/getCart',cartId);
    };

    cartFactory.addItemToCart = function(productData){
        return $http.post('/api/addItemToCart',productData);
    };

    cartFactory.removeItemFromCart = function(item){
        return $http.post('/api/remove-cart-item',item);
    };

    cartFactory.checkout = function(checkoutData){
        return $http.post('/api/carCheckout',checkoutData);
    };
    

    return cartFactory;

});