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

/***/ "./src/app/admin.guard.ts":
/*!********************************!*\
  !*** ./src/app/admin.guard.ts ***!
  \********************************/
/*! exports provided: AdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGuard", function() { return AdminGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminGuard = /** @class */ (function () {
    function AdminGuard(userService) {
        this.userService = userService;
        // Check if user has correct permissions
        this.check = function () {
            var _this = this;
            return this.userService.getPermission().subscribe(function (data) {
                if (data.permission === 'admin') {
                    return true;
                }
                else {
                    _this.router.navigate(['/home']);
                    return false;
                }
            });
        };
    }
    AdminGuard.prototype.canActivate = function (next, state) {
        return this.check();
    };
    AdminGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], AdminGuard);
    return AdminGuard;
}());



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
/* harmony import */ var _components_mookie_menu_mookie_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/mookie-menu/mookie-menu.component */ "./src/app/components/mookie-menu/mookie-menu.component.ts");
/* harmony import */ var _components_mookie_about_mookie_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/mookie-about/mookie-about.component */ "./src/app/components/mookie-about/mookie-about.component.ts");
/* harmony import */ var _components_mookie_account_mookie_account_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/mookie-account/mookie-account.component */ "./src/app/components/mookie-account/mookie-account.component.ts");
/* harmony import */ var _components_mookie_cart_mookie_cart_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/mookie-cart/mookie-cart.component */ "./src/app/components/mookie-cart/mookie-cart.component.ts");
/* harmony import */ var _components_mookie_checkout_mookie_checkout_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/mookie-checkout/mookie-checkout.component */ "./src/app/components/mookie-checkout/mookie-checkout.component.ts");
/* harmony import */ var _components_mookie_orders_mookie_orders_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/mookie-orders/mookie-orders.component */ "./src/app/components/mookie-orders/mookie-orders.component.ts");
/* harmony import */ var _components_mookie_manage_mookie_manage_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/mookie-manage/mookie-manage.component */ "./src/app/components/mookie-manage/mookie-manage.component.ts");
/* harmony import */ var _components_mookie_manage_users_mookie_manage_users_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/mookie-manage-users/mookie-manage-users.component */ "./src/app/components/mookie-manage-users/mookie-manage-users.component.ts");
/* harmony import */ var _components_mookie_manage_orders_mookie_manage_orders_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/mookie-manage-orders/mookie-manage-orders.component */ "./src/app/components/mookie-manage-orders/mookie-manage-orders.component.ts");
/* harmony import */ var _components_mookie_manage_inventory_mookie_manage_inventory_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/mookie-manage-inventory/mookie-manage-inventory.component */ "./src/app/components/mookie-manage-inventory/mookie-manage-inventory.component.ts");
/* harmony import */ var _components_mookie_manage_order_mookie_manage_order_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/mookie-manage-order/mookie-manage-order.component */ "./src/app/components/mookie-manage-order/mookie-manage-order.component.ts");
/* harmony import */ var _components_mookie_facebook_mookie_facebook_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/mookie-facebook/mookie-facebook.component */ "./src/app/components/mookie-facebook/mookie-facebook.component.ts");
/* harmony import */ var _components_mookie_google_mookie_google_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/mookie-google/mookie-google.component */ "./src/app/components/mookie-google/mookie-google.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _admin_guard__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./admin.guard */ "./src/app/admin.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _components_mookie_home_mookie_home_component__WEBPACK_IMPORTED_MODULE_2__["MookieHomeComponent"] },
    { path: 'menu', component: _components_mookie_menu_mookie_menu_component__WEBPACK_IMPORTED_MODULE_6__["MookieMenuComponent"] },
    { path: 'about', component: _components_mookie_about_mookie_about_component__WEBPACK_IMPORTED_MODULE_7__["MookieAboutComponent"] },
    { path: 'thesecret', component: _components_mookie_social_mookie_social_component__WEBPACK_IMPORTED_MODULE_4__["MookieSocialComponent"] },
    { path: 'register', component: _components_mookie_register_mookie_register_component__WEBPACK_IMPORTED_MODULE_5__["MookieRegisterComponent"] },
    { path: 'account', component: _components_mookie_account_mookie_account_component__WEBPACK_IMPORTED_MODULE_8__["MookieAccountComponent"], canLoad: [_auth_guard__WEBPACK_IMPORTED_MODULE_19__["AuthGuard"]] },
    { path: 'shopping-cart', component: _components_mookie_cart_mookie_cart_component__WEBPACK_IMPORTED_MODULE_9__["MookieCartComponent"], canLoad: [_auth_guard__WEBPACK_IMPORTED_MODULE_19__["AuthGuard"]] },
    { path: 'ontheway', component: _components_mookie_checkout_mookie_checkout_component__WEBPACK_IMPORTED_MODULE_10__["MookieCheckoutComponent"], canLoad: [_auth_guard__WEBPACK_IMPORTED_MODULE_19__["AuthGuard"]] },
    { path: 'orders/:orderId', component: _components_mookie_orders_mookie_orders_component__WEBPACK_IMPORTED_MODULE_11__["MookieOrdersComponent"], canLoad: [_auth_guard__WEBPACK_IMPORTED_MODULE_19__["AuthGuard"]] },
    { path: 'facebook/:token', component: _components_mookie_facebook_mookie_facebook_component__WEBPACK_IMPORTED_MODULE_17__["MookieFacebookComponent"] },
    { path: 'facebook/error', component: _components_mookie_facebook_mookie_facebook_component__WEBPACK_IMPORTED_MODULE_17__["MookieFacebookComponent"] },
    { path: 'google/:token', component: _components_mookie_google_mookie_google_component__WEBPACK_IMPORTED_MODULE_18__["MookieGoogleComponent"] },
    { path: 'google/error', component: _components_mookie_google_mookie_google_component__WEBPACK_IMPORTED_MODULE_18__["MookieGoogleComponent"] },
    {
        path: 'management', component: _components_mookie_manage_mookie_manage_component__WEBPACK_IMPORTED_MODULE_12__["MookieManageComponent"], canLoad: [_admin_guard__WEBPACK_IMPORTED_MODULE_20__["AdminGuard"]],
        children: [{
                path: 'users',
                component: _components_mookie_manage_users_mookie_manage_users_component__WEBPACK_IMPORTED_MODULE_13__["MookieManageUsersComponent"],
                canLoad: [_admin_guard__WEBPACK_IMPORTED_MODULE_20__["AdminGuard"]]
            },
            {
                path: 'currentorders',
                component: _components_mookie_manage_orders_mookie_manage_orders_component__WEBPACK_IMPORTED_MODULE_14__["MookieManageOrdersComponent"],
                canLoad: [_admin_guard__WEBPACK_IMPORTED_MODULE_20__["AdminGuard"]],
                children: [
                    {
                        path: 'order/:orderId',
                        component: _components_mookie_manage_order_mookie_manage_order_component__WEBPACK_IMPORTED_MODULE_16__["MookieManageOrderComponent"],
                        canLoad: [_admin_guard__WEBPACK_IMPORTED_MODULE_20__["AdminGuard"]]
                    }
                ]
            },
            {
                path: 'inventory',
                component: _components_mookie_manage_inventory_mookie_manage_inventory_component__WEBPACK_IMPORTED_MODULE_15__["MookieManageInventoryComponent"],
                canLoad: [_admin_guard__WEBPACK_IMPORTED_MODULE_20__["AdminGuard"]]
            }
        ]
    },
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

module.exports = "<!-- <img src=\"assets/3dMocha.png\"/> -->\r\n\r\n<body>\r\n\r\n  <!-- Mookie Header -->\r\n  <app-mookie-header *ngIf=\"showBody\"></app-mookie-header>\r\n\r\n  <!-- Main Angular view where routes will be rendered-->\r\n  <!-- <div class=\"main-view\" ng-show=\"main.loadme\" ng-view></div> -->\r\n  <router-outlet *ngIf=\"showBody\" class=\"animated fadeIn fadeOut\"></router-outlet>\r\n\r\n  <!-- Mookie footer -->\r\n  <app-mookie-footer *ngIf=\"showBody\"></app-mookie-footer>\r\n\r\n  <app-mookie-preloader class=\"full\" *ngIf=\"!showBody\"></app-mookie-preloader>\r\n\r\n  <!-- Stripe elements  -->\r\n  <script src=\"https://js.stripe.com/v3/\"></script>\r\n  <!-- <script src=\"../mookiedoughfrontend/js/scripts.js\"></script> -->\r\n</body>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
/* harmony import */ var _services_inventory_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/inventory.service */ "./src/app/services/inventory.service.ts");
/* harmony import */ var _services_window_ref_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/window-ref.service */ "./src/app/services/window-ref.service.ts");
/* harmony import */ var _components_mookie_header_mookie_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/mookie-header/mookie-header.component */ "./src/app/components/mookie-header/mookie-header.component.ts");
/* harmony import */ var _services_mookie_emit_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/mookie-emit.service */ "./src/app/services/mookie-emit.service.ts");
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
    function AppComponent(authService, router, cartService, shared, userService, productService, inventoryService, windowRef, mookieEmit) {
        this.authService = authService;
        this.router = router;
        this.cartService = cartService;
        this.shared = shared;
        this.userService = userService;
        this.productService = productService;
        this.inventoryService = inventoryService;
        this.windowRef = windowRef;
        this.mookieEmit = mookieEmit;
        this.title = 'Mookie Dough';
        // Item Name map
        this.itemNameMap = new Map();
        this.showBody = false;
        this.checkUser$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["interval"])(3000);
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
                console.log(data);
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
        // updateCart
        this.updateCart = function (event) {
            console.log(event);
            this.headerComponent.cartItemCount = event;
        };
        // Adds a email subscription to be added for our newsletters and special announcements
        this.addSubscription = function (subEmail) {
            var subData = { subEmail: subEmail };
            this.authService.addSubscription(subData).subscribe(function (data) {
                // Add time out and subscriptions message
                // TODO
            });
        };
        //Used to reset contact information form after information is put in
        this.addContactMessage = function (contactData) {
            var _this = this;
            this.authService.addContactMessage(contactData).subscribe(function (data) {
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
            this.productService.seedProduct(productData).subscribe(function (data) {
                if (data.success) {
                    // Telemetry
                    // TODO
                }
            });
        };
        // Run to check the database and see if the products are currently there
        this.resetProducts = function () {
            // loadme?
            this.productService.getCatalogProducts().subscribe(function (data) {
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
                this.productService.getCatalogProducts().subscribe(function (data) {
                    _this.shared.updateSharedVar('products', data.catalogProducts);
                    _this.inventoryService.getInventory().subscribe(function (data) {
                        console.log(data);
                        if (data.success) {
                            var inventory = data.inventory;
                            var totals = inventory.totals;
                            var totalMap = new Map();
                            totals.forEach(function (total) {
                                totalMap.set(total.itemName, total.itemQtyTtoal);
                            });
                            // callback(userProducts);
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
            this.authService.getSubscribers().subscribe(function (data) {
                if (data.success) {
                    return callback(data.subscribers);
                }
            });
        };
        // Get Contact Messages for Management
        this.getContactMessages = function (callback) {
            this.authService.getContactMessages().subscribe(function (data) {
                if (data.success) {
                    return callback(data.contactMessages);
                }
            });
        };
        // Get The User's current cart
        this.getCurrentCart = function (callback) {
            var _this = this;
            var userData = this.shared.getSharedVar('user');
            this.cartService.getCart({ cartId: userData.user.cart }).subscribe(function (data) {
                console.log(data);
                if (data.success) {
                    var total_1 = 0;
                    var count_1 = 0;
                    data.cart.products.forEach(function (product) {
                        total_1 += product.price;
                        count_1++;
                    });
                    // this.headerComponent.cartItemCount = count;
                    // console.log(this.headerComponent.cartItemCount);
                    _this.shared.updateSharedVar('cartItemCount', count_1);
                    console.log(count_1);
                    _this.shared.updateSharedVar('cart', data.cart);
                    return callback(data.cart);
                }
                else {
                    if (!data.cart) {
                        console.log('no cart on user');
                    }
                }
            });
        };
        // Check if user's session has expired upon opening page for the first time
        //For all intents and purposes getemailAndUsername
        this.checkUserState = function (callback) {
            var _this = this;
            var userData = { userEmail: '', username: '', success: false };
            if (this.authService.isLoggedIn()) {
                this.authService.getUser().subscribe(function (data) {
                    userData.userEmail = data.email;
                    userData.username = data.username;
                    console.log(data);
                    _this.shared.updateSharedVar('loggedIn', true);
                    // this.shared.addMinUser(userData.userEmail, userData.username);
                    if (data.username === undefined) {
                        _this.authService.logout();
                        _this.shared.updateSharedVar('loggedIn', false);
                        _this.router.navigate(['/register'], { relativeTo: _this.route });
                        return callback({ success: false });
                    }
                    else {
                        _this.userService.getUser(userData).subscribe(function (retUser) {
                            var newUser;
                            _this.shared.updateSharedVar('user', retUser);
                            console.log(_this.shared.getSharedVar('user'));
                            if (retUser.success) {
                                newUser = retUser;
                                newUser.success = true;
                                _this.getCurrentCart(function (cart) {
                                    return callback(newUser);
                                });
                            }
                            else {
                                newUser.success = false;
                                return callback(newUser);
                            }
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
            var _this = this;
            this.checkUserState(function (userData) {
                _this.shared.updateSharedVar('checkingSession', true);
                if (userData.success) {
                    // Run interval ever 30000 milliseconds (30 seconds) 
                    _this.actualInterval = _this.checkUser$.subscribe(function (event) {
                        console.log('in subscribe');
                        var mWindow = _this.windowRef.nativeWindow;
                        var token = mWindow.localStorage.getItem('token');
                        if (token === null) {
                            // Cancel interval somehow
                            console.log('espcaing interval');
                            _this.actualInterval.unsubscribe();
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
                                _this.actualInterval.unsubscribe();
                                // Cancel interval
                            }
                            // this.shared.addMinUser(userData.userEmail, userData.username);
                        }
                    });
                    // loadme true
                }
                else {
                    _this.authService.logout();
                    _this.shared.updateSharedVar('loggedIn', false);
                    // this.router.navigate(['/register'], { relativeTo: this.route });
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
            this.authService.logout();
            this.shared.updateSharedVar('loggedIn', false);
            this.route.navigate(['/register']);
        };
    }
    ;
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mookieEmit.changeEmitted$.subscribe(function (data) {
            _this.headerComponent.cartItemCount = _this.shared.getSharedVar('cartItemCount');
        });
        this.mookieEmit.largeChangeEmitted$.subscribe(function (data) {
            _this.headerComponent.cartItemCount = _this.shared.getSharedVar('cartItemCount');
            _this.headerComponent.loggedIn = _this.shared.getSharedVar('loggedIn');
        });
        this.mookieEmit.sessionEmitted$.subscribe(function (data) {
            if (_this.shared.getSharedVar('checkingSession')) {
                // if(!this.actualInterval.closed) this.actualInterval.unsubscribe();
                _this.shared.updateSharedVar('checkingSession', false);
                _this.checkSession();
            }
            else {
                _this.checkSession();
            }
        });
        this.checkUser$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["interval"])(30000);
        this.showBody = false;
        this.checkIp();
        this.itemNameMap.set("og mookie", "og mookie");
        this.itemNameMap.set("og mookie's confetti party", "funfetti");
        this.itemNameMap.set("cookies n creme", "oreo");
        this.itemNameMap.set("aunty vicky's red velvet", "Red velvet");
        this.itemNameMap.set("dark chocolate mocha", "Dark chocolate");
        // try get session vars
        // update share
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]; })).subscribe(function (route) {
            //     // Will run code every time a route changes
            // console.log(route);
            if (!_this.shared.getSharedVar('checkingSession'))
                _this.checkSession();
            console.log(_this.shared.getSharedVar('checkingSession'));
            if (_this.authService.isLoggedIn()) {
                _this.authService.getUser().subscribe(function (data) {
                    console.log(data);
                    if (data.username === undefined) {
                        _this.shared.updateSharedVar('loggedIn', false);
                        _this.authService.logout();
                        _this.router.navigate(['/home']);
                        console.log('user logged out after username found to be undefined');
                    }
                    else {
                        _this.shared.updateSharedVar('loggedIn', true);
                        _this.userService.getPermission().subscribe(function (data) {
                            if (data.permission === 'amdin') {
                                _this.shared.updateSharedVar('admin', true);
                            }
                            else {
                                _this.shared.updateSharedVar('admin', false);
                            }
                        });
                    }
                });
            }
            setTimeout(function () {
                _this.showBody = true;
                // Display page from preloader in one and half seconds
            }, 1500);
            //         if ($location.hash() == '_=_') $location.hash(null); // Check if facebook hash is added to URL
        });
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        console.log(this.shared.getSharedVar('cartItemCount'));
        // this.headerComponent.cartItemCount = this.shared.getSharedVar('cartItemCount');
    };
    AppComponent.prototype.intercept = function (req, next) {
        this.currToken = this.authService.getToken();
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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_components_mookie_header_mookie_header_component__WEBPACK_IMPORTED_MODULE_11__["MookieHeaderComponent"]),
        __metadata("design:type", _components_mookie_header_mookie_header_component__WEBPACK_IMPORTED_MODULE_11__["MookieHeaderComponent"])
    ], AppComponent.prototype, "headerComponent", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"], _services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"], _services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"], _services_product_service__WEBPACK_IMPORTED_MODULE_8__["ProductService"], _services_inventory_service__WEBPACK_IMPORTED_MODULE_9__["InventoryService"], _services_window_ref_service__WEBPACK_IMPORTED_MODULE_10__["WindowRefService"], _services_mookie_emit_service__WEBPACK_IMPORTED_MODULE_12__["MookieEmitService"]])
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_mookie_menu_mookie_menu_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/mookie-menu/mookie-menu.component */ "./src/app/components/mookie-menu/mookie-menu.component.ts");
/* harmony import */ var _components_mookie_about_mookie_about_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/mookie-about/mookie-about.component */ "./src/app/components/mookie-about/mookie-about.component.ts");
/* harmony import */ var _components_mookie_checkout_mookie_checkout_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/mookie-checkout/mookie-checkout.component */ "./src/app/components/mookie-checkout/mookie-checkout.component.ts");
/* harmony import */ var _components_mookie_cart_mookie_cart_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/mookie-cart/mookie-cart.component */ "./src/app/components/mookie-cart/mookie-cart.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _components_mookie_preloader_mookie_preloader_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/mookie-preloader/mookie-preloader.component */ "./src/app/components/mookie-preloader/mookie-preloader.component.ts");
/* harmony import */ var _components_mookie_account_mookie_account_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/mookie-account/mookie-account.component */ "./src/app/components/mookie-account/mookie-account.component.ts");
/* harmony import */ var ngx_stripe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-stripe */ "./node_modules/ngx-stripe/modules/ngx-stripe.es5.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _components_mookie_orders_mookie_orders_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/mookie-orders/mookie-orders.component */ "./src/app/components/mookie-orders/mookie-orders.component.ts");
/* harmony import */ var _components_mookie_manage_mookie_manage_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/mookie-manage/mookie-manage.component */ "./src/app/components/mookie-manage/mookie-manage.component.ts");
/* harmony import */ var _components_mookie_manage_users_mookie_manage_users_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/mookie-manage-users/mookie-manage-users.component */ "./src/app/components/mookie-manage-users/mookie-manage-users.component.ts");
/* harmony import */ var _components_mookie_manage_orders_mookie_manage_orders_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/mookie-manage-orders/mookie-manage-orders.component */ "./src/app/components/mookie-manage-orders/mookie-manage-orders.component.ts");
/* harmony import */ var _components_mookie_manage_inventory_mookie_manage_inventory_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/mookie-manage-inventory/mookie-manage-inventory.component */ "./src/app/components/mookie-manage-inventory/mookie-manage-inventory.component.ts");
/* harmony import */ var _components_mookie_manage_order_mookie_manage_order_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/mookie-manage-order/mookie-manage-order.component */ "./src/app/components/mookie-manage-order/mookie-manage-order.component.ts");
/* harmony import */ var _components_mookie_modal_mookie_modal_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/mookie-modal/mookie-modal.component */ "./src/app/components/mookie-modal/mookie-modal.component.ts");
/* harmony import */ var _components_mookie_facebook_mookie_facebook_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/mookie-facebook/mookie-facebook.component */ "./src/app/components/mookie-facebook/mookie-facebook.component.ts");
/* harmony import */ var _components_mookie_google_mookie_google_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/mookie-google/mookie-google.component */ "./src/app/components/mookie-google/mookie-google.component.ts");
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
                _components_mookie_register_mookie_register_component__WEBPACK_IMPORTED_MODULE_11__["MookieRegisterComponent"],
                _components_mookie_menu_mookie_menu_component__WEBPACK_IMPORTED_MODULE_13__["MookieMenuComponent"],
                _components_mookie_about_mookie_about_component__WEBPACK_IMPORTED_MODULE_14__["MookieAboutComponent"],
                _components_mookie_checkout_mookie_checkout_component__WEBPACK_IMPORTED_MODULE_15__["MookieCheckoutComponent"],
                _components_mookie_cart_mookie_cart_component__WEBPACK_IMPORTED_MODULE_16__["MookieCartComponent"],
                _components_mookie_preloader_mookie_preloader_component__WEBPACK_IMPORTED_MODULE_18__["MookiePreloaderComponent"],
                _components_mookie_account_mookie_account_component__WEBPACK_IMPORTED_MODULE_19__["MookieAccountComponent"],
                _components_mookie_orders_mookie_orders_component__WEBPACK_IMPORTED_MODULE_22__["MookieOrdersComponent"],
                _components_mookie_manage_mookie_manage_component__WEBPACK_IMPORTED_MODULE_23__["MookieManageComponent"],
                _components_mookie_manage_users_mookie_manage_users_component__WEBPACK_IMPORTED_MODULE_24__["MookieManageUsersComponent"],
                _components_mookie_manage_orders_mookie_manage_orders_component__WEBPACK_IMPORTED_MODULE_25__["MookieManageOrdersComponent"],
                _components_mookie_manage_inventory_mookie_manage_inventory_component__WEBPACK_IMPORTED_MODULE_26__["MookieManageInventoryComponent"],
                _components_mookie_manage_order_mookie_manage_order_component__WEBPACK_IMPORTED_MODULE_27__["MookieManageOrderComponent"],
                _components_mookie_modal_mookie_modal_component__WEBPACK_IMPORTED_MODULE_28__["MookieModalComponent"],
                _components_mookie_facebook_mookie_facebook_component__WEBPACK_IMPORTED_MODULE_29__["MookieFacebookComponent"],
                _components_mookie_google_mookie_google_component__WEBPACK_IMPORTED_MODULE_30__["MookieGoogleComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_21__["AgmCoreModule"].forRoot({
                    libraries: ["places"],
                    apiKey: "AIzaSyDIK5nijNemroAnlHUxH6iElr3HVBtniH4"
                }),
                ngx_stripe__WEBPACK_IMPORTED_MODULE_20__["NgxStripeModule"].forRoot('pk_test_EPjnzpxnrgvUiGWsYrJjqN5t'),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__["NgbModule"].forRoot(),
            ],
            entryComponents: [
                _components_mookie_modal_mookie_modal_component__WEBPACK_IMPORTED_MODULE_28__["MookieModalComponent"]
            ], providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"], { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"], useClass: _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], multi: true }, _agm_core__WEBPACK_IMPORTED_MODULE_21__["GoogleMapsAPIWrapper"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router, userService) {
        this.authService = authService;
        this.router = router;
        this.userService = userService;
        // Check if user has correct permissions
        this.check = function () {
            return this.authService.isLoggedIn();
        };
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        return this.check();
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/components/mookie-about/mookie-about.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/mookie-about/mookie-about.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"aboutUs\">\r\n  <h1>\r\n    ABOUT US\r\n    <br>\r\n    <img src=\"https://image.ibb.co/nk616F/Layer_1_copy_21.png\" width=\"47\" height=\"11\" align=\"center\">\r\n  </h1>\r\n  <article>\r\n    <p class=\"aboutText\">\r\n      We are a team of first-generation students at Stanford University with a passion for creativity and good food. Half of our\r\n      team immigrated to the US at a young age, and all of our team’s members have histories of overcoming less-than ideal\r\n      odds, while demonstrating unmatchable hustle in all facets of life. From our deep involvement in our respective communities\r\n      to our individual passions for fashion, design, food, and entrepreneurship, we all aspire to make waves by not only\r\n      stretching the boundaries of what defines a modern food company, but also to contradict the common perception of what\r\n      is and isn’t possible irrespective of your given odds when you approach life with an energetic and creative spirit.\r\n\r\n      <br>\r\n      <br> Since being founded in 2017, Mookie Dough has been feeding the insatiable cookie dough cravings of our loyal fans.\r\n      What makes us so different? What makes us special? Why should you eat our cookie dough? The answer is simple. You love\r\n      our cookie dough and we want to make sure you can get it anytime you want. When Late-night is over and there isn't\r\n      a meal in sight take some Mookie Dough from your fridge and have a great night.\r\n    </p>\r\n  </article>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-6 col-md-4 col-lg-3 founderCol\">\r\n        <div class=\"founder\">\r\n          <img class=\"founderImg\" src=\"assets/imgs/bempah-opt.jpg\">\r\n        </div>\r\n        <h4 class=\"founderName\">Andrew Bempah</h4>\r\n        <span class=\"founderPosition\">Co-Founder, President</span>\r\n      </div>\r\n      <div class=\"col-sm-6 col-md-4 col-lg-3 founderCol\">\r\n        <div class=\"founder\">\r\n          <img class=\"founderImg\" src=\"assets/imgs/rontay.jpg\">\r\n        </div>\r\n        <h4 class=\"founderName\">Dellarontay Readus</h4>\r\n        <span class=\"founderPosition\">Co-Founder, Head of Technology and Software</span>\r\n      </div>\r\n      <div class=\"col-sm-6 col-md-4 col-lg-3 founderCol\">\r\n        <div class=\"founder\">\r\n          <img class=\"founderImg\" src=\"assets/imgs/olu.jpg\">\r\n        </div>\r\n        <h4 class=\"founderName\">Oluwaseyi Olaleye</h4>\r\n        <span class=\"founderPosition\">Co-Founder, Head Of Operations</span>\r\n      </div>\r\n      <div class=\"col-sm-6 col-md-4 col-lg-3 founderCol\">\r\n        <div class=\"founder\">\r\n          <img class=\"founderImg\" src=\"assets/imgs/akim.jpg\">\r\n        </div>\r\n        <h4 class=\"founderName\">Akim Richards</h4>\r\n        <span class=\"founderPosition\">Co Founder, Head of Strategy Implementation</span>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/mookie-about/mookie-about.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/mookie-about/mookie-about.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Exo+2:700\");\n* {\n  margin: 0 auto;\n  padding: 0; }\n.aboutUs {\n  background-color: #212121;\n  background-blend-mode: overlay;\n  background-position: center;\n  background-size: cover;\n  text-align: center; }\nh1 {\n  color: whitesmoke;\n  font-family: 'Exo 2', sans-serif;\n  font-size: 46px;\n  font-weight: 900;\n  text-transform: uppercase; }\n.aboutText {\n  max-width: 700px;\n  min-height: 200px;\n  margin-bottom: 10px;\n  padding: 0;\n  color: whitesmoke;\n  font-family: OpenSans;\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 22px; }\np {\n  margin: auto; }\n.founder {\n  width: 100%;\n  max-width: 380px;\n  margin: 0 auto 30px auto;\n  text-align: center; }\n.founderImg {\n  width: 100%; }\n.founderName {\n  font-size: 16px;\n  font-weight: normal;\n  margin-bottom: 6px;\n  color: white; }\n.founderPosition {\n  color: #999;\n  font-size: 14px;\n  font-weight: normal; }\n.founderCol {\n  margin-bottom: 10px; }\n"

/***/ }),

/***/ "./src/app/components/mookie-about/mookie-about.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/mookie-about/mookie-about.component.ts ***!
  \*******************************************************************/
/*! exports provided: MookieAboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MookieAboutComponent", function() { return MookieAboutComponent; });
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

var MookieAboutComponent = /** @class */ (function () {
    function MookieAboutComponent() {
    }
    MookieAboutComponent.prototype.ngOnInit = function () {
    };
    MookieAboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mookie-about',
            template: __webpack_require__(/*! ./mookie-about.component.html */ "./src/app/components/mookie-about/mookie-about.component.html"),
            styles: [__webpack_require__(/*! ./mookie-about.component.scss */ "./src/app/components/mookie-about/mookie-about.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MookieAboutComponent);
    return MookieAboutComponent;
}());



/***/ }),

/***/ "./src/app/components/mookie-account/mookie-account.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/mookie-account/mookie-account.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-wrapper\">\r\n  <!-- Content -->\r\n  <section class=\"container padding-top-3x\">\r\n    <h1 class=\"mobile-center\">Hey,\r\n      <span class=\"text-semibold\">{{username}}</span>\r\n    </h1>\r\n    <!-- <div class=\"row padding-top\">\r\n        <h1> Current Order Information</h1>\r\n      </div> -->\r\n    <div class=\"row padding-top\">\r\n      <div class=\"col-sm-9 padding-bottom-2x\">\r\n        <!-- Nav Tabs -->\r\n        <ul class=\"nav-tabs mobile-center\" role=\"tablist\">\r\n          <li>\r\n            <a role=\"tab\" data-toggle=\"tab\">\r\n              <!-- <i class=\"material-icons shopping_cart\"></i> -->\r\n              <i class=\"fas fa-shopping-cart fa-xs fa-fw\"></i>\r\n\r\n              Orders\r\n              <!-- Possible number of previous orders -->\r\n            </a>\r\n          </li>\r\n        </ul>\r\n        <!-- .nav-tabs -->\r\n\r\n        <!-- Tab Panes -->\r\n        <div class=\"tab-content\">\r\n\r\n          <div role=\"tabpanel\" class=\"tab-pane active in\" id=\"orders\">\r\n            <div class=\"table-responsive\">\r\n              <table>\r\n                <thead>\r\n                  <tr>\r\n                    <th>Order #</th>\r\n                    <th>Date Purchased</th>\r\n                    <th>Status</th>\r\n                    <th>Total</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngFor=\"let order of orderHistory\">\r\n                    <td>\r\n                        <a routerLink=\"/orders/{{order._id}}\">{{order.customerReceipt.receiptNumber}}</a>\r\n                    </td>\r\n                    <td>{{order.orderStartedOn | date:\"MM/dd/yyyy 'at' h:mma\"}}</td>\r\n                    <td>{{order.orderStatus}}</td>\r\n                    <td>{{order.customerReceipt.customerCart.total | currency}}</td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- .tab-content -->\r\n      </div>\r\n      <!-- .col-sm-8 -->\r\n\r\n      <!-- Sidebar -->\r\n      <div class=\"col-sm-3 padding-bottom-2x\">\r\n        <aside class=\"mobile-center\">\r\n          <!-- <h3>Your Mookie Dough points:</h3>\r\n            <h3><span class=\"text-semibold\">0</span> <span class=\"h5\">points</span></h3>\r\n            <p class=\"text-sm text-gray\">You can spend these points on our products</p> -->\r\n          <a routerLink=\"/home\" class=\"btn btn-default btn-ghost icon-left btn-block\">\r\n            <i class=\"material-icons arrow_back\"></i>\r\n            Go to Shop\r\n          </a>\r\n          <button type=\"submit\" class=\"btn btn-primary btn-block waves-effect waves-light space-top-none checkoutBtn\" (click)=\"logout()\">Sign Out</button>\r\n          <button *ngIf=\"admin\" type=\"submit\" class=\"btn btn-primary btn-block waves-effect waves-light space-top-none checkoutBtn\">\r\n            <a routerLink=\"/management\">Admin Portal</a>\r\n          </button>\r\n\r\n        </aside>\r\n      </div>\r\n      <!-- .col-sm-4 -->\r\n    </div>\r\n    <!-- .row -->\r\n  </section>\r\n  <!-- .container -->\r\n\r\n</div>\r\n<!-- .page-wrapper -->"

/***/ }),

/***/ "./src/app/components/mookie-account/mookie-account.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/mookie-account/mookie-account.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table-responsive {\n  overflow-x: auto;\n  min-height: 0.01%; }\n\n.checkoutBtn, .checkoutBtn:hover, .checkoutBtn:active, .checkoutBtn:focus {\n  background-color: #333333; }\n\n@media screen and (max-width: 767px) {\n  .table-responsive {\n    width: 100%;\n    margin-bottom: 18px;\n    overflow-y: hidden;\n    -ms-overflow-style: -ms-autohiding-scrollbar; }\n  .table-responsive > table {\n    margin-bottom: 0; }\n  .table-responsive > table > thead > tr > th, .table-responsive > table > thead > tr > td, .table-responsive > table > tbody > tr > th, .table-responsive > table > tbody > tr > td, .table-responsive > table > tfoot > tr > th, .table-responsive > table > tfoot > tr > td {\n    white-space: nowrap; }\n  .table-responsive > table {\n    border: 0; }\n  .table-responsive > table > thead > tr > th:first-child, .table-responsive > table > thead > tr > td:first-child, .table-responsive > table > tbody > tr > th:first-child, .table-responsive > table > tbody > tr > td:first-child, .table-responsive > table > tfoot > tr > th:first-child, .table-responsive > table > tfoot > tr > td:first-child {\n    border-left: 0; }\n  .table-responsive > table > thead > tr > th:last-child, .table-responsive > table > thead > tr > td:last-child, .table-responsive > table > tbody > tr > th:last-child, .table-responsive > table > tbody > tr > td:last-child, .table-responsive > table > tfoot > tr > th:last-child, .table-responsive > table > tfoot > tr > td:last-child {\n    border-right: 0; }\n  .table-responsive > table > tbody > tr:last-child > th, .table-responsive > table > tbody > tr:last-child > td, .table-responsive > table > tfoot > tr:last-child > th, .table-responsive > table > tfoot > tr:last-child > td {\n    border-bottom: 0; } }\n\n/* .tab-content {\r\n    padding-top: 36px;\r\n} */\n\n.tab-content > .tab-pane {\n  display: none; }\n\n.tab-content > .active {\n  display: block; }\n\n.nav-tabs {\n  margin-bottom: 0;\n  padding-left: 0;\n  list-style: none;\n  border: none;\n  border-bottom: 2px solid #ededed; }\n\n.nav-tabs > li {\n  position: relative;\n  display: inline-block;\n  margin-bottom: 0;\n  margin-bottom: -2px; }\n\n.nav-tabs > li > a {\n  position: relative;\n  z-index: 0;\n  display: block;\n  color: #999;\n  font-size: 14px;\n  text-decoration: none;\n  font-weight: normal;\n  text-transform: uppercase;\n  padding: 15px;\n  line-height: 1.5;\n  background-color: transparent;\n  border: none;\n  border-bottom: 2px solid transparent;\n  border-radius: 0;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  transition: all 0.3s; }\n\n.nav-tabs > li > a:hover, .nav-tabs > li > a:focus {\n  text-decoration: none;\n  outline: none; }\n\n.nav-tabs > li > a:hover {\n  color: #606060;\n  background: none; }\n\n.nav-tabs > li.active > a, .nav-tabs > li.active > a:hover, .nav-tabs > li.active > a:focus {\n  color: #606060;\n  background: none;\n  border: none;\n  cursor: default;\n  border-bottom: 2px solid #606060; }\n\ntable {\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: 24px; }\n\ntable > thead > tr > th, table > thead > tr > td, table > tbody > tr > th, table > tbody > tr > td, table > tfoot > tr > th, table > tfoot > tr > td {\n  padding: 15px;\n  line-height: 1.5;\n  vertical-align: top;\n  border-bottom: 1px solid #ededed; }\n\ntable > thead > tr > th, table > thead > tr > td {\n  border-bottom-width: 2px !important; }\n\ntable > thead > tr > th {\n  vertical-align: bottom;\n  border-bottom: 1px solid #ededed; }\n\ntable > caption + thead > tr:first-child > th, table > caption + thead > tr:first-child > td, table > colgroup + thead > tr:first-child > th, table > colgroup + thead > tr:first-child > td, table > thead:first-child > tr:first-child > th, table > thead:first-child > tr:first-child > td {\n  border-top: 0; }\n\ntable > tbody + tbody {\n  border-top: 2px solid #ededed; }\n"

/***/ }),

/***/ "./src/app/components/mookie-account/mookie-account.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/mookie-account/mookie-account.component.ts ***!
  \***********************************************************************/
/*! exports provided: MookieAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MookieAccountComponent", function() { return MookieAccountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/order.service */ "./src/app/services/order.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_mookie_emit_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/mookie-emit.service */ "./src/app/services/mookie-emit.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MookieAccountComponent = /** @class */ (function () {
    function MookieAccountComponent(shared, userService, orderService, authService, router, mookieEmit) {
        this.shared = shared;
        this.userService = userService;
        this.orderService = orderService;
        this.authService = authService;
        this.router = router;
        this.mookieEmit = mookieEmit;
        this.logout = function () {
            this.authService.logout();
            this.shared.updateSharedVar('loggedIn', false);
            this.shared.updateSharedVar('admin', false);
            this.shared.updateSharedVar('user', {});
            this.shared.updateSharedVar('cartItemCount', 0);
            this.mookieEmit.emitLargeChange();
            this.router.navigate(['/home']);
        };
    }
    MookieAccountComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.admin = false;
        var sessionVars = this.shared.getSharedVars();
        if (sessionVars.user.user.username)
            this.username = sessionVars.user.user.username;
        if (sessionVars.user.user.email)
            this.userEmail = sessionVars.user.user.email;
        var userData = { username: this.username, userEmail: this.userEmail };
        console.log(userData);
        this.userService.getUser(userData).subscribe(function (data) {
            if (data.success) {
                var getOrderData = { userId: data.user._id };
                if (data.user.permission === 'admin')
                    _this.admin = true;
                _this.orderService.getUserOrders(getOrderData).subscribe(function (orderData) {
                    if (orderData.success) {
                        _this.orderHistory = orderData.orders;
                    }
                    else {
                        // Couldn't get order history
                        // Display an error saying something is going wrong on this page and we're working on it
                    }
                });
            }
            else {
                console.log('Could not get user');
                // Couldn't get user redirect from page
                // this.authService.logout();
                // this.shared.updateSharedVar('loggedIn',false);
                // this.router.navigate(['/register']);
            }
        });
    };
    MookieAccountComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mookie-account',
            template: __webpack_require__(/*! ./mookie-account.component.html */ "./src/app/components/mookie-account/mookie-account.component.html"),
            styles: [__webpack_require__(/*! ./mookie-account.component.scss */ "./src/app/components/mookie-account/mookie-account.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_shared_service__WEBPACK_IMPORTED_MODULE_1__["SharedService"], _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _services_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _services_mookie_emit_service__WEBPACK_IMPORTED_MODULE_6__["MookieEmitService"]])
    ], MookieAccountComponent);
    return MookieAccountComponent;
}());



/***/ }),

/***/ "./src/app/components/mookie-cart/mookie-cart.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/mookie-cart/mookie-cart.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Page Wrapper -->\r\n<div class=\"page-wrapper\">\r\n\r\n  <!-- Container -->\r\n  <section class=\"container padding-top-3x padding-bottom\">\r\n\r\n    <h1 class=\"space-top-half\">Shopping Cart</h1>\r\n    <div class=\"row padding-top\">\r\n\r\n      <!-- Cart -->\r\n      <div class=\"col-sm-8 padding-bottom-2x\">\r\n        <p class=\"text-sm\">\r\n          <span class=\"text-gray\">Currently</span> {{cartItemCount || 0}} items\r\n          <span class=\"text-gray\"> in cart</span>\r\n        </p>\r\n        <div class=\"shopping-cart container\">\r\n\r\n          <div class=\"item row\" *ngFor=\"let cartItem of cartProducts;let index = index;\">\r\n            <a  class=\"item-thumb\">\r\n              <img (src)=\"cartItem.imagePath\" alt=\"Item\">\r\n            </a>\r\n            <div class=\"item-details\">\r\n              <h3 class=\"item-title\">{{cartItem.title}}</h3>\r\n              <h4 class=\"item-price\">{{cartItem.price}} x {{cartItem.qty}}</h4>\r\n              <h4 class=\"item-price\">{{cartItem.subtotalOnProduct}}</h4>\r\n\r\n              <div class=\"count-input\">\r\n                <a class=\"incr-btn\" data-action=\"decrease\"  (click)=\"removeItem(cartItem)\" *ngIf=\"cartItem.qty >=2\">-</a>\r\n                <input class=\"quantity\" type=\"text\" (value)=\"cartItem.qty\">\r\n                <a class=\"incr-btn\" data-action=\"increase\"  (click)=\"addItem(cartItem)\">+</a>\r\n              </div>\r\n            </div>\r\n            <a  class=\"item-remove\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Remove\" (click)=\"deleteItem(cartItem)\">\r\n              <i class=\"material-icons remove_shopping_cart\"></i>\r\n            </a>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- Coupon -->\r\n        <div class=\"\">\r\n          <p class=\"text-gray text-sm\">Have discount coupon?</p>\r\n          <form method=\"post\" class=\"row\">\r\n            <div class=\"col-md-8 col-sm-7\">\r\n              <div class=\"form-element\">\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Enter coupon\" required>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4 col-sm-5\">\r\n              <button type=\"submit\" class=\"btn btn-default btn-ghost btn-block space-top-none space-bottom\">Apply Coupon</button>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n      <!-- .col-sm-8 -->\r\n\r\n      <!-- Sidebar -->\r\n      <div class=\"col-md-3 col-md-offset-1 col-sm-4 padding-bottom-2x\">\r\n        <aside>\r\n          <h4 class=\"toolbar-title\">Cart subtotal:</h4>\r\n          <h4 class=\"amount\">${{subtotal}}</h4>\r\n          <h4 class=\"toolbar-title\">Sales Tax</h4>\r\n          <h4 class=\"amount\">${{tax}}</h4>\r\n          <h4 class=\"toolbar-title\">Cart Total</h4>\r\n          <h4 class=\"amount\">${{total}}</h4>\r\n\r\n\r\n\r\n          <a *ngIf=\"justCheckout\"  class=\"btn btn-primary btn-block waves-effect waves-light space-top-none checkoutBtn\"\r\n            (click)=\"justCheckout = false;\">Checkout</a>\r\n          <a *ngIf=\"cartChanged\"  class=\"btn btn-primary btn-block waves-effect waves-light space-top-none checkoutBtn\"\r\n            (click)=\"updateCart();\">Update Cart</a>\r\n          <div *ngIf=\"!justCheckout\">\r\n            <a routerLink=\"/ontheway\" class=\"btn btn-primary btn-block waves-effect waves-light space-top-none checkoutBtn\">Delivery</a>\r\n            <a  class=\"btn btn-primary btn-block waves-effect waves-light space-top-none checkoutBtn\">Pickup</a>\r\n            <!-- still have to go to /Checkout at some point -->\r\n          </div>\r\n          <!-- instead of going from shopping-car to checkout directly we want to make checkouthappen after the user defines their order type or otherwise -->\r\n        </aside>\r\n      </div>\r\n      <!-- .col-md-3.col-sm-4 -->\r\n    </div>\r\n    <!-- .row -->\r\n  </section>\r\n  <!-- .container -->\r\n</div>\r\n<!-- .page-wrapper -->"

/***/ }),

/***/ "./src/app/components/mookie-cart/mookie-cart.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/mookie-cart/mookie-cart.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".shopping-cart {\n  width: 100%; }\n\n.shopping-cart .item {\n  position: relative;\n  display: table;\n  width: 100%;\n  /* padding: 0 45px 30px 0; */\n  /* border-bottom: 2px solid #ededed; */\n  margin-bottom: 30px; }\n\n.shopping-cart .item .item-thumb, .shopping-cart .item .item-details {\n  display: table-cell;\n  vertical-align: top; }\n\n.shopping-cart .item .item-thumb {\n  width: 165px;\n  padding-right: 25px; }\n\n.shopping-cart .item .item-thumb > img {\n  width: 100%; }\n\n.shopping-cart .item .item-title {\n  font-size: 22px;\n  font-weight: normal;\n  margin-bottom: 12px; }\n\n.shopping-cart .item .item-title > a {\n  color: #606060;\n  text-decoration: none; }\n\n.shopping-cart .item .item-title > a:hover, .shopping-cart .item .item-title > a:focus {\n  color: #a6a6a6;\n  text-decoration: none; }\n\n.shopping-cart .item .item-price {\n  font-size: 18px;\n  color: #999;\n  font-weight: 500; }\n\n.shopping-cart .item .item-remove {\n  display: block;\n  position: absolute;\n  width: 36px;\n  height: 36px;\n  top: 0;\n  right: 0;\n  font-size: 20px;\n  color: #606060;\n  text-align: center;\n  text-decoration: none;\n  border: 2px solid #ededed;\n  border-radius: 4px; }\n\n.shopping-cart .item .item-remove > i {\n  line-height: 33px; }\n\n.shopping-cart .item .item-remove:hover {\n  color: #ef0568; }\n\n.shopping-cart .btn, .shopping-cart .back-btn, .shopping-cart .done-btn, .shopping-cart .search-btn {\n  margin-top: 0; }\n\nh3, .h3 {\n  font-size: 26px;\n  font-weight: 300;\n  font-style: normal;\n  text-transform: none; }\n\n@media screen and (max-width: 510px) {\n  .shopping-cart .item {\n    padding-bottom: 20px; }\n  .shopping-cart .item .item-thumb {\n    margin-bottom: 20px; }\n  .shopping-cart .item .item-details {\n    padding-top: 36px; }\n  /* .shopping-cart .item .item-thumb,\r\n      .shopping-cart .item .item-details {\r\n        display: block;\r\n      } */ }\n\n.checkoutBtn, .checkoutBtn:hover, .checkoutBtn:active, .checkoutBtn:focus {\n  background-color: #333333;\n  margin-bottom: 10px; }\n\n.checkoutBtn {\n  -webkit-animation: slideInRight 0.5s;\n  animation: slideInRight 0.5s; }\n\n.count-input {\n  position: relative;\n  width: 100px;\n  margin: 10px 0; }\n\n.count-input input {\n  width: 100%;\n  height: 36px;\n  border: 2px solid #ededed;\n  border-radius: 4px;\n  background: none;\n  text-align: center;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  -o-appearance: none;\n  appearance: none; }\n\n.count-input input:focus {\n  outline: none; }\n\n.count-input .incr-btn {\n  display: block;\n  position: absolute;\n  width: 36px;\n  height: 36px;\n  font-size: 18px;\n  color: #606060;\n  font-weight: 300;\n  text-align: center;\n  line-height: 33px;\n  text-decoration: none;\n  top: 0;\n  right: 0; }\n\n.count-input .incr-btn:first-child {\n  right: auto;\n  left: 0; }\n"

/***/ }),

/***/ "./src/app/components/mookie-cart/mookie-cart.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/mookie-cart/mookie-cart.component.ts ***!
  \*****************************************************************/
/*! exports provided: MookieCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MookieCartComponent", function() { return MookieCartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _services_mookie_emit_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/mookie-emit.service */ "./src/app/services/mookie-emit.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MookieCartComponent = /** @class */ (function () {
    // username, email
    function MookieCartComponent(cartService, shared, changeDetector, mookieEmit) {
        this.cartService = cartService;
        this.shared = shared;
        this.changeDetector = changeDetector;
        this.mookieEmit = mookieEmit;
        this.checkout = false;
        this.cartChanged = false;
        this.justCheckout = true;
        this.updateCart = function () {
            var _this = this;
            var cartData = { cartProducts: this.cartProducts, cartId: this.cartId };
            this.cartService.updateCart(cartData).subscribe(function (data) {
                console.log(data);
                if (data.success) {
                    _this.cartChanged = false;
                    console.log(_this.cartProducts);
                    _this.shared.updateSharedVar('cartItemCount', data.cart.products.length);
                    _this.mookieEmit.emitChange();
                }
                else {
                }
            });
        };
        //  // Add item to cartProducts on Frontend
        this.addItem = function (cartProduct) {
            cartProduct.qty++;
            this.cartChanged = true;
        };
        //  // Remove item from cartProducts on Frontend
        this.removeItem = function (cartProduct) {
            cartProduct.qty--;
            this.cartChanged = true;
        };
        //  // Delete Item on frontend and in database
        this.deleteItem = function (cartProduct) {
            var productData = { productId: cartProduct._id, cartId: this.cartId };
            this.cartProducts.splice(this.cartProduct.indexOf(cartProduct), 1);
            this.cartService.deleteCartProduct(productData).subscribe(function (data) {
                console.log(data);
                if (data.success) {
                }
                else {
                }
            });
        };
    }
    // constructor(private changeDetector: ChangeDetectorRef) {}
    // ngAfterViewChecked(){
    //   this.changeDetector.detectChanges();
    // }
    MookieCartComponent.prototype.ngOnInit = function () {
    };
    //  // Update cart in database when user changes cart on frontend
    MookieCartComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        console.log(this.justCheckout);
        var userCart = this.shared.getSharedVar('cart');
        // Create product map to get quantity of each product from array of products
        var productMap = new Map();
        userCart.products.forEach(function (element) {
            if (productMap.has(element._id)) {
                productMap.set(element._id, productMap.get(element._id) + 1);
            }
            else {
                productMap.set(element._id, 1);
            }
        });
        // >
        // Create array of products with quantities set to productMap vars
        var cartProducts = {};
        // productMap.keys
        // productMap.keys().forEach(element => {
        // });(key =>{
        // });
        // productMap.(el=>{
        // });
        var makeProducts = function () {
            return new Promise(function (resolve, reject) {
                var temp = [];
                var size = 0;
                productMap.forEach(function (v, k, m) {
                    for (var _i = 0, _a = userCart.products; _i < _a.length; _i++) {
                        var element = _a[_i];
                        if (element._id === k) {
                            element.qty = productMap.get(element._id);
                            element.subtotalOnProduct = element.qty * element.price;
                            temp.push(element);
                            break;
                        }
                    }
                    size++;
                    if (size >= productMap.size) {
                        resolve(temp);
                    }
                });
                // for (let key in productMap.keys()) {
                // }
            });
        };
        makeProducts().then(function (cartProducts) {
            console.log(cartProducts);
            _this.cartProducts = cartProducts;
        });
        // >
        this.cartItemCount = userCart.products.length;
        this.subtotal = userCart.subtotal;
        this.tax = userCart.tax;
        this.total = userCart.total;
        this.cartId = userCart._id;
        this.changeDetector.detectChanges();
    };
    MookieCartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mookie-cart',
            template: __webpack_require__(/*! ./mookie-cart.component.html */ "./src/app/components/mookie-cart/mookie-cart.component.html"),
            styles: [__webpack_require__(/*! ./mookie-cart.component.scss */ "./src/app/components/mookie-cart/mookie-cart.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"], _services_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _services_mookie_emit_service__WEBPACK_IMPORTED_MODULE_3__["MookieEmitService"]])
    ], MookieCartComponent);
    return MookieCartComponent;
}());

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


/***/ }),

/***/ "./src/app/components/mookie-checkout/mookie-checkout.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/mookie-checkout/mookie-checkout.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"way-header\">\r\n    <h3>Welcome to Mookie Dough Delivery</h3>\r\n  </div>\r\n  <!-- <input id=\"order-input\" class=\"order-input\"> -->\r\n\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12\">\r\n        <div class=\"form-group\">\r\n          <input placeholder=\"search for location\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\" type=\"text\" class=\"form-control\"\r\n            #search>\r\n        </div>\r\n        <agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" [scrollwheel]=\"false\" [zoom]=\"zoom\">\r\n          <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\">\r\n              <agm-info-window class=\"info-window\" [isOpen]=\"deliveryLocation\">{{deliveryLocation}}</agm-info-window>\r\n          </agm-marker>\r\n        </agm-map>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n  <!-- Order maps directive from angualr 1 -->\r\n  <!-- <order-maps id=\"g-map\" style=\"height:400px;width:100%;border: 2px solid black;\"></order-maps> -->\r\n  <div id=\"infowindow-content\">\r\n    <img src=\"\" width=\"16\" height=\"16\" id=\"place-icon\">\r\n    <span id=\"place-name\" class=\"title\"></span>\r\n    <br>\r\n    <span id=\"place-address\"></span>\r\n  </div>\r\n  <!-- Create a variable that will stand for location changed. Based on lcoation changing and the other variable stored with new location an update should be display for the user to fully checkout. Maybe bring checkout.css into here as well -->\r\n\r\n  <!-- Spinner for old receipt display -->\r\n\r\n  <!-- <div class=\"otw-spinner\" *ngIf=\"!deliveryLocationChanged\">\r\n      <i class=\"fas fa-spinner fa-spin fa-3x\"></i>\r\n      <div *ngIf=\"receipt\">Order Pending</div>\r\n  </div> -->\r\n  <!-- [ngClass]=\"{'inStock': catalogProduct.inStock == 'In Stock', 'notInStock': catalogProduct.inStock == 'Not In Stock'}\" -->\r\n  <!-- Mookie confirm -->\r\n  <div class=\"mookie-confirm\" [ngClass]=\"{'hidden':deliveryLocationChanged === false, 'shown':deliveryLocationChanged ===true}\">\r\n    <p class=\"mookie-confirm-message\">Delivery set to {{deliveryLocation}}</p>\r\n    <!-- maybe a fa spinner to show we're doing something. then -->\r\n    <!-- With delivery location in tow we can send email to user's account and  -->\r\n    <form method=\"post\" class=\"container padding-top-3x padding-bottom-2x\">\r\n\r\n      <h1 class=\"space-top-half text-center\">Checkout</h1>\r\n      <div class=\"row padding-top\">\r\n\r\n        <!-- add bitcoin as a payment method -->\r\n\r\n\r\n        <!-- Checkout Form -->\r\n        <div class=\"col-sm-6 col-md-8 col-md-offset-3 padding-bottom\">\r\n          <!-- .row -->\r\n          <div class=\"row\">\r\n            <p> Please use 4242-4242-4242-4242 for card number and any date or zip code during test experience</p>\r\n            <form class=\"card-body\">\r\n              <div class=\"group\">\r\n                <label>\r\n                  <input name=\"cardholder-name\" class=\"field is-empty\" placeholder=\"Name Jane Doe\" [(ngModel)]=\"checkoutData.name\" />\r\n                </label>\r\n                <label>\r\n                  <input name=\"cardholder-number\" class=\"field is-empty\" type=\"tel\" placeholder=\"Phone number (123) 456-7890\" [(ngModel)]=\"checkoutData.number\"\r\n                  />\r\n                </label>\r\n              </div>\r\n              <div class=\"group cardGroup\">\r\n                <label>\r\n                  <div id=\"card-element\" class=\"field is-empty stripeElement\" required></div>\r\n                </label>\r\n\r\n              </div>\r\n            </form>\r\n\r\n          </div>\r\n          <div class=\"row\" *ngIf=\"chargeSuccessful\">\r\n          </div>\r\n        </div>\r\n        <!-- .col-sm-8 -->\r\n\r\n        <!-- Sidebar -->\r\n        <div class=\"col-md-3 col-md-offset-1 col-sm-4 padding-bottom\">\r\n          <aside>\r\n            <h3>Cart subtotal:</h3>\r\n            <h4>${{cart.subtotal}}</h4>\r\n            <h3>Cart tax:</h3>\r\n            <h4>${{cart.tax}}</h4>\r\n            <h3>Cart total:</h3>\r\n            <h4>${{cart.total}}</h4>\r\n            <a routerLink=\"/shopping-cart\" class=\"btn btn-default btn-ghost icon-left btn-block\">\r\n              <i class=\"material-icons arrow_back\"></i>\r\n              Back To Cart\r\n            </a>\r\n            <!-- <button type=\"submit\" class=\"btn btn-primary btn-block waves-effect waves-light space-top-none\" ng-click=\"mookie.showStripeModal()\">Checkout</button> -->\r\n            <button *ngIf=\"deliveryLocation\" type=\"submit\" class=\"btn btn-primary btn-block waves-effect waves-light space-top-none checkoutBtn\" (click)=\"doCheckout()\">Checkout</button>\r\n            <label for=\"card-element\" class=\"checkoutMsg\">\r\n              <span>\r\n                <span>\r\n                  <p style=\"position:absolute\">\r\n                    {{checkoutMessage}}</p>\r\n                </span>\r\n              </span>\r\n            </label>\r\n\r\n          </aside>\r\n        </div>\r\n        <!-- .col-md-3.col-sm-4 -->\r\n      </div>\r\n      <!-- .row -->\r\n    </form>\r\n  </div>\r\n  <!--  -->\r\n\r\n  <!-- \r\n  <div class=\"receipt mookie-confirm\" ng-show=\"checkoutCtrl.receipt\">\r\n      <div class=\"receipt-header\">\r\n          <div class=\"receipt-header__top\">\r\n              <div class=\"receipt-header__logo\">\r\n              </div>\r\n              <div class=\"receipt-header__meta\">\r\n                  <span class=\"receipt-header__date\">{{checkoutCtrl.receipt.created | date:\"MM/dd/yyyy 'at' h:mma\"}}}</span>\r\n                  <span class=\"receipt-header__serial\">Receipt Number: #{{checkoutCtrl.receipt.receiptNumber}} </span>\r\n              </div>\r\n          </div>\r\n          <div class=\"receipt-header__greeting\">\r\n              <span class=\"receipt-header__name\">Hi, {{checkoutCtrl.receipt.customerName}}</span>\r\n              <span class=\"receipt-header__count\">You've purchased {{checkoutCtrl.receipt.customerCart.products.length}} items in our store.</span>\r\n              <span class=\"receipt-header__border\"></span>\r\n          </div>\r\n          <div class=\"receipt-header__spacing\"></div>\r\n      </div>\r\n\r\n      <section class=\"cart\">\r\n          <h2 class=\"cart__receipt-header\">Cart:</h2>\r\n          <ol class=\"list\">\r\n              <li class=\"list__item\" ng-repeat=\"product in checkoutCtrl.receipt.customerCart.products\">\r\n                  <span class=\"list__name\">{{product.title}}</span>\r\n                  <span class=\"list__price\">{{product.price}}</span>\r\n              </li>\r\n          </ol>\r\n          <hr class=\"cart__hr\" />\r\n          <div class=\"cart__total\">\r\n              <h3 class=\"cart__total-label\">Subtotal</h3>\r\n              <span class=\"cart__total-price\">{{checkoutCtrl.receipt.customerCart.subtotal}}</span>\r\n          </div>\r\n          <div class=\"cart__total\">\r\n              <h6 class=\"cart__total-label\">Sales Tax</h6>\r\n              <span class=\"cart__total-price\">{{checkoutCtrl.receipt.customerCart.tax}}</span>\r\n          </div>\r\n          <div class=\"cart__total\">\r\n              <h3 class=\"cart__total-label\">Total</h3>\r\n              <span class=\"cart__total-price\">{{checkoutCtrl.receipt.customerCart.total}}</span>\r\n          </div>\r\n      </section>\r\n  </div> -->\r\n</div>"

/***/ }),

/***/ "./src/app/components/mookie-checkout/mookie-checkout.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/mookie-checkout/mookie-checkout.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".order-input {\n  width: 600px;\n  height: 40px;\n  background-color: #333333;\n  /* position: relative;\r\n    left: -50%;\r\n    border: dotted red 1px; */\n  z-index: 9999;\n  margin-top: 40px;\n  padding: 10px;\n  color: white;\n  border: 0px;\n  -webkit-animation: slideUpLong 0.5s;\n  animation: slideUpLong 0.5s; }\n\n.hide-input {\n  display: none; }\n\n.way-header {\n  text-align: center;\n  vertical-align: center; }\n\n#infowindow-content .title {\n  font-weight: bold; }\n\n#infowindow-content {\n  display: none; }\n\n@-webkit-keyframes fadein {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n@keyframes fadein {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n@-webkit-keyframes fadeout {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0; } }\n\n@keyframes fadeout {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0; } }\n\n.otw-spinner {\n  padding-top: 20px;\n  width: 100%;\n  text-align: center;\n  vertical-align: center; }\n\n.mookie-confirm {\n  -webkit-animation: slideInUp 1s;\n  animation: slideInUp 1s;\n  -webkit-animation: fadein 1s;\n  animation: fadein 1s; }\n\n.mookie-confirm.ng-leave {\n  -webkit-animation: fadeout 1s;\n  animation: fadeout 1s; }\n\n.mookie-confirm-message {\n  background-color: #333333;\n  color: white; }\n\n#g-map #infowindow-content {\n  display: inline; }\n\n.order-input::-webkit-input-placeholder {\n  color: white; }\n\n.order-input:-ms-input-placeholder {\n  color: white; }\n\n.order-input::-ms-input-placeholder {\n  color: white; }\n\n.order-input::placeholder {\n  color: white; }\n\n.order-input::-moz-placeholder {\n  color: white; }\n\n.order-input:-ms-input-placeholder {\n  /* Internet Explorer 10-11 */\n  color: white; }\n\n.order-input::-ms-input-placeholder {\n  /* Microsoft Edge */\n  color: white; }\n\n@media screen and (max-width: 600px) {\n  .order-input {\n    width: 300px; } }\n\n.order-frame {\n  position: absolute;\n  left: 50%;\n  top: 15%; }\n\n.receipt {\n  /* background: #ff84a1; */\n  color: #3a3e59;\n  font-family: 'Raleway', Arial, sans-serif;\n  max-width: 400px;\n  margin: 5vh auto 0 auto;\n  transition: .3s;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2); }\n\n.receipt .hoverable {\n  transition: .3s;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2); }\n\n.receipt .hoverable:hover {\n  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3); }\n\n/* receipt header styles */\n\n.receipt-header {\n  width: 100%; }\n\n.receipt-header__top {\n  display: flex;\n  align-items: center;\n  background: white;\n  width: 100%;\n  border-radius: 4px 4px 0 0; }\n\n.receipt-header__meta {\n  position: relative;\n  width: 90%;\n  height: 100%;\n  margin-left: 15px;\n  line-height: 1.7rem;\n  opacity: .3; }\n\n.receipt-header__serial {\n  display: block; }\n\n.receipt-header__number {\n  position: absolute;\n  top: 15px / 2;\n  right: 0;\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n  opacity: .2; }\n\n.receipt-header__greeting {\n  clear: both; }\n\n/* // Greeting styles */\n\n.receipt-header__greeting {\n  position: relative;\n  background: white;\n  padding: 0 15px;\n  padding-left: 30px; }\n\n.receipt-header__name {\n  display: block;\n  font-weight: bold;\n  font-size: 1.3rem;\n  margin-bottom: 15px / 2; }\n\n.receipt-header__count {\n  opacity: .4;\n  font-size: 90%; }\n\n.receipt-header__border {\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 100%;\n  width: 3px;\n  background-color: #429fff; }\n\n.receipt-header__spacing {\n  display: block;\n  background: white;\n  width: 100%;\n  height: 22.5px; }\n\n/* // Cart styles */\n\n.cart {\n  background: white;\n  padding: 30px;\n  padding-top: 15px;\n  border-bottom: 2px dashed #333333;\n  border-radius: 0 0 5px 5px; }\n\n.cart__receipt-header {\n  margin-top: 0;\n  text-align: center; }\n\n.cart__hr {\n  border: none;\n  padding: 0;\n  margin: 0;\n  margin-bottom: 30px;\n  border-bottom: 3px solid #333333; }\n\n.list {\n  margin: 0;\n  padding: 0;\n  counter-reset: item-counter; }\n\n.list__item {\n  display: flex;\n  width: 100%;\n  padding-top: 30px;\n  padding-bottom: 30px;\n  border-bottom: 1px dashed rgba(0, 0, 0, 0.1); }\n\n.list__item:last-child {\n  border-bottom: none; }\n\n.list__item:before {\n  content: counter(item-counter);\n  counter-increment: item-counter;\n  margin-right: 15px; }\n\n.list__name {\n  flex: 1;\n  align-self: flex-start; }\n\n.list__price {\n  align-self: flex-end;\n  text-align: right;\n  font-weight: bold; }\n\n.cart__total {\n  display: flex;\n  width: 100%; }\n\n.cart__total-label {\n  margin: 0;\n  flex: 1;\n  text-transform: uppercase; }\n\n.cart__total-price {\n  align-self: flex-end;\n  font-weight: bold;\n  text-align: right; }\n\n/* p {\r\n\ttext-align: center;\r\n\topacity: .3;\r\n\ttransition: .3s;\r\n\tposition: absolute;\r\n\tbottom: 2vh;\r\n\tleft: 0; right: 0;\r\n\tmargin: 0 auto;\r\n\t\r\n\t &:hover { opacity: 1; } \r\n}*/\n\nh3 {\n  font-size: 14px; }\n\n/* .field {\r\n    background: transparent;\r\n    font-weight: 300;\r\n    border: 0;\r\n    color: #31325F;\r\n    outline: none;\r\n    padding-right: 10px;\r\n    padding-left: 10px;\r\n    cursor: text;\r\n    width: 100%;\r\n    height: 40px;\r\n    float: right;\r\n} */\n\n/* .field::-webkit-input-placeholder {\r\n    color: #CFD7E0;\r\n}\r\n\r\n.field::-moz-placeholder {\r\n    color: #CFD7E0;\r\n}\r\n\r\n.field:-ms-input-placeholder {\r\n    color: #CFD7E0;\r\n} */\n\n.checkoutBtn,\n.checkoutBtn:hover,\n.checkoutBtn:active,\n.checkoutBtn:focus {\n  background-color: #333333; }\n\n.field::-webkit-input-placeholder {\n  background-color: #333333;\n  color: white;\n  border: 0;\n  padding: 0; }\n\n.field:-ms-input-placeholder {\n  background-color: #333333;\n  color: white;\n  border: 0;\n  padding: 0; }\n\n.field::-ms-input-placeholder {\n  background-color: #333333;\n  color: white;\n  border: 0;\n  padding: 0; }\n\n.field::placeholder {\n  background-color: #333333;\n  color: white;\n  border: 0;\n  padding: 0; }\n\n.field {\n  border: 0px;\n  width: 100%;\n  padding: 0px;\n  color: white;\n  background-color: #333333; }\n\n.field:focus {\n  border: 0px;\n  outline-offset: 0px;\n  outline-color: white;\n  background-color: #333333; }\n\n.group {\n  box-shadow: 0 7px 14px 0 rgba(49, 49, 93, 0.1), 0 3px 6px 0 rgba(0, 0, 0, 0.08);\n  border-radius: 4px;\n  /* margin-bottom: 20px; */\n  padding: 20px;\n  background-color: #333333;\n  margin-bottom: 20px; }\n\nlabel {\n  display: block;\n  font-size: 14px;\n  margin-bottom: 8px;\n  font-weight: 500;\n  position: relative;\n  font-weight: 300;\n  height: 40px;\n  /* line-height: 40px; */\n  /* margin-left: 20px; */ }\n\n.checkoutMsg {\n  width: 100%;\n  padding-top: 5px; }\n\n.stripeElement {\n  color: white; }\n\n.hidden {\n  display: none; }\n\nshown {\n  display: block; }\n\n.card-body {\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/components/mookie-checkout/mookie-checkout.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/mookie-checkout/mookie-checkout.component.ts ***!
  \*************************************************************************/
/*! exports provided: MookieCheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MookieCheckoutComponent", function() { return MookieCheckoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var ngx_stripe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-stripe */ "./node_modules/ngx-stripe/modules/ngx-stripe.es5.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MookieCheckoutComponent = /** @class */ (function () {
    function MookieCheckoutComponent(cartService, router, shared, stripeService, changeDetectoRef, mapsLoader, ngZone) {
        this.cartService = cartService;
        this.router = router;
        this.shared = shared;
        this.stripeService = stripeService;
        this.changeDetectoRef = changeDetectoRef;
        this.mapsLoader = mapsLoader;
        this.ngZone = ngZone;
        this.checkoutMessage = "";
        this.chargeSuccessful = false;
        this.setupStripeCard = function () {
            var _this = this;
            var style = {
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
            this.stripeService.elements().subscribe(function (elements) {
                _this.elements = elements;
                if (!_this.card) {
                    _this.card = _this.elements.create('card', {
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
                    _this.card.mount('#card-element');
                }
            });
        };
        this.doCheckout = function () {
            var _this = this;
            var extraDetails = {
                name: 'jph'
            };
            this.stripeService.createToken(this.card, extraDetails).subscribe(function (res) {
                if (res.token) {
                    var stripeData = { token: res.token.id, name: 'jph' };
                    var user = _this.shared.getSharedVar('user');
                    var cart = _this.shared.getSharedVar('cart');
                    console.log(user);
                    console.log(cart);
                    stripeData.userEmail = user.user.email;
                    stripeData.cart = user.user.cart;
                    stripeData.price = cart.total * 100;
                    stripeData.user = user.user;
                    stripeData.userContactNumber = _this.checkoutData.number; //this.checkoutData.number;
                    stripeData.deliveryLocation = _this.deliveryLocation; //this.shared.getSharedVar('deliveryLocation');
                    stripeData.deliveryLatLng = { lat: _this.latitude, lng: _this.longitude }; // this.shared.getSharedVar('deliveryLatLng');
                    _this.cartService.checkout(stripeData).subscribe(function (data) {
                        if (data.success) {
                            _this.checkoutMessage = "Charge successful";
                            _this.deliveryLocationChanged = false;
                            _this.deliveryInProgress = true;
                            // Show stripe modal for nice message
                            setTimeout(function () {
                                _this.shared.updateSharedVar('cart', {});
                                _this.shared.updateSharedVar('cartItemCount', 0);
                                _this.deliveryInProgress = true; // Maybe a session var
                                _this.router.navigate(['/orders/' + data.order._id]);
                            }, 1000);
                            // this.shared.updateSharedVar('deliveryLocationChanged',false);
                            // this.shared.updateSharedVar('deliveryInProgress',false);
                        }
                        else {
                            _this.checkoutMessage = "Sorry for the inconvenience. The charge was not successful try again later.";
                        }
                    });
                }
                else {
                    _this.checkoutMessage = "Charge unsuccessful. Inccorect card inforation given try again.";
                }
            });
        };
    }
    MookieCheckoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        //set google maps defaults
        this.zoom = 4;
        this.latitude = 39.8282;
        this.longitude = -98.5795;
        this.setCurrentPosition();
        //load Places Autocomplete
        this.mapsLoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElementRef.nativeElement, {
                types: ["address"]
            });
            autocomplete.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    //get the place result
                    var place = autocomplete.getPlace();
                    console.log(place);
                    //verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    _this.deliveryLocation = place.formatted_address;
                    //set latitude, longitude and zoom
                    _this.latitude = place.geometry.location.lat();
                    _this.longitude = place.geometry.location.lng();
                    _this.zoom = 17;
                });
            });
        });
        this.checkoutData = { name: "", number: "" };
        this.cart = { subtotal: 0, tax: 0, total: 0 };
    };
    MookieCheckoutComponent.prototype.setCurrentPosition = function () {
        var _this = this;
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.latitude = position.coords.latitude;
                _this.longitude = position.coords.longitude;
                _this.zoom = 17;
            });
        }
    };
    MookieCheckoutComponent.prototype.ngAfterViewInit = function () {
        this.setupStripeCard();
        this.cart = this.shared.getSharedVar('cart');
        this.changeDetectoRef.detectChanges();
        console.log(this.cart);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("search"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], MookieCheckoutComponent.prototype, "searchElementRef", void 0);
    MookieCheckoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mookie-checkout',
            template: __webpack_require__(/*! ./mookie-checkout.component.html */ "./src/app/components/mookie-checkout/mookie-checkout.component.html"),
            styles: [__webpack_require__(/*! ./mookie-checkout.component.scss */ "./src/app/components/mookie-checkout/mookie-checkout.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"], ngx_stripe__WEBPACK_IMPORTED_MODULE_4__["StripeService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _agm_core__WEBPACK_IMPORTED_MODULE_5__["MapsAPILoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], MookieCheckoutComponent);
    return MookieCheckoutComponent;
}());

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


/***/ }),

/***/ "./src/app/components/mookie-facebook/mookie-facebook.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/mookie-facebook/mookie-facebook.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p *ngIf=\"!errorMsg\">\n  Loading Facebook Login\n</p>\n<p *ngIf=\"errorMsg\">\n  {{errorMsg}}\n</p>\n"

/***/ }),

/***/ "./src/app/components/mookie-facebook/mookie-facebook.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/mookie-facebook/mookie-facebook.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/mookie-facebook/mookie-facebook.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/mookie-facebook/mookie-facebook.component.ts ***!
  \*************************************************************************/
/*! exports provided: MookieFacebookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MookieFacebookComponent", function() { return MookieFacebookComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_mookie_emit_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/mookie-emit.service */ "./src/app/services/mookie-emit.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MookieFacebookComponent = /** @class */ (function () {
    function MookieFacebookComponent(router, authService, activatedRoute, mookieEmit) {
        this.router = router;
        this.authService = authService;
        this.activatedRoute = activatedRoute;
        this.mookieEmit = mookieEmit;
    }
    MookieFacebookComponent.prototype.ngOnInit = function () {
        var _this = this;
        var route = this.router.url;
        if (route.startsWith('/facebook') && route !== '/facebook/error') {
            this.activatedRoute.paramMap.subscribe(function (params) {
                _this.authService.socialMedia(params.get('token'));
                _this.errorMsg = "You're facebook login was successful";
                setTimeout(function () {
                    _this.mookieEmit.emitSessionChange();
                    _this.router.navigate(['/home']);
                    // Display page from preloader in one and half seconds
                }, 1500);
            });
        }
        else if (route.toString() === '/facebook/error') {
            this.errorMsg = "There was an error trying to login through facebook";
            setTimeout(function () {
                _this.router.navigate(['/home']);
                // Display page from preloader in one and half seconds
            }, 1500);
        }
    };
    MookieFacebookComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mookie-facebook',
            template: __webpack_require__(/*! ./mookie-facebook.component.html */ "./src/app/components/mookie-facebook/mookie-facebook.component.html"),
            styles: [__webpack_require__(/*! ./mookie-facebook.component.scss */ "./src/app/components/mookie-facebook/mookie-facebook.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_mookie_emit_service__WEBPACK_IMPORTED_MODULE_3__["MookieEmitService"]])
    ], MookieFacebookComponent);
    return MookieFacebookComponent;
}());

// var app = this;
// app.errorMsg = false; // Clear errorMsg on page load
// app.expired = false; // Clear expired on page load
// app.disabled = true; // On page load, remove disable lock from form
// // Check if callback was successful 
// if ($window.location.pathname == '/facebookerror') {
//   $scope.alert = 'alert alert-danger'; // Set class for message
//   app.errorMsg = 'Facebook e-mail not found in database.'; // If error, display custom message
// } else if ($window.location.pathname == '/facebook/inactive/error') {
//   app.expired = true; // Variable to activate "Resend Link Button"
//   $scope.alert = 'alert alert-danger'; // Set class for message
//   app.errorMsg = 'Account is not yet activated. Please check your e-mail for activation link.'; // If error, display custom message
// }
// else {
//   Auth.socialMedia($routeParams.token); // If no error, set the token
//   $location.path('/account'); // Redirect to home page
// }


/***/ }),

/***/ "./src/app/components/mookie-footer/mookie-footer.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/mookie-footer/mookie-footer.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- New footer -->\r\n<footer id=\"main-footer\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <p>&copy; 2018 all rights reserved. Mookie Dough LLC</p>\r\n        <br>\r\n        <p *ngIf=\"numberOfSiteVisitors > 0\"> Site has been accessed {{numberOfSiteVisitors}} times.</p>\r\n        <br>\r\n        <!-- <h3 class=\"widget-title\">\r\n          <small>Subscribe to the Mookie Dough email list</small>\r\n        </h3>\r\n        <form class=\"subscribe-form\" novalidate>\r\n          <input type=\"email\" name=\"EMAIL\" placeholder=\"Your e-mail\" ng-model=\"subEmail\">\r\n          <div style=\"position: absolute; left: -5000px;\" aria-hidden=\"true\">\r\n            <input type=\"text\" name=\"\" tabindex=\"-1\" value=\"\">\r\n          </div>\r\n          <button type=\"submit\" ng-click=\"main.addSubscription(subEmail)\">\r\n            <i class=\"fas fa-paper-plane\"></i>\r\n          </button>\r\n        </form> -->\r\n\r\n      </div>\r\n      <div class=\"col-md-2\">\r\n        <h6>Relevant Links</h6>\r\n        <ul class=\"list-unstyled\">\r\n          <li>\r\n            <a routerLink=\"/about\">About us</a>\r\n          </li>\r\n          <li>\r\n            <a routerLink=\"/menu\">Menu</a>\r\n          </li>\r\n          <li>\r\n            <a routerLink=\"/thesecret\">Social Media</a>\r\n          </li>\r\n          <li>\r\n            <a routerLink=\"/register\">Sign in</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n      <div class=\"col-md-2\">\r\n        <h6>Our team</h6>\r\n        <ul class=\"list-unstyled\">\r\n          <li>\r\n            <a href=\"https://www.linkedin.com/in/abempah/\">Bempah</a>\r\n          </li>\r\n          <li>\r\n            <a href=\"https://www.linkedin.com/in/akim-richards-a8303610a/\">Akim</a>\r\n          </li>\r\n          <li>\r\n            <a href=\"https://www.linkedin.com/in/dellarontay/\">Dellarontay</a>\r\n          </li>\r\n          <li>\r\n            <a href=\"https://www.linkedin.com/in/oluwaseyi-olaleye-a523b210a/\">Oluwaseyi</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</footer>"

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
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
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
    function MookieFooterComponent(authService) {
        this.authService = authService;
        this.numberOfSiteVisitors = 0;
    }
    MookieFooterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.numberOfSiteVisitors = 0;
        // Get total number of siteVisitors
        this.authService.getSiteVisitors().subscribe(function (siteData) {
            if (siteData.success) {
                _this.numberOfSiteVisitors = siteData.numberOfSiteVisitors;
            }
        });
    };
    MookieFooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mookie-footer',
            template: __webpack_require__(/*! ./mookie-footer.component.html */ "./src/app/components/mookie-footer/mookie-footer.component.html"),
            styles: [__webpack_require__(/*! ./mookie-footer.component.scss */ "./src/app/components/mookie-footer/mookie-footer.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], MookieFooterComponent);
    return MookieFooterComponent;
}());



/***/ }),

/***/ "./src/app/components/mookie-google/mookie-google.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/mookie-google/mookie-google.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p *ngIf=\"!errorMsg\">\n    Loading Google Login\n  </p>\n  <p *ngIf=\"errorMsg\">\n    {{errorMsg}}\n  </p>\n  "

/***/ }),

/***/ "./src/app/components/mookie-google/mookie-google.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/mookie-google/mookie-google.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/mookie-google/mookie-google.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/mookie-google/mookie-google.component.ts ***!
  \*********************************************************************/
/*! exports provided: MookieGoogleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MookieGoogleComponent", function() { return MookieGoogleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_mookie_emit_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/mookie-emit.service */ "./src/app/services/mookie-emit.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MookieGoogleComponent = /** @class */ (function () {
    function MookieGoogleComponent(router, activatedRoute, authService, mookieEmit) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.authService = authService;
        this.mookieEmit = mookieEmit;
    }
    MookieGoogleComponent.prototype.ngOnInit = function () {
        var _this = this;
        var route = this.router.url;
        if (route.startsWith('/google') && route !== '/google/error') {
            this.activatedRoute.paramMap.subscribe(function (params) {
                _this.authService.socialMedia(params.get('token'));
                _this.errorMsg = "You're google login was successful";
                setTimeout(function () {
                    _this.mookieEmit.emitSessionChange();
                    _this.router.navigate(['/home']);
                    // Display page from preloader in one and half seconds
                }, 1500);
            });
        }
        else if (route.toString() === '/google/error') {
            this.errorMsg = "There was an error trying to login through google";
            setTimeout(function () {
                _this.router.navigate(['/home']);
                // Display page from preloader in one and half seconds
            }, 1500);
        }
    };
    MookieGoogleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mookie-google',
            template: __webpack_require__(/*! ./mookie-google.component.html */ "./src/app/components/mookie-google/mookie-google.component.html"),
            styles: [__webpack_require__(/*! ./mookie-google.component.scss */ "./src/app/components/mookie-google/mookie-google.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _services_mookie_emit_service__WEBPACK_IMPORTED_MODULE_3__["MookieEmitService"]])
    ], MookieGoogleComponent);
    return MookieGoogleComponent;
}());



/***/ }),

/***/ "./src/app/components/mookie-header/mookie-header.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/mookie-header/mookie-header.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"navbar navbar-sticky nav-down\">\r\n  <div id=\"logo\" routerLink=\"/home\" (click)=\"closeMenu()\">\r\n    <a routerLink=\"/home\">\r\n      <img src=\"assets/imgs/toplogo.svg\" alt=\"App Loading\">\r\n    </a>\r\n  </div>\r\n  <nav [ngClass]=\"{'open':menuToggleOpen}\" class=\"main-navigation text-center\">\r\n    <ul class=\"menu\">\r\n      <li>\r\n        <a routerLink=\"/home\" (click)=\"closeMenu()\">\r\n          <span>Home</span>\r\n        </a>\r\n      </li>\r\n      <li>\r\n        <a routerLink=\"/menu\" (click)=\"closeMenu()\">\r\n          <span>menu</span>\r\n        </a>\r\n      </li>\r\n      <li>\r\n        <a routerLink=\"/thesecret\" (click)=\"closeMenu()\">\r\n          <span>the secret</span>\r\n        </a>\r\n      </li>\r\n      <li>\r\n        <a routerLink=\"/about\" (click)=\"closeMenu()\">\r\n          <span>about us</span>\r\n        </a>\r\n      </li>\r\n      <li *ngIf=\"!loggedIn\">\r\n        <a routerLink=\"/register\" (click)=\"closeMenu()\">\r\n          Sign In/Up\r\n        </a>\r\n      </li>\r\n    </ul>\r\n  </nav>\r\n  <div class=\"toolbar\">\r\n    <div class=\"inner\">\r\n      <a (click)=\"toggleMenu()\" class=\"mobile-menu-toggle mookieIcon\">\r\n        <i *ngIf=\"!menuToggleOpen\" class=\"fas fa-bars fa-xs fa-fw menu\"></i>\r\n        <i *ngIf=\"menuToggleOpen\" class=\"fas fa-times fa-xs fa-fw cross\"></i>\r\n      </a>\r\n      <a routerLink=\"/account\" (click)=\"closeMenu()\" class=\"mookieIcon\" *ngIf=\"loggedIn\">\r\n        <i class=\"fas fa-user fa-xs fa-fw\"></i>\r\n      </a>\r\n      <a routerLink=\"/shopping-cart\" class=\"mookieIcon\" *ngIf=\"cartItemCount> 0\">\r\n        <i class=\"fas fa-shopping-cart fa-xs fa-fw\"></i>\r\n        <span class=\"shop-count\">{{cartItemCount}}</span>\r\n      </a>\r\n    </div>\r\n  </div>\r\n</header>"

/***/ }),

/***/ "./src/app/components/mookie-header/mookie-header.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/mookie-header/mookie-header.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\n  /* border-bottom: 1px solid #CCCCCC;\r\n\tborder-bottom-width: 1px;\r\n\tborder-bottom-style: solid;\r\n\tborder-bottom-color: rgb(204, 204, 204); */\n  position: relative;\n  width: 100%;\n  max-height: 80px;\n  min-height: 80px;\n  background-color: #fff;\n  padding-left: 5px;\n  top: 0;\n  left: 0; }\n  .navbar #logo {\n    position: absolute;\n    margin-left: auto;\n    margin-right: auto;\n    left: 0;\n    right: 0;\n    width: 139px; }\n  @media screen and (max-width: 400px) {\n    .navbar #logo {\n      position: relative;\n      float: left; } }\n  .navbar .toolbar {\n    color: black;\n    position: absolute;\n    font-size: 36px;\n    right: 5px;\n    bottom: 0px;\n    /* height: 80px; */\n    width: auto;\n    display: flex;\n    align-items: flex-end; }\n  .navbar.navbar-sticky + * {\n  margin-top: 100px; }\n  .main-navigation {\n  display: block;\n  z-index: 10;\n  position: fixed;\n  width: 100%;\n  height: calc(100% - 80px);\n  top: 80px;\n  left: 0;\n  background-color: #ffffff;\n  padding: 0;\n  overflow-y: auto;\n  visibility: hidden;\n  opacity: 0;\n  transition: visibility 0.3s, opacity 0.3s; }\n  .main-navigation > .menu {\n  display: none;\n  color: black;\n  list-style: none;\n  margin: 0;\n  padding: 20px 0; }\n  .main-navigation > .menu > li {\n  display: block; }\n  .main-navigation > .menu li > a {\n  display: block;\n  color: #606060;\n  font-size: 14px;\n  font-weight: 800;\n  text-transform: uppercase;\n  text-decoration: none; }\n  .main-navigation > .menu > li > a {\n  line-height: 1.5;\n  padding: 12px 15px; }\n  .main-navigation.open {\n  visibility: visible;\n  opacity: 1; }\n  .main-navigation.open > .menu {\n  display: block;\n  -webkit-animation: slideUpLong 0.5s;\n  animation: slideUpLong 0.5s; }\n  a.mobile-menu-toggle {\n  display: inline-flex;\n  color: #333333; }\n  a.mobile-menu-toggle.active > i {\n  opacity: 0;\n  -webkit-transform: translateY(-20px) scale(0.7);\n  transform: translateY(-20px) scale(0.7);\n  transition: opacity 0.15s, -webkit-transform 0.3s;\n  transition: transform 0.3s, opacity 0.15s;\n  transition: transform 0.3s, opacity 0.15s, -webkit-transform 0.3s; }\n  a.mobile-menu-toggle.active .menu {\n  display: none;\n  color: black; }\n  a.mobile-menu-toggle > i {\n  position: relative;\n  display: inline-block;\n  font-style: normal;\n  opacity: 1;\n  -webkit-transform: translateY(0) scale(1);\n  transform: translateY(0) scale(1);\n  transition: opacity 0.15s, -webkit-transform 0.3s;\n  transition: transform 0.3s, opacity 0.15s;\n  transition: transform 0.3s, opacity 0.15s, -webkit-transform 0.3s; }\n  .mobile-menu-toggle.active > i {\n  opacity: 0;\n  -webkit-transform: translateY(-20px) scale(0.7);\n  transform: translateY(-20px) scale(0.7);\n  transition: opacity 0.15s, -webkit-transform 0.3s;\n  transition: transform 0.3s, opacity 0.15s;\n  transition: transform 0.3s, opacity 0.15s, -webkit-transform 0.3s; }\n  @media screen and (max-width: 1070px) {\n  a.mobile-menu-toggle {\n    display: inline-flex;\n    vertical-align: text-top; } }\n  .mookieIcon {\n  color: #333333;\n  -webkit-text-decoration-line: none;\n          text-decoration-line: none;\n  display: inline-flex;\n  vertical-align: text-top;\n  -webkit-animation: slideUpLong 0.5s;\n  animation: slideUpLong 0.5s; }\n  .mookieIcon:hover {\n  color: #333333; }\n  .text-center {\n  text-align: center; }\n  .displayed {\n  color: black;\n  display: inline-flex; }\n  .no-scroll-body {\n  overflow: hidden; }\n"

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
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
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
    function MookieHeaderComponent(shared, changeDetector) {
        this.shared = shared;
        this.changeDetector = changeDetector;
        this.menuToggleOpen = false;
        this.loggedIn = false;
        this.cartItemCount = 0;
        this.toggleMenu = function () {
            this.menuToggleOpen = !this.menuToggleOpen;
            jquery__WEBPACK_IMPORTED_MODULE_2__('body').toggleClass('no-scroll-body');
            // if(this.menuToggleOpen) 
        };
        this.closeMenu = function () {
            if (this.menuToggleOpen) {
                this.menuToggleOpen = !this.menuToggleOpen;
                jquery__WEBPACK_IMPORTED_MODULE_2__('body').toggleClass('no-scroll-body');
            }
        };
    }
    MookieHeaderComponent.prototype.ngOnInit = function () {
        this.loggedIn = false;
        this.cartItemCount = 0;
        this.loggedIn = this.shared.getSharedVar('loggedIn');
    };
    MookieHeaderComponent.prototype.ngAfterViewInit = function () {
        this.cartItemCount = this.shared.getSharedVar('cartItemCount');
        this.changeDetector.detectChanges();
    };
    MookieHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mookie-header',
            template: __webpack_require__(/*! ./mookie-header.component.html */ "./src/app/components/mookie-header/mookie-header.component.html"),
            styles: [__webpack_require__(/*! ./mookie-header.component.scss */ "./src/app/components/mookie-header/mookie-header.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_shared_service__WEBPACK_IMPORTED_MODULE_1__["SharedService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
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

module.exports = "<div class=\"\">\r\n\r\n  <div class=\"row centerH\">\r\n    <div class=\"col-md-8 col-lg-6 mookieC\">\r\n      <ngb-carousel *ngIf=\"images\" class=\"mookieC\">\r\n        <ng-template ngbSlide>\r\n          <img class=\"carousel-img\" [src]=\"images[0]\" alt=\"Random first slide\">\r\n          <div class=\"carousel-caption\">\r\n            <h3>Dellarontay Readus</h3>\r\n            <p>Co-Founder, Head of Technology and Software</p>\r\n          </div>\r\n        </ng-template>\r\n        <ng-template ngbSlide>\r\n          <img class=\"carousel-img\" [src]=\"images[1]\" alt=\"Random second slide\">\r\n          <div class=\"carousel-caption\">\r\n            <h3>Andrew Bempah</h3>\r\n            <p>President</p>\r\n          </div>\r\n        </ng-template>\r\n        <ng-template ngbSlide>\r\n          <img class=\"carousel-img\" [src]=\"images[2]\" alt=\"Random third slide\">\r\n          <div class=\"carousel-caption\">\r\n            <h3>Oluwaseyi Olaleye</h3>\r\n            <p>Co-Founder, Head Of Operations</p>\r\n          </div>\r\n        </ng-template>\r\n        <ng-template ngbSlide>\r\n          <img class=\"carousel-img\" [src]=\"images[3]\" alt=\"Random third slide\">\r\n          <div class=\"carousel-caption\">\r\n            <h3>Akim Richards</h3>\r\n            <p>Co Founder, Head of Strategy Implementation</p>\r\n          </div>\r\n        </ng-template>\r\n      </ngb-carousel>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <section id=\"feature-one\">\r\n    <div class=\"container text-center\">\r\n      <div class=\"row\">\r\n        <div class=\"feature-content\">\r\n          <div class=\"col-lg-6 \">\r\n            <h6>Who we are</h6>\r\n            <h2>Mookie Dough has been serving premium quality cookie dough to our customers since 2017</h2>\r\n            <p class=\"lead\">In that time Stanford students and our valued customers in the nearby Stanford area have propeled our small company\r\n              forward into a platform to share amazing content and of course delicious edible cookie dough.</p>\r\n            <a routerLink=\"/about\">About us</a>\r\n          </div>\r\n          <div class=\"col-lg-6\">\r\n            <img src=\"assets/imgs/colM0.jpg\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n  <section id=\"feature-two\" class=\"feature-dark\">\r\n    <div class=\"container text-center\">\r\n      <div class=\"row\">\r\n        <div class=\"feature-content\">\r\n          <div class=\"col-lg-6 feature-caption\">\r\n            <h2>Have a craving for cookie dough?</h2>\r\n            <p class=\"lead\">Enjoy our safe and delicious artisian quality cookie dough made without eggs!</p>\r\n          </div>\r\n          <div class=\"col-lg-6 text-sm-center hidden-md-down lowish\">\r\n            <img src=\"assets/imgs/beachdo1.jpg\" alt=\"Beach Mookie\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n  <section id=\"feature-three\">\r\n    <div class=\"container text-center\">\r\n      <div class=\"row\">\r\n        <div class=\"feature-content\">\r\n          <div class=\"col-lg-6 hidden-md-down\">\r\n            <img src=\"assets/imgs/M00KIE.jpg\" alt=\"M00kie img\">\r\n          </div>\r\n          <div class=\"col-lg-5 col-lg-offset-1\">\r\n            <h6>EXCLUSIVE CATERING</h6>\r\n            <h2>Serving Stanford and nearby areas</h2>\r\n            <p class=\"lead\">Contact Andrew Bempah or Oluwaseyi Olaleye at bempah@mookiedough.com and olaleye@mookiedough.com for exclusive\r\n              catering!\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n  <section id=\"feature-four\" class=\"feature-alt\">\r\n    <div class=\"container text-center\">\r\n      <div class=\"row\">\r\n        <div class=\"feature-content\">\r\n          <div class=\"col-lg-6\">\r\n            <h6>Dream Big</h6>\r\n            <blockquote class=\"blockquote\">\r\n              &ldquo; When people eat Mookie Dough Cookie Dough and support our platform, they are cosigning and supporting the dreams\r\n              of a team of hustlers that weren't afraid to dream &rdquo;\r\n              <footer class=\"blockquote-footer\">\r\n                Andrew Bempah,\r\n                <cite>President of Mookie Dough LLC</cite>\r\n              </footer>\r\n            </blockquote>\r\n          </div>\r\n          <div class=\"col-lg-6 hidden-md-down\">\r\n            <img src=\"assets/imgs/side.png\" alt=\"Brelvis Hesley\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n</div>"

/***/ }),

/***/ "./src/app/components/mookie-home/mookie-home.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/mookie-home/mookie-home.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html,\nbody {\n  height: 100%; }\n\nbody {\n  -webkit-font-smoothing: antialiased;\n  text-rendering: optimizelegibility;\n  color: #6c6f73; }\n\nh1, h2, h3, h4, h5, h6 {\n  color: #333; }\n\nh6 {\n  text-transform: uppercase;\n  font-weight: bold;\n  /* font-size: 0.8rem; */\n  letter-spacing: 0.1rem; }\n\nimg {\n  max-width: 100%; }\n\n.blockquote {\n  font-siz: 1.6rem;\n  color: #333;\n  border: none;\n  padding: 0; }\n\n.blockquote-footer {\n  margin: 1rem 0 0; }\n\n.lowish {\n  padding-bottom: 30px; }\n\n#stage {\n  background: url('header3.png') center center no-repeat;\n  background-color: #333333;\n  background-blend-mode: overlay;\n  background-size: cover;\n  color: white;\n  height: 300px;\n  width: 100%;\n  display: flex;\n  align-items: center; }\n\n#stage-caption {\n  font-size: 1.4rem;\n  font-weight: 200;\n  max-width: 60rem;\n  margin: 0 auto;\n  text-align: center; }\n\n#stage-caption h1 {\n  color: #fff;\n  font-weight: bold;\n  text-transform: uppercase; }\n\n.feature-content {\n  padding: 8rem 0;\n  overflow: hidden; }\n\n.feature-content img {\n  /* margin-bottom: -8rem; */ }\n\n.feature-dark {\n  background: #262F36;\n  color: #fff; }\n\n.feature-dark h2 {\n  color: #fff; }\n\n.feature-alt {\n  background: #f0f0f0; }\n\n#feature-four .feature-content {\n  padding: 0; }\n\n#feature-five img {\n  margin-top: 2rem; }\n\n/* Media Queries */\n\n@media screen and (min-width: 991px) {\n  .feature-content {\n    display: flex;\n    align-items: center; } }\n\n.centerH {\n  background-color: #333333;\n  /* for visualization purposes */\n  text-align: center; }\n\n.carousel-img {\n  max-height: 400px; }\n\n.mookieC {\n  margin-left: auto;\n  margin-right: auto;\n  padding-top: 10px; }\n\n.carousel-caption {\n  position: static !important;\n  color: white !important; }\n\n.carousel-caption h3 {\n    color: white !important; }\n"

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
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/shared.service */ "./src/app/services/shared.service.ts");
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
    function MookieHomeComponent(shared) {
        this.shared = shared;
    }
    MookieHomeComponent.prototype.ngOnInit = function () {
        this.images = new Array();
        this.loggedIn = false;
        this.images.push('assets/imgs/rontay.jpg');
        this.images.push('assets/imgs/bempah-opt.jpg');
        this.images.push('assets/imgs/olu.jpg');
        this.images.push('assets/imgs/akim.jpg');
        this.loggedIn = this.shared.getSharedVar('loggedIn');
    };
    MookieHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mookie-home',
            template: __webpack_require__(/*! ./mookie-home.component.html */ "./src/app/components/mookie-home/mookie-home.component.html"),
            styles: [__webpack_require__(/*! ./mookie-home.component.scss */ "./src/app/components/mookie-home/mookie-home.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_shared_service__WEBPACK_IMPORTED_MODULE_1__["SharedService"]])
    ], MookieHomeComponent);
    return MookieHomeComponent;
}());



/***/ }),

/***/ "./src/app/components/mookie-manage-inventory/mookie-manage-inventory.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/mookie-manage-inventory/mookie-manage-inventory.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <h1>View Inventory</h1>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-4\" *ngFor=\"let item of totals\">\r\n        Item Name: {{item.itemName}}\r\n        <br> Number in Stock: {{item.itemQtyTotal}}\r\n\r\n\r\n        <!-- <div class=\"container card-list\">\r\n                    <div class=\"card blue\">\r\n                        <div class=\"title\">all projects</div>\r\n                        <span class=\"glyphicon glyphicon-upload\"></span>\r\n                        <div class=\"value\">89</div>\r\n                        <div class=\"stat\">\r\n                            <b>13</b>% increase</div>\r\n                    </div>\r\n                    <div class=\"card green\">\r\n                        <div class=\"title\">team members</div>\r\n                        <span class=\"glyphicon glyphicon-upload\"></span>\r\n                        <div class=\"value\">5,990</div>\r\n                        <div class=\"stat\">\r\n                            <b>4</b>% increase</div>\r\n                    </div>\r\n                    <div class=\"card orange\">\r\n                        <div class=\"title\">total budget</div>\r\n                        <span class=\"glyphicon glyphicon-download\"></span>\r\n                        <div class=\"value\">$80,990</div>\r\n                        <div class=\"stat\">\r\n                            <b>13</b>% decrease</div>\r\n                    </div>\r\n                    <div class=\"card red\">\r\n                        <div class=\"title\">new customers</div>\r\n                        <span class=\"glyphicon glyphicon-download\"></span>\r\n                        <div class=\"value\">3</div>\r\n                        <div class=\"stat\">\r\n                            <b>13</b>% decrease</div>\r\n                    </div>\r\n                </div> -->\r\n\r\n\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <h1>Update Inventory</h1>\r\n  <div class=\"updateHeader\">\r\n    <p>Item Name</p>\r\n    <p>Item Price</p>\r\n    <p>Item Quantity</p>\r\n    <p>Old Inventory?</p>\r\n  </div>\r\n  <div>\r\n    <input type=\"text\" placeholder=\"item Name\" [(ngModel)]=\"newItem.itemName\">\r\n     <!-- uib-typeahead=\"name as name for name in currentNames \"\r\n      typeahead-show-hint=\"true\" typeahead-min-length=\"0\"> -->\r\n    <input type=\"text\" placeholder=\"Item Price\" [(ngModel)]=\"newItem.itemPrice\">\r\n    <input type=\"text\" placeholder=\"Item Quantity\" [(ngModel)]=\"newItem.itemQty\">\r\n    <input type=\"text\" placeholder=\"Old Inventory?\" [(ngModel)]=\"newItem.oldInventory\">\r\n  </div>\r\n\r\n  <button (click)=\"updateInventory()\">Update Inventory</button>\r\n\r\n\r\n  <div class=\"inventoryHolder\">\r\n    <div class=\"inventory\">\r\n      <div class=\"inventoryItem\" *ngFor=\"let inventoryItem of inventory\" [ngClass]=\"{'addInventory':inventoryItem.addInventory,'removeInventory':inventoryItem.removeInventory,'oldInventory':inventoryItem.oldInventory}\">\r\n        <p class=\"itemName\">{{inventoryItem.itemName}}</p>\r\n        <p class=\"itemPrice\">{{inventoryItem.itemPrice}}</p>\r\n        <p class=\"itemQty\">{{inventoryItem.itemQty}}</p>\r\n        <button (click)=\"removeInventoryUpdate(inventoryItem._id)\">Remove Inventory Update</button>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/components/mookie-manage-inventory/mookie-manage-inventory.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/mookie-manage-inventory/mookie-manage-inventory.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".inventoryHolder {\n  display: block;\n  width: 100%;\n  text-align: center;\n  font-size: 12px; }\n\n.inventoryHolder .inventory {\n  display: inline-block; }\n\n.updateHeader {\n  display: block; }\n\ninput {\n  width: 100px;\n  border-radius: 5px; }\n\n.updateHeader p {\n  display: inline-block;\n  margin-right: 15px; }\n\n.inventoryItem {\n  display: block;\n  width: 300px;\n  height: 100%;\n  color: white; }\n\n@media screen and (max-width: 676px) {\n  .inventoryItem {\n    /* width:400px; */\n    display: inline-block; } }\n\n.addInventory {\n  color: Green;\n  /* background-color: green; */ }\n\n.removeInventory {\n  color: red;\n  /* background-color: red; */ }\n\n.oldInventory {\n  color: gray;\n  /* background-color: gray; */ }\n\n/* .card-list {\r\n\t.clear;\r\n\tmargin-top: 15px;\r\n\twidth: 100%;\r\n}\r\n.card {\r\n\tborder: 5px solid @bg;\r\n\tborder-radius: 8px;\r\n\tcolor: white;\r\n\tfloat: left;\r\n\tpadding: 10px;\r\n\tposition: relative;\r\n\twidth: 25%;\r\n\t.glyphicon {\r\n\t\tcolor: white;\r\n\t\tfont-size: 28px;\r\n\t\topacity: 0.3;\r\n\t\tposition: absolute;\r\n\t\tright: 13px;\r\n\t\ttop: 13px;\r\n\t}\r\n\t.stat {\r\n\t\tborder-top: 1px solid rgba(255, 255, 255, 0.3);\r\n\t\tfont-size: 8px;\r\n\t\tmargin-top: 25px;\r\n\t\tpadding: 10px 10px 0;\r\n\t\ttext-transform: uppercase;\r\n\t}\r\n\t.title {\r\n\t\tdisplay: inline-block;\r\n\t\tfont-size: 8px;\r\n\t\tpadding: 10px 10px 0;\r\n\t\ttext-transform: uppercase;\r\n\t}\r\n\t.value {\r\n\t\tfont-size: 28px;\r\n\t\tpadding: 0 10px;\r\n\t}\r\n\t&.blue {\r\n\t\tbackground-color: #2298F1;\r\n\t}\r\n\t&.green {\r\n\t\tbackground-color: #66B92E;\r\n\t}\r\n\t&.orange {\r\n\t\tbackground-color: #DA932C;\r\n\t}\r\n\t&.red {\r\n\t\tbackground-color: #D65B4A;\r\n\t}\r\n}\r\n.projects {\r\n\tbackground-color: @dark-text;\r\n\tborder: 4px solid @bg;\r\n\twidth: 100%;\r\n\t\r\n\t&-inner {\r\n\t\tborder: 1px solid @light-bg;\r\n\t\tborder-radius: 4px;\r\n\t}\r\n}\r\n.projects-header {\r\n\tcolor: white;\r\n\tpadding: 22px;\r\n\t.count,\r\n\t.title {\r\n\t\tdisplay: inline-block;\r\n\t}\r\n\t.count {\r\n\t\tcolor: #738297;\r\n\t}\r\n\t.glyphicon {\r\n\t\tcursor: pointer;\r\n\t\tfloat: right;\r\n\t\tfont-size: 16px;\r\n\t\tmargin: 5px 0;\r\n\t}\r\n\t.title {\r\n\t\tfont-size: 21px;\r\n\t\t//font-weight: lighter;\r\n\t\t+ .count {\r\n\t\t\tmargin-left: 5px;\r\n\t\t}\r\n\t}\r\n} */\n"

/***/ }),

/***/ "./src/app/components/mookie-manage-inventory/mookie-manage-inventory.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/mookie-manage-inventory/mookie-manage-inventory.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: MookieManageInventoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MookieManageInventoryComponent", function() { return MookieManageInventoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_inventory_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/inventory.service */ "./src/app/services/inventory.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MookieManageInventoryComponent = /** @class */ (function () {
    function MookieManageInventoryComponent(inventoryService) {
        this.inventoryService = inventoryService;
        // // Get total inventory from searching and creating inventoryMap
        this.getTotals = function () {
            var _this = this;
            this.inventoryMap = new Map();
            this.currentNames = [];
            this.inventory.forEach(function (item) {
                if (_this.inventoryMap.has(item.itemName)) {
                    _this.inventoryMap.set(item.itemName, _this.inventoryMap.get(item.itemName) + item.itemQty);
                }
                else {
                    _this.inventoryMap.set(item.itemName, item.itemQty);
                }
            });
            this.inventoryMap.forEach(function (v, k, m) {
                _this.inventoryMapZ.push({ name: k, qty: v });
                _this.currentNames.push(k);
            });
        };
        // // customize inventory for display
        this.customizeInventory = function () {
            console.log(this.inventory);
            this.inventory = this.inventory.map(function (item) {
                if (item.itemQty > 0 && !item.olInventory) {
                    item.addInventory = true;
                }
                else if (item.itemQty < 0 && !item.oldInventory) {
                    item.removeInventory = true;
                }
                return item;
            });
            // this.getTotals();
        };
        // // Load inventory for display
        this.loadInventory = function () {
            var _this = this;
            this.inventoryService.getInventory().subscribe(function (data) {
                if (data.success) {
                    _this.inventory = data.inventory.itemInventory;
                    _this.totals = data.inventory.totals;
                    _this.customizeInventory();
                }
                else {
                    // Display general admin error
                }
            });
        };
        // // Update inventory
        this.updateInventory = function () {
            var _this = this;
            if (this.newitem.itemName && this.newItem.itemPrice && this.newItem.itemQty) {
                this.inventoryService.updateInventory(this.newItem).subscribe(function (data) {
                    if (data.success) {
                        _this.inventory = data.inventory.itemInventory;
                        _this.customizeInventory();
                    }
                    else {
                        // display general admin error
                    }
                });
            }
            else {
                // display item not configured error
            }
        };
        // // Remove inventory Update
        this.removeInventoryUpdate = function (itemId) {
            var _this = this;
            var itemData = { itemId: itemId };
            this.inventoryService.removeInventoryUpdate(itemData).subscribe(function (data) {
                if (data.success) {
                    _this.loadInventory();
                }
                else {
                    // display general admin error
                }
            });
        };
        this.newItem = { itemName: '', itemQty: 0, addInventory: false, removeInventory: false, oldInventory: false };
    }
    MookieManageInventoryComponent.prototype.ngOnInit = function () {
        this.inventoryMapZ = [];
        this.loadInventory();
    };
    MookieManageInventoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mookie-manage-inventory',
            template: __webpack_require__(/*! ./mookie-manage-inventory.component.html */ "./src/app/components/mookie-manage-inventory/mookie-manage-inventory.component.html"),
            styles: [__webpack_require__(/*! ./mookie-manage-inventory.component.scss */ "./src/app/components/mookie-manage-inventory/mookie-manage-inventory.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_inventory_service__WEBPACK_IMPORTED_MODULE_1__["InventoryService"]])
    ], MookieManageInventoryComponent);
    return MookieManageInventoryComponent;
}());



/***/ }),

/***/ "./src/app/components/mookie-manage-order/mookie-manage-order.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/mookie-manage-order/mookie-manage-order.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul>\r\n  <li>\r\n    {{order.orderStatus}} {{order.customerReceipt.customerAddress}} {{order.customerReceipt.geometryAddress}}\r\n  </li>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12\">\r\n        <agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" [scrollwheel]=\"false\" [zoom]=\"zoom\">\r\n          <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\">\r\n            <agm-info-window class=\"info-window\" [isOpen]=\"true\">Your location</agm-info-window>\r\n          </agm-marker>\r\n        </agm-map>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"order-message-container\">\r\n    <p class=\"order-message pending\">Mookie Dough Delivery</p>\r\n    <p class=\"order-message\">Customer {{distanceFromUser}} Miles and {{timeFromUser}} Minutes from driver</p>\r\n    <p class=\"order-message\">Customer Contact Number: {{order.userContactNumber}}</p>\r\n\r\n    <div>\r\n      <button *ngIf=\"order.orderStatus === 'Pending'\" class=\"primary\" (click)=\"updateDeliveryStatus('OnTheWay')\">\r\n        <!-- Start delivery, finish delivery -->\r\n        Start Delivery\r\n      </button>\r\n      <button *ngIf=\"order.orderStatus === 'OnTheWay'\" class=\"primary\" (click)=\"updateDeliveryStatus('Completed')\">\r\n        <!-- Start delivery, finish delivery -->\r\n        Finish Delivery\r\n      </button>\r\n\r\n      <button class=\"secondary\">\r\n        Send Message to customer\r\n      </button>\r\n      <button class=\"secondary\" (click)=\"updateCurrentLocation()\">\r\n        Update user on location\r\n      </button>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"receipt mookie-confirm\" *ngIf=\"order.customerReceipt\">\r\n    <div class=\"receipt-header\">\r\n      <div class=\"receipt-header__top\">\r\n        <div class=\"receipt-header__logo\">\r\n        </div>\r\n        <div class=\"receipt-header__meta\">\r\n          <!-- 25.04.2016 -->\r\n          <span class=\"receipt-header__date\">{{order.customerReceipt.created | date:\"MM/dd/yyyy 'at' h:mma\"}}</span>\r\n          <span class=\"receipt-header__serial\">Receipt Number: #{{order.customerReceipt.receiptNumber}} </span>\r\n          <!-- <span class=\"receipt-header__number\">{{order.customerReceipt.receiptNumber}}</span> -->\r\n        </div>\r\n      </div>\r\n      <div class=\"receipt-header__greeting\">\r\n        <span class=\"receipt-header__name\">Hi, {{order.customerReceipt.customerName}}</span>\r\n        <span class=\"receipt-header__count\">You've purchased {{order.customerReceipt.customerCart.products.length}} items in our store.</span>\r\n        <span class=\"receipt-header__border\"></span>\r\n      </div>\r\n      <div class=\"receipt-header__spacing\"></div>\r\n    </div>\r\n\r\n    <section class=\"cart\">\r\n      <h2 class=\"cart__receipt-header\">Cart:</h2>\r\n      <ol class=\"list\">\r\n        <li class=\"list__item\" *ngFor=\"let product of order.customerReceipt.customerCart.products\">\r\n          <span class=\"list__name\">{{product.title}}</span>\r\n          <span class=\"list__price\">{{product.price}}</span>\r\n        </li>\r\n      </ol>\r\n      <hr class=\"cart__hr\" />\r\n      <div class=\"cart__total\">\r\n        <h3 class=\"cart__total-label\">Subtotal</h3>\r\n        <span class=\"cart__total-price\">{{order.customerReceipt.customerCart.subtotal}}</span>\r\n      </div>\r\n      <div class=\"cart__total\">\r\n        <h3 class=\"cart__total-label\">Tax</h3>\r\n        <span class=\"cart__total-price\">{{order.customerReceipt.customerCart.tax}}</span>\r\n      </div>\r\n      <div class=\"cart__total\">\r\n        <h3 class=\"cart__total-label\">Total</h3>\r\n        <span class=\"cart__total-price\">{{order.customerReceipt.customerCart.total}}</span>\r\n      </div>\r\n    </section>\r\n\r\n  </div>\r\n\r\n\r\n</ul>"

/***/ }),

/***/ "./src/app/components/mookie-manage-order/mookie-manage-order.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/components/mookie-manage-order/mookie-manage-order.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".order-frame {\n  position: absolute;\n  left: 50%;\n  top: 15%; }\n\n.receipt {\n  background: #ff84a1;\n  color: #3a3e59;\n  font-family: 'Raleway', Arial, sans-serif;\n  max-width: 400px;\n  margin: 5vh auto 0 auto;\n  transition: .3s;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2); }\n\n.receipt .hoverable {\n  transition: .3s;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2); }\n\n.receipt .hoverable:hover {\n  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3); }\n\n/* receipt header styles */\n\n.receipt-header {\n  width: 100%; }\n\n.receipt-header__top {\n  display: flex;\n  align-items: center;\n  background: white;\n  width: 100%;\n  border-radius: 4px 4px 0 0; }\n\n.receipt-header__logo {\n  width: 10%;\n  padding: 30px;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 viewBox%3D%220 0 319.6 319.6%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill%3Anone%3Bstroke%3A%23000%3Bstroke-miterlimit%3A10%3Bstroke-width%3A3px%3Bstroke-dasharray%3A12.13 12.13%3B%7D%3C%2Fstyle%3E%3C%2Fdefs%3E%3Ctitle%3Emookie good cart%3C%2Ftitle%3E%3Cg id%3D%22Layer_2%22 data-name%3D%22Layer 2%22%3E%3Cg id%3D%22Layer_3%22 data-name%3D%22Layer 3%22%3E%3Cg id%3D%22Layer_2-2%22 data-name%3D%22Layer 2%22%3E%3Cg id%3D%22TEMPLATE_-_This_layer_DOES_NOT_PRINT%22 data-name%3D%22TEMPLATE - This layer DOES NOT PRINT%22%3E%3Cpath d%3D%22M244.2%2C201.13c-1.17-4.17-2.29-8.26-3.23-12.57A240.3%2C240.3%2C0%2C0%2C1%2C235%2C148a49.1%2C49.1%2C0%2C0%2C0%2C.39%2C11%2C272.26%2C272.26%2C0%2C0%2C0%2C7.28%2C42.33%2C2.61%2C2.61%2C0%2C0%2C1-.26%2C2.45%2C36.41%2C36.41%2C0%2C0%2C1-3.79%2C5.43%2C138.25%2C138.25%2C0%2C0%2C1-15.33%2C13.9q-2.61%2C1.77-5%2C3.79a2.79%2C2.79%2C0%2C0%2C1-2.66.91A115%2C115%2C0%2C0%2C0%2C204%2C226.54c-1.6-.09-.61-1-.61-1.68a206%2C206%2C0%2C0%2C0%2C7.37-40.3c.08-1.94.43-3.06-2.41-3.57a187.31%2C187.31%2C0%2C0%2C0-43.32-3.15%2C88%2C88%2C0%2C0%2C0-31.08%2C7%2C42.52%2C42.52%2C0%2C0%2C0-8.61%2C5.59c24.15-14.29%2C50.2-11.84%2C76.37-8.18a260.69%2C260.69%2C0%2C0%2C0-27.08%2C5.47c-6%2C1.64-12.09%2C2.54-18.08%2C4.05a129.84%2C129.84%2C0%2C0%2C0-23.34%2C6.84%2C43.57%2C43.57%2C0%2C0%2C0%2C8.62-1.63c14.89-3.19%2C29.88-6%2C44.73-9.39%2C5.9-1.33%2C11.84-2.58%2C17.78-3.74%2C3.7-.78%2C4.31%2C0%2C4.31%2C3.53a10%2C10%2C0%2C0%2C1%2C0%2C1.55%2C254.71%2C254.71%2C0%2C0%2C1-7.88%2C38.75c-.3%2C1.2-.73%2C1.2-1.81%2C1.2a79.71%2C79.71%2C0%2C0%2C0-12%2C0%2C161.68%2C161.68%2C0%2C0%2C0-26.31%2C5.34c-5.46%2C1.46-10.93%2C2.93-16.44%2C4A13.17%2C13.17%2C0%2C0%2C1%2C130.83%2C233a51.1%2C51.1%2C0%2C0%2C1-7.66-15.54c-1.77-4.61-3-9.3-4.31-13.95%2C2.37%2C11.66%2C4.61%2C23.33%2C12.66%2C32.93h-.82c-6.45%2C0-12.74%2C1.81-19.2%2C2.24a3.62%2C3.62%2C0%2C0%2C1-2.32-.64c-2.46-1.81-5.17-3.28-7.54-5.3a127.94%2C127.94%2C0%2C0%2C1-18.85-21.53%2C101%2C101%2C0%2C0%2C1-10.21-15.67%2C2.65%2C2.65%2C0%2C0%2C1%2C0-2.45%2C115.34%2C115.34%2C0%2C0%2C0%2C8.22-37c.52-5.64-.6-11.45%2C1.38-17-2%2C3.4-3.92%2C6.88-6%2C10.24A78.45%2C78.45%2C0%2C0%2C1%2C61.65%2C167a17.24%2C17.24%2C0%2C0%2C1-14.13%2C4.91%2C38.07%2C38.07%2C0%2C0%2C1-11.84-2.32c-4.22-1.94-4.65-5.21-1.16-8.23a77.13%2C77.13%2C0%2C0%2C1%2C10-6.71c6-3.75%2C12.79-6.55%2C18.94-10.29a88.14%2C88.14%2C0%2C0%2C0%2C18.09-12.06%2C7.56%2C7.56%2C0%2C0%2C0%2C2.15-2.88%2C45.59%2C45.59%2C0%2C0%2C1-9.34%2C7.19c-6.25%2C3.91-13.18%2C6.67-19.64%2C10.33a145.42%2C145.42%2C0%2C0%2C0-18.47%2C10.16%2C20.78%2C20.78%2C0%2C0%2C0-6.46%2C6.2v3.87a12.54%2C12.54%2C0%2C0%2C0%2C9%2C5.43%2C79.2%2C79.2%2C0%2C0%2C0%2C10.07%2C1.16A17%2C17%2C0%2C0%2C0%2C60.61%2C170a45.26%2C45.26%2C0%2C0%2C0%2C5.81-5.34A89.49%2C89.49%2C0%2C0%2C0%2C79.34%2C146c.47-.81.35-2%2C1.64-2.62a26.37%2C26.37%2C0%2C0%2C0-.26%2C4.3c-.65%2C6.16-1.38%2C12.32-2.5%2C18.39A93.85%2C93.85%2C0%2C0%2C1%2C71%2C191a6.43%2C6.43%2C0%2C0%2C0%2C0%2C6.76A163.94%2C163.94%2C0%2C0%2C0%2C95.1%2C229.16a59.44%2C59.44%2C0%2C0%2C0%2C14%2C10.51c-.46.23-.94.43-1.41.64%2C2.11%2C0%2C4.21%2C0%2C6.31%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C.17-.9%2C1.07-.6%2C1.68-.6l15.45-2.88a2.44%2C2.44%2C0%2C0%2C1%2C2.71.73%2C8.67%2C8.67%2C0%2C0%2C0%2C5.9%2C2.07%2C38%2C38%2C0%2C0%2C0%2C9-.56%2C16%2C16%2C0%2C0%2C1%2C2.19%2C0%2C13.08%2C13.08%2C0%2C0%2C1%2C3.88-1.11%2C6.55%2C6.55%2C0%2C0%2C1%2C.63-.19%2C2.17%2C2.17%2C0%2C0%2C1-.24-.44v0a154.74%2C154.74%2C0%2C0%2C1%2C29.37-5.67%2C10.6%2C10.6%2C0%2C0%2C1%2C4.3-1.12%2C3.54%2C3.54%2C0%2C0%2C1%2C2%2C.64h.1l-.06%2C0a3.07%2C3.07%2C0%2C0%2C1%2C.47.41l1.36-.91c1-.56%2C2.28%2C0%2C3.44%2C0a20.15%2C20.15%2C0%2C0%2C1%2C4%2C.3c1%2C.13%2C1.94%2C0%2C2.24-1s1.19-.36%2C2-.35c-.06.11-.12.2-.18.29l.67-.15a3.39%2C3.39%2C0%2C0%2C1%2C2.41.28%2C3.14%2C3.14%2C0%2C0%2C1%2C1.28.63c.86-.16%2C1.72-.3%2C2.58-.4a3.19%2C3.19%2C0%2C0%2C1-.54-.56c1.71%2C0%2C3.42.12%2C5.12.3a5.88%2C5.88%2C0%2C0%2C0%2C5.43-2.28%2C22.83%2C22.83%2C0%2C0%2C1%2C2.54-2.37A129.74%2C129.74%2C0%2C0%2C0%2C239.33%2C211a32.24%2C32.24%2C0%2C0%2C0%2C4.61-6.67A4%2C4%2C0%2C0%2C0%2C244.2%2C201.13Z%22%2F%3E%3Cpath d%3D%22M197.14%2C68.87a64.62%2C64.62%2C0%2C0%2C1%2C12.91%2C4.31%2C43.79%2C43.79%2C0%2C0%2C1%2C14.86%2C10.46%2C29.17%2C29.17%2C0%2C0%2C1%2C4.73%2C28.5%2C22.08%2C22.08%2C0%2C0%2C1-10%2C13.35%2C14.18%2C14.18%2C0%2C0%2C1-9.25%2C1.33l-3.15-.38a23.91%2C23.91%2C0%2C0%2C1%2C1.29%2C16.36%2C103.51%2C103.51%2C0%2C0%2C0-1.67-10.34%2C18.07%2C18.07%2C0%2C0%2C0-3.92-7.92%2C9.51%2C9.51%2C0%2C0%2C0-10.16-2.45l-1.73.51h-.34a12.07%2C12.07%2C0%2C0%2C1%2C7.66-2.67c-2.06-5.77-2.06-5.77-.43-12.91a22.62%2C22.62%2C0%2C0%2C1-9.9-2.28c-.3-.22-.69%2C0-.95.3a85.82%2C85.82%2C0%2C0%2C1-11.15%2C9.43%2C30.15%2C30.15%2C0%2C0%2C1-15.15%2C6.84%2C43.66%2C43.66%2C0%2C0%2C0%2C7.4-2.93%2C66.38%2C66.38%2C0%2C0%2C0%2C16.71-14.12c2-2.41%2C4.3-4.82%2C6.28-7.1%2C1.47-1.55.78-2.54-.43-3.62a22.53%2C22.53%2C0%2C0%2C0-18.9-5.47%2C38.27%2C38.27%2C0%2C0%2C0-15.67%2C5.64A116.24%2C116.24%2C0%2C0%2C0%2C142%2C103.79a35.75%2C35.75%2C0%2C0%2C0-3%2C3.14c-1%2C1.08-1.63.56-2.28-.26a3.3%2C3.3%2C0%2C0%2C1-.17-3.66%2C11.74%2C11.74%2C0%2C0%2C1%2C3.14-4q7.2-6.17%2C15-11.58c1.34-1%2C3.36-2.07%2C2.89-3.79s-2.71-1.5-4.31-1.76a19.08%2C19.08%2C0%2C0%2C0-15%2C3.1A44.18%2C44.18%2C0%2C0%2C0%2C129%2C92.59a70.09%2C70.09%2C0%2C0%2C0-9.18%2C12.92%2C10.12%2C10.12%2C0%2C0%2C1%2C1.47-6.59c1.29-2.45%2C2.67-4.86%2C4-7.36.35-.64%2C1-1.59%2C0-2.15s-1.07.26-1.85.69a11.54%2C11.54%2C0%2C0%2C0-2.67%2C4.3A109.54%2C109.54%2C0%2C0%2C0%2C116.5%2C106a9.79%2C9.79%2C0%2C0%2C1-6.63%2C6.59c.6%2C1.08%2C1.89%2C1.38%2C2.45%2C2.28a5.42%2C5.42%2C0%2C0%2C1%2C.39%2C5.39%2C23.46%2C23.46%2C0%2C0%2C1-6.2%2C8.61c-5%2C4-10.33%2C4.3-18%2C.47a14.86%2C14.86%2C0%2C0%2C1-7.32-15.5%2C43.06%2C43.06%2C0%2C0%2C1%2C7-17.91%2C50.2%2C50.2%2C0%2C0%2C1%2C12.61-12.1A14%2C14%2C0%2C0%2C1%2C105.47%2C82c1.47-.39%2C1.47%2C0%2C1.12%2C1.29A42%2C42%2C0%2C0%2C0%2C104%2C99.53a19.49%2C19.49%2C0%2C0%2C0%2C3.66%2C10.89%2C1.72%2C1.72%2C0%2C0%2C0%2C2.27.88%2C1.75%2C1.75%2C0%2C0%2C0%2C.48-.32%2C9.66%2C9.66%2C0%2C0%2C0%2C4.31-6.46%2C48.27%2C48.27%2C0%2C0%2C1%2C4.56-12.92%2C9.81%2C9.81%2C0%2C0%2C1%2C3.49-4%2C3.5%2C3.5%2C0%2C0%2C1%2C4.31%2C0c1.37%2C1.12.9%2C2.5.34%2C3.83%2C0%2C.26-.39.48%2C0%2C.91a79.66%2C79.66%2C0%2C0%2C1%2C8.14-7.66%2C21.5%2C21.5%2C0%2C0%2C1%2C18.85-4.65%2C20.3%2C20.3%2C0%2C0%2C1%2C2.76.81c2.88%2C1%2C3.44%2C2.89%2C1.59%2C5.39a20.66%2C20.66%2C0%2C0%2C1-4.35%2C3.83l-11.75%2C9.34a7%2C7%2C0%2C0%2C0-1.89%2C2.15c3-2.15%2C6.11-4.3%2C9-6.46a45.78%2C45.78%2C0%2C0%2C1%2C18.56-8.61%2C24.88%2C24.88%2C0%2C0%2C1%2C24.84%2C6.55c2%2C2.11%2C2.07%2C2.28%2C0%2C4.3s-2.71%2C3.53-4.3%2C5.64a18.73%2C18.73%2C0%2C0%2C1%2C7.23%2C1c2.28%2C1.2%2C3.62.86%2C4.87-1.47a21.08%2C21.08%2C0%2C0%2C1%2C3.18-3.87%2C17.21%2C17.21%2C0%2C0%2C0%2C2.28-22.39%2C16.77%2C16.77%2C0%2C0%2C0-8.95-6.63%2C1.35%2C1.35%2C0%2C0%2C1-1-.82Zm6.54%2C2.8a24.86%2C24.86%2C0%2C0%2C1%2C4.87%2C6%2C15.86%2C15.86%2C0%2C0%2C1%2C2.41%2C11%2C21.49%2C21.49%2C0%2C0%2C1-6.68%2C12.91%2C20.72%2C20.72%2C0%2C0%2C0-4.65%2C7.41%2C10.46%2C10.46%2C0%2C0%2C0%2C2.16%2C11c4%2C5.08%2C15.58%2C4.65%2C19.54%2C1.25A21.84%2C21.84%2C0%2C0%2C0%2C227.58%2C111a26.08%2C26.08%2C0%2C0%2C0-4.87-27.42A49.25%2C49.25%2C0%2C0%2C0%2C203.68%2C71.67ZM106.42%2C82.61a5.66%2C5.66%2C0%2C0%2C0-3.79%2C1.24A49.35%2C49.35%2C0%2C0%2C0%2C90.28%2C96.17a40%2C40%2C0%2C0%2C0-6.72%2C18%2C13.78%2C13.78%2C0%2C0%2C0%2C17.22%2C14.77c5.25-.94%2C8-5.64%2C10.16-10.24a1.8%2C1.8%2C0%2C0%2C0-.26-2.24%2C18.36%2C18.36%2C0%2C0%2C1-2.49-2.72%2C17.93%2C17.93%2C0%2C0%2C1-5.47-11.58A40.7%2C40.7%2C0%2C0%2C1%2C106.42%2C82.61Z%22%2F%3E%3Cpath d%3D%22M227.23%2C120.58a54.27%2C54.27%2C0%2C0%2C0%2C16.58%2C12.57c6.89%2C4.31%2C14.29%2C7.45%2C21.27%2C11.54a94.81%2C94.81%2C0%2C0%2C1%2C11.84%2C7.49c4.3%2C3.4%2C3.66%2C7.54-1.25%2C9.6a32.7%2C32.7%2C0%2C0%2C1-17.95%2C1.94%2C22.17%2C22.17%2C0%2C0%2C1-12-7.88l-2.92-3.27a90.69%2C90.69%2C0%2C0%2C1-13.91-21.79c2.54%2C3.1%2C4.3%2C6.68%2C6.59%2C9.91a114.54%2C114.54%2C0%2C0%2C0%2C13.64%2C15.63%2C19.85%2C19.85%2C0%2C0%2C0%2C18.82%2C5%2C27%2C27%2C0%2C0%2C0%2C7-1.77c3.1-1.46%2C3.36-3.27.73-5.47a90.66%2C90.66%2C0%2C0%2C0-10-6.41c-6.37-4-13.26-7.19-19.64-11.24a106.61%2C106.61%2C0%2C0%2C1-14.12-9.73A20.15%2C20.15%2C0%2C0%2C1%2C227.23%2C120.58Z%22%2F%3E%3Cpath d%3D%22M200.84%2C171c.22-3.14%2C0-6.24%2C0-9.34a88.55%2C88.55%2C0%2C0%2C0-1.46-16.49c-.26-1.17-.39-3-1.68-3.06s-2%2C1.68-2.37%2C3.06a73.76%2C73.76%2C0%2C0%2C0-.69%2C20.45%2C24.67%2C24.67%2C0%2C0%2C0%2C.35%2C5h-.61A46.42%2C46.42%2C0%2C0%2C1%2C191%2C144a9.48%2C9.48%2C0%2C0%2C1%2C2.28-4.31%2C5.44%2C5.44%2C0%2C0%2C1%2C7.61-1%2C5.37%2C5.37%2C0%2C0%2C1%2C1.69%2C2.2%2C22.13%2C22.13%2C0%2C0%2C1%2C1.9%2C10.37%2C61.68%2C61.68%2C0%2C0%2C1-2.07%2C17.48%2C9.25%2C9.25%2C0%2C0%2C1-.9%2C2.67Z%22%2F%3E%3Cpath d%3D%22M114.26%2C176.21A20.59%2C20.59%2C0%2C0%2C1%2C111%2C155.58a6%2C6%2C0%2C0%2C1%2C5.64-3.27%2C5.64%2C5.64%2C0%2C0%2C1%2C5.29%2C3.36%2C24.94%2C24.94%2C0%2C0%2C1%2C1%2C18.08%2C11.65%2C11.65%2C0%2C0%2C1-1.85%2C4.82c0-2.23-.3-4-.39-5.72a44.65%2C44.65%2C0%2C0%2C0-1.46-12c-.43-1.43-.78-3.41-2.67-3.32s-2.41%2C1.81-2.76%2C3.49a42.67%2C42.67%2C0%2C0%2C0%2C.65%2C14C114.47%2C175.39%2C114.77%2C175.73%2C114.26%2C176.21Z%22%2F%3E%3Cpath d%3D%22M101.9%2C155.2a13.44%2C13.44%2C0%2C0%2C1-1.59-5.95%2C29.14%2C29.14%2C0%2C0%2C1%2C2.41-14.68%2C10.25%2C10.25%2C0%2C0%2C1%2C12.92-5.72c-1.38.21-2.63.34-3.84.64a9.94%2C9.94%2C0%2C0%2C0-6.84%2C6%2C40.58%2C40.58%2C0%2C0%2C0-3.06%2C17Z%22%2F%3E%3Cpath d%3D%22M141.68%2C204.41a30.13%2C30.13%2C0%2C0%2C0-15.71.47%2C21.1%2C21.1%2C0%2C0%2C0%2C6.28%2C5.77c-3.05-.69-6.28-1.08-8.13-4.05-1.21-1.89-.91-3.27%2C1.2-4A18.69%2C18.69%2C0%2C0%2C1%2C141.68%2C204.41Z%22%2F%3E%3Cpath d%3D%22M198.43%2C200.23c1.55-1.29%2C2.88-2.15%2C3.14-4s-.34-2.46-2-2.59a41.11%2C41.11%2C0%2C0%2C0-10.25%2C1.08l-2.28.39a16.74%2C16.74%2C0%2C0%2C1%2C14.72-3.36%2C4.31%2C4.31%2C0%2C0%2C1%2C1.33%2C5.94%2C4%2C4%2C0%2C0%2C1-.46.6C201.74%2C199.46%2C200.84%2C199.84%2C198.43%2C200.23Z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3Ccircle class%3D%22cls-1%22 cx%3D%22159.8%22 cy%3D%22159.8%22 r%3D%22158.3%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E\"); }\n\n.receipt-header__meta {\n  position: relative;\n  width: 90%;\n  height: 100%;\n  margin-left: 15px;\n  line-height: 1.7rem;\n  opacity: .3; }\n\n.receipt-header__serial {\n  display: block; }\n\n.receipt-header__number {\n  position: absolute;\n  top: 15px / 2;\n  right: 0;\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n  opacity: .2; }\n\n.receipt-header__greeting {\n  clear: both; }\n\n/* // Greeting styles */\n\n.receipt-header__greeting {\n  position: relative;\n  background: white;\n  padding: 0 15px;\n  padding-left: 30px; }\n\n.receipt-header__name {\n  display: block;\n  font-weight: bold;\n  font-size: 1.3rem;\n  margin-bottom: 15px / 2; }\n\n.receipt-header__count {\n  opacity: .4;\n  font-size: 90%; }\n\n.receipt-header__border {\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 100%;\n  width: 3px;\n  background-color: #429fff; }\n\n.receipt-header__spacing {\n  display: block;\n  background: white;\n  width: 100%;\n  height: 22.5px; }\n\n/* // Cart styles */\n\n.cart {\n  background: white;\n  padding: 30px;\n  padding-top: 15px;\n  border-bottom: 2px dashed #333333;\n  border-radius: 0 0 5px 5px; }\n\n.cart__receipt-header {\n  margin-top: 0;\n  text-align: center; }\n\n.cart__hr {\n  border: none;\n  padding: 0;\n  margin: 0;\n  margin-bottom: 30px;\n  border-bottom: 3px solid #333333; }\n\n.list {\n  margin: 0;\n  padding: 0;\n  counter-reset: item-counter; }\n\n.list__item {\n  display: flex;\n  width: 100%;\n  padding-top: 30px;\n  padding-bottom: 30px;\n  border-bottom: 1px dashed rgba(0, 0, 0, 0.1); }\n\n.list__item:last-child {\n  border-bottom: none; }\n\n.list__item:before {\n  content: counter(item-counter);\n  counter-increment: item-counter;\n  margin-right: 15px; }\n\n.list__name {\n  flex: 1;\n  align-self: flex-start; }\n\n.list__price {\n  align-self: flex-end;\n  text-align: right;\n  font-weight: bold; }\n\n.cart__total {\n  display: flex;\n  width: 100%; }\n\n.cart__total-label {\n  margin: 0;\n  flex: 1;\n  text-transform: uppercase; }\n\n.cart__total-price {\n  align-self: flex-end;\n  font-weight: bold;\n  text-align: right; }\n\n@-webkit-keyframes glow {\n  to {\n    text-shadow: 0 0 10px orangered; } }\n\n@keyframes glow {\n  to {\n    text-shadow: 0 0 10px orangered; } }\n\n.order-message.pending {\n  color: #333333;\n  -webkit-animation: glow .5s infinite alternate;\n          animation: glow .5s infinite alternate;\n  font-family: sans-serif;\n  font-size: 36px;\n  font-weight: bold; }\n\n.order-message-container {\n  padding-top: 20px;\n  width: 100%;\n  text-align: center;\n  vertical-align: center; }\n"

/***/ }),

/***/ "./src/app/components/mookie-manage-order/mookie-manage-order.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/mookie-manage-order/mookie-manage-order.component.ts ***!
  \*********************************************************************************/
/*! exports provided: MookieManageOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MookieManageOrderComponent", function() { return MookieManageOrderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/order.service */ "./src/app/services/order.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MookieManageOrderComponent = /** @class */ (function () {
    function MookieManageOrderComponent(orderService, activatedRoute, mapsLoader, mapsWrapper) {
        this.orderService = orderService;
        this.activatedRoute = activatedRoute;
        this.mapsLoader = mapsLoader;
        this.mapsWrapper = mapsWrapper;
        this.updateDriverLocation = function (pos) {
            var coords = pos.coords;
            this.deliveryStatuses = ['Pending', 'OutForOrders', 'OnTheWay', 'Completed'];
            // Set order Id as well to get order from route
            var orderData = { lat: coords.latitude, lng: coords.longitude, order: this.order._id };
            this.orderService.updateDriverLocation(orderData).subscribe(function (data) {
                if (data.success) {
                    // update admin on success
                }
                else {
                    //update admin on failure
                }
            });
        };
        this.handleErr = function (err) {
            console.log('position could not be set');
            console.log(err);
        };
        this.updateCurrentLocation = function () {
            if ("geolocation" in navigator) {
                navigator.geolocation.getCurrentPosition(this.updateDriverLocation, this.handleErr, { timeout: 500, maximumAge: Infinity }); //Did not work with option enableHighAccuracy set to true
            }
        };
        //         // Updated order Delivery status
        this.updateDeliveryStatus = function (status) {
            var _this = this;
            var orderData = { orderStatus: status, orderId: this.order._id };
            this.orderService.updateDeliveryStatus(orderData).subscribe(function (data) {
                if (data.success) {
                    _this.order.orderStatus = status;
                }
                else {
                    // display genreal admin error
                }
            });
        };
    }
    MookieManageOrderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.zoom = 14;
        this.distanceFromUser = "";
        this.timeFromUser = "";
        this.longitude = -122.15756340000002;
        this.latitude = 37.4266083;
        this.order = { customerReceipt: { customerCart: { products: [] } } };
        // Get param
        this.order$ = this.activatedRoute.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (params) {
            return _this.orderService.getOrder({ orderId: params.get('orderId') });
        }));
        this.order$.subscribe(function (data) {
            if (data.success) {
                if (data.order) {
                    _this.order = data.order;
                    _this.latitude = _this.order.customerReceipt.geometryAddress.lat;
                    _this.longitude = _this.order.customerReceipt.geometryAddress.lng;
                    _this.mapsWrapper.getNativeMap().then(function (map) {
                        var directionsService = new google.maps.DirectionsService();
                        _this.directionsDisplay = new google.maps.DirectionsRenderer;
                        _this.directionsDisplay.setMap(map);
                        _this.directionsDisplay.setOptions({
                            polylineOptions: {
                                strokeWeight: 8,
                                strokeOpacity: 0.7,
                                strokeColor: '#00468c'
                            }
                        });
                        var request = {
                            origin: new google.maps.LatLng(_this.order.currentDriverLocation.lat, _this.order.currentDriverLocation.lng),
                            destination: new google.maps.LatLng(_this.order.customerReceipt.geometryAddress.lat, _this.order.customerReceipt.geometryAddress.lng)
                        };
                        directionsService.route(request, function (result, status) {
                            console.log(result);
                            console.log(status);
                            if (status.toString() === 'OK') {
                                this.directionsDisplay.setDirections(result);
                                var route = result.routes[0];
                                // for (var i = 0; i < route.legs.length; i++) {
                                //   // ("123 hello everybody 4").replace(/(^\d+)(.+$)/i,'$1'); //=> '123' regex to first integer from string
                                //   // replace(/[^0-9.]/g, ""); Regex to get only numbers from string
                                //   // scope.manager.distanceFromUser += route.legs[i].distance.text.replace(/[^0-9.]/g, "");//Possibly to count up total time
                                // }
                                this.distanceFromUser = route.legs[0].distance.text.replace(/[^0-9.]/g, "");
                                this.timeFromUser = route.legs[0].duration.text.replace(/[^0-9.]/g, "");
                            }
                        });
                    });
                }
            }
            else {
                // Display general admin error
            }
        });
    };
    MookieManageOrderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mookie-manage-order',
            template: __webpack_require__(/*! ./mookie-manage-order.component.html */ "./src/app/components/mookie-manage-order/mookie-manage-order.component.html"),
            styles: [__webpack_require__(/*! ./mookie-manage-order.component.scss */ "./src/app/components/mookie-manage-order/mookie-manage-order.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_order_service__WEBPACK_IMPORTED_MODULE_1__["OrderService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _agm_core__WEBPACK_IMPORTED_MODULE_4__["MapsAPILoader"], _agm_core__WEBPACK_IMPORTED_MODULE_4__["GoogleMapsAPIWrapper"]])
    ], MookieManageOrderComponent);
    return MookieManageOrderComponent;
}());

//         // //Tracking users position
//         // watchId = navigator.geolocation.watchPosition(
//         //     processGeolocation,
//         //     // Optional settings below
//         //     geolocationError,
//         //     {
//         //         timeout: 0,
//         //         enableHighAccuracy: true,
//         //         maximumAge: Infinity
//         //     }
//         // );


/***/ }),

/***/ "./src/app/components/mookie-manage-orders/mookie-manage-orders.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/components/mookie-manage-orders/mookie-manage-orders.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n      <h3> Current Orders</h3>\r\n      <ul *ngFor=\"let order of orders\">\r\n        <li>\r\n          {{order.orderStatus}}\r\n        </li>\r\n        <li>\r\n          <!-- link to oder -->\r\n          <a [routerLink]=\"'/management/currentorders/order/'+ order._id\">Order Link</a>\r\n        </li>\r\n        <li *ngFor=\"let product of order.customerReceipt.customerCart.products\">\r\n          <p>{{product.title}}</p>\r\n          <p>{{product.price}}</p>\r\n          <p>{{product._id}}</p>\r\n        </li>\r\n        <li>\r\n          {{order.customerReceipt.customerCart.user.username}}\r\n        </li>\r\n      </ul>\r\n\r\n      <!-- For a current order I want to have to users name or guest id maybe, time of the order, address, information, payment, everything -->\r\n\r\n\r\n    </div>\r\n    <div class=\"col-xs-12\">\r\n      <h3>Previous Orders</h3>\r\n      <!-- For past orders do the same thing as current  -->\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/components/mookie-manage-orders/mookie-manage-orders.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/components/mookie-manage-orders/mookie-manage-orders.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/mookie-manage-orders/mookie-manage-orders.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/mookie-manage-orders/mookie-manage-orders.component.ts ***!
  \***********************************************************************************/
/*! exports provided: MookieManageOrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MookieManageOrdersComponent", function() { return MookieManageOrdersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/order.service */ "./src/app/services/order.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MookieManageOrdersComponent = /** @class */ (function () {
    function MookieManageOrdersComponent(orderService) {
        this.orderService = orderService;
        this.getOrders = function () {
            var _this = this;
            this.orderService.getCurrentOrders().subscribe(function (data) {
                if (data.success) {
                    _this.orders = data.orders;
                }
                else {
                    // display general admin error
                }
            });
        };
    }
    MookieManageOrdersComponent.prototype.ngOnInit = function () {
        this.getOrders();
    };
    MookieManageOrdersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mookie-manage-orders',
            template: __webpack_require__(/*! ./mookie-manage-orders.component.html */ "./src/app/components/mookie-manage-orders/mookie-manage-orders.component.html"),
            styles: [__webpack_require__(/*! ./mookie-manage-orders.component.scss */ "./src/app/components/mookie-manage-orders/mookie-manage-orders.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_order_service__WEBPACK_IMPORTED_MODULE_1__["OrderService"]])
    ], MookieManageOrdersComponent);
    return MookieManageOrdersComponent;
}());



/***/ }),

/***/ "./src/app/components/mookie-manage-users/mookie-manage-users.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/mookie-manage-users/mookie-manage-users.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n            <h1>Users</h1>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n    \r\n        <div class=\"col-md-6\" *ngFor=\"let user of users\">\r\n    \r\n            <h1>username: {{user.username}}</h1>\r\n            <h3>email: {{user.email}}</h3>\r\n            <h3>permission: {{user.permission}}</h3>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/mookie-manage-users/mookie-manage-users.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/components/mookie-manage-users/mookie-manage-users.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/mookie-manage-users/mookie-manage-users.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/mookie-manage-users/mookie-manage-users.component.ts ***!
  \*********************************************************************************/
/*! exports provided: MookieManageUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MookieManageUsersComponent", function() { return MookieManageUsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MookieManageUsersComponent = /** @class */ (function () {
    function MookieManageUsersComponent(userService) {
        this.userService = userService;
        // Get Users for Management
        this.getUsers = function () {
            var _this = this;
            this.userService.getUsers().subscribe(function (data) {
                if (data.success) {
                    _this.users = data.users;
                }
                else {
                    // display general admin error
                }
            });
        };
    }
    MookieManageUsersComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    MookieManageUsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mookie-manage-users',
            template: __webpack_require__(/*! ./mookie-manage-users.component.html */ "./src/app/components/mookie-manage-users/mookie-manage-users.component.html"),
            styles: [__webpack_require__(/*! ./mookie-manage-users.component.scss */ "./src/app/components/mookie-manage-users/mookie-manage-users.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], MookieManageUsersComponent);
    return MookieManageUsersComponent;
}());

// var manage = this;
// //$scope.mookie
// //Get Product Catalog
// $scope.mookie.getProductsFromServer(function (catalogProducts) {
//     manage.products = catalogProducts;
// });
// //Get Subscriptions
// $scope.mookie.getSubscribers(function (subscribers) {
//     manage.subscribers = subscribers;
// });
// //Get ContactMessages
// $scope.mookie.getContactMessages(function (contactMessages) {
//     manage.contactMessages = contactMessages;
// });
// // 
// manage.getCurrentOrders = function () {
//     console.log('getting orders');
//     orderService.getCurrentOrders().then(function (data) {
//         console.log(data.data.orders);
//         console.log(data);
//         manage.orders = data.data.orders;
//     }, function (err) {
//         console.log('error geeting orders');
//         console.log(err);
//     });
// };
// manage.getCurrentOrders();


/***/ }),

/***/ "./src/app/components/mookie-manage/mookie-manage.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/mookie-manage/mookie-manage.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row admin-frame\">\r\n  <ul class=\"admin-menu\">\r\n    <li>\r\n      <a routerLink=\"/management/users\">\r\n        User Management\r\n      </a>\r\n    </li>\r\n    <li>\r\n      <a routerLink=\"/management/currentorders\">\r\n        Current Orders\r\n      </a>\r\n    </li>\r\n    <li>\r\n      <a routerLink=\"/management/inventory\">\r\n        Manage Inventory\r\n      </a>\r\n    </li>\r\n    <li>\r\n      <a routerLink=\"/management/products\">\r\n        Product Management\r\n      </a>\r\n    </li>\r\n    <li>\r\n      <a routerLink=\"/management/pressrelease\">\r\n        Press Releases\r\n      </a>\r\n    </li>\r\n    <li>\r\n      <a routerLink=\"/management/payments\">\r\n        Payments\r\n      </a>\r\n    </li>\r\n    <li>\r\n      <a routerLink=\"/management/otherdata\">\r\n        Other Data\r\n      </a>\r\n    </li>\r\n  </ul>\r\n</div>\r\n\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/mookie-manage/mookie-manage.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/mookie-manage/mookie-manage.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".admin-frame {\n  position: relative;\n  width: 100%;\n  padding-left: 15px; }\n\n.admin-menu {\n  color: black;\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  position: relative; }\n\n.admin-menu li > a {\n  display: block;\n  color: #606060;\n  font-size: 14px;\n  font-weight: 800;\n  text-transform: uppercase;\n  text-decoration: none; }\n\n.admin-menu > li {\n  display: inline-block;\n  position: relative; }\n\n@media screen and (max-width: 858px) {\n  .admin-menu > li {\n    padding-bottom: 20px; }\n  .admin-menu > li > a {\n    padding-right: 10px;\n    font-size: 10px; } }\n\n.admin-menu > li > a {\n  /* line-height: 78px; */\n  padding-right: 30px; }\n\n.admin-menu > li.menu-item-has-children > a:after {\n  display: inline-block;\n  vertical-align: middle;\n  font-family: 'Material Icons';\n  content: \"\\e5c5\";\n  font-size: 1.2em;\n  margin-left: 1px;\n  margin-top: -2px;\n  -webkit-transform: rotate(0);\n  transform: rotate(0);\n  transition: -webkit-transform 0.3s;\n  transition: transform 0.3s;\n  transition: transform 0.3s, -webkit-transform 0.3s; }\n\n.admin-menu > li:hover .sub-menu {\n  display: block;\n  -webkit-animation: slideUp 0.4s;\n  animation: slideUp 0.4s; }\n\n@-webkit-keyframes slideUp {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 15px, 0);\n    transform: translate3d(0, 15px, 0); }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n\n@keyframes slideUp {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 15px, 0);\n    transform: translate3d(0, 15px, 0); }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n"

/***/ }),

/***/ "./src/app/components/mookie-manage/mookie-manage.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/mookie-manage/mookie-manage.component.ts ***!
  \*********************************************************************/
/*! exports provided: MookieManageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MookieManageComponent", function() { return MookieManageComponent; });
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

var MookieManageComponent = /** @class */ (function () {
    function MookieManageComponent() {
    }
    MookieManageComponent.prototype.ngOnInit = function () {
    };
    MookieManageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mookie-manage',
            template: __webpack_require__(/*! ./mookie-manage.component.html */ "./src/app/components/mookie-manage/mookie-manage.component.html"),
            styles: [__webpack_require__(/*! ./mookie-manage.component.scss */ "./src/app/components/mookie-manage/mookie-manage.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MookieManageComponent);
    return MookieManageComponent;
}());



/***/ }),

/***/ "./src/app/components/mookie-menu/mookie-menu.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/mookie-menu/mookie-menu.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"mainWrapper\" class=\"container\">\r\n\r\n\t<h1 style=\"text-align:center;font-family:'Lato\" class=\"logo-style\">Mookie Dough Delivery Coming soon</h1>\r\n\t<section class=\"row\">\r\n\t\t<div class=\"product-card col-xs-12 col-sm-6 col-md-4 col-lg-3 product-shadow\" *ngFor=\"let catalogProduct of products\">\r\n\t\t\t<figure class=\"snip1418\">\r\n\t\t\t\t<p [ngClass]=\"{'inStock': catalogProduct.inStock == 'In Stock', 'notInStock': catalogProduct.inStock == 'Not In Stock'}\">{{catalogProduct.inStock}}</p>\r\n\r\n\t\t\t\t<img class=\"mookie-product-img\" [src]=\"catalogProduct.imagePath\" alt=\"sample85\" />\r\n\r\n\t\t\t\t<div class=\"add-to-cart\" onclick=\"\">\r\n\t\t\t\t\t<i class=\"ion-android-add\"></i>\r\n\t\t\t\t\t<span (click)=\"addToCart(catalogProduct,catalogProduct._id);\">\r\n\t\t\t\t\t\t<a class=\"nah\"></a>Buy Now</span>\r\n\t\t\t\t</div>\r\n\t\t\t\t<figcaption>\r\n\t\t\t\t\t<h3>{{catalogProduct.title}}</h3>\r\n\t\t\t\t\t<!-- <p>{{catalogProduct.description}}</p> -->\r\n\t\t\t\t\t<div class=\"price\">\r\n\t\t\t\t\t\t{{catalogProduct.price | currency}}\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</figcaption>\r\n\t\t\t</figure>\r\n\t\t</div>\r\n\t</section>\r\n\r\n\t<!-- \r\n\t<section id=\"summer-collection\">\r\n\t\t<div class=\"container\">\r\n\t\t\t<div class=\"sc-content\">\r\n\t\t\t\t<h1>Exclusive Catering</h1>\r\n\t\t\t\t<p class=\"description\">Contact Andrew Bempah or Oluwaseyi Olaleye at bempah@mookiedough.com and olaleye@mookiedough.com for exclusive catering\r\n\t\t\t\t\tfor Stanford club events and nearby areas\r\n\t\t\t\t</p>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"sc-media\">\r\n\t\t\t\t<div class=\"sc-media-bg\">\r\n\t\t\t\t\t<img src=\"assets/imgs/M00KIE.jpg\" alt=\"sc-image\" /> </div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</section> -->\r\n\r\n\t<!-- NEW HOME -->\r\n\t<div class=\"newHome\">\r\n\t\t<section id=\"summer-collection\">\r\n\t\t\t<div class=\"container\">\r\n\t\t\t\t<div style=\"text-align:center;\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"sc-content col-lg-6\">\r\n\t\t\t\t\t\t\t<h1>Exclusive Catering</h1>\r\n\t\t\t\t\t\t\t<p class=\"description\">Contact Andrew Bempah or Oluwaseyi Olaleye at bempah@mookiedough.com and olaleye@mookiedough.com for exclusive catering\r\n\t\t\t\t\t\t\t\tfor Stanford club events and nearby areas\r\n\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"sc-media col-lg-6\">\r\n\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t<img src=\"assets/imgs/M00KIE.jpg\" alt=\"sc-image\" /> </div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<!-- <div style=\"width:100%; text-align:center;\">\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t</div> -->\r\n\r\n\t\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t</div>\r\n\r\n\r\n\t\t\t</div>\r\n\t\t</section>\r\n\r\n\t\t<section id=\"products\">\r\n\t\t\t<div class=\"container\">\r\n\t\t\t\t<div class=\"products-header\">\r\n\t\t\t\t\t<h2>popular products</h2>\r\n\t\t\t\t\t<p>Our Artisian frozen cookie dough bricks will leave you wanting more</p>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"product product-1\">\r\n\t\t\t\t\t<figure>\r\n\t\t\t\t\t\t<img src=\"assets/imgs/OGMookiepackaging.png\" alt=\"product-image\">\r\n\t\t\t\t\t\t<figcaption>Cookie Dough Bricks</figcaption>\r\n\t\t\t\t\t\t<figcaption>$ 2.99</figcaption>\r\n\t\t\t\t\t</figure>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"product product-2\">\r\n\t\t\t\t\t<figure>\r\n\t\t\t\t\t\t<img src=\"assets/imgs/cookies.png\" alt=\"product-image\">\r\n\t\t\t\t\t\t<figcaption>Cookie Dough Bricks</figcaption>\r\n\t\t\t\t\t\t<figcaption>$ 2.99</figcaption>\r\n\t\t\t\t\t</figure>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"product product-3\">\r\n\t\t\t\t\t<figure>\r\n\t\t\t\t\t\t<img src=\"assets/imgs/Ogmookieconfetti.png\" alt=\"product-image\">\r\n\t\t\t\t\t\t<figcaption>Cookie Dough Bricks</figcaption>\r\n\t\t\t\t\t\t<figcaption>$ 2.99</figcaption>\r\n\t\t\t\t\t</figure>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"product product-4\">\r\n\t\t\t\t\t<figure>\r\n\t\t\t\t\t\t<img src=\"assets/imgs/redvelvet.png\" alt=\"product-image\">\r\n\t\t\t\t\t\t<figcaption>Cookie Dough Bricks</figcaption>\r\n\t\t\t\t\t\t<figcaption>$ 2.99</figcaption>\r\n\t\t\t\t\t</figure>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</section>\r\n\t\t<section id=\"collections\">\r\n\t\t\t<div class=\"container\">\r\n\t\t\t\t<div class=\"c-1\">\r\n\t\t\t\t\t<div class=\"c-1-image-holder\">\r\n\t\t\t\t\t\t<img src=\"assets/imgs/mookiecar.svg\" alt=\"image\"> </div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"c-2\">\r\n\t\t\t\t\t<h2>Work Coming Soon</h2>\r\n\t\t\t\t\t<hr />\r\n\t\t\t\t\t<div class=\"c-2-image-holder\">\r\n\t\t\t\t\t\t<img class=\"left\" src=\"assets/imgs/dorm5-min.jpg\" alt=\"\">\r\n\t\t\t\t\t\t<img class=\"right\" src=\"assets/imgs/header3.png\" alt=\"\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</section>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/mookie-menu/mookie-menu.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/mookie-menu/mookie-menu.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css\");\n@import url(https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css);\n@import url(https://fonts.googleapis.com/css?family=Raleway:400,500,700);\n@import url(\"https://fonts.googleapis.com/css?family=Lato\");\nbody {\n  color: black; }\n.addcart:hover, .addcart:active {\n  background-color: #333333; }\n.addcart:hover .addcartsuc {\n  display: inline-block; }\n.addcartsuc {\n  display: none;\n  -webkit-animation: slideInRight 0.5s;\n  animation: slideInRight 0.5s; }\n/* \r\n.addcartsuc::after {\r\n    font-family: \"Font Awesome 5 Solid\";\r\n    font-weight: 900;\r\n    content: 'f00c';\r\n} */\n.mookie-product-img {\n  margin-top: 16px;\n  height: 300px;\n  width: 200px; }\n@media screen and (min-width: 780px) {\n  .product-card {\n    max-height: 460px;\n    min-height: 460px; } }\n.addcartsuc.active {\n  display: inline-block;\n  color: white;\n  font-size: 14px; }\n.addcartsuc > i {\n  -webkit-animation: slideInRight 0.5s;\n  animation: slideInRight 0.5s; }\n.addcartsuc.active > i {\n  display: inline-block;\n  text-align: center;\n  vertical-align: middle; }\n.product-card {\n  /* border: 1px solid #e4e4e4;\r\n    padding: 15px; */\n  text-align: center; }\n.row .col-xs-12 {\n  padding-right: 0px; }\n/* .col-xs-12 {\r\n  text-align: center;\r\n} */\n/* product card advanced */\n/* .product-shadow{\r\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);\r\n} */\n.snip1418 {\n  font-family: 'Lato', 'Raleway', Arial, sans-serif;\n  position: relative;\n  /* float: left; */\n  overflow: hidden;\n  /* margin: 10px 1%; */\n  /* min-width: 230px; */\n  /* max-width: 315px; */\n  width: 100%;\n  background: white;\n  text-align: center;\n  color: #333333;\n  /* box-shadow: 0 0 5px rgba(0, 0, 0, 0.15); */\n  font-size: 16px;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-perspective: 20em;\n  perspective: 20em;\n  padding-left: 10px;\n  padding-right: 10px;\n  margin-bottom: 10px; }\n.snip1418 * {\n  box-sizing: border-box;\n  transition: all 0.3s ease-out; }\n.snip1418 img {\n  max-width: 100%;\n  vertical-align: top;\n  position: relative; }\n.snip1418 .add-to-cart {\n  position: absolute;\n  top: 0;\n  right: 0;\n  padding-right: 10px;\n  color: #ffffff;\n  font-weight: 700;\n  text-transform: uppercase;\n  font-size: 0.9em;\n  opacity: 0;\n  background-color: #333333;\n  -webkit-transform: rotateX(-90deg);\n  transform: rotateX(-90deg);\n  -webkit-transform-origin: 100% 0;\n  transform-origin: 100% 0; }\n.snip1418 .add-to-cart i {\n  display: inline-block;\n  margin-right: 10px;\n  width: 40px;\n  line-height: 40px;\n  text-align: center;\n  background-color: #164666;\n  color: #ffffff;\n  font-size: 1.4em; }\n.snip1418 figcaption {\n  padding: 20px; }\n.snip1418 h3, .snip1418 p {\n  margin: 0; }\n.snip1418 h3 {\n  font-size: 1.5em;\n  font-weight: 700;\n  margin-bottom: 10px;\n  text-transform: lowercase; }\n.snip1418 p {\n  font-size: 0.9em;\n  letter-spacing: 1px;\n  font-weight: 400; }\n.snip1418 .price {\n  font-weight: 500;\n  font-size: 1.5em;\n  line-height: 48px;\n  letter-spacing: 1px; }\n.snip1418 .price s {\n  margin-right: 5px;\n  opacity: 0.5;\n  font-size: 0.9em; }\n.snip1418 a {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0; }\n.snip1418:hover .add-to-cart, .snip1418.hover .add-to-cart {\n  opacity: 1;\n  -webkit-transform: rotateX(0deg);\n  transform: rotateX(0deg); }\n.snip1418:hover .add-to-cart i, .snip1418.hover .add-to-cart i {\n  background-color: #333333; }\n/* New Home */\n.center-image {\n  width: 100%; }\n.newHome {\n  font-family: \"Lato\", sans-serif;\n  overflow-x: hidden; }\n#header-hero {\n  width: 100%;\n  display: block;\n  position: relative; }\n#header-hero .header-bg {\n  width: 100%;\n  height: auto; }\n#header-hero .header-bg img {\n  width: 100%;\n  height: auto; }\n#header-hero .header-content {\n  width: 100%;\n  height: 100%;\n  margin-top: 40px;\n  background-color: rgba(255, 255, 255, 0.1);\n  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);\n  position: absolute;\n  top: 0%;\n  text-align: center;\n  color: #f2f2f2;\n  padding: 0rem 0.4rem; }\n#header-hero .header-content p.heading-1 {\n  text-transform: uppercase;\n  margin: 0 auto;\n  font-family: \"Lato\", sans-serif;\n  font-size: 1.5rem;\n  font-weight: 500;\n  margin-bottom: 2vw;\n  padding-top: 9vw; }\n#header-hero .header-content h1 {\n  margin: 0 auto;\n  font-family: \"Lato\", sans-serif;\n  font-size: 3rem;\n  font-style: italic;\n  text-transform: uppercase;\n  margin-bottom: 2.4vw; }\n#header-hero .header-content h1 .logo-style {\n  color: #ce0095; }\n#header-hero .header-content p.description {\n  color: #333333;\n  margin: 0 auto;\n  width: 30%;\n  font-family: Cambria;\n  font-size: 1.4rem;\n  font-style: italic;\n  margin-bottom: 5vw; }\n#header-hero .header-content .button {\n  margin: 0 auto;\n  background-color: #a61458;\n  box-shadow: 0px 1px 3.84px 0.16px rgba(0, 0, 0, 0.35);\n  width: 10rem;\n  padding: 0.8rem; }\n#header-hero .header-content .button p {\n  font-family: Cambria;\n  font-size: 1rem;\n  font-weight: 400;\n  text-align: justify;\n  margin: 0 auto;\n  text-align: center;\n  text-transform: uppercase; }\n@media only screen and (max-width: 1440px) {\n  #header-hero .header-content p.description {\n    width: 40%;\n    margin-bottom: 3rem;\n    font-size: 1.2rem; }\n  #header-hero .header-content p.heading-1 {\n    padding-top: 8vw; } }\n@media only screen and (max-width: 1024px) {\n  #header-hero .header-bg {\n    width: 100%;\n    height: auto;\n    overflow: hidden; }\n  #header-hero .header-bg img {\n    width: 100rem;\n    height: 40rem;\n    margin-left: -50%; }\n  #header-hero .header-content p.heading-1 {\n    padding-top: 20vw; }\n  #header-hero .header-content p.description {\n    width: 60%;\n    margin-bottom: 4rem; } }\n@media only screen and (max-width: 480px) {\n  #header-hero .header-content h1 {\n    font-size: 2rem;\n    padding: 1rem 0rem; }\n  #header-hero .header-bg img {\n    width: 100rem;\n    height: 40rem;\n    margin-left: -140%; }\n  #header-hero .header-content p.description {\n    width: 50%;\n    margin-bottom: 3rem;\n    text-align: left; }\n  #header-hero .header-content .button {\n    width: 8rem;\n    padding: 0.6rem; }\n  #header-hero .header-content .button p {\n    font-size: 0.8rem; } }\n#summer-collection {\n  width: 100%;\n  display: block; }\n#summer-collection .container .sc-content h1 {\n  font-family: \"Franklin Gothic Medium\";\n  color: #000000;\n  font-size: 4rem;\n  font-weight: 800;\n  letter-spacing: 1rem;\n  line-height: 6rem;\n  text-transform: uppercase;\n  margin-bottom: 2vw; }\n#summer-collection .container .sc-content p.description {\n  font-family: Cambria;\n  color: rgba(89, 89, 89, 0.8);\n  font-size: 1rem;\n  font-style: italic;\n  line-height: 2rem;\n  margin-bottom: 4vw;\n  padding-right: 4rem; }\n#summer-collection .container .sc-content a {\n  border-bottom: 2px solid #a61458;\n  text-decoration: none;\n  font-family: \"Franklin Gothic Medium\";\n  color: #000000;\n  font-weight: 400;\n  text-transform: uppercase; }\n#summer-collection .container .sc-media .sc-media-bg {\n  width: 100%;\n  height: auto;\n  padding-top: 3vw; }\n#summer-collection .container .sc-media .sc-media-bg img {\n  width: 100%;\n  height: auto; }\n@media only screen and (max-width: 1024px) {\n  #summer-collection {\n    display: block;\n    margin-top: 0rem; }\n  #summer-collection .container {\n    display: flex;\n    flex-direction: column; }\n  #summer-collection .container .sc-content h1 {\n    font-size: 5.6vw;\n    letter-spacing: 1rem; } }\n@media only screen and (max-width: 768px) {\n  #summer-collection .container .sc-content h1 {\n    font-size: 5.6vw;\n    letter-spacing: 0.6rem;\n    margin-bottom: 1rem; } }\n@media only screen and (max-width: 480px) {\n  #summer-collection .container .sc-content p.description {\n    font-size: 1rem;\n    margin-bottom: 4vw;\n    padding-right: 1.2rem;\n    text-align: justify;\n    margin-bottom: 2rem; } }\n#products {\n  width: 100%; }\n#products .container {\n  display: block;\n  width: 80%;\n  margin: 0 auto;\n  font-size: 0; }\n#products .container .products-header {\n  font-size: 16px;\n  text-align: center;\n  margin-bottom: 3rem; }\n#products .container .products-header h2 {\n  padding: 2rem 1rem;\n  text-transform: uppercase;\n  font-family: \"Franklin Gothic Medium\";\n  color: #000000;\n  font-size: 1.875rem;\n  font-weight: 400;\n  letter-spacing: 0.2rem;\n  text-align: center; }\n#products .container .products-header p {\n  font-family: Cambria;\n  color: #595959;\n  font-size: 1rem;\n  font-style: italic;\n  text-align: center; }\n#products .container .product {\n  width: 25%;\n  display: inline-block;\n  font-size: 16px;\n  text-align: center;\n  padding: 1.8rem;\n  -webkit-transform: scale(1);\n  transform: scale(1);\n  opacity: 1; }\n#products .container .product:hover {\n  -webkit-transform: scale(0.9);\n  transform: scale(0.9);\n  opacity: 0.8;\n  transition: opacity 800ms ease-in-out 0s;\n  transition: -webkit-transform 1s ease-in-out 0s;\n  transition: transform 1s ease-in-out 0s;\n  transition: transform 1s ease-in-out 0s, -webkit-transform 1s ease-in-out 0s;\n  cursor: pointer; }\n#products .container .product figure img {\n  width: 100%;\n  height: auto; }\n#products .container .product figure figcaption {\n  font-family: \"Franklin Gothic Medium\";\n  color: #595959;\n  font-size: 0.8rem;\n  font-weight: 600;\n  letter-spacing: 0.02rem;\n  text-align: center;\n  padding: 1rem 0rem 0rem;\n  text-transform: uppercase; }\n@media only screen and (max-width: 1024px) {\n  #products .container .product {\n    width: 50%;\n    padding: 3rem; } }\n@media only screen and (max-width: 768px) {\n  #products .container .product {\n    width: 50%;\n    padding: 2rem; } }\n@media only screen and (max-width: 480px) {\n  #products .container .product {\n    width: 100%; } }\n#collections {\n  width: 100%;\n  display: block;\n  margin: 6rem 0rem;\n  /*  background-color:  #f5f2f1;*/\n  padding: 1.4rem 0rem; }\n#collections .container {\n  margin: 0 auto;\n  width: 80%;\n  display: flex; }\n#collections .container .c-1 {\n  flex: 1;\n  padding: 3rem 0rem 0rem 1rem;\n  /*  background-color:  #f5f2f1;*/ }\n#collections .container .c-1 .c-1-image-holder {\n  width: 100%;\n  height: auto; }\n#collections .container .c-1 .c-1-image-holder img {\n  width: 100%;\n  height: auto; }\n#collections .container .c-2 .c-2-image-holder {\n  width: 45%;\n  height: auto;\n  margin: 3rem auto; }\n#collections .container .c-2 .c-2-image-holder img {\n  width: 100%;\n  height: auto; }\n#collections .container .c-2 {\n  flex: 1;\n  padding: 1rem;\n  /*  background-color:  #f5f2f1;*/ }\n#collections .container .c-2 h2 {\n  padding: 1rem 0rem;\n  text-align: right;\n  font-family: \"Franklin Gothic Medium\";\n  font-size: 1.8rem;\n  letter-spacing: 0.094rem;\n  text-transform: uppercase; }\n#collections .container .c-2 hr {\n  width: 30%;\n  margin-left: 70%;\n  display: block;\n  height: 1px;\n  border: 0;\n  border-top: 0.1rem solid #a61458;\n  padding: 0;\n  margin-bottom: 4rem; }\n#collections .container .c-2 p.button {\n  background-color: #e6b58f;\n  box-shadow: 0px 1px 3.92px 0.08px rgba(204, 204, 153, 0.35);\n  width: 45%;\n  text-align: center;\n  padding: 0.8rem 0.2rem;\n  color: #ffffff;\n  text-transform: uppercase;\n  font-size: 0.7rem;\n  margin: 0 auto;\n  margin-right: -1%;\n  font-weight: 600;\n  letter-spacing: 0.1rem; }\n#collections .container .c-2 p.button:hover {\n  cursor: pointer;\n  background-color: #ffffff;\n  color: #ff981f;\n  transition: background-color 1s ease-in-out 0s;\n  transition: color 400ms ease-in-out 0s; }\n#collections .container .c-2 .left {\n  position: relative;\n  right: -6rem;\n  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.2); }\n#collections .container .c-2 .right {\n  position: relative;\n  top: -2rem;\n  right: 2rem;\n  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.2); }\n@media only screen and (max-width: 1024px) {\n  #collections .container {\n    display: flex;\n    flex-direction: column; }\n  #collections .container .c-1 {\n    flex: 1;\n    padding: 4rem 0rem 0rem 0rem; }\n  #collections .container .c-2 .c-2-image-holder {\n    width: 50%;\n    height: auto;\n    margin: 3rem auto; } }\n@media only screen and (max-width: 768px) {\n  #collections .container .c-2 .c-2-image-holder {\n    width: 70%;\n    height: auto;\n    margin: 3rem auto; }\n  #collections .container .c-2 .left {\n    position: relative;\n    right: 0rem;\n    margin-bottom: 2rem; }\n  #collections .container .c-2 .right {\n    position: relative;\n    top: 0rem;\n    right: 0rem; }\n  #collections .container .c-2 p.button {\n    width: 60%;\n    padding: 0.8rem 2rem; } }\n/* \r\nfooter {\r\n\tbackground-color: #595959;\r\n\tfont-size: 0;\r\n\tpadding: 1.6rem 0rem;\r\n\twidth: 100%;\r\n}\r\n\r\nfooter p {\r\n\tfont-family: Corbel;\r\n\tcolor: #f5f2f1;\r\n\tfont-weight: 400;\r\n\tfont-size: 16px;\r\n\twidth: 10%;\r\n\tdisplay: inline-block;\r\n\ttext-align: center;\r\n}\r\n\r\nfooter .copy-right {\r\n\twidth: 80%;\r\n\ttext-align: left;\r\n\tpadding-left: 4rem;\r\n}\r\n\r\n@media only screen and (max-width: 920px) {\r\n\tfooter p {\r\n\t\twidth: 100%;\r\n\t\ttext-align: center;\r\n\t\tmargin-bottom: 0.4rem;\r\n\t}\r\n\tfooter .copy-right {\r\n\t\twidth: 100%;\r\n\t\ttext-align: center;\r\n\t\tmargin-left: -2.2rem;\r\n\t}\r\n} */\n.back-to-top {\n  padding: 1rem;\n  position: fixed;\n  bottom: 8%;\n  right: 2%;\n  z-index: 2;\n  opacity: 0.2;\n  background-color: rgba(255, 255, 255, 0); }\n.back-to-top:hover {\n  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);\n  background-color: rgba(255, 255, 255, 0.4);\n  opacity: 1; }\n.shop-now-button {\n  color: white; }\n.inStock {\n  position: absolute;\n  left: 0;\n  top: 0;\n  font-size: 24px;\n  color: Green;\n  z-index: 10; }\n.notInStock {\n  position: absolute;\n  left: 0;\n  top: 0;\n  font-size: 24px;\n  color: Red;\n  z-index: 10; }\n.nah {\n  cursor: pointer; }\n.col-lg-6, .col-md-6 {\n  text-align: center; }\n.sc-media img {\n  width: 80%; }\n.sc-media, .sc-content {\n  text-align: center; }\n.col-sm {\n  text-align: center !important; }\n.col-lg-6 img {\n  width: 80%; }\n"

/***/ }),

/***/ "./src/app/components/mookie-menu/mookie-menu.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/mookie-menu/mookie-menu.component.ts ***!
  \*****************************************************************/
/*! exports provided: MookieMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MookieMenuComponent", function() { return MookieMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _services_inventory_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/inventory.service */ "./src/app/services/inventory.service.ts");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_mookie_emit_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/mookie-emit.service */ "./src/app/services/mookie-emit.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _mookie_modal_mookie_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../mookie-modal/mookie-modal.component */ "./src/app/components/mookie-modal/mookie-modal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MookieMenuComponent = /** @class */ (function () {
    function MookieMenuComponent(productService, shared, inventoryService, cartService, userService, authService, mookieEmit, modalService) {
        this.productService = productService;
        this.shared = shared;
        this.inventoryService = inventoryService;
        this.cartService = cartService;
        this.userService = userService;
        this.authService = authService;
        this.mookieEmit = mookieEmit;
        this.modalService = modalService;
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.handleProduct = function (products) {
            console.log(products);
        };
        // Will have to put add to product
        // 
        this.getProductsFromServer = function () {
            var _this = this;
            this.productService.getCatalogProducts().subscribe(function (data) {
                if (data.success) {
                    _this.shared.updateSharedVar('products', data.catalogProducts);
                    _this.products = data.catalogProducts;
                    _this.inventoryService.getInventory().subscribe(function (inventoryData) {
                        if (inventoryData.success) {
                            var inventory = inventoryData.inventory;
                            var totalMap_1 = new Map();
                            inventory.totals.forEach(function (total) {
                                totalMap_1.set(total.itemName, total.itemQtyTotal);
                            });
                            _this.products.forEach(function (product) {
                                if (_this.itemNameMap.has(product.title)) {
                                    if (totalMap_1.get(_this.itemNameMap.get(product.title))) {
                                        product.inStock = "In Stock";
                                    }
                                    else {
                                        product.inStock = "Not in Stock";
                                    }
                                }
                            });
                        }
                    });
                }
            });
        };
        // Updates the cart after adding an item to the cart
        this.updateCart = function (getCartData, callback) {
            var _this = this;
            this.cartService.getCart(getCartData).subscribe(function (data) {
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
        // Add Product to user cart
        // TODO
        // Add message for non active user's to active their accounts
        this.addToCart = function (product, catalogProduct) {
            var _this = this;
            this.authService.getOrderingSchedule().subscribe(function (data) {
                console.log(data);
                if (data.success) {
                    var schedule = data.schedule;
                    var currentTime = new Date();
                    var hours = currentTime.getHours();
                    if (hours > schedule.startHour && hours < schedule.endHour) {
                        _this.authService.getUser().subscribe(function (tokenData) {
                            if (tokenData.email) {
                                _this.shared.updateSharedVar('user', { userEmail: tokenData.email, username: tokenData.usernmae });
                                var userData = { userEmail: tokenData.email };
                                _this.userService.getUser(userData).subscribe(function (data) {
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
                                            _this.cartService.addItemToCart(cartData).subscribe(function (resData) {
                                                console.log(resData);
                                                if (resData.success) {
                                                    _this.shared.updateSharedVar('cartItemCount', resData.cart.products.length);
                                                    _this.mookieEmit.emitChange();
                                                }
                                                else {
                                                    // Show Error
                                                    // User might need to activate account
                                                }
                                            });
                                        }
                                    }
                                });
                            }
                        });
                    }
                    else {
                        var modalRef = _this.modalService.open(_mookie_modal_mookie_modal_component__WEBPACK_IMPORTED_MODULE_9__["MookieModalComponent"]);
                        console.log('here');
                        modalRef.componentInstance.modalTitle = "Ordering is closed for now.";
                        modalRef.componentInstance.modalBody = "Mookie Dough hours will be from 8 am to 7pm Monday Through Sunday with delivery starting at 9pm. ";
                        console.log(modalRef);
                    }
                }
                else {
                    // modal service show modal
                    // Show Error
                    // var title = "Ordering is closed for now.";
                    //                 var body = "Mookie Dough hours will be from 8 am to 7pm Monday Through Sunday with delivery starting at 9pm.  ";
                    var modalRef = _this.modalService.open(_mookie_modal_mookie_modal_component__WEBPACK_IMPORTED_MODULE_9__["MookieModalComponent"]);
                    console.log('here');
                    modalRef.componentInstance.modalTitle = "Ordering is closed for now.";
                    modalRef.componentInstance.modalBody = "Mookie Dough hours will be from 8 am to 7pm Monday Through Sunday with delivery starting at 9pm. ";
                    console.log(modalRef);
                }
            });
        };
    }
    // Authentication I
    MookieMenuComponent.prototype.ngOnInit = function () {
        this.itemNameMap = new Map();
        this.itemNameMap.set("og mookie", "og mookie");
        this.itemNameMap.set("og mookie's confetti party", "funfetti");
        this.itemNameMap.set("cookies n creme", "oreo");
        this.itemNameMap.set("aunty vicky's red velvet", "Red velvet");
        this.itemNameMap.set("dark chocolate mocha", "Dark chocolate");
        this.getProductsFromServer();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], MookieMenuComponent.prototype, "valueChange", void 0);
    MookieMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mookie-menu',
            template: __webpack_require__(/*! ./mookie-menu.component.html */ "./src/app/components/mookie-menu/mookie-menu.component.html"),
            styles: [__webpack_require__(/*! ./mookie-menu.component.scss */ "./src/app/components/mookie-menu/mookie-menu.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"], _services_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"], _services_inventory_service__WEBPACK_IMPORTED_MODULE_3__["InventoryService"], _services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"], _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"], _services_mookie_emit_service__WEBPACK_IMPORTED_MODULE_7__["MookieEmitService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModal"]])
    ], MookieMenuComponent);
    return MookieMenuComponent;
}());



/***/ }),

/***/ "./src/app/components/mookie-modal/mookie-modal.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/mookie-modal/mookie-modal.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n  <h4 class=\"modal-title\">{{modalTitle}}</h4>\r\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <p>{{modalBody}}</p>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Close click')\">Close</button>\r\n</div>"

/***/ }),

/***/ "./src/app/components/mookie-modal/mookie-modal.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/mookie-modal/mookie-modal.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/mookie-modal/mookie-modal.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/mookie-modal/mookie-modal.component.ts ***!
  \*******************************************************************/
/*! exports provided: MookieModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MookieModalComponent", function() { return MookieModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MookieModalComponent = /** @class */ (function () {
    function MookieModalComponent(activeModal) {
        this.activeModal = activeModal;
    }
    MookieModalComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MookieModalComponent.prototype, "modalTitle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MookieModalComponent.prototype, "modalBody", void 0);
    MookieModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mookie-modal',
            template: __webpack_require__(/*! ./mookie-modal.component.html */ "./src/app/components/mookie-modal/mookie-modal.component.html"),
            styles: [__webpack_require__(/*! ./mookie-modal.component.scss */ "./src/app/components/mookie-modal/mookie-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]])
    ], MookieModalComponent);
    return MookieModalComponent;
}());



/***/ }),

/***/ "./src/app/components/mookie-orders/mookie-orders.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/mookie-orders/mookie-orders.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12\">\r\n        <agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" [scrollwheel]=\"false\" [zoom]=\"zoom\">\r\n          <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\">\r\n            <agm-info-window class=\"info-window\" [isOpen]=\"true\">Your location</agm-info-window>\r\n          </agm-marker>\r\n        </agm-map>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"order-message-container\">\r\n    <p class=\"order-message pending\">Mookie Dough Delivery</p>\r\n    <p class=\"order-message\">{{orderMessage}}</p>\r\n  </div>\r\n\r\n  <div class=\"receipt mookie-confirm\" *ngIf=\"order.customerReceipt\">\r\n    <div class=\"receipt-header\">\r\n      <div class=\"receipt-header__top\">\r\n        <div class=\"receipt-header__logo\">\r\n        </div>\r\n        <div class=\"receipt-header__meta\">\r\n          <!-- 25.04.2016 -->\r\n          <span class=\"receipt-header__date\">{{order.customerReceipt.created | date:\"MM/dd/yyyy 'at' h:mma\"}}</span>\r\n          <span class=\"receipt-header__serial\">Receipt Number: #{{order.customerReceipt.receiptNumber}} </span>\r\n          <!-- <span class=\"receipt-header__number\">{{order.customerReceipt.receiptNumber}}</span> -->\r\n        </div>\r\n      </div>\r\n      <div class=\"receipt-header__greeting\">\r\n        <span class=\"receipt-header__name\">Hi, {{order.customerReceipt.customerName}}</span>\r\n        <span class=\"receipt-header__count\">You've purchased {{order.customerReceipt.customerCart.products.length}} items in our store.</span>\r\n        <span class=\"receipt-header__border\"></span>\r\n      </div>\r\n      <div class=\"receipt-header__spacing\"></div>\r\n    </div>\r\n\r\n    <section class=\"cart\">\r\n      <h2 class=\"cart__receipt-header\">Cart:</h2>\r\n      <ol class=\"list\">\r\n        <li class=\"list__item\" *ngFor=\"let product of order.customerReceipt.customerCart.products\">\r\n          <span class=\"list__name\">{{product.title}}</span>\r\n          <span class=\"list__price\">{{product.price}}</span>\r\n        </li>\r\n      </ol>\r\n      <hr class=\"cart__hr\" />\r\n      <div class=\"cart__total\">\r\n        <h3 class=\"cart__total-label\">Subtotal</h3>\r\n        <span class=\"cart__total-price\">{{order.customerReceipt.customerCart.subtotal}}</span>\r\n      </div>\r\n      <div class=\"cart__total\">\r\n        <h6 class=\"cart__total-label\">Sales Tax</h6>\r\n        <span class=\"cart__total-price\">{{order.customerReceipt.customerCart.tax}}</span>\r\n      </div>\r\n      <div class=\"cart__total\">\r\n        <h3 class=\"cart__total-label\">Total</h3>\r\n        <span class=\"cart__total-price\">{{order.customerReceipt.customerCart.total}}</span>\r\n      </div>\r\n    </section>\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/mookie-orders/mookie-orders.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/mookie-orders/mookie-orders.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".order-frame {\n  position: absolute;\n  left: 50%;\n  top: 15%; }\n\n.receipt {\n  background: #ff84a1;\n  color: #3a3e59;\n  font-family: 'Raleway', Arial, sans-serif;\n  max-width: 400px;\n  margin: 5vh auto 0 auto;\n  transition: .3s;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2); }\n\n.receipt .hoverable {\n  transition: .3s;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2); }\n\n.receipt .hoverable:hover {\n  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3); }\n\n/* receipt header styles */\n\n.receipt-header {\n  width: 100%; }\n\n.receipt-header__top {\n  display: flex;\n  align-items: center;\n  background: white;\n  width: 100%;\n  border-radius: 4px 4px 0 0; }\n\n.receipt-header__logo {\n  width: 10%;\n  padding: 30px;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 viewBox%3D%220 0 319.6 319.6%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill%3Anone%3Bstroke%3A%23000%3Bstroke-miterlimit%3A10%3Bstroke-width%3A3px%3Bstroke-dasharray%3A12.13 12.13%3B%7D%3C%2Fstyle%3E%3C%2Fdefs%3E%3Ctitle%3Emookie good cart%3C%2Ftitle%3E%3Cg id%3D%22Layer_2%22 data-name%3D%22Layer 2%22%3E%3Cg id%3D%22Layer_3%22 data-name%3D%22Layer 3%22%3E%3Cg id%3D%22Layer_2-2%22 data-name%3D%22Layer 2%22%3E%3Cg id%3D%22TEMPLATE_-_This_layer_DOES_NOT_PRINT%22 data-name%3D%22TEMPLATE - This layer DOES NOT PRINT%22%3E%3Cpath d%3D%22M244.2%2C201.13c-1.17-4.17-2.29-8.26-3.23-12.57A240.3%2C240.3%2C0%2C0%2C1%2C235%2C148a49.1%2C49.1%2C0%2C0%2C0%2C.39%2C11%2C272.26%2C272.26%2C0%2C0%2C0%2C7.28%2C42.33%2C2.61%2C2.61%2C0%2C0%2C1-.26%2C2.45%2C36.41%2C36.41%2C0%2C0%2C1-3.79%2C5.43%2C138.25%2C138.25%2C0%2C0%2C1-15.33%2C13.9q-2.61%2C1.77-5%2C3.79a2.79%2C2.79%2C0%2C0%2C1-2.66.91A115%2C115%2C0%2C0%2C0%2C204%2C226.54c-1.6-.09-.61-1-.61-1.68a206%2C206%2C0%2C0%2C0%2C7.37-40.3c.08-1.94.43-3.06-2.41-3.57a187.31%2C187.31%2C0%2C0%2C0-43.32-3.15%2C88%2C88%2C0%2C0%2C0-31.08%2C7%2C42.52%2C42.52%2C0%2C0%2C0-8.61%2C5.59c24.15-14.29%2C50.2-11.84%2C76.37-8.18a260.69%2C260.69%2C0%2C0%2C0-27.08%2C5.47c-6%2C1.64-12.09%2C2.54-18.08%2C4.05a129.84%2C129.84%2C0%2C0%2C0-23.34%2C6.84%2C43.57%2C43.57%2C0%2C0%2C0%2C8.62-1.63c14.89-3.19%2C29.88-6%2C44.73-9.39%2C5.9-1.33%2C11.84-2.58%2C17.78-3.74%2C3.7-.78%2C4.31%2C0%2C4.31%2C3.53a10%2C10%2C0%2C0%2C1%2C0%2C1.55%2C254.71%2C254.71%2C0%2C0%2C1-7.88%2C38.75c-.3%2C1.2-.73%2C1.2-1.81%2C1.2a79.71%2C79.71%2C0%2C0%2C0-12%2C0%2C161.68%2C161.68%2C0%2C0%2C0-26.31%2C5.34c-5.46%2C1.46-10.93%2C2.93-16.44%2C4A13.17%2C13.17%2C0%2C0%2C1%2C130.83%2C233a51.1%2C51.1%2C0%2C0%2C1-7.66-15.54c-1.77-4.61-3-9.3-4.31-13.95%2C2.37%2C11.66%2C4.61%2C23.33%2C12.66%2C32.93h-.82c-6.45%2C0-12.74%2C1.81-19.2%2C2.24a3.62%2C3.62%2C0%2C0%2C1-2.32-.64c-2.46-1.81-5.17-3.28-7.54-5.3a127.94%2C127.94%2C0%2C0%2C1-18.85-21.53%2C101%2C101%2C0%2C0%2C1-10.21-15.67%2C2.65%2C2.65%2C0%2C0%2C1%2C0-2.45%2C115.34%2C115.34%2C0%2C0%2C0%2C8.22-37c.52-5.64-.6-11.45%2C1.38-17-2%2C3.4-3.92%2C6.88-6%2C10.24A78.45%2C78.45%2C0%2C0%2C1%2C61.65%2C167a17.24%2C17.24%2C0%2C0%2C1-14.13%2C4.91%2C38.07%2C38.07%2C0%2C0%2C1-11.84-2.32c-4.22-1.94-4.65-5.21-1.16-8.23a77.13%2C77.13%2C0%2C0%2C1%2C10-6.71c6-3.75%2C12.79-6.55%2C18.94-10.29a88.14%2C88.14%2C0%2C0%2C0%2C18.09-12.06%2C7.56%2C7.56%2C0%2C0%2C0%2C2.15-2.88%2C45.59%2C45.59%2C0%2C0%2C1-9.34%2C7.19c-6.25%2C3.91-13.18%2C6.67-19.64%2C10.33a145.42%2C145.42%2C0%2C0%2C0-18.47%2C10.16%2C20.78%2C20.78%2C0%2C0%2C0-6.46%2C6.2v3.87a12.54%2C12.54%2C0%2C0%2C0%2C9%2C5.43%2C79.2%2C79.2%2C0%2C0%2C0%2C10.07%2C1.16A17%2C17%2C0%2C0%2C0%2C60.61%2C170a45.26%2C45.26%2C0%2C0%2C0%2C5.81-5.34A89.49%2C89.49%2C0%2C0%2C0%2C79.34%2C146c.47-.81.35-2%2C1.64-2.62a26.37%2C26.37%2C0%2C0%2C0-.26%2C4.3c-.65%2C6.16-1.38%2C12.32-2.5%2C18.39A93.85%2C93.85%2C0%2C0%2C1%2C71%2C191a6.43%2C6.43%2C0%2C0%2C0%2C0%2C6.76A163.94%2C163.94%2C0%2C0%2C0%2C95.1%2C229.16a59.44%2C59.44%2C0%2C0%2C0%2C14%2C10.51c-.46.23-.94.43-1.41.64%2C2.11%2C0%2C4.21%2C0%2C6.31%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C.17-.9%2C1.07-.6%2C1.68-.6l15.45-2.88a2.44%2C2.44%2C0%2C0%2C1%2C2.71.73%2C8.67%2C8.67%2C0%2C0%2C0%2C5.9%2C2.07%2C38%2C38%2C0%2C0%2C0%2C9-.56%2C16%2C16%2C0%2C0%2C1%2C2.19%2C0%2C13.08%2C13.08%2C0%2C0%2C1%2C3.88-1.11%2C6.55%2C6.55%2C0%2C0%2C1%2C.63-.19%2C2.17%2C2.17%2C0%2C0%2C1-.24-.44v0a154.74%2C154.74%2C0%2C0%2C1%2C29.37-5.67%2C10.6%2C10.6%2C0%2C0%2C1%2C4.3-1.12%2C3.54%2C3.54%2C0%2C0%2C1%2C2%2C.64h.1l-.06%2C0a3.07%2C3.07%2C0%2C0%2C1%2C.47.41l1.36-.91c1-.56%2C2.28%2C0%2C3.44%2C0a20.15%2C20.15%2C0%2C0%2C1%2C4%2C.3c1%2C.13%2C1.94%2C0%2C2.24-1s1.19-.36%2C2-.35c-.06.11-.12.2-.18.29l.67-.15a3.39%2C3.39%2C0%2C0%2C1%2C2.41.28%2C3.14%2C3.14%2C0%2C0%2C1%2C1.28.63c.86-.16%2C1.72-.3%2C2.58-.4a3.19%2C3.19%2C0%2C0%2C1-.54-.56c1.71%2C0%2C3.42.12%2C5.12.3a5.88%2C5.88%2C0%2C0%2C0%2C5.43-2.28%2C22.83%2C22.83%2C0%2C0%2C1%2C2.54-2.37A129.74%2C129.74%2C0%2C0%2C0%2C239.33%2C211a32.24%2C32.24%2C0%2C0%2C0%2C4.61-6.67A4%2C4%2C0%2C0%2C0%2C244.2%2C201.13Z%22%2F%3E%3Cpath d%3D%22M197.14%2C68.87a64.62%2C64.62%2C0%2C0%2C1%2C12.91%2C4.31%2C43.79%2C43.79%2C0%2C0%2C1%2C14.86%2C10.46%2C29.17%2C29.17%2C0%2C0%2C1%2C4.73%2C28.5%2C22.08%2C22.08%2C0%2C0%2C1-10%2C13.35%2C14.18%2C14.18%2C0%2C0%2C1-9.25%2C1.33l-3.15-.38a23.91%2C23.91%2C0%2C0%2C1%2C1.29%2C16.36%2C103.51%2C103.51%2C0%2C0%2C0-1.67-10.34%2C18.07%2C18.07%2C0%2C0%2C0-3.92-7.92%2C9.51%2C9.51%2C0%2C0%2C0-10.16-2.45l-1.73.51h-.34a12.07%2C12.07%2C0%2C0%2C1%2C7.66-2.67c-2.06-5.77-2.06-5.77-.43-12.91a22.62%2C22.62%2C0%2C0%2C1-9.9-2.28c-.3-.22-.69%2C0-.95.3a85.82%2C85.82%2C0%2C0%2C1-11.15%2C9.43%2C30.15%2C30.15%2C0%2C0%2C1-15.15%2C6.84%2C43.66%2C43.66%2C0%2C0%2C0%2C7.4-2.93%2C66.38%2C66.38%2C0%2C0%2C0%2C16.71-14.12c2-2.41%2C4.3-4.82%2C6.28-7.1%2C1.47-1.55.78-2.54-.43-3.62a22.53%2C22.53%2C0%2C0%2C0-18.9-5.47%2C38.27%2C38.27%2C0%2C0%2C0-15.67%2C5.64A116.24%2C116.24%2C0%2C0%2C0%2C142%2C103.79a35.75%2C35.75%2C0%2C0%2C0-3%2C3.14c-1%2C1.08-1.63.56-2.28-.26a3.3%2C3.3%2C0%2C0%2C1-.17-3.66%2C11.74%2C11.74%2C0%2C0%2C1%2C3.14-4q7.2-6.17%2C15-11.58c1.34-1%2C3.36-2.07%2C2.89-3.79s-2.71-1.5-4.31-1.76a19.08%2C19.08%2C0%2C0%2C0-15%2C3.1A44.18%2C44.18%2C0%2C0%2C0%2C129%2C92.59a70.09%2C70.09%2C0%2C0%2C0-9.18%2C12.92%2C10.12%2C10.12%2C0%2C0%2C1%2C1.47-6.59c1.29-2.45%2C2.67-4.86%2C4-7.36.35-.64%2C1-1.59%2C0-2.15s-1.07.26-1.85.69a11.54%2C11.54%2C0%2C0%2C0-2.67%2C4.3A109.54%2C109.54%2C0%2C0%2C0%2C116.5%2C106a9.79%2C9.79%2C0%2C0%2C1-6.63%2C6.59c.6%2C1.08%2C1.89%2C1.38%2C2.45%2C2.28a5.42%2C5.42%2C0%2C0%2C1%2C.39%2C5.39%2C23.46%2C23.46%2C0%2C0%2C1-6.2%2C8.61c-5%2C4-10.33%2C4.3-18%2C.47a14.86%2C14.86%2C0%2C0%2C1-7.32-15.5%2C43.06%2C43.06%2C0%2C0%2C1%2C7-17.91%2C50.2%2C50.2%2C0%2C0%2C1%2C12.61-12.1A14%2C14%2C0%2C0%2C1%2C105.47%2C82c1.47-.39%2C1.47%2C0%2C1.12%2C1.29A42%2C42%2C0%2C0%2C0%2C104%2C99.53a19.49%2C19.49%2C0%2C0%2C0%2C3.66%2C10.89%2C1.72%2C1.72%2C0%2C0%2C0%2C2.27.88%2C1.75%2C1.75%2C0%2C0%2C0%2C.48-.32%2C9.66%2C9.66%2C0%2C0%2C0%2C4.31-6.46%2C48.27%2C48.27%2C0%2C0%2C1%2C4.56-12.92%2C9.81%2C9.81%2C0%2C0%2C1%2C3.49-4%2C3.5%2C3.5%2C0%2C0%2C1%2C4.31%2C0c1.37%2C1.12.9%2C2.5.34%2C3.83%2C0%2C.26-.39.48%2C0%2C.91a79.66%2C79.66%2C0%2C0%2C1%2C8.14-7.66%2C21.5%2C21.5%2C0%2C0%2C1%2C18.85-4.65%2C20.3%2C20.3%2C0%2C0%2C1%2C2.76.81c2.88%2C1%2C3.44%2C2.89%2C1.59%2C5.39a20.66%2C20.66%2C0%2C0%2C1-4.35%2C3.83l-11.75%2C9.34a7%2C7%2C0%2C0%2C0-1.89%2C2.15c3-2.15%2C6.11-4.3%2C9-6.46a45.78%2C45.78%2C0%2C0%2C1%2C18.56-8.61%2C24.88%2C24.88%2C0%2C0%2C1%2C24.84%2C6.55c2%2C2.11%2C2.07%2C2.28%2C0%2C4.3s-2.71%2C3.53-4.3%2C5.64a18.73%2C18.73%2C0%2C0%2C1%2C7.23%2C1c2.28%2C1.2%2C3.62.86%2C4.87-1.47a21.08%2C21.08%2C0%2C0%2C1%2C3.18-3.87%2C17.21%2C17.21%2C0%2C0%2C0%2C2.28-22.39%2C16.77%2C16.77%2C0%2C0%2C0-8.95-6.63%2C1.35%2C1.35%2C0%2C0%2C1-1-.82Zm6.54%2C2.8a24.86%2C24.86%2C0%2C0%2C1%2C4.87%2C6%2C15.86%2C15.86%2C0%2C0%2C1%2C2.41%2C11%2C21.49%2C21.49%2C0%2C0%2C1-6.68%2C12.91%2C20.72%2C20.72%2C0%2C0%2C0-4.65%2C7.41%2C10.46%2C10.46%2C0%2C0%2C0%2C2.16%2C11c4%2C5.08%2C15.58%2C4.65%2C19.54%2C1.25A21.84%2C21.84%2C0%2C0%2C0%2C227.58%2C111a26.08%2C26.08%2C0%2C0%2C0-4.87-27.42A49.25%2C49.25%2C0%2C0%2C0%2C203.68%2C71.67ZM106.42%2C82.61a5.66%2C5.66%2C0%2C0%2C0-3.79%2C1.24A49.35%2C49.35%2C0%2C0%2C0%2C90.28%2C96.17a40%2C40%2C0%2C0%2C0-6.72%2C18%2C13.78%2C13.78%2C0%2C0%2C0%2C17.22%2C14.77c5.25-.94%2C8-5.64%2C10.16-10.24a1.8%2C1.8%2C0%2C0%2C0-.26-2.24%2C18.36%2C18.36%2C0%2C0%2C1-2.49-2.72%2C17.93%2C17.93%2C0%2C0%2C1-5.47-11.58A40.7%2C40.7%2C0%2C0%2C1%2C106.42%2C82.61Z%22%2F%3E%3Cpath d%3D%22M227.23%2C120.58a54.27%2C54.27%2C0%2C0%2C0%2C16.58%2C12.57c6.89%2C4.31%2C14.29%2C7.45%2C21.27%2C11.54a94.81%2C94.81%2C0%2C0%2C1%2C11.84%2C7.49c4.3%2C3.4%2C3.66%2C7.54-1.25%2C9.6a32.7%2C32.7%2C0%2C0%2C1-17.95%2C1.94%2C22.17%2C22.17%2C0%2C0%2C1-12-7.88l-2.92-3.27a90.69%2C90.69%2C0%2C0%2C1-13.91-21.79c2.54%2C3.1%2C4.3%2C6.68%2C6.59%2C9.91a114.54%2C114.54%2C0%2C0%2C0%2C13.64%2C15.63%2C19.85%2C19.85%2C0%2C0%2C0%2C18.82%2C5%2C27%2C27%2C0%2C0%2C0%2C7-1.77c3.1-1.46%2C3.36-3.27.73-5.47a90.66%2C90.66%2C0%2C0%2C0-10-6.41c-6.37-4-13.26-7.19-19.64-11.24a106.61%2C106.61%2C0%2C0%2C1-14.12-9.73A20.15%2C20.15%2C0%2C0%2C1%2C227.23%2C120.58Z%22%2F%3E%3Cpath d%3D%22M200.84%2C171c.22-3.14%2C0-6.24%2C0-9.34a88.55%2C88.55%2C0%2C0%2C0-1.46-16.49c-.26-1.17-.39-3-1.68-3.06s-2%2C1.68-2.37%2C3.06a73.76%2C73.76%2C0%2C0%2C0-.69%2C20.45%2C24.67%2C24.67%2C0%2C0%2C0%2C.35%2C5h-.61A46.42%2C46.42%2C0%2C0%2C1%2C191%2C144a9.48%2C9.48%2C0%2C0%2C1%2C2.28-4.31%2C5.44%2C5.44%2C0%2C0%2C1%2C7.61-1%2C5.37%2C5.37%2C0%2C0%2C1%2C1.69%2C2.2%2C22.13%2C22.13%2C0%2C0%2C1%2C1.9%2C10.37%2C61.68%2C61.68%2C0%2C0%2C1-2.07%2C17.48%2C9.25%2C9.25%2C0%2C0%2C1-.9%2C2.67Z%22%2F%3E%3Cpath d%3D%22M114.26%2C176.21A20.59%2C20.59%2C0%2C0%2C1%2C111%2C155.58a6%2C6%2C0%2C0%2C1%2C5.64-3.27%2C5.64%2C5.64%2C0%2C0%2C1%2C5.29%2C3.36%2C24.94%2C24.94%2C0%2C0%2C1%2C1%2C18.08%2C11.65%2C11.65%2C0%2C0%2C1-1.85%2C4.82c0-2.23-.3-4-.39-5.72a44.65%2C44.65%2C0%2C0%2C0-1.46-12c-.43-1.43-.78-3.41-2.67-3.32s-2.41%2C1.81-2.76%2C3.49a42.67%2C42.67%2C0%2C0%2C0%2C.65%2C14C114.47%2C175.39%2C114.77%2C175.73%2C114.26%2C176.21Z%22%2F%3E%3Cpath d%3D%22M101.9%2C155.2a13.44%2C13.44%2C0%2C0%2C1-1.59-5.95%2C29.14%2C29.14%2C0%2C0%2C1%2C2.41-14.68%2C10.25%2C10.25%2C0%2C0%2C1%2C12.92-5.72c-1.38.21-2.63.34-3.84.64a9.94%2C9.94%2C0%2C0%2C0-6.84%2C6%2C40.58%2C40.58%2C0%2C0%2C0-3.06%2C17Z%22%2F%3E%3Cpath d%3D%22M141.68%2C204.41a30.13%2C30.13%2C0%2C0%2C0-15.71.47%2C21.1%2C21.1%2C0%2C0%2C0%2C6.28%2C5.77c-3.05-.69-6.28-1.08-8.13-4.05-1.21-1.89-.91-3.27%2C1.2-4A18.69%2C18.69%2C0%2C0%2C1%2C141.68%2C204.41Z%22%2F%3E%3Cpath d%3D%22M198.43%2C200.23c1.55-1.29%2C2.88-2.15%2C3.14-4s-.34-2.46-2-2.59a41.11%2C41.11%2C0%2C0%2C0-10.25%2C1.08l-2.28.39a16.74%2C16.74%2C0%2C0%2C1%2C14.72-3.36%2C4.31%2C4.31%2C0%2C0%2C1%2C1.33%2C5.94%2C4%2C4%2C0%2C0%2C1-.46.6C201.74%2C199.46%2C200.84%2C199.84%2C198.43%2C200.23Z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3Ccircle class%3D%22cls-1%22 cx%3D%22159.8%22 cy%3D%22159.8%22 r%3D%22158.3%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E\"); }\n\n.receipt-header__meta {\n  position: relative;\n  width: 90%;\n  height: 100%;\n  margin-left: 15px;\n  line-height: 1.7rem;\n  opacity: .3; }\n\n.receipt-header__serial {\n  display: block; }\n\n.receipt-header__number {\n  position: absolute;\n  top: 15px / 2;\n  right: 0;\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n  opacity: .2; }\n\n.receipt-header__greeting {\n  clear: both; }\n\n/* // Greeting styles */\n\n.receipt-header__greeting {\n  position: relative;\n  background: white;\n  padding: 0 15px;\n  padding-left: 30px; }\n\n.receipt-header__name {\n  display: block;\n  font-weight: bold;\n  font-size: 1.3rem;\n  margin-bottom: 15px / 2; }\n\n.receipt-header__count {\n  opacity: .4;\n  font-size: 90%; }\n\n.receipt-header__border {\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 100%;\n  width: 3px;\n  background-color: #429fff; }\n\n.receipt-header__spacing {\n  display: block;\n  background: white;\n  width: 100%;\n  height: 22.5px; }\n\n/* // Cart styles */\n\n.cart {\n  background: white;\n  padding: 30px;\n  padding-top: 15px;\n  border-bottom: 2px dashed #333333;\n  border-radius: 0 0 5px 5px; }\n\n.cart__receipt-header {\n  margin-top: 0;\n  text-align: center; }\n\n.cart__hr {\n  border: none;\n  padding: 0;\n  margin: 0;\n  margin-bottom: 30px;\n  border-bottom: 3px solid #333333; }\n\n.list {\n  margin: 0;\n  padding: 0;\n  counter-reset: item-counter; }\n\n.list__item {\n  display: flex;\n  width: 100%;\n  padding-top: 30px;\n  padding-bottom: 30px;\n  border-bottom: 1px dashed rgba(0, 0, 0, 0.1); }\n\n.list__item:last-child {\n  border-bottom: none; }\n\n.list__item:before {\n  content: counter(item-counter);\n  counter-increment: item-counter;\n  margin-right: 15px; }\n\n.list__name {\n  flex: 1;\n  align-self: flex-start; }\n\n.list__price {\n  align-self: flex-end;\n  text-align: right;\n  font-weight: bold; }\n\n.cart__total {\n  display: flex;\n  width: 100%; }\n\n.cart__total-label {\n  margin: 0;\n  flex: 1;\n  text-transform: uppercase; }\n\n.cart__total-price {\n  align-self: flex-end;\n  font-weight: bold;\n  text-align: right; }\n\n/* .mookie-confirm {\r\n    -webkit-animation: slideInUp 1s;\r\n    -o-animation: slideInUp 1s;\r\n    animation: slideInUp 1s;\r\n    -webkit-animation: fadein 1s;\r\n    -o-animation: fadein 1s;\r\n    animation: fadein 1s;\r\n}\r\n\r\n.mookie-confirm.ng-leave {\r\n    -webkit-animation: fadeout 1s;\r\n    -o-animation: fadeout 1s;\r\n    animation: fadeout 1s;\r\n} */\n\n@-webkit-keyframes glow {\n  to {\n    text-shadow: 0 0 10px orangered; } }\n\n@keyframes glow {\n  to {\n    text-shadow: 0 0 10px orangered; } }\n\n.order-message.pending {\n  color: #333333;\n  -webkit-animation: glow .5s infinite alternate;\n          animation: glow .5s infinite alternate;\n  font-family: sans-serif;\n  font-size: 36px;\n  font-weight: bold; }\n\n.order-message-container {\n  padding-top: 20px;\n  width: 100%;\n  text-align: center;\n  vertical-align: center; }\n"

/***/ }),

/***/ "./src/app/components/mookie-orders/mookie-orders.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/mookie-orders/mookie-orders.component.ts ***!
  \*********************************************************************/
/*! exports provided: MookieOrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MookieOrdersComponent", function() { return MookieOrdersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/order.service */ "./src/app/services/order.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MookieOrdersComponent = /** @class */ (function () {
    function MookieOrdersComponent(orderService, actiavtedRoute, mapsLoader, ngZone) {
        this.orderService = orderService;
        this.actiavtedRoute = actiavtedRoute;
        this.mapsLoader = mapsLoader;
        this.ngZone = ngZone;
    }
    MookieOrdersComponent.prototype.ngOnInit = function () {
        var _this = this;
        //set google maps defaults
        this.zoom = 4;
        this.latitude = 39.8282;
        this.longitude = -98.5795;
        this.order = {};
        this.statusMap = new Map();
        // this.orderData
        this.statusMap.set('Pending', 'Your order is being Prepared');
        this.statusMap.set('OnTheWay', 'The driver is out with your order!');
        this.statusMap.set('Completed', 'Your order was completed');
        this.order$ = this.actiavtedRoute.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (params) {
            return _this.orderService.getOrder({ orderId: params.get('orderId') });
        }));
        this.order$.subscribe(function (data) {
            console.log(data);
            if (data.success) {
                _this.order = data.order;
                _this.orderMessage = _this.statusMap.get(_this.order.orderStatus);
                console.log(_this.order);
                _this.mapsLoader.load().then(function () {
                    _this.ngZone.run(function () {
                        _this.latitude = _this.order.customerReceipt.geometryAddress.lat;
                        _this.longitude = _this.order.customerReceipt.geometryAddress.lng;
                        _this.zoom = 16;
                    });
                });
            }
        });
    };
    MookieOrdersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mookie-orders',
            template: __webpack_require__(/*! ./mookie-orders.component.html */ "./src/app/components/mookie-orders/mookie-orders.component.html"),
            styles: [__webpack_require__(/*! ./mookie-orders.component.scss */ "./src/app/components/mookie-orders/mookie-orders.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_order_service__WEBPACK_IMPORTED_MODULE_1__["OrderService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _agm_core__WEBPACK_IMPORTED_MODULE_4__["MapsAPILoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], MookieOrdersComponent);
    return MookieOrdersComponent;
}());



/***/ }),

/***/ "./src/app/components/mookie-pagenotfound/mookie-pagenotfound.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/mookie-pagenotfound/mookie-pagenotfound.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  mookie-pagenotfound works!\r\n</p>\r\n"

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

/***/ "./src/app/components/mookie-preloader/mookie-preloader.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/mookie-preloader/mookie-preloader.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container progress-container\">\r\n\r\n  <div class=\"preload-img col-lg-2\">\r\n    <img src=\"assets/imgs/toplogo.svg\">\r\n  </div>\r\n  <div class=\"row mookie-progress\">\r\n    <div class=\"col-lg-12\">\r\n      <p>\r\n        <ngb-progressbar [value]=\"progressValue\"></ngb-progressbar>\r\n      </p>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/components/mookie-preloader/mookie-preloader.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/mookie-preloader/mookie-preloader.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".preload-img {\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 150px;\n  margin-top: 30%; }\n\n.mookie-progress {\n  margin-top: 30%; }\n\n.progress-container {\n  height: 100%;\n  width: 100%; }\n\n.progress-bar {\n  background-color: #333333 !important; }\n"

/***/ }),

/***/ "./src/app/components/mookie-preloader/mookie-preloader.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/mookie-preloader/mookie-preloader.component.ts ***!
  \***************************************************************************/
/*! exports provided: MookiePreloaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MookiePreloaderComponent", function() { return MookiePreloaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MookiePreloaderComponent = /** @class */ (function () {
    function MookiePreloaderComponent() {
        this.progress = function () {
            var _this = this;
            if (this.progressValue < 100) {
                setTimeout(function () {
                    _this.progressValue += 10;
                    _this.progress();
                }, 50);
            }
        };
    }
    MookiePreloaderComponent.prototype.ngOnInit = function () {
        this.progressValue = 0;
        this.progress();
        setTimeout(function () {
            jquery__WEBPACK_IMPORTED_MODULE_1__('.progress-bar').addClass('bBack');
        }, 10);
        // (function progress(){
        //   if(this.progressValue<100){
        //     setTimeout(()=>{
        //       console.log('wtf');
        //       this.progressValue++;
        //     },200);
        //   }
        // })();
        // while(this.progressValue <100){
        //   setTimeout(()=>{
        //     console.log('wtf');
        //     this.progressValue++;
        //   }, 200)
        // }
    };
    MookiePreloaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mookie-preloader',
            template: __webpack_require__(/*! ./mookie-preloader.component.html */ "./src/app/components/mookie-preloader/mookie-preloader.component.html"),
            styles: [__webpack_require__(/*! ./mookie-preloader.component.scss */ "./src/app/components/mookie-preloader/mookie-preloader.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MookiePreloaderComponent);
    return MookiePreloaderComponent;
}());



/***/ }),

/***/ "./src/app/components/mookie-register/mookie-register.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/mookie-register/mookie-register.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Page Wrapper -->\r\n<div class=\"page-wrapper text-center\">\r\n  <!-- Content -->\r\n  <section class=\"container padding-top-3x padding-bottom-2x\">\r\n    <!-- TODO Change ng-show/hide to *ngIf -->\r\n    <h1 *ngIf=\"!loggedIn\">User Account</h1>\r\n\r\n    <div class=\"row match-my-cols\">\r\n\r\n      <div class=\"col-md-4 offset-md-3 padding-bottom\" *ngIf=\"chooseLogin\">\r\n        <h3>Login</h3>\r\n        <form method=\"post\" class=\"login-form\" (ngSubmit)=\"mookieLogin(loginData)\">\r\n          <input type=\"email\" class=\"form-control\" placeholder=\"Email\" required [(ngModel)]=\"loginData.email\" name=\"loginEmail\">\r\n          <input type=\"password\" class=\"form-control\" placeholder=\"Password\" required [(ngModel)]=\"loginData.password\" name=\"loginPassword\">\r\n          <div class=\"form-footer row\">\r\n            <div class=\"rememberme\">\r\n              <label class=\"checkbox\">\r\n                <input type=\"checkbox\" checked> Remember me\r\n              </label>\r\n            </div>\r\n            <div class=\"form-submit\">\r\n              <button type=\"submit\" class=\"btn btn-primary btn-block waves-effect waves-light inlineButton\">Login</button>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-element help-block\" *ngIf=\"loginMessage\">\r\n            <p> {{loginMsg}}</p>\r\n          </div>\r\n        </form>\r\n        <!-- .login-form -->\r\n        <p class=\"text-danger switchText aButton\" *ngIf=\"chooseLogin\" (click)=\"switchToReg()\">Sign up?</p>\r\n      </div>\r\n      <!-- .col-md-4 -->\r\n\r\n\r\n      <div class=\"col-md-4 offset-md-3 padding-bottom\" *ngIf=\"chooseReg\">\r\n        <h3>Register</h3>\r\n        <div class=\"inner\">\r\n          <form method=\"post\" class=\"login-form\" (ngSubmit)=\"mookieRegister(regData)\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Name\" required [(ngModel)]=\"regData.username\" name=\"regUsername\">\r\n            <input type=\"email\" class=\"form-control\" placeholder=\"E-mail\" required [(ngModel)]=\"regData.email\" name=\"regEmail\">\r\n            <input type=\"password\" class=\"form-control\" placeholder=\"Password\" required [(ngModel)]=\"regData.password\" name=\"regEmail\">\r\n            <div class=\"form-footer row\">\r\n              <div class=\"rememberme\"></div>\r\n              <div class=\"form-submit\">\r\n                <button type=\"submit\" class=\"btn btn-primary btn-block waves-effect waves-light inlineButton\">Sign up</button>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-element help-block\" *ngIf=\"regMessage\">\r\n              <p> {{regMsg}}</p>\r\n            </div>\r\n          </form>\r\n          <!-- .login-form -->\r\n        </div>\r\n        <!-- .inner -->\r\n        <p class=\"text-success switchText aButton\" *ngIf=\"chooseReg\" (click)=\"switchToLogin()\">Login?</p>\r\n      </div>\r\n      <!-- .col-md-4.col-md-offset-1 -->\r\n\r\n      <!-- Social media login links -->\r\n      <div class=\"col-md-3 padding-top-2x sethalf\" *ngIf=\"chooseLogin\">\r\n        <a routerLink=\"/auth/facebook\" target=\"_\" class=\"social-signup-btn ssb-facebook\">\r\n          <i class=\"fab fa-facebook-f\"></i>\r\n          <span>Login with Facebook</span>\r\n        </a>\r\n        <a routerLink=\"/auth/google\" target=\"_\" class=\"social-signup-btn ssb-google\">\r\n          <i class=\"fab fa-google\"></i>\r\n          <span>Login with Google+</span>\r\n        </a>\r\n      </div>\r\n      <!-- .col-md-3 -->\r\n      <div class=\"col-md-3 padding-top-2x sethalf\" *ngIf=\"chooseReg\">\r\n        <a routerLink=\"/auth/facebook\" target=\"_\" class=\"social-signup-btn ssb-facebook\">\r\n          <i class=\"fab fa-facebook-f\"></i>\r\n          <span>Signup with Facebook</span>\r\n        </a>\r\n        <a routerLink=\"/auth/google\" target=\"_\" class=\"social-signup-btn ssb-google\">\r\n          <i class=\"fab fa-google\"></i>\r\n          <span>Signup with Google+</span>\r\n        </a>\r\n      </div>\r\n      <!-- .col-md-3 -->\r\n\r\n    </div>\r\n    <!-- .row -->\r\n  </section>\r\n  <!-- .container -->\r\n</div>\r\n<!-- .page-wrapper -->"

/***/ }),

/***/ "./src/app/components/mookie-register/mookie-register.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/mookie-register/mookie-register.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-center {\n  text-align: center; }\n\n/* Social media btns */\n\n.social-signup-btn {\n  position: relative;\n  display: block;\n  /* width: 240px; */\n  height: 48px;\n  line-height: 48px;\n  font-size: 14px;\n  color: #fff;\n  text-decoration: none;\n  padding-left: 66px;\n  margin-bottom: 12px; }\n\n@media screen and (max-width: 990px) {\n  .social-signup-btn {\n    width: auto; }\n  /* .row.match-my-cols [class*=\"col-\"].sethalf {\r\n\t\ttransform: translate(0, -50%);\r\n\t\t\r\n\t\r\n\t} */ }\n\n.switchText {\n  margin-top: 10px;\n  margin-bottom: 5px;\n  display: block; }\n\n.social-signup-btn > i {\n  display: block;\n  position: absolute;\n  width: 48px;\n  height: 48px;\n  line-height: 48px;\n  font-size: 16px;\n  text-align: center;\n  top: 0;\n  left: 0;\n  background-color: rgba(255, 255, 255, 0.12);\n  transition: width 0.3s; }\n\n.social-signup-btn > i:before {\n  line-height: 48px; }\n\n.social-signup-btn > i.socicon-googleplus {\n  font-size: 18px; }\n\n.social-signup-btn > span {\n  opacity: 1;\n  transition: opacity 0.2s; }\n\n.social-signup-btn:focus,\n.social-signup-btn:active {\n  color: #fff;\n  text-decoration: none; }\n\n.social-signup-btn:hover {\n  color: #fff; }\n\n.social-signup-btn:hover > i {\n  width: 100%; }\n\n.social-signup-btn:hover > span {\n  opacity: 0; }\n\n.social-signup-btn.ssb-facebook {\n  background-color: #3b5998; }\n\n.social-signup-btn.ssb-google {\n  background-color: #dd4b39; }\n\n.social-signup-btn.ssb-twitter {\n  background-color: #55acee; }\n\n/* Form control inputs */\n\n.form-control {\n  display: block;\n  width: 100%;\n  line-height: 1.5;\n  height: 48px;\n  font-size: 14px;\n  color: #606060;\n  text-transform: none;\n  border: 2px solid #ededed;\n  border-radius: 5px;\n  background-color: #fff;\n  padding: 0 16px;\n  margin-bottom: 24px;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  -o-appearance: none;\n  appearance: none;\n  transition: all 0.3s; }\n\n.form-control:focus {\n  border-color: #77cde3;\n  outline: none; }\n\n.form-control::-moz-placeholder {\n  color: #606060;\n  opacity: 1; }\n\n.form-control:-ms-input-placeholder {\n  color: #606060; }\n\n.form-control::-webkit-input-placeholder {\n  color: #606060; }\n\n.form-control.placeholder {\n  color: #606060; }\n\n.checkbox {\n  position: relative;\n  display: block;\n  margin-top: 10px;\n  margin-bottom: 10px; }\n\n.inlineButton {\n  width: auto;\n  display: inline-block; }\n\n.form-footer.row {\n  display: block; }\n\n.noStyleButton {\n  border: none; }\n\n.aButton {\n  text-decoration: underline; }\n\n.aButton:hover {\n  color: blue;\n  text-decoration: none; }\n\n.row.match-my-cols {\n  overflow: hidden; }\n\n.row.match-my-cols [class*=\"col-\"].sethalf {\n  -webkit-transform: translate(0, 15%);\n          transform: translate(0, 15%);\n  /* \r\n    margin-bottom: -99999px;\r\n    padding-bottom: 99999px; */ }\n"

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
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_mookie_emit_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/mookie-emit.service */ "./src/app/services/mookie-emit.service.ts");
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
    function MookieRegisterComponent(userService, authService, shared, router, mookieEmit) {
        this.userService = userService;
        this.authService = authService;
        this.shared = shared;
        this.router = router;
        this.mookieEmit = mookieEmit;
        this.loginData = { password: '', email: '' };
        this.regData = { username: '', password: '', email: '' };
        this.loginMessage = false;
        this.regMessage = false;
        this.regMsg = "";
        this.loginMsg = "";
        this.username = "";
        this.loggedIn = false;
        this.chooseLogin = true;
        this.chooseReg = false;
        this.switchToReg = function () {
            this.chooseLogin = false;
            this.chooseReg = true;
        };
        this.switchToLogin = function () {
            this.chooseReg = false;
            this.chooseLogin = true;
        };
        this.mookieLogin = function (loginData) {
            var _this = this;
            console.log(loginData);
            console.log(this.loginData);
            this.loginMessage = false;
            this.authService.login(loginData).subscribe(function (data) {
                if (data.success) {
                    _this.loginMessage = true;
                    _this.loginMsg = "User authentication successfull";
                    _this.username = data.token;
                    _this.loggedIn = true;
                    _this.authService.setToken(data.token);
                    _this.shared.updateSharedVar('loggedIn', true);
                    if (_this.shared.getSharedVar('checkingSession'))
                        _this.shared.updateSharedVar('checkingSession', false);
                    _this.mookieEmit.emitLargeChange();
                    setTimeout(function () {
                        _this.loginMessage = false;
                        _this.loginMsg = "";
                        _this.router.navigate(['/account']);
                    }, 2000);
                }
                else {
                    _this.loginMessage = true;
                    if (data.message) {
                        _this.loginMsg = data.message;
                    }
                    else {
                        _this.loginMsg = "User could not be logged in.";
                    }
                }
            });
        };
        this.mookieLogout = function () {
            this.authService.logout();
        };
        this.mookieRegister = function (regData) {
            var _this = this;
            this.userService.registerMookie(regData).subscribe(function (data) {
                if (data.success) {
                    _this.username = regData.username;
                    _this.authService.login(_this.regData).subscribe(function (tokenData) {
                        _this.regMessage = true;
                        _this.regMsg = "Sign up was successful. Make sure to look out for a verification email";
                        _this.loggedIn = true;
                        _this.authService.setToken(tokenData.token);
                        _this.shared.updateSharedVar('loggedIn', true);
                        if (_this.shared.getSharedVar('checkingSession'))
                            _this.shared.updateSharedVar('checkingSession', false);
                        _this.mookieEmit.emitLargeChange();
                        setTimeout(function () {
                            _this.regMessage = false;
                            _this.regMsg = "";
                            _this.router.navigate(['/account']);
                            // Add check at account to tell user if they have not activated their account
                        }, 2000);
                    });
                }
                else {
                    _this.regMessage = true;
                    if (data.message) {
                        _this.regMsg = data.message;
                    }
                    else {
                        _this.regMsg = "User could not be Registered a this time. Try again later.";
                    }
                }
            });
        };
    }
    MookieRegisterComponent.prototype.ngOnInit = function () {
    };
    MookieRegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mookie-register',
            template: __webpack_require__(/*! ./mookie-register.component.html */ "./src/app/components/mookie-register/mookie-register.component.html"),
            styles: [__webpack_require__(/*! ./mookie-register.component.scss */ "./src/app/components/mookie-register/mookie-register.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _services_mookie_emit_service__WEBPACK_IMPORTED_MODULE_5__["MookieEmitService"]])
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

module.exports = "<div class=\"container socialMedia\">\r\n  <div class=\"text-center\">\r\n    <p>Check out our instagram and Twitter Feeds</p>\r\n    <a href=\"https://instagram.com/_mookie_dough\" class=\"secretsocial\">\r\n      <i class=\"fab fa-instagram\"></i>\r\n    </a>\r\n    <a href=\"https://twitter.com/_Mookie_Dough\" class=\"secretsocial\">\r\n      <i class=\"fab fa-twitter\"></i>\r\n    </a>\r\n  </div>\r\n\r\n  <div style=\"display:block; height:100%\">\r\n    <script style=\"height:100%\" src=\"https://lightwidget.com/widgets/lightwidget.js\"></script>\r\n    <iframe id=\"insta\" src=\"https://lightwidget.com/widgets/6c3070862eb4520e9880b7583b1c710d.html\" scrolling=\"no\" allowtransparency=\"true\"\r\n      class=\"lightwidget-widget\" style=\"width: 100%; border: 0;height:100%;\"></iframe>\r\n  </div>\r\n\r\n  <!-- <insta style=\"width: 100%; border: 0; display:block;\"></insta> -->\r\n\r\n  <div id=\"twit\" style=\"display:block; height:100%\">\r\n    <a class=\"twitter-timeline\" href=\"https://twitter.com/_Mookie_Dough?ref_src=twsrc%5Etfw\">Tweets by _Mookie_Dough</a>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/components/mookie-social/mookie-social.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/mookie-social/mookie-social.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".socialMedia {\n  display: block; }\n\n.text-right {\n  text-align: right; }\n\n.text-center {\n  text-align: center; }\n"

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
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
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
    function MookieSocialComponent(renderer) {
        this.renderer = renderer;
    }
    MookieSocialComponent.prototype.ngOnInit = function () {
        var _this = this;
        var $insta = jquery__WEBPACK_IMPORTED_MODULE_1__('#insta');
        var $twit = jquery__WEBPACK_IMPORTED_MODULE_1__('#twit');
        var getInstaHeight = function (event) {
            if (event.origin.indexOf('http://localhost:8081') || event.origin.indexOf('https://www.mookiedough.co')) {
                var tempData = event.data.trim();
                var eventData = JSON.parse(tempData);
                if (eventData.type === "lightwidget_widget_size") {
                    jquery__WEBPACK_IMPORTED_MODULE_1__('#insta').css({ height: eventData.size });
                    window.removeEventListener("message", getInstaHeight, false);
                }
            }
            else {
                return;
            }
        };
        var resizeInsta = function () {
            window.addEventListener('message', getInstaHeight);
            // document.getElementById('insta').content.postMessage('', '*');
        };
        document.getElementById('insta').onload = function () {
            resizeInsta();
            window.addEventListener('message', resizeTwit);
            console.log('here');
        };
        var resizeTwit = function () {
            var jsBody = '<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>';
            var htBody = '<a class="twitter-timeline" href="https://twitter.com/_Mookie_Dough?ref_src=twsrc%5Etfw">Tweets by _Mookie_Dough</a>';
            var twit = _this.renderer.selectRootElement('#twit');
            var js = _this.renderer.createElement("script");
            var ht = _this.renderer.createElement("a");
            ht.setAttribute('class', 'twitter-timeline');
            ht.setAttribute('href', "https://twitter.com/_Mookie_Dough?ref_src=twsrc%5Etfw");
            js.src = 'https://platform.twitter.com/widgets.js';
            js.async = true;
            _this.renderer.appendChild(twit, js);
            _this.renderer.appendChild(twit, ht);
            console.log(js);
            jquery__WEBPACK_IMPORTED_MODULE_1__('#twit').append(js);
            window.removeEventListener("message", resizeTwit, false);
        };
    };
    ;
    MookieSocialComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mookie-social',
            template: __webpack_require__(/*! ./mookie-social.component.html */ "./src/app/components/mookie-social/mookie-social.component.html"),
            styles: [__webpack_require__(/*! ./mookie-social.component.scss */ "./src/app/components/mookie-social/mookie-social.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
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
        this.login = function (loginData) {
            var _this = this;
            return this.http.post(this.authenticate, loginData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
                console.log(res);
                return res;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return _this.handleError(err); }));
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
        this.socialMedia = function (token) {
            this.setToken(token);
            // setToken()
            // Set socialMedia function's previous uses to simply setToken
        };
        this.getUser = function () {
            var _this = this;
            if (this.isLoggedIn()) {
                return this.http.post('/api/me').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
                    console.log(res);
                    return res;
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return _this.handleError(err); }));
            }
            else {
                return Promise.reject(new Error('No token provided')).then(function (res) { console.log(res); }, function (err) { console.log(err); });
            }
        };
        this.setToken = function (token) {
            var windowRef = this.windowRef.nativeWindow;
            if (token) {
                windowRef.localStorage.setItem('token', token);
                console.log(windowRef.localStorage.getItem('token'));
            }
            else {
                windowRef.localStorage.removeItem('token');
            }
        };
        this.getToken = function () {
            var windowRef = this.windowRef.nativeWindow;
            console.log(windowRef.localStorage.getItem('token'));
            return windowRef.localStorage.getItem('token');
        };
        this.logout = function () {
            this.setToken();
        };
        // Schedule Service
        this.getOrderingSchedule = function () {
            var _this = this;
            return this.http.post('/api/checkOrderingSchedule').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
                console.log(res);
                return res;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return _this.handleError(err); }));
        };
        // Subscription
        this.addSubscription = function (subData) {
            var _this = this;
            return this.http.post('/api/addSubscription', subData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
                console.log(res);
                return res;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return _this.handleError(err); }));
        };
        this.getSubscribers = function () {
            var _this = this;
            return this.http.get('/api/getSubscribers').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
                console.log(res);
                return res;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return _this.handleError(err); }));
        };
        // Contact Message
        this.addContactMessage = function (contactData) {
            var _this = this;
            return this.http.post('/api/addContactMessage', contactData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
                console.log(res);
                return res;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return _this.handleError(err); }));
        };
        this.getContactMessages = function () {
            var _this = this;
            return this.http.get('/api/getContactMessages').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
                console.log(res);
                return res;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return _this.handleError(err); }));
        };
        // Visitor
        this.checkVisitor = function (ipData) {
            var _this = this;
            return this.http.post('/api/checkVisitor', ipData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
                console.log(res);
                return res;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return _this.handleError(err); }));
        };
        // IP
        this.getIp = function (data) {
            var _this = this;
            return this.http.post('https://ipinfo.io/?format=jsonp/').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
                console.log(res);
                return res;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return _this.handleError(err); }));
        };
        this.getSiteVisitors = function () {
            var _this = this;
            return this.http.post('/api/getSiteVisitors').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
                console.log(res);
                return res;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return _this.handleError(err); }));
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
            var _this = this;
            return this.http.post('/api/deleteCartProduct', productData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { console.log(res); return res; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return _this.handleError(err); }));
        };
        this.updateCart = function (cartData) {
            var _this = this;
            return this.http.post('/api/updateCart', cartData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { console.log(res); return res; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return _this.handleError(err); }));
        };
        this.getCart = function (cartId) {
            var _this = this;
            return this.http.post('/api/getCart', cartId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { console.log(res); return res; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return _this.handleError(err); }));
        };
        this.seedCart = function (cartData) {
            var _this = this;
            return this.http.post('/api/seedCart', cartData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { console.log(res); return res; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return _this.handleError(err); }));
        };
        this.deleteCart = function (cartData) {
            var _this = this;
            return this.http.post('/api/deleteCart', cartData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { console.log(res); return res; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return _this.handleError(err); }));
        };
        this.getAProduct = function () {
            return this.http.get('/api/getAProduct');
        };
        this.addCartToUser = function (userData) {
            var _this = this;
            return this.http.post('/api/addCartToUser', userData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { console.log(res); return res; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return _this.handleError(err); }));
        };
        this.addItemToCart = function (productData) {
            var _this = this;
            return this.http.post('/api/addItemToCart', productData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { console.log(res); return res; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return _this.handleError(err); }));
        };
        this.removeItemFromCart = function (item) {
            var _this = this;
            return this.http.post('/api/remove-cart-item', item).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { console.log(res); return res; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return _this.handleError(err); }));
        };
        this.checkout = function (checkoutData) {
            var _this = this;
            return this.http.post('/api/checkout', checkoutData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { console.log(res); return res; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return _this.handleError(err); }));
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

/***/ "./src/app/services/inventory.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/inventory.service.ts ***!
  \***********************************************/
/*! exports provided: InventoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryService", function() { return InventoryService; });
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





var InventoryService = /** @class */ (function () {
    function InventoryService(http, windowRef) {
        this.http = http;
        this.windowRef = windowRef;
        // Update Inventory 
        this.updateInventory = function (inventoryData) {
            var _this = this;
            return this.http.post('/api/updateInventory', inventoryData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { console.log(res); return res; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return _this.handleError(err); }));
        };
        // Get inventory to laod in frontend
        this.getInventory = function () {
            var _this = this;
            return this.http.post('/api/getInventory').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { console.log(res); return res; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return _this.handleError(err); }));
        };
        // Remove an inventory update
        this.removeInventoryUpdate = function (itemData) {
            var _this = this;
            return this.http.post('/api/removeInventoryUpdate', itemData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { console.log(res); return res; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return _this.handleError(err); }));
        };
    }
    InventoryService.prototype.handleError = function (error) {
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
    InventoryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _window_ref_service__WEBPACK_IMPORTED_MODULE_4__["WindowRefService"]])
    ], InventoryService);
    return InventoryService;
}());



/***/ }),

/***/ "./src/app/services/mookie-emit.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/mookie-emit.service.ts ***!
  \*************************************************/
/*! exports provided: MookieEmitService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MookieEmitService", function() { return MookieEmitService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MookieEmitService = /** @class */ (function () {
    function MookieEmitService() {
        this.emitChangeSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.emitLarge = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.emitSession = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.changeEmitted$ = this.emitChangeSource.asObservable();
        this.largeChangeEmitted$ = this.emitLarge.asObservable();
        this.sessionEmitted$ = this.emitSession.asObservable();
    }
    MookieEmitService.prototype.emitChange = function () {
        this.emitChangeSource.next();
    };
    MookieEmitService.prototype.emitLargeChange = function () {
        this.emitLarge.next();
    };
    MookieEmitService.prototype.emitSessionChange = function () {
        this.emitSession.next();
    };
    MookieEmitService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], MookieEmitService);
    return MookieEmitService;
}());



/***/ }),

/***/ "./src/app/services/order.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/order.service.ts ***!
  \*******************************************/
/*! exports provided: OrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return OrderService; });
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




var OrderService = /** @class */ (function () {
    function OrderService(http) {
        this.http = http;
        // Get current orders for management
        this.getCurrentOrders = function () {
            var _this = this;
            return this.http.post('/api/getcurrentOrders').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { console.log(res); return res; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return _this.handleError(err); }));
        };
        // Get order for management and customers
        this.getOrder = function (orderId) {
            var _this = this;
            return this.http.post('/api/getOrder', orderId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { console.log(res); return res; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return _this.handleError(err); }));
        };
        // Update driver location for an order
        this.updateDriverLocation = function (driverLatLng) {
            var _this = this;
            return this.http.post('/api/updateDriverLocation', driverLatLng).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { console.log(res); return res; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return _this.handleError(err); }));
        };
        // Update the delivery status of an order
        this.updateDeliveryStatus = function (orderData) {
            var _this = this;
            return this.http.post('/api/updateDeliveryStatus', orderData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { console.log(res); return res; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return _this.handleError(err); }));
        };
        // Get the old orders for the user
        this.getUserOrders = function (userData) {
            var _this = this;
            return this.http.post('/api/getUserOrders', userData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { console.log(res); return res; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return _this.handleError(err); }));
        };
    }
    OrderService.prototype.handleError = function (error) {
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
    OrderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], OrderService);
    return OrderService;
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





var ProductService = /** @class */ (function () {
    function ProductService(http, windowRef) {
        this.http = http;
        this.windowRef = windowRef;
        this.seedProduct = function (productData) {
            var _this = this;
            return this.http.post('/api/seedProduct', productData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
                console.log(res);
                return res;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return _this.handleError(err); }));
        };
        this.updateProductQty = function (productData) {
            var _this = this;
            return this.http.post('/api/updateProductQty', productData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
                console.log(res);
                return res;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return _this.handleError(err); }));
        };
        this.deleteProduct = function (productData) {
            var _this = this;
            return this.http.post('/api/deleteProduct', productData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
                console.log(res);
                return res;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return _this.handleError(err); }));
        };
        this.getProduct = function (productId) {
            var _this = this;
            return this.http.get('/api/getProduct', productId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
                console.log(res);
                return res;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return _this.handleError(err); }));
        };
        this.getCatalogProducts = function () {
            var _this = this;
            return this.http.post('/api/getCatalogProducts').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
                console.log(res);
                return res;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return _this.handleError(err); }));
        };
        this.getProductCategory = function (categoryData) {
            var _this = this;
            return this.http.post('/api/getProductCategory', categoryData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
                console.log(res);
                return res;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return _this.handleError(err); }));
        };
        this.addProductToCatalog = function (product) {
            var _this = this;
            return this.http.post('/api/addProductToCatalog', product).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
                console.log(res);
                return res;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return _this.handleError(err); }));
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
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _window_ref_service__WEBPACK_IMPORTED_MODULE_4__["WindowRefService"]])
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
        this.cartItemCount = 0;
        this.admin = false;
        this.products = {};
        this.loggedIn = false;
        this.deliveryLatLng = {};
        this.deliveryLocationChanged = false;
        this.deliveryLocation = null;
        this.numberOfSiteVisitors = 0;
        this.user = { userEmail: '', username: '' };
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
        this.getSharedVars = function () {
            return { checkingSession: this.checkingSession, cart: this.cart, cartItemCount: this.cartItemCount, admin: this.admin, products: this.products, loggedIn: this.loggedIn, deliveryLatLng: this.deliveryLatLng, deliveryLocationChanged: this.deliveryLocationChanged, deliveryLocation: this.deliveryLocation, numberOfSiteVisitors: this.numberofSitVisitors, user: this.user, contactMes: this.contactMes };
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
            var _this = this;
            return this.http.put('/api/activate' + token).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { console.log(res); return res; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return _this.handleError(err); }));
        };
        this.registerMookie = function (regData) {
            var _this = this;
            return this.http.post('/api/registerMookie', regData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { console.log(res); return res; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return _this.handleError(err); }));
        };
        this.facebookRegister = function (regData) {
            var _this = this;
            return this.http.post('/api/facebookRegister', regData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { console.log(res); return res; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return _this.handleError(err); }));
        };
        this.getUsers = function () {
            var _this = this;
            return this.http.post('/api/getUsers').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { console.log(res); return res; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return _this.handleError(err); }));
        };
        this.getUserId = function () {
            var _this = this;
            return this.http.get('/api/getUserId').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { console.log(res); return res; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return _this.handleError(err); }));
        };
        this.getUser = function (userData) {
            var _this = this;
            return this.http.post('/api/getUser', userData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { console.log(res); return res; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return _this.handleError(err); }));
        };
        this.removeCart = function (userData) {
            var _this = this;
            return this.http.post('/api/removeCart', userData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { console.log(res); return res; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return _this.handleError(err); }));
        };
        this.getOldCarts = function (userData) {
            var _this = this;
            return this.http.post('/api/getOldCarts', userData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { console.log(res); return res; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return _this.handleError(err); }));
        };
        // Register users in database
        this.create = function (regData) {
            var _this = this;
            return this.http.post('/api/users', regData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { console.log(res); return res; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return _this.handleError(err); }));
        };
        this.register = function (regData) {
            var _this = this;
            return this.http.post('/api/register-user', regData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { console.log(res); return res; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return _this.handleError(err); }));
        };
        // Check if username is available at registration
        this.checkUsername = function (regData) {
            var _this = this;
            return this.http.post('/api/checkusername', regData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { console.log(res); return res; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return _this.handleError(err); }));
        };
        // Check if e-mail is available at registration
        this.checkEmail = function (regData) {
            var _this = this;
            return this.http.post('/api/checkemail', regData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { console.log(res); return res; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return _this.handleError(err); }));
        };
        // Check credentials before re-sending activation link
        this.checkCredentials = function (loginData) {
            var _this = this;
            return this.http.post('/api/resend', loginData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { console.log(res); return res; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return _this.handleError(err); }));
        };
        // Send new activation link to user
        this.resendLink = function (username) {
            var _this = this;
            return this.http.put('/api/resend', username).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { console.log(res); return res; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return _this.handleError(err); }));
        };
        // Send user's username to e-mail
        this.sendUsername = function (userData) {
            var _this = this;
            return this.http.get('/api/resetusername/' + userData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { console.log(res); return res; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return _this.handleError(err); }));
        };
        // Send password reset link to user's e-mail
        this.sendPassword = function (resetData) {
            var _this = this;
            return this.http.put('/api/resetpassword', resetData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { console.log(res); return res; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return _this.handleError(err); }));
        };
        // Grab user's information from e-mail reset link
        this.resetUser = function (token) {
            var _this = this;
            return this.http.get('/api/resetpassword/' + token).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { console.log(res); return res; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return _this.handleError(err); }));
        };
        // Save user's new password
        this.savePassword = function (regData) {
            var _this = this;
            return this.http.put('/api/savepassword', regData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { console.log(res); return res; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return _this.handleError(err); }));
        };
        // Provide the user with a new token
        this.renewSession = function (username) {
            var _this = this;
            return this.http.get('/api/renewToken/' + username).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { console.log(res); return res; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return _this.handleError(err); }));
        };
        // Get the current user's permission
        this.getPermission = function () {
            var _this = this;
            return this.http.get('/api/permission/').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { console.log(res); return res; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return _this.handleError(err); }));
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