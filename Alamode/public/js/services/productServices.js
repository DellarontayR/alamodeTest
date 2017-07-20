"use strict";

angular.module('productServices',[])

.factory('Product',function($http){
    var productFactory = {};

    productFactory.getProducts = function(){
        return $http.get('/api/get-products');
    };

    return productFactory;

});
