import { Component, OnInit } from '@angular/core';
// var stripes = stripe('pk_test_EPjnzpxnrgvUiGWsYrJjqN5t');

// var elements = stripes.elements();


@Component({
  selector: 'app-mookie-checkout',
  templateUrl: './mookie-checkout.component.html',
  styleUrls: ['./mookie-checkout.component.scss']
})
export class MookieCheckoutComponent implements OnInit {

  receipt;
  checkoutMessage: String;
  chargeSuccessful:Boolean;
  card;
  total:DoubleRange;

  constructor() { }

  ngOnInit() {
    this.chargeSuccessful = false;

  }

  setupStripeCard = function(){
    const style ={
      base: {
        iconColor: 'white',
        color: 'white',
        lineHeight: '40px',
        fontWeight: 300,
        fontFamily: '"Helvetica Neue", Helvetica,sans-serif',
        fontSize: '15px',

        '::placeholder':{
          color: '#fa755a'
        }
      },
      invalid:{
        color: '#fa755a',
        iconColor: '#fa755a'
      }
    };

    // this.card = elements.create('card',{style:style});
  }

}


// var checkoutCtrl = this;
// checkoutCtrl.receipt = false;
// var card = false;
// checkoutCtrl.checkoutMessage = "";
// checkoutCtrl.chargeSuccessful = false;

// checkoutCtrl.setupStripeCard = function () {
//     var style = {
//         base: {
//             iconColor: 'white',
//             color: 'white',
//             lineHeight: '40px',
//             fontWeight: 300,
//             fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
//             fontSize: '15px',

//             '::placeholder': {
//                 color: '#CFD7E0',
//             }
//         },
//         invalid: {
//             color: '#fa755a',
//             iconColor: '#fa755a'
//         }
//     };
//     // Create an instance of the card Element
//     card = elements.create('card', { style: style }); // elements from cartController
//     // Which means I can use stripe from cartController

//     // Add an instance of the card Element into the `card-element` <div>
//     card.mount('#card-element');
// };

// checkoutCtrl.setupStripeCard();

// checkoutCtrl.checkoutData = {};

// checkoutCtrl.doBitcoinCheckout = function () {
//     stripe.sources.create({
//         type: "bitcoin",
//         amount: 1,
//         currency: "usd",
//         owner: {
//             email: "dellreadus@gmail.com"
//         }
//     }, function (err, source) {
//         console.log('stripe source creation');
//         console.log(err);
//         console.log(source);
//     });
// };

// // Need to load cart object so that price can be seen before actual checkout and receipt/order creation

// checkoutCtrl.doCheckout = function (checkoutData) {
//     var extraDetails = {
//         name: checkoutData.name
//     };

//     //Check to see if values in cart?
//     //Ate least make sure checkoutCtrl.checkoutData.name and $scope.mookie.total != null
//     stripe.createToken(card, extraDetails).then(function (result) {
//         if (result.token) {
//             var stripeData = {};
//             stripeData.token = result.token.id;
//             stripeData.name = checkoutData.name;
//             // stripeData.price = $scope.mookie.total * 100;
//             stripeData.userEmail = $scope.mookie.user.userEmail;
//             stripeData.user = $scope.mookie.user;
//             stripeData.cart = $scope.mookie.cart;
//             // stripeData.price = $scope.mookie.cart.tax + $scope.mookie.cart.subtotal;
//             stripeData.price = $scope.mookie.cart.total * 100;
//             stripeData.userContactNumber = checkoutData.number;
//             stripeData.deliveryLocation = $scope.mookie.deliveryLocation;
//             stripeData.deliveryLatLng = $scope.mookie.deliveryLatLng;
//             stripeService.checkout(stripeData).then(function (data) {
//                 console.log(data);
//                 checkoutCtrl.checkoutMessage = data.data.message;
//                 if (data.data.success) {// Abigail
//                     checkoutCtrl.checkoutMessage = "Charge successful";
//                     $scope.mookie.deliveryLocationChanged = false;
//                     $scope.mookie.deliveryInProgress = true;
//                     $scope.mookie.showStripeModal();
//                     setTimeout(function () {
//                         // Reset session cart
//                         $scope.mookie.cart = {};
//                         $scope.mookie.cartItemCount = false;
//                         // >

//                         checkoutCtrl.receipt = data.data.receipt;

//                         // checkoutCtrl.receipt.customerCart.total = checkoutCtrl.receipt.customerCart.tax + checkoutCtrl.receipt.customerCart.subtotal;
//                         // checkoutCtrl.receipt.customerCart.total = checkoutCtrl.receipt.customerCart.total.toFixed(2);

//                         $('#order-input').toggleClass('hide-input');
//                         setTimeout(function () {
//                             $scope.mookie.hideStripeModal();
//                             $location.path('/orders/' + data.data.order._id);
//                         }, 500)

//                     }, 500);

//                 }
//                 else {
//                     checkoutCtrl.checkoutMessage = 'Charge not successful';
//                 }
//             }, function (err) {
//                 console.log(err);
//             });
//         }
//         else {
//             //print out error
//             checkoutCtrl.checkoutMessage = "Card Incorrect";
//         }
//     });
// };