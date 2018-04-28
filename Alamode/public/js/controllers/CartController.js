'use strict';
var stripe = Stripe('pk_live_Ic6zEI8pzoofTRtAleNB1q0v');
var elements = stripe.elements();

alamode.controller('CartController', function ($scope, $location, User, Cart, Auth, Product, stripeService, $window) {
    // Controller Variables
    var app = this;
    app.cartProducts = false;
    app.cartId = false;
    app.checkout = false;
    app.cartChanged = false;
    // >

    // Check userState and get pertinent information, Could easily probably be subtistiuted for $scope.mookie call
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
    // >
    // I have 22222???

    // Is this really in use??? Omg 
    // Obviously this contains huge issues from when I was toying around with callback functions and getting data from functions
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
    // >

    // Check userState and get pertinent information, Could easily probably be subtistiuted for $scope.mookie call
    app.checkUserState(function (userData) {
        app.username = userData.username;
        app.email = userData.userEmail;
        app.getCurrentCart(function (cart) {
            // Create product map to get quantity of each product from array of products
            var productMap = new Map();
            cart.products.forEach(element => {
                if (productMap.has(element._id)) {
                    productMap.set(element._id, productMap.get(element._id) + 1);
                }
                else {
                    productMap.set(element._id, 1);
                }
            });
            // >
            // Create array of products with quantities set to productMap vars
            var cartProducts = [];
            for (var key of productMap.keys()) {
                for (var element of cart.products) {
                    if (element._id === key) {
                        element.qty = productMap.get(element._id);
                        element.subtotalOnProduct = element.qty * element.price;
                        cartProducts.push(element);
                        break;
                    }
                }
            }
            // >
            app.cartProducts = cartProducts;
            app.cartId = cart._id;
            // Handle Receipt display
            app.subTotal = cart.subtotal;
            app.tax = cart.tax;
            app.total = cart.total;
            // >
        });
    });
    // >

    // Update cart in database when user changes cart on frontend
    app.updateCart = function (cart) {
        // update cart in $scope
        var cartData = {};
        cartData.cartProducts = app.cartProducts;
        cartData.cartId = app.cartId;
        Cart.updateCart(cartData).then(function(data){
            console.log(data);
            if(data.data.success){
                app.cartChanged = false;
            }
            else{

            }
        })
    };
    // >

    // Add item to cartProducts on Frontend
    app.addItem = function (cartProduct) {
        cartProduct.qty++;
        app.cartChanged = true;
    };
    // >

    // Remove item from cartProducts on Frontend
    app.removeItem = function (cartProduct) {
        cartProduct.qty--;
        app.cartChanged = true;
    };
    // >

    // Delete Item on frontend and in database
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
    // >
});
