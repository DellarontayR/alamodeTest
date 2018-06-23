import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { IProduct } from '../../interfaces/product';
import { CartService } from '../../services/cart.service';
import { SharedService } from '../../services/shared.service';
import { MookieEmitService } from '../../services/mookie-emit.service';

@Component({
  selector: 'app-mookie-cart',
  templateUrl: './mookie-cart.component.html',
  styleUrls: ['./mookie-cart.component.scss']
})
export class MookieCartComponent implements OnInit, AfterViewInit {
  // app

  cartProducts: any;
  cartId: String;
  checkout: Boolean = false;
  cartChanged: Boolean = false;
  justCheckout: Boolean = true;
  cartItemCount: Number;
  subtotal: Number;
  tax: Number;
  total: Number;
  // username, email

  constructor(private cartService: CartService, private shared: SharedService, private changeDetector: ChangeDetectorRef,private mookieEmit: MookieEmitService) { }
  // constructor(private changeDetector: ChangeDetectorRef) {}

  // ngAfterViewChecked(){
  //   this.changeDetector.detectChanges();
  // }

  ngOnInit() {


  }
  //  // Update cart in database when user changes cart on frontend

  ngAfterViewInit() {
    console.log(this.justCheckout);
    let userCart = this.shared.getSharedVar('cart');

    // Create product map to get quantity of each product from array of products
    let productMap = new Map();
    userCart.products.forEach(element => {
      if (productMap.has(element._id)) {
        productMap.set(element._id, productMap.get(element._id) + 1);
      }
      else {
        productMap.set(element._id, 1);
      }
    });
    // >
    
    // Create array of products with quantities set to productMap vars
    let cartProducts= {};
    // productMap.keys
    // productMap.keys().forEach(element => {
      
    // });(key =>{

    // });
    
    // productMap.(el=>{

    // });

    

    let makeProducts = function(){

      return new Promise(function (resolve, reject) {
        let temp =[];

        let size = 0;
        productMap.forEach((v,k,m)=>{
          for(let element of userCart.products){
            if (element._id === k) {
              element.qty = productMap.get(element._id);
              element.subtotalOnProduct = element.qty * element.price;
              temp.push(element);
              break;
            }
          }
          size++;
          if(size>= productMap.size){
            resolve(temp);
          }
        });
        // for (let key in productMap.keys()) {
       
        // }
    });

    }

    makeProducts().then(cartProducts=>{
      console.log(cartProducts);
      this.cartProducts = cartProducts;
    });

   
    // >


    this.cartItemCount = userCart.products.length;
    this.subtotal = userCart.subtotal;
    this.tax = userCart.tax;
    this.total = userCart.total;
    this.cartId = userCart._id;
    this.changeDetector.detectChanges();
  }

  updateCart = function () {
    let cartData = { cartProducts: this.cartProducts, cartId: this.cartId };
    this.cartService.updateCart(cartData).subscribe(data => {
      console.log(data);
      if (data.success) {
        this.cartChanged = false;
        console.log(this.cartProducts);
        this.shared.updateSharedVar('cartItemCount',data.cart.products.length);
        this.mookieEmit.emitChange();
      }
      else {

      }
    });
  };

  //  // Add item to cartProducts on Frontend
  addItem = function (cartProduct) {
    cartProduct.qty++;
    this.cartChanged = true;
  };

  //  // Remove item from cartProducts on Frontend
  removeItem = function (cartProduct) {
    cartProduct.qty--;
    this.cartChanged = true;
  };

  //  // Delete Item on frontend and in database

  deleteItem = function (cartProduct) {
    let productData = { productId: cartProduct._id, cartId: this.cartId };
    this.cartProducts.splice(this.cartProduct.indexOf(cartProduct), 1);
    this.cartService.deleteCartProduct(productData).subscribe(data => {
      console.log(data);
      if (data.success) {

      }
      else {

      }
    });
  };

}


  //  // Check userState and get pertinent information, Could easily probably be subtistiuted for $scope.mookie call
  //  app.checkUserState = function (callback) {
  //      if (Auth.isLoggedIn()) {
  //          app.loggedIn = true;
  //          Auth.getUser().then(function (data) {
  //              var userData = {};
  //              userData.userEmail = data.data.email;
  //              userData.username = data.data.username;
  //              // Check if the returned user is undefined (expired)
  //              if (data.data.username === undefined) {
  //                  Auth.logout(); // Log the user out
  //                  app.isLoggedIn = false; // Set session to false
  //                  $location.path('/'); // Redirect to home page
  //                  app.loadme = true; // Allow loading of page
  //              }
  //              else {
  //                  return callback(userData);
  //              }
  //          });
  //      }
  //  };
  //  // >
  //  // I have 22222???

  //  // Is this really in use??? Omg 
  //  // Obviously this contains huge issues from when I was toying around with callback functions and getting data from functions
  //  app.getCurrentCart = function (callback) {
  //      var userData = {};
  //      userData.userEmail = app.email;
  //      User.getUser(userData).then(function (data) {
  //          if (data.data.success) {
  //              if (data.data.user.cart != null && data.data.user.cart != "") {
  //                  var cartData = {};
  //                  cartData.cartId = data.data.user.cart;
  //                  Cart.getCart(cartData).then(function (data) {
  //                      if (data.data.success) {
  //                          return callback(data.data.cart);

  //                      } else {
  //                          if (!data.data.cart) {
  //                              console.log('There is no cart attached to the user.');
  //                          }
  //                          else {
  //                              console.log(data);
  //                          }
  //                      }

  //                  });
  //              }
  //              else {
  //                  console.log(data);
  //                  //Make messaging service for different errors users can get
  //              }

  //          }
  //          else {
  //              console.log(data);
  //          }
  //      });
  //  };
  //  // >

  //  // Check userState and get pertinent information, Could easily probably be subtistiuted for $scope.mookie call
  //  app.checkUserState(function (userData) {
  //      app.username = userData.username;
  //      app.email = userData.userEmail;
  //      app.getCurrentCart(function (cart) {
  //     
  //          app.cartProducts = cartProducts;
  //          app.cartId = cart._id;
  //          // Handle Receipt display
  //          app.subTotal = cart.subtotal;
  //          app.tax = cart.tax;
  //          app.total = cart.total;
  //          // >
  //      });
  //  });
  //  // >

