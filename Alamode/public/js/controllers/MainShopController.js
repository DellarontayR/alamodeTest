'use strict';

alamode.controller('MainShopController', function ($scope, $location, User, Cart, Auth, Product) {
    var mainShop = this;
    mainShop.products = false;
    $scope.getProducts(function(catalogProducts){

        mainShop.products = catalogProducts;
    });

});
