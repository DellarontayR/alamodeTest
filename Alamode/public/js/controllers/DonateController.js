'use strict';
// angular.module('alamode.controllers', [])

// Controller: User to control the catering and ordering of Cupcake Crumble and cookie Dough
alamode.controller('DonateController', function(User, $scope) {
    // nothing as yet may move this to 

    var donateCtrl = this;
    var card = false;
    donateCtrl.donateMessage = "";
    donateCtrl.donateSuccessful = false;

    donateCtrl.setupStripeCard = function(){
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

    donateCtrl.setupStripeCard();

    donateCtrl.startDonation = function(donateData){
        var extraDetails={
            name: donateData.name
        };
        stripe.createToken(card,extraDetails).then(function(result){
            if(result.token){
                var stripeData ={};
                stripeData.token = result.token.id;
                stripeData.name = donateData.name;
                stripeData.donationAmount = donateData.donationAmount;
                stripeData.donaterEmail = donateData.email;
                stripeService.donate(donateData).then(function(data){
                    donateCtrl.donateMessage = data.data.message;
                    if(data.data.success){
                        donateCtrl.donateMessage = "Thanks for donating!";
                    }
                    else{
                        if(donateCtrl.donateMessage == null || donateCtrl.donateMessage == ""){
                            donateCtrl.donateMessage = "Sorry our server is having issues. Please try again later.";
                        }
                    }
                });
            }
        });
    }

    
});