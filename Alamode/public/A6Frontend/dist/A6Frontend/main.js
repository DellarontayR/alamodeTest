(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_mookie_home_mookie_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/mookie-home/mookie-home.component */ "./src/app/components/mookie-home/mookie-home.component.ts");
/* harmony import */ var _components_mookie_pagenotfound_mookie_pagenotfound_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/mookie-pagenotfound/mookie-pagenotfound.component */ "./src/app/components/mookie-pagenotfound/mookie-pagenotfound.component.ts");
/* harmony import */ var _components_mookie_social_mookie_social_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/mookie-social/mookie-social.component */ "./src/app/components/mookie-social/mookie-social.component.ts");
/* harmony import */ var _components_mookie_register_mookie_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/mookie-register/mookie-register.component */ "./src/app/components/mookie-register/mookie-register.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _components_mookie_home_mookie_home_component__WEBPACK_IMPORTED_MODULE_2__["MookieHomeComponent"] },
    { path: 'thesecret', component: _components_mookie_social_mookie_social_component__WEBPACK_IMPORTED_MODULE_4__["MookieSocialComponent"] },
    { path: 'register', component: _components_mookie_register_mookie_register_component__WEBPACK_IMPORTED_MODULE_5__["MookieRegisterComponent"] },
    { path: "**", component: _components_mookie_pagenotfound_mookie_pagenotfound_component__WEBPACK_IMPORTED_MODULE_3__["MookiePagenotfoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <img src=\"assets/3dMocha.png\"/> -->\n\n<body>\n\n  <!-- Mookie Header -->\n  <app-mookie-header></app-mookie-header>\n\n  <!-- Main Angular view where routes will be rendered-->\n  <!-- <div class=\"main-view\" ng-show=\"main.loadme\" ng-view></div> -->\n  <router-outlet></router-outlet>\n\n  <!-- Mookie footer -->\n  <app-mookie-footer></app-mookie-footer>\n\n<!-- <script src=\"../mookiedoughfrontend/js/scripts.js\"></script> -->\n</body>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  line-height: normal !important; }\n\n.text-right {\n  text-align: right; }\n\n.text-center {\n  text-align: center; }\n\n.social-bar a {\n  display: inline-block;\n  vertical-align: middle;\n  font-size: 14px;\n  text-decoration: none;\n  margin-right: 18px;\n  margin-top: 5px;\n  margin-bottom: 5px;\n  transition: color 0.3s; }\n\n.social-bar.text-center a {\n  margin-left: 9px;\n  margin-right: 9px; }\n\n.social-bar.text-right a {\n  margin-left: 18px;\n  margin-right: 0; }\n\n.text-center .social-bar a {\n  margin-left: 9px;\n  margin-right: 9px; }\n\n.text-right .social-bar a {\n  margin-left: 18px;\n  margin-right: 0; }\n\n.add-cart-note {\n  display: none;\n  height: 200px;\n  width: 100%; }\n\n.add-cart-note.ng-hide {\n  display: none; }\n\n.nav, .pagination, .carousel, .panel-title a {\n  cursor: pointer; }\n\n.shownCheck {\n  display: inline-block; }\n\n.hiddenCheck {\n  display: none !important; }\n\n.hidden-plus {\n  display: none !important; }\n\n.mookie-product {\n  display: inline-block;\n  width: 100%;\n  height: 100%;\n  position: relative; }\n\n.image-container {\n  height: 250px; }\n\n.mookie-img {\n  display: block;\n  margin: 0 auto;\n  width: 200px;\n  height: 200px;\n  position: relative;\n  align-content: middle; }\n\nproduct {\n  max-height: 300px;\n  position: relative;\n  display: block;\n  margin-bottom: 100px;\n  /* overflow-y:hidden; */\n  align-content: left; }\n\n.mookie-product .mookie-product-thumbnail {\n  height: 200px;\n  width: 100%;\n  padding-bottom: 15px; }\n\n.mookie-product .mookie-shop-item-tools .mookie-shop-item-details {\n  width: 100%; }\n\n.mookie-product .mookie-shop-item-tools .mookie-shop-item-details .mookie-shop-item-price {\n  color: #111111;\n  font-weight: bold; }\n\n.mookie-product .mookie-shop-item-tools .mookie-shop-item-details .mookie-shop-item-title {\n  width: 90%; }\n\n.mookie-product .mookie-shop-item-tools .mookie-shop-item-details .mookie-shop-item-title .mookie-title {\n  color: #111111;\n  font-size: 15px;\n  /* color:black; */\n  /* #606060 */\n  font-family: \"Work Sans\", Helvetica, Arial, sans-serif;\n  font-weight: bold;\n  overflow-wrap: normal;\n  word-wrap: break-word;\n  word-break: normal;\n  width: 100%;\n  white-space: normal; }\n\n.mookie-add-to-cart {\n  display: inline-block;\n  position: absolute;\n  bottom: 0;\n  left: 0; }\n\n.mookie-add-to-cart-plus {\n  /* display:block; */\n  /* position:absolute;\r\n\tright:10px;\r\n\tbottom:5px; */\n  min-height: 30px;\n  min-width: 30px;\n  display: inline-block;\n  border-radius: 60px;\n  box-shadow: 0px 0px 2px #111111;\n  padding: 0.5em 0.6em; }\n\n/* Css from theme.css */\n\n.page-preloader {\n  position: fixed;\n  z-index: 9999;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background-color: #ffffff;\n  transition: all 0.5s; }\n\n.page-preloading .page-wrapper {\n  opacity: 0;\n  transition: all 0.5s 0.3s; }\n\n.page-preloading .page-preloader {\n  visibility: visible;\n  opacity: 1; }\n\n.page-preloading.loading-done .page-wrapper {\n  opacity: 1; }\n\n.page-preloading.loading-done .page-preloader {\n  visibility: hidden;\n  opacity: 0; }\n\n.page-preloading.loading-done.link-clicked .page-wrapper {\n  opacity: 0; }\n\n.preloader {\n  display: block;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 60px;\n  margin-top: -30px;\n  margin-left: -30px; }\n\n.count {\n  position: absolute;\n  display: block;\n  width: 40px;\n  height: 40px;\n  line-height: 16px;\n  font-size: 12px;\n  color: black;\n  text-align: right;\n  border-radius: 50%;\n  top: -2px;\n  right: -17px; }\n\n.shop-count {\n  position: absolute;\n  display: block;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  color: white;\n  background-color: #333333;\n  top: -5px;\n  right: -5px;\n  /* font-size: 10px; */\n  text-align: center;\n  font: 10px Arial, sans-serif;\n  padding: 4px; }\n\n/* Main Navigation Mobile */\n\n@-webkit-keyframes slideUp {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 15px, 0); }\n  to {\n    opacity: 1;\n    -webkit-transform: none; } }\n\n@keyframes slideUp {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 15px, 0);\n    transform: translate3d(0, 15px, 0); }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n\n@-webkit-keyframes slideUpLong {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 25px, 0); }\n  to {\n    opacity: 1;\n    -webkit-transform: none; } }\n\n@keyframes slideUpLong {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 25px, 0);\n    transform: translate3d(0, 25px, 0); }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n\n.socialMedia {\n  display: none; }\n\ni.icon-black {\n  color: black; }\n\n/* Base class */\n\n.scroll-to-top-btn {\n  display: block;\n  /* position: absolute;\r\n  width: 48px; */\n  height: 48px;\n  font-size: 24px;\n  color: #606060;\n  line-height: 44px;\n  text-align: center;\n  text-decoration: none;\n  right: 20px;\n  bottom: 0;\n  background-color: #fff;\n  border: 2px solid #ededed;\n  border-bottom: 0;\n  cursor: pointer;\n  transition: color 0.3s; }\n\n.scroll-to-top-btn > i {\n  -webkit-transform: rotate(-90deg);\n  transform: rotate(-90deg); }\n\n.scroll-to-top-btn:hover {\n  color: #999; }\n\n/* Index only Css */\n\n/* Other Css should be moved to other files */\n\n@media screen and (max-width: 480px) {\n  .scroll-to-top-btn {\n    height: 42px;\n    font-size: 20px;\n    line-height: 38px; } }\n\nheader {\n  transition: top 0.2s ease-in-out; }\n\n.nav-up {\n  top: -80px; }\n\n/* Form control inputs */\n\n.form-control {\n  display: block;\n  width: 100%;\n  line-height: 1.5;\n  height: 48px;\n  font-size: 14px;\n  color: #606060;\n  text-transform: none;\n  border: 2px solid #ededed;\n  border-radius: 5px;\n  background-color: #fff;\n  padding: 0 16px;\n  margin-bottom: 24px;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  -o-appearance: none;\n  appearance: none;\n  transition: all 0.3s; }\n\n.form-control:focus {\n  border-color: #77cde3;\n  outline: none; }\n\n.form-control::-moz-placeholder {\n  color: #606060;\n  opacity: 1; }\n\n.form-control:-ms-input-placeholder {\n  color: #606060; }\n\n.form-control::-webkit-input-placeholder {\n  color: #606060; }\n\n.form-control.placeholder {\n  color: #606060; }\n\n.ssb-facebook {\n  background-color: #3b5998;\n  color: white;\n  vertical-align: top; }\n\n.ssb-google {\n  background-color: #dd4b39;\n  color: white;\n  vertical-align: top; }\n\n.ssb-twitter {\n  background-color: #55acee;\n  color: white;\n  vertical-align: top; }\n\n.ssb-instagram {\n  background: #f09433;\n  background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888', GradientType=1);\n  color: white;\n  vertical-align: top; }\n\n.fuschia-gradient {\n  background: linear-gradient(#F93268, #4731B9); }\n\n.default-gradient-s {\n  background: #333333;\n  background: linear-gradient(45deg, #333333 0%, #474747 25%, #5f5f5f 50%, #5f5f5f 75%, #867e7e 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#333333', endColorstr='#ffffff', GradientType=1); }\n\n.default-gradient {\n  background: #000046;\n  /* fallback for old browsers */\n  /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(to top, #f5f5f5, #333333);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n  padding-bottom: 10px; }\n\n.gray-gradient {\n  /* background:linear-gradient(rgb(190, 159, 73),rgb(44, 49, 75)); */\n  background: linear-gradient(#be9f49, #333333); }\n\n.widget-title {\n  margin-top: 0px; }\n\n.no-scroll-body {\n  overflow: hidden; }\n\n.close.myClose {\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  position: absolute;\n  top: 50%;\n  right: 5px; }\n\n.modal {\n  color: black;\n  text-align: center; }\n\n@media screen and (min-width: 768px) {\n  .modal:before {\n    display: inline-block;\n    vertical-align: middle;\n    /* content: \" \"; */\n    height: 100%; }\n  .modal-dialog {\n    display: inline-block;\n    text-align: center;\n    vertical-align: middle; } }\n\n.modal-header {\n  overflow: hidden;\n  border: 1px solid transparent;\n  position: relative; }\n\n.inlineButton {\n  width: auto;\n  display: inline-block; }\n\n.form-submit {\n  margin-top: 10px;\n  margin-bottom: 5px; }\n\n.flexvertical-align {\n  display: flex;\n  align-items: center;\n  flex-direction: column; }\n\n.row.match-my-cols {\n  overflow: hidden; }\n\n.row.match-my-cols [class*=\"col-\"].sethalf {\n  -webkit-transform: translate(0, 50%);\n          transform: translate(0, 50%);\n  /* \r\n    margin-bottom: -99999px;\r\n    padding-bottom: 99999px; */ }\n\n@media screen and (max-width: 990px) {\n  .row.match-my-cols [class*=\"col-\"].sethalf {\n    -webkit-transform: none;\n            transform: none; } }\n\n.black-a {\n  background-color: #333333;\n  border-color: #333333; }\n\n.thankshopper {\n  width: 100%; }\n\n.secretsocial {\n  color: #333333;\n  -webkit-text-decoration-line: none;\n          text-decoration-line: none; }\n\n.secretsocial:hover {\n  color: #333333; }\n\n.subscribe-form {\n  margin-bottom: 10px; }\n\n.outlet {\n  margin-top: 100px; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_9__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


console.log("Hello! :) Welcome Mookie Dough inspector. If you're a Mookie Dough advocate and would like to see more of it near you email readus@mookiedough.com <3");








var AppComponent = /** @class */ (function () {
    //     // Call when main controller loads
    //     app.mookieCheckSession();
    //     // >
    function AppComponent(authService, router, cartService, shared, userService, product) {
        var _this = this;
        this.authService = authService;
        this.router = router;
        this.cartService = cartService;
        this.shared = shared;
        this.title = 'app';
        // Item Name map
        this.itemNameMap = new Map();
        this.checkUser$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["interval"])(30000);
        // Authentication Interceptor that should add jsonwebtoken to header
        this.currToken = '';
        // >
        // Session variables
        this.checkingSession = false;
        this.cart = {};
        this.cartItemCount = false;
        this.admin = false;
        this.products = {};
        this.loggedIn = false;
        this.deliveryLatLng = {};
        this.deliveryLocation = null;
        this.numberOfSiteVisitors = 0;
        this.user = {};
        // >
        // Session Functions
        // Checks to see if visitor has visitor's ip address has visited our site before
        this.checkVisitor = function (ipAddress) {
            var ipData = { ipAddress: '' };
            ipData.ipAddress = ipAddress;
            //   AuthService.checkVisitor(ipData)
            this.authService.checkVisitor(ipData).subscribe(function (data) {
                // Data objects returned from subscribed don't require an extra .data to get information
                if (data.success) {
                    // Telemetry
                }
                else {
                    // Telemetry
                }
            });
        };
        // Use Auth's acess to 3rd party api to get user's ip address
        this.checkIp = function () {
            var _this = this;
            this.authService.getIp().subscribe(function (data) {
                console.log(data);
                _this.checkVisitor(data.ip);
            });
        };
        // Updates the cart after adding an item to the cart
        this.updateCart = function (getCartData, callback) {
            var _this = this;
            this.cartService.subscribe(function (data) {
                console.log(data);
                if (data.success) {
                    var itemCount_1 = 0;
                    data.cart.products.forEach(function (cartProduct) {
                        itemCount_1++;
                    });
                    var cartData = data.cart;
                    cartData.itemCount = itemCount_1;
                    // Find Way to set scope variables
                    _this.shared.updateSharedVar("cartItemCount", itemCount_1);
                    _this.shared.updateSharedVar("cart", cartData);
                    return callback(data);
                }
                else {
                    // Err
                }
            });
        };
        this.addToCart = function (product, catalogProduct) {
            var _this = this;
            this.authService.getOrderingSchedule().subscribe(function (data) {
                console.log(data);
                if (data.success) {
                    var schedule = data.schedule;
                    var currentTime = new Date();
                    var hours = currentTime.getHours();
                    if (hours > schedule.startHour && hours < schedule.endHour) {
                        _this.auth.getUser().subscribe(function (tokenData) {
                            if (tokenData.email) {
                                _this.shared.updateSharedVar('user', { userEmail: data.email, username: data.usernmae });
                                var userData = { userEmail: data.email };
                                _this.user.getUser(userData).subscribe(function (data) {
                                    if (data.success) {
                                        var cartData = {};
                                        cartData.qty = 1;
                                        cartData.description = product.description;
                                        cartData.price = product.price;
                                        cartData.title = product.title;
                                        cartData.imagePath = product.imagePath;
                                        cartData.userId = data.user._id;
                                        cartData.product = catalogProduct;
                                        if (data.user.active) {
                                            _this.cart.addItemToCart(cartData).subscribe(function (resData) {
                                                console.log(resData);
                                                if (resData.success) {
                                                    var getCartData = { cartId: resData.cart._id };
                                                    _this.updateCart(getCartData, function (moreData) {
                                                        console.log(moreData);
                                                        _this.shared.updateSharedVar('cartItemCount', moreData.itemCount);
                                                    });
                                                }
                                                else {
                                                    // Show Error
                                                }
                                            });
                                        }
                                    }
                                });
                            }
                        });
                    }
                }
                else {
                    // Show Error
                    // var title = "Ordering is closed for now.";
                    //                 var body = "Mookie Dough hours will be from 8 am to 7pm Monday Through Sunday with delivery starting at 9pm.  ";
                }
            });
        };
        // updateCart
        // Adds a email subscription to be added for our newsletters and special announcements
        this.addSubscription = function (subEmail) {
            var subData = { subEmail: subEmail };
            this.auth.addSubscription(subData).subscribe(function (data) {
                // Add time out and subscriptions message
                // TODO
            });
        };
        //Used to reset contact information form after information is put in
        this.addContactMessage = function (contactData) {
            var _this = this;
            this.auth.addContactMessage(contactData).subscribe(function (data) {
                if (data.success) {
                    _this.shared.updateSharedVar('contactMes', {});
                }
                else {
                    // TODO
                    // Create showModal with angular
                    //                 var title = "Contact Message not saved";
                    //                 var body = data.data.message;
                    //                 $scope.mookie.showModal(title, body);
                }
            });
        };
        // // Modal Functions
        // hideModal = function () {
        //     jQuery("#myModal").modal('hide');
        // };
        // // cont.
        // hideStripeMOdal = function () {
        //     jQuery("#stripeModal").modal('hide');
        //     ;
        // }
        // //  cont.
        // showModal = function (title, body) {
        //     // modalTitle,modalBody
        //     jQuery("#myModal").modal();
        // }
        // // cont.
        // showProductModal = function (product) {
        //     // Product Modal
        // }
        // // cont.
        // showStripeModal = function () {
        //     jQuery("#stripeModal").modal();
        // }
        // >
        //     // Attempt to provide slides at home page
        //     $scope.mookie.slides = {
        //         slides: ["../../imgs/Media/dorm5-min.jpg", "../../imgs/Media/header3.png", "../../imgs/Media/M00KIE.jpg"]
        //     };
        // >
        //Add a product to product catalog in database
        this.addProductToDB = function (productData) {
            this.product.seedProduct(productData).subscribe(function (data) {
                if (data.success) {
                    // Telemetry
                    // TODO
                }
            });
        };
        // Run to check the database and see if the products are currently there
        this.resetProducts = function () {
            // loadme?
            this.product.getCatalogProducts().subscribe(function (data) {
                if (data.success) {
                    // laodme
                }
                else {
                    if (data.data.noProducts) {
                        // Add Products to DB if they are not there
                    }
                }
            });
        };
        // Get products from server to produce on home page in mookie scope
        this.getProductsFromServer = function (callback) {
            (function () {
                var _this = this;
                this.product.getCatalogProducts().subscribe(function (data) {
                    _this.shared.updateSharedVar('products', data.catalogProducts);
                    _this.getInventory().subscribe(function (data) {
                        console.log(data);
                        if (data.success) {
                            var inventory = data.inventory;
                            var totals = inventory.totals;
                            var totalMap = new Map();
                            totals.forEach(function (total) {
                                totalMap.set(total.itemName, total.itemQtyTtoal);
                            });
                            // Iterate over products from shared service and display in stock not instock
                            // $scope.mookie.products.forEach(function (product) {
                            //     if (itemNameMap.has(product.title)) {
                            //         if (totalMap.get(itemNameMap.get(product.title))) {
                            //             product.inStock = "In Stock"
                            //         }
                            //         else {
                            //             product.inStock = "Not In Stock";
                            //         }
                            //     }
                            // });
                            // callback(userProducts)?
                        }
                    }, function (err) {
                        console.log(err);
                        callback(err);
                    });
                });
            })();
        };
        //     var handleProduct = function (products) {
        //         console.log(products);
        //     };
        //     $scope.mookie.getProductsFromServer(handleProduct);
        //     // >
        // Get Subscribers for Management
        this.getSubscribers = function (callback) {
            this.auth.getSubscribers().subscribe(function (data) {
                if (data.success) {
                    return callback(data.subscribers);
                }
            });
        };
        // Get Contact Messages for Management
        this.getContactMessages = function (callback) {
            this.auth.getContactMessages().subscribe(function (data) {
                if (data.success) {
                    return callback(data.contactMessages);
                }
            });
        };
        // Get Users for Management
        this.getUsers = function (callback) {
            this.userService.subscribe(function (data) {
                if (data.success) {
                    return callback(data.users);
                }
            });
        };
        // >
        // Get The User's current cart
        this.getCurrentCart = function (callback) {
            var _this = this;
            var userData = this.shared.getSharedVar('user');
            this.user(userData).subscribe(function (data) {
                console.log(data);
                if (data.success) {
                    if (data.user.cart != null && data.user.cart != "") {
                        var cartData = { cartId: data.user.cart };
                        _this.cartService.getCart(cartData).subscribe(function (data) {
                            console.log(data);
                            if (data.success) {
                                var total_1 = 0;
                                var count_1 = 0;
                                data.cart.products.forEach(function (product) {
                                    total_1 += product.price;
                                    count_1++;
                                });
                                _this.shared.updateSharedVar('cartItemCount', count_1);
                                _this.shared.updateSharedVar('cart', data.cart);
                                return callback(data.cart);
                            }
                            else {
                                if (!data.cart) {
                                    console.log('no cart on suer');
                                }
                            }
                        });
                    }
                    else {
                        // user has no cart
                    }
                }
                else {
                    // could not get user
                }
            });
        };
        // Check if user's session has expired upon opening page for the first time
        //For all intents and purposes getemailAndUsername
        this.checkUserState = function (callback) {
            var _this = this;
            var userData = { userEmail: '', username: '', success: false };
            if (this.auth.isLoggedIn()) {
                this.auth.getUser.subscribe(function (data) {
                    userData.userEmail = data.email;
                    userData.username = data.username;
                    _this.shared.updateSharedVar('loggedIn', true);
                    _this.shared.addMinUser(data.userEmail, data.username);
                    if (data.username === undefined) {
                        _this.auth.logout();
                        _this.shared.updateSharedVar('loggedIn', false);
                        _this.router.navigate(['/register'], { relativeTo: _this.route });
                    }
                    else {
                        _this.userService.getUser(userData).subscribe(function (data) {
                            if (data.success) {
                                userData.success = true;
                            }
                            return callback(userData);
                        });
                        // TODO
                        // Create simple http response error handler function
                    }
                });
            }
            else {
                return callback(userData);
            }
        };
        // Setup interval to check user session every 15 seconds
        // Function to run an interval that checks if the user's token has expired
        this.checkSession = function () {
            this.checkUserState(function (userData) {
                var _this = this;
                if (userData.success) {
                    // Run interval ever 30000 milliseconds (30 seconds) 
                    this.checkUser$.subscribe(function (event) {
                        console.log('in subscribe');
                        var mWindow = _this.windowRef.nativeWindow();
                        var token = mWindow.localStorage.getItem('token');
                        if (token === null) {
                            // Cancel interval somehow
                            console.log('espcaing interval');
                            _this.checkUser$.unsubscribe();
                        }
                        else {
                            var parseJwt = function (token) {
                                var base64Url = token.split('.')[1];
                                var base64 = base64Url.replace('-', '+').replace('_', '/');
                                return JSON.parse(mWindow.atob(base64));
                            };
                            var expireTime = parseJwt(token);
                            var timeStamp = Math.floor(Date.now() / 1000);
                            var timeCheck = expireTime.exp - timeStamp;
                            if (timeCheck <= 1800) {
                                console.log('espcaing interval');
                                _this.checkUser$.unsubscribe();
                                // Cancel interval
                            }
                            console.log('still in');
                            _this.shared.addMinUser(userData.userEmail, userData.username);
                            _this.shared.updateSharedVar('checkingSession', true);
                            _this.getCurrentCart(function (cart) {
                                var total = 0;
                                var count = 0;
                                cart.products.forEach(function (product) {
                                    total += product.price;
                                    count++;
                                });
                                this.shared.updateSharedVar('cartItemCount', count);
                                this.shared.updateSharedVar('cart', cart);
                            });
                        }
                    });
                    // loadme true
                }
                else {
                    this.auth.logout();
                    this.shared.updateSharedVar('loggedIn', false);
                    this.router.navigate(['/register'], { relativeTo: this.route });
                }
            });
        };
        //     // // Function to redirect users to facebook authentication page
        this.facebook = function () {
            this.router.navigate(['/auth/facebook']);
        };
        //     // // Function to redirect users to twitter authentication page        
        this.twitter = function () {
            this.router.navigate(['/auth/twitter']);
        };
        //     // // Function to redirect users to google authentication page
        this.google = function () {
            this.router.navigate(['/auth/google']);
        };
        this.logout = function () {
            this.auth.logout();
            this.shared.updateSharedVar('loggedIn', false);
            this.route.navigate(['/register']);
        };
        // Toggle Mobile Menu
        //------------------------------------------------------------------------------
        var menuToggle = jquery__WEBPACK_IMPORTED_MODULE_9__('.mobile-menu-toggle'), mobileMenu = jquery__WEBPACK_IMPORTED_MODULE_9__('.main-navigation');
        menuToggle.on('click', function () {
            jquery__WEBPACK_IMPORTED_MODULE_9__(this).toggleClass('active');
            mobileMenu.toggleClass('open');
            jquery__WEBPACK_IMPORTED_MODULE_9__('body').toggleClass('no-scroll-body');
        });
        var $insta = jquery__WEBPACK_IMPORTED_MODULE_9__('#insta');
        var getInstaHeight = function (event) {
            if (event.origin.indexOf('http://localhost:8081') || event.origin.indexOf('https://www.mookiedough.co')) {
                var eventData = JSON.parse(event.data);
                if (eventData.type === "lightwidget_widget_size") {
                    jquery__WEBPACK_IMPORTED_MODULE_9__('#insta').css({ height: eventData.size });
                    window.removeEventListener("message", getInstaHeight, false);
                }
            }
            else {
                return;
            }
        };
        var resizeInsta = function () {
            window.addEventListener('message', getInstaHeight);
            // document.getElementById('insta').contentWindow.postMessage('', '*');
        };
        // document.getElementById('insta').onload = function () {
        //     resizeInsta();
        // };
        router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]; })).subscribe(function (route) {
            //     // Will run code every time a route changes
            console.log(route);
            if (shared.getSharedVar('checkingSession'))
                _this.checkSession();
            console.log(shared.getSharedVar('checkingSession'));
            if (_this.authService.isLoggedIn()) {
                _this.authService.getUser().subscribe(function (data) {
                    if (data.username === undefined) {
                        shared.updateSharedVar('loggedIn', false);
                        _this.authService.logout();
                        _this.router.navigate(['/home']);
                        console.log('user logged out after username found to be undefined');
                    }
                    else {
                        shared.updateSharedVar('loggedIn', true);
                        userService.getPermission().subscribe(function (data) {
                            if (data.permission === 'amdin') {
                                shared.updateSharedVar('admin', true);
                            }
                            else {
                                shared.updateSharedVar('admin', false);
                            }
                        });
                    }
                });
            }
            //         if ($location.hash() == '_=_') $location.hash(null); // Check if facebook hash is added to URL
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        this.checkIp();
        // this.resetProducts();
        this.itemNameMap.set("og mookie", "og mookie");
        this.itemNameMap.set("og mookie's confetti party", "funfetti");
        this.itemNameMap.set("cookies n creme", "oreo");
        this.itemNameMap.set("aunty vicky's red velvet", "Red velvet");
        this.itemNameMap.set("dark chocolate mocha", "Dark chocolate");
    };
    AppComponent.prototype.intercept = function (req, next) {
        var _this = this;
        this.authService.getToken().subscribe(function (token) { _this.currToken = token; console.log(_this.currToken); });
        console.log(req);
        console.log('This is the request from intercept');
        if (this.currToken) {
            var cloned = req.clone({
                headers: req.headers.set("x-access-token", this.currToken)
            });
            return next.handle(cloned);
        }
        else {
            return next.handle(req);
        }
    };
    AppComponent.prototype.getBase64 = function (file) {
        return new Promise(function (resolve, reject) {
            var reader = new FileReader();
            reader.onload = function () {
                resolve(reader.result);
            };
            reader.onerror = function (error) {
                reject('Error');
            };
            reader.readAsDataURL(file);
        });
        // Displays returning promises and is apart of image manipulation development scenario
    };
    ;
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"], _services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"], _services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"], _services_product_service__WEBPACK_IMPORTED_MODULE_8__["ProductService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_mookie_header_mookie_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/mookie-header/mookie-header.component */ "./src/app/components/mookie-header/mookie-header.component.ts");
/* harmony import */ var _components_mookie_footer_mookie_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/mookie-footer/mookie-footer.component */ "./src/app/components/mookie-footer/mookie-footer.component.ts");
/* harmony import */ var _components_mookie_home_mookie_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/mookie-home/mookie-home.component */ "./src/app/components/mookie-home/mookie-home.component.ts");
/* harmony import */ var _components_mookie_pagenotfound_mookie_pagenotfound_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/mookie-pagenotfound/mookie-pagenotfound.component */ "./src/app/components/mookie-pagenotfound/mookie-pagenotfound.component.ts");
/* harmony import */ var _components_mookie_social_mookie_social_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/mookie-social/mookie-social.component */ "./src/app/components/mookie-social/mookie-social.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _components_mookie_register_mookie_register_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/mookie-register/mookie-register.component */ "./src/app/components/mookie-register/mookie-register.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_mookie_header_mookie_header_component__WEBPACK_IMPORTED_MODULE_5__["MookieHeaderComponent"],
                _components_mookie_footer_mookie_footer_component__WEBPACK_IMPORTED_MODULE_6__["MookieFooterComponent"],
                _components_mookie_home_mookie_home_component__WEBPACK_IMPORTED_MODULE_7__["MookieHomeComponent"],
                _components_mookie_pagenotfound_mookie_pagenotfound_component__WEBPACK_IMPORTED_MODULE_8__["MookiePagenotfoundComponent"],
                _components_mookie_social_mookie_social_component__WEBPACK_IMPORTED_MODULE_9__["MookieSocialComponent"],
                _components_mookie_register_mookie_register_component__WEBPACK_IMPORTED_MODULE_11__["MookieRegisterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/mookie-footer/mookie-footer.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/mookie-footer/mookie-footer.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- New footer -->\n<footer id=\"main-footer\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <p>&copy; 2018 all rights reserved. Mookie Dough LLC</p>\n        <br>\n        <p ng-if=\"mookie.numberOfSiteVisitors > 0\"> Site has been accessed {{mookie.numberOfSiteVisitors}} times.</p>\n        <br>\n        <h3 class=\"widget-title\">\n          <small>Subscribe to the Mookie Dough email list</small>\n        </h3>\n        <form class=\"subscribe-form\" novalidate>\n          <input type=\"email\" name=\"EMAIL\" placeholder=\"Your e-mail\" ng-model=\"subEmail\">\n          <div style=\"position: absolute; left: -5000px;\" aria-hidden=\"true\">\n            <input type=\"text\" name=\"\" tabindex=\"-1\" value=\"\">\n          </div>\n          <button type=\"submit\" ng-click=\"main.addSubscription(subEmail)\">\n            <i class=\"fas fa-paper-plane\"></i>\n          </button>\n          <!-- <p ng-show=\"main.subMessage\"> {{main.subMessage}}</p> -->\n        </form>\n\n      </div>\n      <div class=\"col-md-2\">\n        <h6>Relevant Links</h6>\n        <ul class=\"list-unstyled\">\n          <li>\n            <a href=\"/about\">About us</a>\n          </li>\n          <li>\n            <a href=\"/menu\">Menu</a>\n          </li>\n          <li>\n            <a href=\"/thesecret\">Social Media</a>\n          </li>\n          <li>\n            <a href=\"/register\">Sign in</a>\n          </li>\n        </ul>\n      </div>\n      <div class=\"col-md-2\">\n        <h6>Our team</h6>\n        <ul class=\"list-unstyled\">\n          <li>\n            <a href=\"https://www.linkedin.com/in/abempah/\">Bempah</a>\n          </li>\n          <li>\n            <a href=\"https://www.linkedin.com/in/akim-richards-a8303610a/\">Akim</a>\n          </li>\n          <li>\n            <a href=\"https://www.linkedin.com/in/dellarontay/\">Dellarontay</a>\n          </li>\n          <li>\n            <a href=\"https://www.linkedin.com/in/oluwaseyi-olaleye-a523b210a/\">Oluwaseyi</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</footer>"

/***/ }),

/***/ "./src/app/components/mookie-footer/mookie-footer.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/mookie-footer/mookie-footer.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer {\n  padding-top: 10px;\n  background-color: #333333;\n  color: #ffffff; }\n\n#main-footer {\n  background: #333333;\n  color: white;\n  padding: 6rem 0;\n  /* font-size: 0.8rem; */ }\n\n#main-footer h6 {\n  color: #718FA9; }\n\n#main-footer a {\n  color: #6C6F73; }\n"

/***/ }),

/***/ "./src/app/components/mookie-footer/mookie-footer.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/mookie-footer/mookie-footer.component.ts ***!
  \*********************************************************************/
/*! exports provided: MookieFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MookieFooterComponent", function() { return MookieFooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MookieFooterComponent = /** @class */ (function () {
    function MookieFooterComponent() {
    }
    MookieFooterComponent.prototype.ngOnInit = function () {
    };
    MookieFooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mookie-footer',
            template: __webpack_require__(/*! ./mookie-footer.component.html */ "./src/app/components/mookie-footer/mookie-footer.component.html"),
            styles: [__webpack_require__(/*! ./mookie-footer.component.scss */ "./src/app/components/mookie-footer/mookie-footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MookieFooterComponent);
    return MookieFooterComponent;
}());



/***/ }),

/***/ "./src/app/components/mookie-header/mookie-header.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/mookie-header/mookie-header.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"navbar navbar-sticky nav-down\">\n  <div id=\"logo\" href=\"/home\">\n    <a href=\"/home\">\n      <img src=\"assets/imgs/toplogo.svg\" alt=\"App Loading\">\n    </a>\n  </div>\n  <nav class=\"main-navigation text-center\">\n    <ul class=\"menu\">\n      <li>\n        <a href=\"/home\">\n          <span>Home</span>\n        </a>\n      </li>\n      <li>\n        <a href=\"/menu\">\n          <span>menu</span>\n        </a>\n      </li>\n      <li>\n        <a href=\"/thesecret\">\n          <span>the secret</span>\n        </a>\n      </li>\n      <li>\n        <a href=\"/coterie\">\n          <span>coterie est.2017</span>\n        </a>\n      </li>\n      <li>\n        <a href=\"/about\">\n          <span>about us</span>\n        </a>\n      </li>\n      <li ng-show=\"!mookie.loggedIn\">\n        <a href=\"/register\">\n          Sign In/Up\n        </a>\n      </li>\n    </ul>\n  </nav>\n  <div class=\"toolbar\">\n    <div class=\"inner\">\n      <a href=\"\" class=\"mobile-menu-toggle mookieIcon\">\n        <i class=\"fas fa-bars fa-xs fa-fw menu\"></i>\n        <i class=\"fas fa-times fa-xs fa-fw cross\"></i>\n      </a>\n      <a href=\"/account\" class=\"mookieIcon\" ng-show=\"mookie.loggedIn\">\n        <i class=\"fas fa-user fa-xs fa-fw\"></i>\n      </a>\n      <a href=\"/shopping-cart\" class=\"mookieIcon\" ng-show=\"mookie.cartItemCount > 0\">\n        <i class=\"fas fa-shopping-cart fa-xs fa-fw\"></i>\n        <span class=\"shop-count\">{{mookie.cartItemCount}}</span>\n      </a>\n    </div>\n  </div>\n</header>"

/***/ }),

/***/ "./src/app/components/mookie-header/mookie-header.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/mookie-header/mookie-header.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\n  /* border-bottom: 1px solid #CCCCCC;\r\n\tborder-bottom-width: 1px;\r\n\tborder-bottom-style: solid;\r\n\tborder-bottom-color: rgb(204, 204, 204); */\n  position: relative;\n  width: 100%;\n  max-height: 80px;\n  min-height: 80px;\n  background-color: #fff;\n  padding-left: 5px;\n  top: 0;\n  left: 0; }\n  .navbar #logo {\n    position: absolute;\n    margin-left: auto;\n    margin-right: auto;\n    left: 0;\n    right: 0;\n    width: 139px; }\n  @media screen and (max-width: 400px) {\n    .navbar #logo {\n      position: relative;\n      float: left; } }\n  .navbar .toolbar {\n    color: black;\n    position: absolute;\n    font-size: 36px;\n    right: 5px;\n    bottom: 0px;\n    /* height: 80px; */\n    width: auto;\n    display: flex;\n    align-items: flex-end; }\n  .navbar.navbar-sticky + * {\n  margin-top: 100px; }\n  .main-navigation {\n  display: block;\n  z-index: 10;\n  position: fixed;\n  width: 100%;\n  height: calc(100% - 80px);\n  top: 80px;\n  left: 0;\n  background-color: #ffffff;\n  padding: 0;\n  overflow-y: auto;\n  visibility: hidden;\n  opacity: 0;\n  transition: visibility 0.3s, opacity 0.3s; }\n  .main-navigation > .menu {\n  display: none;\n  color: black;\n  list-style: none;\n  margin: 0;\n  padding: 20px 0; }\n  .main-navigation > .menu > li {\n  display: block; }\n  .main-navigation > .menu li > a {\n  display: block;\n  color: #606060;\n  font-size: 14px;\n  font-weight: 800;\n  text-transform: uppercase;\n  text-decoration: none; }\n  .main-navigation > .menu > li > a {\n  line-height: 1.5;\n  padding: 12px 15px; }\n  .main-navigation.open {\n  visibility: visible;\n  opacity: 1; }\n  .main-navigation.open > .menu {\n  display: block;\n  -webkit-animation: slideUpLong 0.5s;\n  animation: slideUpLong 0.5s; }\n  a.mobile-menu-toggle {\n  display: inline-flex;\n  color: #333333; }\n  a.mobile-menu-toggle.active > i {\n  opacity: 0;\n  -webkit-transform: translateY(-20px) scale(0.7);\n  transform: translateY(-20px) scale(0.7);\n  transition: opacity 0.15s, -webkit-transform 0.3s;\n  transition: transform 0.3s, opacity 0.15s;\n  transition: transform 0.3s, opacity 0.15s, -webkit-transform 0.3s; }\n  a.mobile-menu-toggle.active .menu {\n  display: none;\n  color: black; }\n  a.mobile-menu-toggle.active .cross {\n  color: black;\n  display: inline-flex; }\n  a.mobile-menu-toggle .cross {\n  display: none; }\n  a.mobile-menu-toggle > i {\n  position: relative;\n  display: inline-block;\n  font-style: normal;\n  opacity: 1;\n  -webkit-transform: translateY(0) scale(1);\n  transform: translateY(0) scale(1);\n  transition: opacity 0.15s, -webkit-transform 0.3s;\n  transition: transform 0.3s, opacity 0.15s;\n  transition: transform 0.3s, opacity 0.15s, -webkit-transform 0.3s; }\n  .mobile-menu-toggle.active > i {\n  opacity: 0;\n  -webkit-transform: translateY(-20px) scale(0.7);\n  transform: translateY(-20px) scale(0.7);\n  transition: opacity 0.15s, -webkit-transform 0.3s;\n  transition: transform 0.3s, opacity 0.15s;\n  transition: transform 0.3s, opacity 0.15s, -webkit-transform 0.3s; }\n  @media screen and (max-width: 1070px) {\n  a.mobile-menu-toggle {\n    display: inline-flex;\n    vertical-align: text-top; } }\n  .mookieIcon {\n  color: #333333;\n  -webkit-text-decoration-line: none;\n          text-decoration-line: none;\n  display: inline-flex;\n  vertical-align: text-top;\n  -webkit-animation: slideUpLong 0.5s;\n  animation: slideUpLong 0.5s; }\n  .mookieIcon:hover {\n  color: #333333; }\n"

/***/ }),

/***/ "./src/app/components/mookie-header/mookie-header.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/mookie-header/mookie-header.component.ts ***!
  \*********************************************************************/
/*! exports provided: MookieHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MookieHeaderComponent", function() { return MookieHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MookieHeaderComponent = /** @class */ (function () {
    function MookieHeaderComponent() {
    }
    MookieHeaderComponent.prototype.ngOnInit = function () {
    };
    MookieHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mookie-header',
            template: __webpack_require__(/*! ./mookie-header.component.html */ "./src/app/components/mookie-header/mookie-header.component.html"),
            styles: [__webpack_require__(/*! ./mookie-header.component.scss */ "./src/app/components/mookie-header/mookie-header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MookieHeaderComponent);
    return MookieHeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/mookie-home/mookie-home.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/mookie-home/mookie-home.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  mookie-home works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/mookie-home/mookie-home.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/mookie-home/mookie-home.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/mookie-home/mookie-home.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/mookie-home/mookie-home.component.ts ***!
  \*****************************************************************/
/*! exports provided: MookieHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MookieHomeComponent", function() { return MookieHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MookieHomeComponent = /** @class */ (function () {
    function MookieHomeComponent() {
    }
    MookieHomeComponent.prototype.ngOnInit = function () {
    };
    MookieHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mookie-home',
            template: __webpack_require__(/*! ./mookie-home.component.html */ "./src/app/components/mookie-home/mookie-home.component.html"),
            styles: [__webpack_require__(/*! ./mookie-home.component.scss */ "./src/app/components/mookie-home/mookie-home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MookieHomeComponent);
    return MookieHomeComponent;
}());



/***/ }),

/***/ "./src/app/components/mookie-pagenotfound/mookie-pagenotfound.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/mookie-pagenotfound/mookie-pagenotfound.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  mookie-pagenotfound works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/mookie-pagenotfound/mookie-pagenotfound.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/components/mookie-pagenotfound/mookie-pagenotfound.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/mookie-pagenotfound/mookie-pagenotfound.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/mookie-pagenotfound/mookie-pagenotfound.component.ts ***!
  \*********************************************************************************/
/*! exports provided: MookiePagenotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MookiePagenotfoundComponent", function() { return MookiePagenotfoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MookiePagenotfoundComponent = /** @class */ (function () {
    function MookiePagenotfoundComponent() {
    }
    MookiePagenotfoundComponent.prototype.ngOnInit = function () {
    };
    MookiePagenotfoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mookie-pagenotfound',
            template: __webpack_require__(/*! ./mookie-pagenotfound.component.html */ "./src/app/components/mookie-pagenotfound/mookie-pagenotfound.component.html"),
            styles: [__webpack_require__(/*! ./mookie-pagenotfound.component.scss */ "./src/app/components/mookie-pagenotfound/mookie-pagenotfound.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MookiePagenotfoundComponent);
    return MookiePagenotfoundComponent;
}());



/***/ }),

/***/ "./src/app/components/mookie-register/mookie-register.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/mookie-register/mookie-register.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  mookie-register works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/mookie-register/mookie-register.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/mookie-register/mookie-register.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/mookie-register/mookie-register.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/mookie-register/mookie-register.component.ts ***!
  \*************************************************************************/
/*! exports provided: MookieRegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MookieRegisterComponent", function() { return MookieRegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MookieRegisterComponent = /** @class */ (function () {
    function MookieRegisterComponent() {
    }
    MookieRegisterComponent.prototype.ngOnInit = function () {
    };
    MookieRegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mookie-register',
            template: __webpack_require__(/*! ./mookie-register.component.html */ "./src/app/components/mookie-register/mookie-register.component.html"),
            styles: [__webpack_require__(/*! ./mookie-register.component.scss */ "./src/app/components/mookie-register/mookie-register.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MookieRegisterComponent);
    return MookieRegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/mookie-social/mookie-social.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/mookie-social/mookie-social.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container socialMedia\">\n  <div class=\"text-center\">\n    <p>Check out our instagram and Twitter Feeds</p>\n    <a href=\"https://instagram.com/_mookie_dough\" class=\"secretsocial\">\n      <i class=\"fab fa-instagram\"></i>\n    </a>\n    <a href=\"https://twitter.com/_Mookie_Dough\" class=\"secretsocial\">\n      <i class=\"fab fa-twitter\"></i>\n    </a>\n  </div>\n\n  <!-- <insta style=\"width: 100%; border: 0; display:block;\"></insta> -->\n\n  <a class=\"twitter-timeline\" href=\"https://twitter.com/_Mookie_Dough?ref_src=twsrc%5Etfw\">Tweets by _Mookie_Dough</a>\n  <script async src=\"https://platform.twitter.com/widgets.js\" charset=\"utf-8\"></script>\n</div>\n"

/***/ }),

/***/ "./src/app/components/mookie-social/mookie-social.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/mookie-social/mookie-social.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/mookie-social/mookie-social.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/mookie-social/mookie-social.component.ts ***!
  \*********************************************************************/
/*! exports provided: MookieSocialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MookieSocialComponent", function() { return MookieSocialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MookieSocialComponent = /** @class */ (function () {
    function MookieSocialComponent() {
    }
    MookieSocialComponent.prototype.ngOnInit = function () {
    };
    MookieSocialComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mookie-social',
            template: __webpack_require__(/*! ./mookie-social.component.html */ "./src/app/components/mookie-social/mookie-social.component.html"),
            styles: [__webpack_require__(/*! ./mookie-social.component.scss */ "./src/app/components/mookie-social/mookie-social.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MookieSocialComponent);
    return MookieSocialComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _window_ref_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./window-ref.service */ "./src/app/services/window-ref.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = /** @class */ (function () {
    function AuthService(http, windowRef) {
        this.http = http;
        this.windowRef = windowRef;
        this.authenticate = '/api/authenticate';
        this.login = function () {
            return this.http.post(this.authenticate).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('error')));
        };
        this.isLoggedIn = function () {
            // Check if user is logged in
            // return 
            if (this.getToken()) {
                return true;
            }
            else
                return false;
        };
        this.socialMedia = function () {
            // setToken()
            // Set socialMedia function's previous uses to simply setToken
        };
        this.getUser = function () {
            if (this.isLoggedIn()) {
                return this.http.post('/api/me').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('error')));
            }
            else {
                return Promise.reject(new Error('No token provided')).then(function (res) { console.log(res); }, function (err) { console.log(err); });
            }
        };
        this.setToken = function (token) {
            var windowRef = this.windowRef.nativeWindow();
            if (token) {
                windowRef.localStorage.setItem('token', token);
            }
            else {
                windowRef.localStorage.removeItem('token');
            }
        };
        this.getToken = function () {
            var windowRef = this.windowRef.nativeWindow();
            return windowRef.localStorage.getItem('token');
        };
        this.logout = function () {
            this.setToken();
        };
        this.hasPermission = function (permission) {
            // 
            var windowRef = this.windowRef.nativeWindow();
        };
        // Schedule Service
        this.getOreringSchdule = function () {
            return this.http.post('/api/checkOrderingSchedule').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('error')));
        };
        // Subscription
        this.addSubscription = function (subData) {
            return this.http.post('/api/addSubscription', subData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('error')));
        };
        this.getSubscribers = function () {
            return this.http.get('/api/getSubscribers').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('error')));
        };
        // Contact Message
        this.addContactMessage = function (contactData) {
            return this.http.post('/api/addContactMessage', contactData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('error')));
        };
        this.getContactMessages = function () {
            return this.http.get('/api/getContactMessages').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('error')));
        };
        // Visitor
        this.checkVisitor = function (ipData) {
            var _this = this;
            return this.http.post('/api/checkVisitor', ipData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return _this.handleError(err); }));
        };
        // IP
        this.getIp = function (data) {
            return this.http.post('https://ipinfo.io/?format=jsonp/').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('error')));
        };
        this.getSiteVisitors = function () {
            return this.http.post('/api/getSiteVisitors').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('error')));
        };
    }
    AuthService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.log(error);
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something bad happened; please try again later.');
    };
    ;
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _window_ref_service__WEBPACK_IMPORTED_MODULE_4__["WindowRefService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/cart.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/cart.service.ts ***!
  \******************************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CartService = /** @class */ (function () {
    function CartService(http) {
        this.http = http;
        this.deleteCartProduct = function (productData) {
            return this.http.post('/api/deleteCartProduct', productData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('error')));
        };
        this.updateCart = function (cartData) {
            return this.http.post('/api/updateUserCart', cartData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('error')));
        };
        this.getCart = function (cartId) {
            return this.http.post('/api/getCart', cartId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('error')));
        };
        this.seedCart = function (cartData) {
            return this.http.post('/api/seedCart', cartData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('error')));
        };
        this.deleteCart = function (cartData) {
            return this.http.post('/api/deleteCart', cartData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('error')));
        };
        this.getAProduct = function () {
            return this.http.get('/api/getAProduct');
        };
        this.addCartToUser = function (userData) {
            return this.http.post('/api/addCartToUser', userData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('error')));
        };
        this.addItemToCart = function (productData) {
            return this.http.post('/api/addItemToCart', productData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('error')));
        };
        this.removeItemFromCart = function (item) {
            return this.http.post('/api/remove-cart-item', item).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('error')));
        };
        this.checkout = function (checkoutData) {
            return this.http.post('/api/cartCheckout', checkoutData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('error')));
        };
    }
    // Consolidate handle error into one servie?
    CartService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something bad happened; please try again later.');
    };
    ;
    CartService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CartService);
    return CartService;
}());



/***/ }),

/***/ "./src/app/services/product.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/product.service.ts ***!
  \*********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _window_ref_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./window-ref.service */ "./src/app/services/window-ref.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductService = /** @class */ (function () {
    function ProductService(http, windowRef) {
        this.http = http;
        this.windowRef = windowRef;
        this.seedProduct = function (productData) {
            return this.http.post('/api/seedProduct', productData);
        };
        this.updateProductQty = function (productData) {
            return this.http.post('/api/updateProductQty', productData);
        };
        this.deleteProduct = function (productData) {
            return this.http.post('/api/deleteProduct', productData);
        };
        this.getProduct = function (productId) {
            return this.http.get('/api/getProduct', productId);
        };
        this.getCatalogProducts = function () {
            return this.http.post('/api/getCatalogProducts');
        };
        this.getProductCategory = function (categoryData) {
            return this.http.post('/api/getProductCategory', categoryData);
        };
        this.addProductToCatalog = function (product) {
            return this.http.post('/api/addProductToCatalog', product);
        };
    }
    ProductService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.log(error);
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something bad happened; please try again later.');
    };
    ;
    ProductService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _window_ref_service__WEBPACK_IMPORTED_MODULE_3__["WindowRefService"]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/services/shared.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/shared.service.ts ***!
  \********************************************/
/*! exports provided: SharedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedService", function() { return SharedService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SharedService = /** @class */ (function () {
    function SharedService() {
        this.checkingSession = false;
        this.cart = {};
        this.cartItemCount = false;
        this.admin = false;
        this.products = {};
        this.loggedIn = false;
        this.deliveryLatLng = {};
        this.deliveryLocationChanged = false;
        this.deliveryLocation = null;
        this.numberOfSiteVisitors = 0;
        this.user = {};
        this.contactMes = {};
        this.updateSharedVar = function (varId, data) {
            switch (varId) {
                case "checkingSession": {
                    this.checkingSession = data;
                    break;
                }
                case "cart": {
                    this.cart = data;
                    break;
                }
                case "cartItemCount": {
                    this.cartItemCount = data;
                    break;
                }
                case "admin": {
                    this.admin = data;
                    break;
                }
                case "products": {
                    this.products = data;
                    break;
                }
                case "loggedIn": {
                    this.loggedIn = data;
                    break;
                }
                case "deliveryLatLng": {
                    this.deliveryLatLng = data;
                    break;
                }
                case "deliveryLocationChanged": {
                    this.deliveryLocationChanged = data;
                    break;
                }
                case "deliveryLocation": {
                    this.deliveryLocation = data;
                    break;
                }
                case "numberOfSiteVisitors": {
                    this.numberOfSiteVisitors = data;
                    break;
                }
                case "user": {
                    this.user = data;
                    break;
                }
                case "contactMes": {
                    this.contactMes = data;
                    break;
                }
                default: {
                    console.log(varId);
                    console.log(data);
                    // Telemetry for error
                }
            }
        };
        this.addMinUser = function (userEmail, username) {
            this.user.userEmail = userEmail;
            this.user.username = username;
        };
        this.getSharedVar = function (varId) {
            switch (varId) {
                case "checkingSession": {
                    return this.checkingSession;
                }
                case "cart": {
                    return this.cart;
                }
                case "cartItemCount": {
                    return this.cartItemCount;
                }
                case "admin": {
                    return this.admin;
                }
                case "products": {
                    return this.products;
                }
                case "loggedIn": {
                    return this.loggedIn;
                }
                case "deliveryLatLng": {
                    return this.deliveryLatLng;
                }
                case "deliveryLocationChanged": {
                    return this.deliverlyLocationChanged;
                }
                case "deliveryLocation": {
                    return this.deliveryLocation;
                }
                case "numberOfSiteVisitors": {
                    return this.numberOfSiteVisitors;
                }
                case "user": {
                    return this.user;
                }
                case "contactMes": {
                    return this.contactMes;
                }
                default: {
                    console.log(varId);
                    return Error('incorrect var');
                    // Telemetry for error
                }
            }
        };
    }
    SharedService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], SharedService);
    return SharedService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _window_ref_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./window-ref.service */ "./src/app/services/window-ref.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserService = /** @class */ (function () {
    function UserService(http, windowRef) {
        this.http = http;
        this.windowRef = windowRef;
        this.activateAccount = function (token) {
            return this.http.put('/api/activate' + token).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('error')));
        };
        this.registerMookie = function (regData) {
            return this.http.post('/api/registerMookie', regData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('error')));
        };
        this.facebookRegister = function (regData) {
            return this.http.post('/api/facebookRegister', regData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('error')));
        };
        this.getUsers = function () {
            return this.http.post('/api/getUsers').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('error')));
        };
        this.getUserId = function () {
            return this.http.get('/api/getUserId').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('error')));
        };
        this.getUser = function (userData) {
            return this.http.post('/api/getUser', userData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('error')));
        };
        this.removeCart = function (userData) {
            return this.http.post('/api/removeCart', userData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('error')));
        };
        this.getOldCarts = function (userData) {
            return this.http.post('/api/getOldCarts', userData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('error')));
        };
        // Register users in database
        this.create = function (regData) {
            return this.http.post('/api/users', regData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('error')));
        };
        this.register = function (regData) {
            return this.http.post('/api/register-user', regData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('error')));
        };
        // Check if username is available at registration
        this.checkUsername = function (regData) {
            return this.http.post('/api/checkusername', regData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('error')));
        };
        // Check if e-mail is available at registration
        this.checkEmail = function (regData) {
            return this.http.post('/api/checkemail', regData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('error')));
        };
        // Check credentials before re-sending activation link
        this.checkCredentials = function (loginData) {
            return this.http.post('/api/resend', loginData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('error')));
        };
        // Send new activation link to user
        this.resendLink = function (username) {
            return this.http.put('/api/resend', username).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('error')));
        };
        // Send user's username to e-mail
        this.sendUsername = function (userData) {
            return this.http.get('/api/resetusername/' + userData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('error')));
        };
        // Send password reset link to user's e-mail
        this.sendPassword = function (resetData) {
            return this.http.put('/api/resetpassword', resetData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('error')));
        };
        // Grab user's information from e-mail reset link
        this.resetUser = function (token) {
            return this.http.get('/api/resetpassword/' + token).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('error')));
        };
        // Save user's new password
        this.savePassword = function (regData) {
            return this.http.put('/api/savepassword', regData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('error')));
        };
        // Provide the user with a new token
        this.renewSession = function (username) {
            return this.http.get('/api/renewToken/' + username).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('error')));
        };
        // Get the current user's permission
        this.getPermission = function () {
            return this.http.get('/api/permission/').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('error')));
        };
    }
    UserService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.log(error);
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something bad happened; please try again later.');
    };
    ;
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _window_ref_service__WEBPACK_IMPORTED_MODULE_4__["WindowRefService"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/services/window-ref.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/window-ref.service.ts ***!
  \************************************************/
/*! exports provided: WindowRefService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowRefService", function() { return WindowRefService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

function _window() {
    return window;
}
var WindowRefService = /** @class */ (function () {
    function WindowRefService() {
    }
    Object.defineProperty(WindowRefService.prototype, "nativeWindow", {
        get: function () {
            return _window();
        },
        enumerable: true,
        configurable: true
    });
    WindowRefService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], WindowRefService);
    return WindowRefService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Dellarontay\Documents\GitHub\MookieDough\alamodeTest\Alamode\public\A6Frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map