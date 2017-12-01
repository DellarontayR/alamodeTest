'use strict';
var stripe = Stripe('pk_test_EPjnzpxnrgvUiGWsYrJjqN5t');
var elements = stripe.elements();

alamode.controller('CartController', function ($scope, $location, User, Cart, Auth, Product, stripeService, $window) {
    var app = this;
    app.cartProducts = false;
    app.cartId = false;
    app.checkout = false;

    //Seperate cart controller into checkoutController, shoppingCartController

    //Move all cartController content here
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

    // Is this really in use??? Omg 
    app.getCurrentCart = function (callback) {
        var userData = {};
        userData.userEmail = app.email;

        User.getUser(userData).then(function (data) {
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
                    console.log(data);
                    //Make messaging service for different errors users can get
                }

            }
            else {
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

    app.addItem = function (cartProduct) {
        var productData = {};
        productData.qty = cartProduct.qty + 1;
        productData.productId = cartProduct._id;
        Product.updateProductQty(productData).then(function (data) {
            if (data.data.success) {
                app.cartProducts[app.cartProducts.indexOf(cartProduct)] = data.data.product;
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
                console.log('something happended would you like to delete your cart and try again?');
                console.log(data);
            }
        });
    };
});
