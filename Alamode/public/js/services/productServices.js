"use strict";

angular.module('productServices',[])

.factory('Product',function($http){
    var productFactory = {};
    

    productFactory.seedProduct = function(productData){
        return $http.post('/api/seedProduct',productData);
    };
 
    productFactory.getProduct = function(productId){
        return $http.get('/api/getProduct',proudctId);
    };

    productFactory.getCatalogProducts = function(){
        return $http.get('/api/getCatalogProducts');
    };

    productFactory.addProductToCatalog = function(product){
        return $http.post('/api/addProductToCatalog',product);
    };

    return productFactory;

});
