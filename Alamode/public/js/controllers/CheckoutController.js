'use strict';

alamode.controller('CheckoutController', function ($scope, $location, User, Cart, Auth, Product,stripeService) {
    var checkoutCtrl = this;
    var card = false;
    checkoutCtrl.checkoutMessage = "";
    checkoutCtrl.chargeSuccessful = false;


    // if ($scope.mookie.checkout) {
    checkoutCtrl.setupStripeCard = function(){
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
        card = elements.create('card', { style: style }); // elements from cartController
        // Which means I can use stripe from cartController

        // Add an instance of the card Element into the `card-element` <div>
        card.mount('#card-element');
    };

    checkoutCtrl.setupStripeCard();

    checkoutCtrl.checkoutData = {};

    checkoutCtrl.doBitcoinCheckout = function(){
        stripe.sources.create({
            type: "bitcoin",
            amount: 1,
            currency: "usd",
            owner: {
              email: "dellreadus@gmail.com"
            }
          }, function(err, source) {
              console.log('stripe source creation');
              console.log(err);
              console.log(source);
          });
    };

    checkoutCtrl.doCheckout = function(checkoutData){
        var extraDetails={
            name: checkoutData.name
        };

        //Check to see if values in cart?
        //Ate least make sure checkoutCtrl.checkoutData.name and $scope.mookie.total != null
        stripe.createToken(card,extraDetails).then(function(result){
            if(result.token){


                $scope.mookie.getEmailAndUsername(function(userData){
                    var stripeData ={};
                    stripeData.token = result.token.id;
                    stripeData.name = checkoutData.name;
                    stripeData.price = $scope.mookie.total * 100;
                    stripeData.userEmail = userData.userEmail;
                    stripeService.checkout(stripeData).then(function(data){
                        checkoutCtrl.checkoutMessage = data.data.message;
                        if(data.data.success){
                            checkoutCtrl.checkoutMessage = "Charge successful";

                            $scope.mookie.showStripeModal();
                        }
                        else{
                            checkoutCtrl.checkoutMessage='Charge not successful';    
                        }
                    });
                });
            }
            else{
                //print out error
                checkoutCtrl.checkoutMessage = "Card Incorrect";
            }
        });
    };


});
