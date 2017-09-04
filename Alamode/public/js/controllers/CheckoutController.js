'use strict';

alamode.controller('CheckoutController', function ($scope, $location, User, Cart, Auth, Product) {
    var checkoutCtrl = this;
    
    if ($window.location.pathname === '/checkout') checkoutCtrl.checkout = true; // Check if user is on home page to show home page div  
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
        card = elements.create('card', { style: style });

        // Add an instance of the card Element into the `card-element` <div>
        card.mount('#card-element');
    };

    checkoutCtrl.setupStripeCard();

    checkoutCtrl.checkoutData = {};

    checkoutCtrl.doCheckout = function(checkoutData){
        var extraDetails={
            name: checkoutData.name,
        };

        //Check to see if values in cart?
        //Ate least make sure checkoutCtrl.checkoutData.name and $scope.mookie.total != null
        stripe.createToken(card,extraDetails).then(function(result){
            if(result.token){
                var stripeData ={};
                stripeData.token = result.token.id;
                stripeData.name = checkoutData.name;
                stripeData.price = $scope.mookie.total * 100;
                stripeService.checkout(stripeData).then(function(data){
                    checkoutCtrl.checkoutMessage = data.data.message;
                    if(data.data.success){
                        checkoutCtrl.checkoutMessage = "Charge successful";

                        //new plan was to just change the api.js file to do this during checkout //remove cart id from user and also make sure cart is designated as an old cart and has the corresponding users ObjectId
                        //My only conservation to this method was the fact that there then needed to be even more code into the api file which I do need to split into more  files hopefully at some point
                        //Delete cart from users // set to ''
                        //Change cart to oldCart
                        //add userid to cart
                        //Get carts that are oldcart and userId

                        // if(checkoutCtrl.email){
                        //     var userData = {};
                        //     userData.userEmail =checkoutCtrl.email;

                        //     User.removeCart(userData).then(function(data){
                        //         if(data.data.success){
                                    
                        //         }
                        //         else{

                        //         }
                        //     })
                        // }
                        
                        $scope.mookie.showStripeModal();


                    }
                    else{
                        
                    }
                });

            }
            else{
                //print out error
                checkoutCtrl.checkoutMessage = "Card Incorrect";
            }
        });
    };


});
