'use strict';

alamode.controller('CartController', function ($scope, $location, User, Cart, Auth, Product) {
    var app = this;
    app.cartProducts = false;
    app.cartId = false;
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
                            return callback(data.data.cart);

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

    app.checkUserState(function (userData) {
        app.username = userData.username;
        app.email = userData.userEmail;
        app.getCurrentCart(function (cart) {
            app.cartProducts = cart.products;
            app.cartId = cart._id;
        });
    });

    // Add/remove from cart with update
    // Or just update from the page

    // Used for ng-clicks

    app.addItem = function (cartProduct) {
        var productData = {};
        productData.qty = cartProduct.qty + 1;
        productData.productId = cartProduct._id;
        Product.updateProductQty(productData).then(function (data) {
            if (data.data.success) {
                console.log('addItemsuccess');
                console.log(data);
                app.cartProducts[app.cartProducts.indexOf(cartProduct)] = data.data.product;
                console.log(app.cartProducts[app.cartProducts.indexOf(data.data.product)]);
                // app.checkUserState(function (userData) {
                //     console.log('user state');
                //     app.username = userData.username;
                //     app.email = userData.userEmail;
                //     app.getCurrentCart(function (products) {
                //         app.cartProducts = products;
                //     });
                // });


            }
            else {
                if (data.data.err) {
                    console.log(data.data.err);
                }
                else {
                    console.log(data);
                }
            }
        });

    };

    app.removeItem = function (cartProduct) {
        var productData = {};
        productData.qty = cartProduct.qty - 1;
        productData.productId = cartProduct._id;
        Product.updateProductQty(productData).then(function (data) {
            if (data.data.success) {
                app.cartProducts[app.cartProducts.indexOf(cartProduct)] = data.data.product;
            }
            else {
                if (data.data.err) {
                    console.log(data.data.err);
                }
                else {
                    console.log(data);
                }
            }
        });
    };

    app.deleteItem = function (cartProduct) {
        var productData = {};
        productData.productId = cartProduct._id;
        productData.cartId = app.cartId;


        app.cartProducts.splice(app.cartProducts.indexOf(cartProduct), 1);
        console.log('after splice');

        Cart.deleteCartProduct(productData).then(function (data) {
            if (data.data.success) {
                console.log('product deleted successfully');
                console.log(data);
            }
            else {
                console.log('product was not delelted');
                console.log(data);
            }
        });
    };

});
