import { Component, OnInit } from '@angular/core';
import { ILooseObject } from '../../interfaces/looseObject';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';
import { SharedService } from '../../services/shared.service';
// import {StripeResource} from 'Stripe';

// var stripes = stripe('pk_test_EPjnzpxnrgvUiGWsYrJjqN5t');

// var elements = stripes.elements();


@Component({
  selector: 'app-mookie-checkout',
  templateUrl: './mookie-checkout.component.html',
  styleUrls: ['./mookie-checkout.component.scss']
})
export class MookieCheckoutComponent implements OnInit {

  receipt;
  checkoutMessage: String = "";
  chargeSuccessful:Boolean = false;
  card;
  total:DoubleRange;
  checkoutData;

  deliveryLocationChanged: Boolean;
  deliveryInProgress:Boolean;
  constructor(private cartService: CartService, private router: Router, private shared: SharedService) { }

  ngOnInit() {
    // this.setupStripeCard();
    // // this.stripe;
    // // this.make();
    // this.stripe.

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
  };


  doCheckout = function(checkoutData){
    let extraDetails = {
      name:checkoutData.name
    };

    // stripe.createToken()
    // Create stripe serice


    this.stripe.createToken(this.card,extraDetails).then(function(res){
      if(res.token){
        let stripeData: ILooseObject = {token: res.token.id, name:checkoutData.name};
        let user= this.shared.getSharedVar('user');
        let cart = this.shared.getSharedVar('cart');
        console.log(user);
        console.log(cart);
        stripeData.userEmail = user.user.userEmail;
        stripeData.cart = user.user.cart;
        stripeData.price = cart.total * 100;
        stripeData.userContactNumber = checkoutData.number;
        stripeData.deliveryLocation = this.shared.getSharedVar('deliveryLocation');
        stripeData.deliveryLatLng = this.shared.getSharedVar('deliveryLatLng');
        this.cartService.checkout(stripeData).subscribe(data=>{
          if(data.success){
            this.checkoutMessage = "Charge successful";
            this.deliveryLocationChanged = false;
            this.deliveryInProgress = true;
            // Show stripe modal for nice message
            setTimeout(()=>{
              this.shared.updateSharedVar('cart',{});
              this.shared.updateSharedVar('cartItemCount',0);

              this.deliveryInProgress = true;// Maybe a session var
              this.router.navigate(['/orders/' + data.order._id]);
            },1000);
            // this.shared.updateSharedVar('deliveryLocationChanged',false);
            // this.shared.updateSharedVar('deliveryInProgress',false);

          }
          else{
            this.checkoutMessage="Sorry for the inconvenience. The charge was not successful try again later."

          }
        });
      }
      else{
        this.checkoutMessage="Charge unsuccessful. Inccorect card inforation given try again.";
      }
    })
  }


}



// // Need to load cart object so that price can be seen before actual checkout and receipt/order creation

// checkoutCtrl.doBitcoinCheckout = function () {
//     stripe.sources.create({
//         type: "bitcoin",
//         amount: 1,
//         currency: "usd",
//         owner: {
//             email: "xx@gmail.com"
//         }
//     }, function (err, source) {
//         console.log('stripe source creation');
//         console.log(err);
//         console.log(source);
//     });
// };