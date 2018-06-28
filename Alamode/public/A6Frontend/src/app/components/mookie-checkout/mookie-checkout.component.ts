import { Component, OnInit, AfterViewInit, ChangeDetectorRef, ViewChild, NgZone, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ILooseObject } from '../../interfaces/looseObject';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';
import { SharedService } from '../../services/shared.service';

import { StripeService, Elements, Element as StripeElement, ElementsOptions } from "ngx-stripe";
import { MapsAPILoader } from '@agm/core';
// import {} from '@t';
import { } from 'googlemaps';
import { MookieEmitService } from '../../services/mookie-emit.service';





@Component({
  selector: 'app-mookie-checkout',
  templateUrl: './mookie-checkout.component.html',
  styleUrls: ['./mookie-checkout.component.scss']
})
export class MookieCheckoutComponent implements OnInit, AfterViewInit {

  receipt;
  checkoutMessage: String = "";
  chargeSuccessful: Boolean = false;
  total: DoubleRange;
  checkoutData: ILooseObject;
  cart: ILooseObject;

  deliveryLocation;
  deliveryLocationChanged: Boolean;
  deliveryInProgress: Boolean;

  elements: Elements;
  card: StripeElement

  // for google maps
  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;

  @ViewChild("search")
  public searchElementRef: ElementRef;


  constructor(private cartService: CartService, private router: Router, private shared: SharedService, private stripeService: StripeService, private changeDetectoRef: ChangeDetectorRef, private mapsLoader: MapsAPILoader, private ngZone: NgZone, private mookieEmit: MookieEmitService) { }

  ngOnInit() {
    //set google maps defaults
    this.zoom = 4;
    this.latitude = 39.8282;
    this.longitude = -98.5795;

    this.setCurrentPosition();
    //load Places Autocomplete
    this.mapsLoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          console.log(place);
          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          this.deliveryLocation = place.formatted_address;

          //set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 17;
        });
      });
    });


    this.checkoutData = { name: "", number: "" };
    this.cart = { subtotal: 0, tax: 0, total: 0 };
  }

  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 17;
      });
    }
  }

  ngAfterViewInit() {
    this.setupStripeCard();
    this.cart = this.shared.getSharedVar('cart');
    this.changeDetectoRef.detectChanges();
    console.log(this.cart);
  }

  setupStripeCard = function () {
    const style = {
      base: {
        iconColor: 'white',
        color: 'white',
        lineHeight: '40px',
        fontWeight: 300,
        fontFamily: '"Helvetica Neue", Helvetica,sans-serif',
        fontSize: '15px',

        '::placeholder': {
          color: '#fa755a'
        }
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a'
      }
    };
    // optional parameters
    // let elementsOptions: ElementsOptions = {
    //   locale: 'es'
    // };

    this.stripeService.elements().subscribe(elements => {
      this.elements = elements;
      if (!this.card) {
        this.card = this.elements.create('card', {
          style: {
            base: {
              iconColor: 'white',
              color: 'white',
              lineHeight: '40px',
              fontWeight: 300,
              fontFamily: '"Helvetica Neue", Helvetica,sans-serif',
              fontSize: '15px',

              '::placeholder': {
                color: '#fa755a'
              }
            },
            invalid: {
              color: '#fa755a',
              iconColor: '#fa755a'
            }
          }
        });
        this.card.mount('#card-element');
      }
    });
  };

  doCheckout = function () {
    let user = this.shared.getSharedVar('user');

    let extraDetails = {
      name: user.user.username
    };

    this.stripeService.createToken(this.card, extraDetails).subscribe((res) => {
      if (res.token) {
        let stripeData: ILooseObject = { stripeToken: res.token.id };
        stripeData.userContactNumber = this.checkoutData.number;//this.checkoutData.number;
        stripeData.deliveryLocation = this.deliveryLocation;//this.shared.getSharedVar('deliveryLocation');
        stripeData.deliveryLatLng = { lat: this.latitude, lng: this.longitude };// this.shared.getSharedVar('deliveryLatLng');
        this.cartService.checkout(stripeData).subscribe(data => {
          if (data.success) {
            this.checkoutMessage = "Charge successful";
            this.deliveryLocationChanged = false;
            this.deliveryInProgress = true;
            // Show stripe modal for nice message
            setTimeout(() => {
              this.shared.updateSharedVar('cart', {});
              this.shared.updateSharedVar('cartItemCount', 0);
              this.mookieEmit.emitChange();

              this.deliveryInProgress = true;// Maybe a session var
              this.router.navigate(['/orders/' + data.order._id]);
            }, 1000);
            // this.shared.updateSharedVar('deliveryLocationChanged',false);
            // this.shared.updateSharedVar('deliveryInProgress',false);

          }
          else {
            this.checkoutMessage = "Sorry for the inconvenience. The charge was not successful try again later."
          }
        });
      }
      else {
        this.checkoutMessage = "Charge unsuccessful. Inccorect card inforation given try again.";
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