'use strict';

alamode.controller('HomeController', function($scope, $location, Auth, User, Cart,Product) {

    var home = this;
    home.username = "";
    home.isLoggedIn = false;
    home.userId = "";
    home.catalogProducts = false;
    home.bestsellers = false;
    // home.catalogProducts
    console.log(home.bestsellers);


    console.log('now');
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
  console.log('hey form home');

    var best = {};
    best.category = 'Bestseller';

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

    console.log('catalog products');
    console.log(home.catalogProducts);

    console.log('bestsellers');
    console.log(home.bestsellers);

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
