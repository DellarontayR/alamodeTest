'use strict';
var stripe = Stripe('pk_test_EPjnzpxnrgvUiGWsYrJjqN5t');

var elements = stripe.elements();

alamode.controller('CartController', function ($scope, $location, User, Cart, Auth, Product, $window) {
    var app = this;
    app.cartProducts = false;
    app.cartId = false;
    app.checkout = false;
    // app.testCharge = function(){         
    //     stripe.charges.create({
    //     amount: 2000,
    //     currency: "usd",
    //     source: "tok_mastercard", // obtained with Stripe.js
    //     metadata: {'order_id': '6735'}
    //     });

    // };

    if ($window.location.pathname === '/checkout') app.checkout = true; // Check if user is on home page to show home page div
    console.log(app.checkout);
    app.checkout=true;
    console.log(app.checkout);
    // app.doCheckout = function(){
    // var tryThis = function(){
    if (app.checkout) {
        console.log("in checkout");
        // Custom styling can be passed to options when creating an Element.
        // (Note that this demo uses a wider set of styles than the guide below.)
        var style = {
            base: {
                color: '#32325d',
                lineHeight: '24px',
                fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                fontSmoothing: 'antialiased',
                fontSize: '16px',
                '::placeholder': {
                    color: '#aab7c4'
                }
            },
            invalid: {
                color: '#fa755a',
                iconColor: '#fa755a'
            }
        };

        // Create an instance of the card Element
        var card = elements.create('card', { style: style });

        // Add an instance of the card Element into the `card-element` <div>
        console.log(card);
        card.mount('#card-element');
        console.log(card);


        var inputs = document.querySelectorAll('input.field');
        Array.prototype.forEach.call(inputs, function (input) {
            input.addEventListener('focus', function () {
                input.classList.add('is-focused');
            });
            input.addEventListener('blur', function () {
                input.classList.remove('is-focused');
            });
            input.addEventListener('keyup', function () {
                if (input.value.length === 0) {
                    input.classList.add('is-empty');
                } else {
                    input.classList.remove('is-empty');
                }
            });
        });

        function setOutcome(result) {
            var successElement = document.querySelector('.success');
            var errorElement = document.querySelector('.error');
            successElement.classList.remove('visible');
            errorElement.classList.remove('visible');
            console.log(result);

            if (result.token) {
                // Use the token to create a charge or a customer
                // https://stripe.com/docs/charges
                successElement.querySelector('.token').textContent = result.token.id;
                successElement.classList.add('visible');
            } else if (result.error) {
                errorElement.textContent = result.error.message;
                errorElement.classList.add('visible');
            }
        }

        card.on('change', function (event) {
            setOutcome(event);
        });

        document.querySelector('form').addEventListener('submit', function (e) {
            e.preventDefault();
            var form = document.querySelector('form');
            var extraDetails = {
                name: form.querySelector('input[name=cardholder-name]').value,
            };
            stripe.createToken(card, extraDetails).then(setOutcome);
        });
    }

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
