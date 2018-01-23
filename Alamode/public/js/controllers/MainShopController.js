'use strict';

alamode.controller('MainShopController', function ($scope, $location, User, Cart, Auth, Product) {
    var mainShop = this;
    mainShop.products = false;

     mainShop.getProductsFromServer = function(callback){
            (function (){
                Product.getCatalogProducts().then(function(data){
                    console.log('data from catalog');
                    console.log(data);
                    if(data.data.success){
                        console.log("get catalog list success");
                        // home.catalogProducts = data.data.catalogProducts;
                        return callback(data.data.catalogProducts);
                    }
                    else{
                        console.log("get catalog list failure");
                    }
                })

            })();
    };

    mainShop.getProductsFromServer(function(catalogProducts){
        mainShop.products = catalogProducts;
    });


});
