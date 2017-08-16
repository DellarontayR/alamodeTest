'use strict';

alamode.controller('HomeController', function($scope, $location, Auth, User, Cart,Product) {
    var home = this;
    home.username = "";
    home.isLoggedIn = false;
    home.userId = "";
    home.catalogProducts = false;
    home.bestsellers = false;


    // Get Catalog products for display
    (function (){
        Product.getCatalogProducts().then(function(data){
            console.log('data from catalog');
            console.log(data);
            if(data.data.success){
                console.log("get catalog list success");
                home.catalogProducts = data.data.catalogProducts;
            }
            else{
                console.log("get catalog list failure");
            }
        })

    })();

    var best = {};
    best.category = 'Bestseller';

    // Get Bestseller products for display in model
    (function(best){
        Product.getProductCategory(best).then(function(data){
            console.log(data);
            if(data.data.success){
                console.log('get bestsellers success');
                console.log(data);
                home.bestsellers = data.data.bestsellers;
            }
            else{
                console.log('could not get bestsellers');
            }
        });
    }(best));

    home.addToCart = function(product){
        Auth.getUser().then(function(data){
            home.userEmail = data.data.email;
            home.username = data.data.username;
            var userData = {};
            userData.userEmail = data.data.email;
            User.getUserCart(userData).then(function(data){
                var cartData ={};
                console.log(data);
                cartData.price = product.price;
                cartData.description = product.description;
                cartData.title = product.title;
                cartData.imagePath = product.imagePath;
                cartData.qty = 1;
                cartData.userId = data.data.user._id;
                Cart.addItemToCart(cartData).then(function(data){
                    if(data.data.success){
                        home.message="cart updated";
                    }
                    else{
                        home.message="home not updated";
                    }
                });
            });
        });

        console.log(product);
    };

    if(Auth.isLoggedIn()){
        home.loggedIn = true;
        Auth.getUser().then(function(data){
            home.username = data.data.username;
            home.userId = data.data.id;
        });
    }

    home.addToUserCart = function(cartData){
        Cart.addCartToUser(home.userId).then(function(data){
            if(data.data.success){
                console.log(data);
            }
            else{

            }
        });
    };

    home.removeFromUserCart = function(cartData){

    };

    home.goEat  = function(){
        $location.path('/menu');
    };
    home.modalShown = false;
    home.toggleModal = function(){
        home.modalShown = !home.modalShown;
    };
});
