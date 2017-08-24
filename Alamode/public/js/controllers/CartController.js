'use strict';
var stripe = Stripe('pk_test_EPjnzpxnrgvUiGWsYrJjqN5t');

var elements = stripe.elements();

alamode.controller('CartController', function ($scope, $location, User, Cart, Auth, Product, stripeService, $window) {
    var app = this;
    app.cartProducts = false;
    app.cartId = false;
    app.checkout = false;

    if ($window.location.pathname === '/checkout') app.checkout = true; // Check if user is on home page to show home page div  
    var card = false;
    app.checkoutMessage = "Credit or debit card";
    app.chargeSuccessful = false;


    // if ($scope.mookie.checkout) {
    if (false) {

        var style = {
            base: {
                iconColor: '#666EE8',
                color: '#31325F',
                lineHeight: '40px',
                fontWeight: 300,
                fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                fontSize: '15px',
          
                '::placeholder': {
                  color: '#CFD7E0',
                }
            },
            invalid: {
                color: '#fa755a',
                iconColor: '#fa755a'
            }
        };

        // Create an instance of the card Element
        card = elements.create('card', { style: style });

        // Add an instance of the card Element into the `card-element` <div>
        card.mount('#card-element');
        

        // function setOutcome(result) {
        //     var successElement = document.querySelector('.success');
        //     var errorElement = document.querySelector('.error');
        //     successElement.classList.remove('visible');
        //     errorElement.classList.remove('visible');
        //     console.log(result);

        //     if (result.token) {

        //         var checkoutData = {};
        //         checkoutData.token = result.token.id;
        //         checkoutData.name = 'Another guy';
        //         checkoutData.price = "600";
        //         stripeService.checkout(checkoutData).then(function(data){
        //             console.log(data);
        //             if(data.data.success){

        //             }
        //             else{

        //             }
        //         });

        //         successElement.querySelector('.token').textContent = result.token.id;
        //         successElement.classList.add('visible');
        //     } else if (result.error) {
        //         errorElement.textContent = result.error.message;
        //         errorElement.classList.add('visible');
        //     }
        // }

        // document.querySelector('form').addEventListener('submit', function (e) {
        //     e.preventDefault();
        //     var form = document.querySelector('form');
        //     var extraDetails = {
        //         name: form.querySelector('input[name=cardholder-name]').value,
        //     };
        //     stripe.createToken(card, extraDetails).then(setOutcome);
        // });
    }

    // app.checkoutData
    app.checkoutData = {};

    //

    app.doCheckout = function(checkoutData){
        var extraDetails={
            name: checkoutData.name,
        };
        console.log(card);

        //Check to see if values in cart?
        //Ate least make sure app.checkoutData.name and $scope.mookie.total != null
        stripe.createToken(card,extraDetails).then(function(result){
            if(result.token){
                var stripeData ={};
                stripeData.token = result.token.id;
                stripeData.name = checkoutData.name;
                stripeData.price = $scope.mookie.total * 100;
                console.log(stripeData);
                stripeService.checkout(stripeData).then(function(data){
                    app.checkoutMessage = data.data.message;
                    if(data.data.success){
                        //display data.data.message to users
                        app.checkoutMessage = "Charge successful";

                    }
                    else{

                    }
                });

            }
            else{
                //print out error
                app.checkoutMessage = "Card Incorrect";
            }
        });
    };

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
                    console.log(data);
                    //Make messaging service for different errors users can git
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
                console.log('product was not delelted');
                console.log(data);
            }
        });
    };



});
