'use strict';

alamode.controller('CartController', function ($scope, $location, User, Cart, Auth, Product) {
    var app = this;

    // app.testCharge = function(){         
    //     stripe.charges.create({
    //     amount: 2000,
    //     currency: "usd",
    //     source: "tok_mastercard", // obtained with Stripe.js
    //     metadata: {'order_id': '6735'}
    //     });

    // };

    app.checkUserState = function (callback) {
        if (Auth.isLoggedIn()) {
            app.loggedIn = true;
            Auth.getUser().then(function (data) {
                var userData = {};
                userData.userEmail = data.data.email;
                userData.username = data.data.username;
                // Check if the returned user is undefined (expired)
                if (data.data.username === undefined) {
                    Auth.logout(); // Log the user out
                    app.isLoggedIn = false; // Set session to false
                    $location.path('/'); // Redirect to home page
                    app.loadme = true; // Allow loading of page
                }
                else {
                    return callback(userData);
                }
            });
        }
    };

    app.getCurrentCart = function (callback) {
        var userData = {};
        userData.userEmail = app.email;

        User.getUserCart(userData).then(function (data) {
            if (data.data.success) {
                if (data.data.user.cart != null && data.data.user.cart != "") {
                    var cartData = {};
                    cartData.cartId = data.data.user.cart;
                    Cart.getCart(cartData).then(function (data) {
                        if (data.data.success) {
                            console.log('fuck a usercart');
                            return callback(data.data.cart.products);

                        } else {
                            if (!data.data.cart) {
                                console.log('There is no cart attached to the user.');
                            }
                            else {
                                console.log(data);
                            }
                        }

                    });
                }
                else {
                    console.log('started from the bottom');
                    console.log(data);
                    //Make messaging service for different errors users can git
                }

            }
            else {
                console.log('no success');
                console.log(data);
            }
        });
    };

    app.checkUserState(function(userData){
        app.username = userData.username;
        app.email = userData.userEmail;
        app.getCurrentCart(function(products){
            app.cartProducts = products;
            console.log(products);
            console.log('products');
        });
    });

});
