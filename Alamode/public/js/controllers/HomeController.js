'use strict';
console.log('home');

alamode.controller('HomeController', function($scope,$rootScope, $location, Auth, User, Cart,Product) {
    var home = this;
    home.username = "";
    home.email = "";
    home.isLoggedIn = false;
    home.userId = "";
    home.catalogProducts = false;
    home.bestsellers = false;        


    home.getProductsFromServer = function(callback){
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

    home.getBestsellers = function(callback){
        var best = {};
        best.category = 'Bestseller';

        // Get Bestseller products for display in model
        (function(best){
            Product.getProductCategory(best).then(function(data){
                console.log(data);
                if(data.data.success){
                    console.log('get bestsellers success');
                    console.log(data);
                    // home.bestsellers = data.data.bestsellers;
                    return callback(data.data.bestsellers);
                }
                else{
                    console.log('could not get bestsellers');
                }
            });
        }(best));

    };
    home.getProducts = function(){

        home.getProductsFromServer(function(catalogProducts){
            home.catalogProducts = catalogProducts;
        });

        home.getBestsellers(function(bestsellers){
            home.bestsellers = bestsellers;
        });
    };

    home.getProducts();

    home.addToCart = function(product){
        Auth.getUser().then(function(data){
            home.userEmail = data.data.email;
            home.username = data.data.username;
            var userData = {};
            userData.userEmail = data.data.email;
            User.getUserCart(userData).then(function(data){
                var cartData ={};
                cartData.price = product.price;
                cartData.description = product.description;
                cartData.title = product.title;
                cartData.imagePath = product.imagePath;
                cartData.qty = 1;
                cartData.userId = data.data.user._id;
                Cart.addItemToCart(cartData).then(function(data){
                    console.log(data);
                    if(data.data.success){
                        console.log(data);
                        // $scope.checkUserState(function(userData){
                        //     home.username = userData.username;
                        //     home.email = userData.userEmail;
                        //     console.log('big dig/////////////');
                        //     console.log(userData);

                        //     $scope.getCurrentCart(function(numOfCartItems){
                        //         // console.log('cart length////////////////');
                        //         // console.log(numOfCartItems);
                        //         $scope.numberofcartitems = numOfCartItems;
                        //     });
                        // });
                    }
                    else{
                        console.log('adding item to cart was not successful');
                        home.message="home not updated";
                    }
                });
            });
        });
    };
    
    home.checkUserState = function(callback){
        if(Auth.isLoggedIn()){
                home.loggedIn = true;
                Auth.getUser().then(function(data){
                    var userData = {};
                    userData.username = data.data.username;
                    return callback(userData);
            });
        }
    };

    home.checkUserState(function(userDate){
        home.username = userDate.username;
    });


    // home.checkUserState = function (callback) {
    //     if (Auth.isLoggedIn()) {
    //         home.loggedIn = true;
    //         Auth.getUser().then(function (data) {
    //             var userData = {};
    //             userData.userEmail = data.data.email;
    //             userData.username = data.data.username;
    //             // Check if the returned user is undefined (expired)
    //             if (data.data.username === undefined) {
    //                 Auth.logout(); // Log the user out
    //                 app.isLoggedIn = false; // Set session to false
    //                 $location.path('/'); // Redirect to home page
    //                 app.loadme = true; // Allow loading of page
    //             }
    //             else {
    //                 return callback(userData);
    //             }
    //         });
    //     }
    // };
    //  home.checkUserState(function (userData) {
    //             app.username = userData.username;
    //             app.email = userData.userEmail;
    //             app.getCurrentCart(function (numOfCartItems) {
    //                 app.numberofcartitems = numOfCartItems;
    //             });
    //             app.loadme = true;
    // });


    home.modalShown = false;
    home.toggleModal = function(){
        home.modalShown = !home.modalShown;
    };
});
