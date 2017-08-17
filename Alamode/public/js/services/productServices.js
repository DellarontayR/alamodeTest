"use strict";

angular.module('productServices',[])

.factory('Product',function($http,Cart){
    var productFactory = {};
    

    productFactory.seedProduct = function(productData){
        return $http.post('/api/seedProduct',productData);
    };

    productFactory.updateProductQty = function(productData){
        return $http.post('/api/updateProductQty',productData);
    };
    
    productFactory.deleteProduct = function(productData){
        return $http.post('/api/deleteProduct',productData);
    };
 
    productFactory.getProduct = function(productId){
        return $http.get('/api/getProduct',proudctId);
    };

    productFactory.getCatalogProducts = function(){
        return $http.get('/api/getCatalogProducts');
    };

    productFactory.getProductCategory = function(categoryData){
        return $http.post('/api/getProductCategory',categoryData);
    };


    productFactory.addProductToCatalog = function(product){
        return $http.post('/api/addProductToCatalog',product);
    };

    return productFactory;

});
