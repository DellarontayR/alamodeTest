'use strict';

alamode.controller('HomeController', function($scope, $location, Auth, User, Cart,Product) {
    var home = this;
    home.username = "";
    home.isLoggedIn = false;
    home.userId = "";
    home.catalogProducts = false;

    // home.catalogProducts


    console.log('now');
    var now = (function (){
        Product.getCatalogProducts().then(function(data){
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
    console.log('catalog products');
    console.log(home.catalogProducts);

    home.tryAddCart = function(productId){
        console.log(productId);
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
