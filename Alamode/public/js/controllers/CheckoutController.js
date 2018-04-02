'use strict';

alamode.controller('CheckoutController', function ($scope, $location, User, Cart, Auth, Product, stripeService) {
    var checkoutCtrl = this;
    checkoutCtrl.receipt = false;
    var card = false;
    checkoutCtrl.checkoutMessage = "";
    checkoutCtrl.chargeSuccessful = false;
    console.log($scope.mookie.deliveryLocation);
    console.log($scope.mookie.user.username);
    console.log($scope.mookie.user.userEmail);
    console.log($scope.mookie.cart);
    // When checkout is complete redie


    // if ($scope.mookie.checkout) {
    checkoutCtrl.setupStripeCard = function () {
        var style = {
            base: {
                iconColor: 'white',
                color: 'white',
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
        card = elements.create('card', { style: style }); // elements from cartController
        // Which means I can use stripe from cartController

        // Add an instance of the card Element into the `card-element` <div>
        card.mount('#card-element');
    };

    checkoutCtrl.setupStripeCard();

    checkoutCtrl.checkoutData = {};

    checkoutCtrl.doBitcoinCheckout = function () {
        stripe.sources.create({
            type: "bitcoin",
            amount: 1,
            currency: "usd",
            owner: {
                email: "dellreadus@gmail.com"
            }
        }, function (err, source) {
            console.log('stripe source creation');
            console.log(err);
            console.log(source);
        });
    };

    checkoutCtrl.doCheckout = function (checkoutData) {
        var extraDetails = {
            name: checkoutData.name
        };

        //Check to see if values in cart?
        //Ate least make sure checkoutCtrl.checkoutData.name and $scope.mookie.total != null
        stripe.createToken(card, extraDetails).then(function (result) {
            if (result.token) {
                $scope.mookie.getEmailAndUsername(function (userData) {
                    var stripeData = {};
                    stripeData.token = result.token.id;
                    stripeData.name = checkoutData.name;
                    stripeData.price = $scope.mookie.total * 100;
                    stripeData.userEmail = userData.userEmail;
                    stripeData.user = $scope.mookie.user;
                    stripeData.cart = $scope.mookie.cart;
                    stripeData.deliveryLocation = $scope.mookie.deliveryLocation;
                    stripeService.checkout(stripeData).then(function (data) {
                        console.log(data);
                        checkoutCtrl.checkoutMessage = data.data.message;
                        if (data.data.success) {// Abigail
                            checkoutCtrl.checkoutMessage = "Charge successful";
                            // $scope.mookie.showStripeModal();
                            $scope.mookie.deliveryLocationChanged = false;
                            setTimeout(function () {
                                checkoutCtrl.receipt = data.data.receipt;
                                var total = 0;
                                checkoutCtrl.receipt.customerCart.products.forEach(product => {
                                    total+= product.price;
                                });
                                checkoutCtrl.receipt.customerCart.total = total;
                            }, 1000);
                            // After successful checkout display user's receipt and begin delivery
                            // Show Pending Status of Order on Map
                            // Create additional Icon on map that shows That we're coming
                        }
                        else {
                            checkoutCtrl.checkoutMessage = 'Charge not successful';
                        }
                    }, function (err) {
                        console.log(err);
                    });
                });
            }
            else {
                //print out error
                checkoutCtrl.checkoutMessage = "Card Incorrect";
            }
        });
    };


});
