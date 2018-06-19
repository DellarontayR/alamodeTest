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
/* harmony import */ var _components_mookie_menu_mookie_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/mookie-menu/mookie-menu.component */ "./src/app/components/mookie-menu/mookie-menu.component.ts");
/* harmony import */ var _components_mookie_about_mookie_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/mookie-about/mookie-about.component */ "./src/app/components/mookie-about/mookie-about.component.ts");
/* harmony import */ var _components_mookie_account_mookie_account_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/mookie-account/mookie-account.component */ "./src/app/components/mookie-account/mookie-account.component.ts");
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
    { path: 'account', component: _components_mookie_account_mookie_account_component__WEBPACK_IMPORTED_MODULE_8__["MookieAccountComponent"] },
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

module.exports = "<!-- <img src=\"assets/3dMocha.png\"/> -->\n\n<body>\n\n  <!-- Mookie Header -->\n  <app-mookie-header *ngIf=\"showBody\"></app-mookie-header>\n\n  <!-- Main Angular view where routes will be rendered-->\n  <!-- <div class=\"main-view\" ng-show=\"main.loadme\" ng-view></div> -->\n  <router-outlet *ngIf=\"showBody\" class=\"animated fadeIn fadeOut\" ></router-outlet>\n\n  <!-- Mookie footer -->\n  <app-mookie-footer *ngIf=\"showBody\"></app-mookie-footer>\n\n  <app-mookie-preloader class=\"full\" *ngIf=\"!showBody\"></app-mookie-preloader>\n\n  <!-- Stripe elements  -->\n  <script src=\"https://js.stripe.com/v3/\"></script>\n  <!-- <script src=\"../mookiedoughfrontend/js/scripts.js\"></script> -->\n</body>"

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
    function AppComponent(authService, router, cartService, shared, userService, productService, inventoryService, windowRef) {
        this.authService = authService;
        this.router = router;
        this.cartService = cartService;
        this.shared = shared;
        this.userService = userService;
        this.productService = productService;
        this.inventoryService = inventoryService;
        this.windowRef = windowRef;
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
            this.cartService.getCart(userData).subscribe(function (data) {
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
            console.log('in checkuserState');
            if (this.authService.isLoggedIn()) {
                this.authService.getUser().subscribe(function (data) {
                    userData.userEmail = data.email;
                    userData.username = data.username;
                    console.log(data);
                    _this.shared.updateSharedVar('loggedIn', true);
                    _this.shared.addMinUser(userData.userEmail, userData.username);
                    if (data.username === undefined) {
                        _this.authService.logout();
                        _this.shared.updateSharedVar('loggedIn', false);
                        _this.router.navigate(['/register'], { relativeTo: _this.route });
                    }
                    else {
                        _this.userService.getUser(userData).subscribe(function (retUser) {
                            if (retUser.success) {
                                userData.success = true;
                                // 
                            }
                            console.log(userData);
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
            var _this = this;
            this.checkUserState(function (userData) {
                console.log('past check userstate');
                console.log(userData);
                _this.shared.updateSharedVar('checkingSession', true);
                if (userData.success) {
                    // Run interval ever 30000 milliseconds (30 seconds) 
                    _this.checkUser$.subscribe(function (event) {
                        console.log('in subscribe');
                        var mWindow = _this.windowRef.nativeWindow;
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
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
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
            console.log(route);
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
    ;
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"], _services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"], _services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"], _services_product_service__WEBPACK_IMPORTED_MODULE_8__["ProductService"], _services_inventory_service__WEBPACK_IMPORTED_MODULE_9__["InventoryService"], _services_window_ref_service__WEBPACK_IMPORTED_MODULE_10__["WindowRefService"]])
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
                _components_mookie_account_mookie_account_component__WEBPACK_IMPORTED_MODULE_19__["MookieAccountComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__["NgbModule"].forRoot(),
            ],
            providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"], { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"], useClass: _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], multi: true }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/mookie-about/mookie-about.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/mookie-about/mookie-about.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"aboutUs\">\n  <h1>\n    ABOUT US\n    <br>\n    <img src=\"https://image.ibb.co/nk616F/Layer_1_copy_21.png\" width=\"47\" height=\"11\" align=\"center\">\n  </h1>\n  <article>\n    <p class=\"aboutText\">\n      We are a team of first-generation students at Stanford University with a passion for creativity and good food. Half of our\n      team immigrated to the US at a young age, and all of our team’s members have histories of overcoming less-than ideal\n      odds, while demonstrating unmatchable hustle in all facets of life. From our deep involvement in our respective communities\n      to our individual passions for fashion, design, food, and entrepreneurship, we all aspire to make waves by not only\n      stretching the boundaries of what defines a modern food company, but also to contradict the common perception of what\n      is and isn’t possible irrespective of your given odds when you approach life with an energetic and creative spirit.\n\n      <br>\n      <br> Since being founded in 2017, Mookie Dough has been feeding the insatiable cookie dough cravings of our loyal fans.\n      What makes us so different? What makes us special? Why should you eat our cookie dough? The answer is simple. You love\n      our cookie dough and we want to make sure you can get it anytime you want. When Late-night is over and there isn't\n      a meal in sight take some Mookie Dough from your fridge and have a great night.\n    </p>\n  </article>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-6 col-md-4 col-lg-3 founderCol\">\n        <div class=\"founder\">\n          <img class=\"founderImg\" src=\"assets/imgs/bempah-opt.jpg\">\n        </div>\n        <h4 class=\"founderName\">Andrew Bempah</h4>\n        <span class=\"founderPosition\">Co-Founder, President</span>\n      </div>\n      <div class=\"col-sm-6 col-md-4 col-lg-3 founderCol\">\n        <div class=\"founder\">\n          <img class=\"founderImg\" src=\"assets/imgs/rontay.jpg\">\n        </div>\n        <h4 class=\"founderName\">Dellarontay Readus</h4>\n        <span class=\"founderPosition\">Co-Founder, Head of Technology and Software</span>\n      </div>\n      <div class=\"col-sm-6 col-md-4 col-lg-3 founderCol\">\n        <div class=\"founder\">\n          <img class=\"founderImg\" src=\"assets/imgs/olu.jpg\">\n        </div>\n        <h4 class=\"founderName\">Oluwaseyi Olaleye</h4>\n        <span class=\"founderPosition\">Co-Founder, Head Of Operations</span>\n      </div>\n      <div class=\"col-sm-6 col-md-4 col-lg-3 founderCol\">\n        <div class=\"founder\">\n          <img class=\"founderImg\" src=\"assets/imgs/akim.jpg\">\n        </div>\n        <h4 class=\"founderName\">Akim Richards</h4>\n        <span class=\"founderPosition\">Co Founder, Head of Strategy Implementation</span>\n      </div>\n    </div>\n\n  </div>\n</div>"

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

module.exports = "<div class=\"page-wrapper\">\n  <!-- Content -->\n  <section class=\"container padding-top-3x\">\n    <h1 class=\"mobile-center\">Hey,\n      <span class=\"text-semibold\">{{username}}</span>\n    </h1>\n    <!-- <div class=\"row padding-top\">\n        <h1> Current Order Information</h1>\n      </div> -->\n    <div class=\"row padding-top\">\n      <div class=\"col-sm-9 padding-bottom-2x\">\n        <!-- Nav Tabs -->\n        <ul class=\"nav-tabs mobile-center\" role=\"tablist\">\n          <li class=\"active\">\n            <a href=\"#orders\" role=\"tab\" data-toggle=\"tab\">\n              <!-- <i class=\"material-icons shopping_cart\"></i> -->\n              <i class=\"fas fa-shopping-cart fa-xs fa-fw\"></i>\n\n              Orders\n              <!-- Possible number of previous orders -->\n            </a>\n          </li>\n        </ul>\n        <!-- .nav-tabs -->\n\n        <!-- Tab Panes -->\n        <div class=\"tab-content\">\n\n          <div role=\"tabpanel\" class=\"tab-pane fade active in\" id=\"orders\">\n            <div class=\"table-responsive\">\n              <table>\n                <thead>\n                  <tr>\n                    <th>Order #</th>\n                    <th>Date Purchased</th>\n                    <th>Status</th>\n                    <th>Total</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let order of orderHistory;trackBy:orderStartedOn\">\n                    <td>\n                        <a routerLink=\"/orders/{{order._id}}\">{{order.customerReceipt.receiptNumber}}</a>\n                    </td>\n                    <td>{{order.orderStartedOn | date:\"MM/dd/yyyy 'at' h:mma\"}}</td>\n                    <td>{{order.orderStatus}}</td>\n                    <td>{{order.customerReceipt.customerCart.total | currency}}</td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n        </div>\n        <!-- .tab-content -->\n      </div>\n      <!-- .col-sm-8 -->\n\n      <!-- Sidebar -->\n      <div class=\"col-sm-3 padding-bottom-2x\">\n        <aside class=\"mobile-center\">\n          <!-- <h3>Your Mookie Dough points:</h3>\n            <h3><span class=\"text-semibold\">0</span> <span class=\"h5\">points</span></h3>\n            <p class=\"text-sm text-gray\">You can spend these points on our products</p> -->\n          <a href=\"/home\" class=\"btn btn-default btn-ghost icon-left btn-block\">\n            <i class=\"material-icons arrow_back\"></i>\n            Go to Shop\n          </a>\n          <button type=\"submit\" class=\"btn btn-primary btn-block waves-effect waves-light space-top-none checkoutBtn\" (click)=\"logout()\">Sign Out</button>\n          <button *ngIf=\"admin\" type=\"submit\" class=\"btn btn-primary btn-block waves-effect waves-light space-top-none checkoutBtn\">\n            <a href=\"/management\">Admin Portal</a>\n          </button>\n\n        </aside>\n      </div>\n      <!-- .col-sm-4 -->\n    </div>\n    <!-- .row -->\n  </section>\n  <!-- .container -->\n\n</div>\n<!-- .page-wrapper -->"

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
    function MookieAccountComponent(shared, userService, orderService, authService, router) {
        this.shared = shared;
        this.userService = userService;
        this.orderService = orderService;
        this.authService = authService;
        this.router = router;
        this.logout = function () {
            this.authService.logout();
            this.router.navigate(['/home']);
        };
    }
    MookieAccountComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.admin = false;
        var sessionVars = this.shared.getSharedVars();
        if (sessionVars.user.username)
            this.username = sessionVars.user.username;
        if (sessionVars.user.userEmail)
            this.userEmail = sessionVars.user.userEmail;
        var userData = { username: this.username, userEmail: this.userEmail };
        console.log(userData);
        this.userService.getUser(userData).subscribe(function (data) {
            if (data.success) {
                var getOrderData = { userId: data.user._id };
                if (data.user.permission === 'admin')
                    _this.admin = true;
                _this.orderService.getUserOrders(getOrderData).subscribe(function (orderData) {
                    if (data.success) {
                        _this.orderHistory = data.orders;
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
        __metadata("design:paramtypes", [_services_shared_service__WEBPACK_IMPORTED_MODULE_1__["SharedService"], _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _services_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
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

module.exports = "<!-- Page Wrapper -->\n<div class=\"page-wrapper\">\n\n  <!-- Container -->\n  <section class=\"container padding-top-3x padding-bottom\">\n\n    <h1 class=\"space-top-half\">Shopping Cart</h1>\n    <div class=\"row padding-top\">\n\n      <!-- Cart -->\n      <div class=\"col-sm-8 padding-bottom-2x\">\n        <p class=\"text-sm\">\n          <span class=\"text-gray\">Currently</span> {{cartItemCount || 0}} items\n          <span class=\"text-gray\"> in cart</span>\n        </p>\n        <div class=\"shopping-cart container\">\n\n          <div class=\"item row\" *ngFor=\"let cartItem of cartProducts\">\n            <a href=\"\" class=\"item-thumb\">\n              <img (src)\"cartItem.imagePath\" alt=\"Item\">\n            </a>\n            <div class=\"item-details\">\n              <h3 class=\"item-title\">{{cartItem.title}}</h3>\n              <h4 class=\"item-price\">{{cartItem.price}} x {{cartItem.qty}}</h4>\n              <h4 class=\"item-price\">{{cartItem.subtotalOnProduct}}</h4>\n\n              <div class=\"count-input\">\n                <a class=\"incr-btn\" data-action=\"decrease\" href=\"#\" (click)=\"removeItem(cartItem)\" ng-show=\"cartItem.qty >=2\">-</a>\n                <input class=\"quantity\" type=\"text\" (value)=\"cartItem.qty\">\n                <a class=\"incr-btn\" data-action=\"increase\" href=\"#\" (click)=\"addItem(cartItem)\">+</a>\n              </div>\n            </div>\n            <a href=\"#\" class=\"item-remove\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Remove\" (click)=\"deleteItem(cartItem)\">\n              <i class=\"material-icons remove_shopping_cart\"></i>\n            </a>\n          </div>\n        </div>\n\n        <!-- Coupon -->\n        <div class=\"\">\n          <p class=\"text-gray text-sm\">Have discount coupon?</p>\n          <form method=\"post\" class=\"row\">\n            <div class=\"col-md-8 col-sm-7\">\n              <div class=\"form-element\">\n                <input type=\"text\" class=\"form-control\" placeholder=\"Enter coupon\" required>\n              </div>\n            </div>\n            <div class=\"col-md-4 col-sm-5\">\n              <button type=\"submit\" class=\"btn btn-default btn-ghost btn-block space-top-none space-bottom\">Apply Coupon</button>\n            </div>\n          </form>\n        </div>\n      </div>\n      <!-- .col-sm-8 -->\n\n      <!-- Sidebar -->\n      <div class=\"col-md-3 col-md-offset-1 col-sm-4 padding-bottom-2x\" ng-init=\"justCheckout = true\">\n        <aside>\n          <h4 class=\"toolbar-title\">Cart subtotal:</h4>\n          <h4 class=\"amount\">${{subTotal}}</h4>\n          <h4 class=\"toolbar-title\">Sales Tax</h4>\n          <h4 class=\"amount\">${{tax}}</h4>\n          <h4 class=\"toolbar-title\">Cart Total</h4>\n          <h4 class=\"amount\">${{total}}</h4>\n\n\n\n          <!-- <a href=\"#\" class=\"btn btn-default btn-block waves-effect waves-light\">Update Cart</a> -->\n          <a *ngIf=\"justCheckout\" href=\"#\" class=\"btn btn-primary btn-block waves-effect waves-light space-top-none checkoutBtn\"\n            (click)=\"justCheckout = false;\">Checkout</a>\n          <a *ngIf=\"justCheckout\" href=\"#\" class=\"btn btn-primary btn-block waves-effect waves-light space-top-none checkoutBtn\"\n            (click)=\"updateCart();\" (disabled)=\"!cartChanged\">Update Cart</a>\n          <div *ngIf=\"!justCheckout\">\n            <a href=\"/ontheway\" class=\"btn btn-primary btn-block waves-effect waves-light space-top-none checkoutBtn\">Delivery</a>\n            <a href=\"\" class=\"btn btn-primary btn-block waves-effect waves-light space-top-none checkoutBtn\">Pickup</a>\n            <!-- still have to go to /Checkout at some point -->\n          </div>\n          <!-- instead of going from shopping-car to checkout directly we want to make checkouthappen after the user defines their order type or otherwise -->\n        </aside>\n      </div>\n      <!-- .col-md-3.col-sm-4 -->\n    </div>\n    <!-- .row -->\n  </section>\n  <!-- .container -->\n</div>\n<!-- .page-wrapper -->"

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
    function MookieCartComponent() {
    }
    MookieCartComponent.prototype.ngOnInit = function () {
    };
    MookieCartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mookie-cart',
            template: __webpack_require__(/*! ./mookie-cart.component.html */ "./src/app/components/mookie-cart/mookie-cart.component.html"),
            styles: [__webpack_require__(/*! ./mookie-cart.component.scss */ "./src/app/components/mookie-cart/mookie-cart.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MookieCartComponent);
    return MookieCartComponent;
}());



/***/ }),

/***/ "./src/app/components/mookie-checkout/mookie-checkout.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/mookie-checkout/mookie-checkout.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Page Wrapper -->\n<div class=\"page-wrapper\">\n  <!-- Container -->\n  <form method=\"post\" class=\"container padding-top-3x padding-bottom-2x\">\n\n    <h1 class=\"space-top-half text-center\">Checkout</h1>\n    <div class=\"row padding-top\">\n\n      <!-- add bitcoin as a payment method -->\n\n\n\n      <!-- Checkout Form -->\n      <div class=\"col-sm-8 col-md-4 col-md-offset-3 padding-bottom\">\n        <!-- .row -->\n        <div class=\"row\">\n          <!-- <a href=\"#\" class=\"add-to-cart\" ng-click=\"mookie.showStripeModal()\">\n                  <em>Checkout Now</em>\n                  <svg x=\"0px\" y=\"0px\" width=\"32px\" height=\"32px\" viewBox=\"0 0 32 32\">\n                    <path stroke-dasharray=\"19.79 19.79\" stroke-dashoffset=\"19.79\" fill=\"none\" stroke=\"#FFFFFF\" stroke-width=\"2\" stroke-linecap=\"square\" stroke-miterlimit=\"10\" d=\"M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11\"/>\n                  </svg>\n              </a> -->\n\n          <p> Please use 4242-4242-4242-4242 for card number and any date or zip code during test experience</p>\n          <form>\n            <div class=\"group\">\n              <label>\n                <input name=\"cardholder-name\" class=\"field is-empty\" placeholder=\"Name Jane Doe\" [(ngModel)]=\"checkoutData.name\" />\n              </label>\n              <label>\n                <input class=\"field is-empty\" type=\"tel\" placeholder=\"Phone number (123) 456-7890\" [(ngModel)]=\"checkoutData.number\"\n                  style=\"color:black\" />\n              </label>\n            </div>\n            <div class=\"group cardGroup\">\n              <label>\n                <div id=\"card-element\" class=\"field is-empty stripeElement\" required></div>\n              </label>\n\n            </div>\n          </form>\n\n        </div>\n        <div class=\"row\" *ngIf=\"chargeSuccessful\">\n        </div>\n\n        <!-- <div class=\"row\">\n            <form action=\"/your-server-side-code\" method=\"POST\">\n              <script src=\"https://checkout.stripe.com/checkout.js\" class=\"stripe-button\" data-key=\"pk_test_EPjnzpxnrgvUiGWsYrJjqN5t\" data-amount=\"2000\"\n                data-name=\"Mookie Dough LLC\" data-description=\"2 widgets\" data-image=\"https://stripe.com/img/documentation/checkout/marketplace.png\"\n                data-locale=\"auto\">\n              </script>\n              </form>\n          </div> -->\n      </div>\n\n\n      <!-- .col-sm-8 -->\n\n      <!-- Sidebar -->\n      <div class=\"col-md-3 col-md-offset-1 col-sm-4 padding-bottom\">\n        <aside>\n          <h3>Cart total:</h3>\n          <h4>${{total}}</h4>\n          <a href=\"/shopping-cart\" class=\"btn btn-default btn-ghost icon-left btn-block\">\n            <i class=\"material-icons arrow_back\"></i>\n            Back To Cart\n          </a>\n          <!-- <button type=\"submit\" class=\"btn btn-primary btn-block waves-effect waves-light space-top-none\" ng-click=\"mookie.showStripeModal()\">Checkout</button> -->\n          <button type=\"submit\" class=\"btn btn-primary btn-block waves-effect waves-light space-top-none checkoutBtn\" (click)=\"doCheckout()\">Checkout</button>\n          <label for=\"card-element\" class=\"checkoutMsg\">\n            <span>\n              <span>\n                <p style=\"position:absolute\">\n                  {{cartCtrl.checkoutMessage}}</p>\n              </span>\n            </span>\n          </label>\n\n        </aside>\n      </div>\n      <!-- .col-md-3.col-sm-4 -->\n    </div>\n    <!-- .row -->\n  </form>\n  <!-- .container -->\n</div>\n<!-- .page-wrapper -->"

/***/ }),

/***/ "./src/app/components/mookie-checkout/mookie-checkout.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/mookie-checkout/mookie-checkout.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .field {\r\n    background: transparent;\r\n    font-weight: 300;\r\n    border: 0;\r\n    color: #31325F;\r\n    outline: none;\r\n    padding-right: 10px;\r\n    padding-left: 10px;\r\n    cursor: text;\r\n    width: 100%;\r\n    height: 40px;\r\n    float: right;\r\n} */\n/* .field::-webkit-input-placeholder {\r\n    color: #CFD7E0;\r\n}\r\n\r\n.field::-moz-placeholder {\r\n    color: #CFD7E0;\r\n}\r\n\r\n.field:-ms-input-placeholder {\r\n    color: #CFD7E0;\r\n} */\n.checkoutBtn, .checkoutBtn:hover, .checkoutBtn:active, .checkoutBtn:focus {\n  background-color: #333333; }\n.field::-webkit-input-placeholder {\n  background-color: #333333;\n  color: white;\n  border: 0;\n  padding: 0; }\n.field:-ms-input-placeholder {\n  background-color: #333333;\n  color: white;\n  border: 0;\n  padding: 0; }\n.field::-ms-input-placeholder {\n  background-color: #333333;\n  color: white;\n  border: 0;\n  padding: 0; }\n.field::placeholder {\n  background-color: #333333;\n  color: white;\n  border: 0;\n  padding: 0; }\n.field {\n  border: 0px;\n  width: 100%;\n  padding: 0px;\n  color: white;\n  background-color: #333333; }\n.field:focus {\n  border: 0px;\n  outline-offset: 0px;\n  outline-color: white;\n  background-color: #333333; }\n.group {\n  box-shadow: 0 7px 14px 0 rgba(49, 49, 93, 0.1), 0 3px 6px 0 rgba(0, 0, 0, 0.08);\n  border-radius: 4px;\n  /* margin-bottom: 20px; */\n  padding: 20px;\n  background-color: #333333;\n  margin-bottom: 20px; }\nlabel {\n  display: block;\n  font-size: 14px;\n  margin-bottom: 8px;\n  font-weight: 500;\n  position: relative;\n  font-weight: 300;\n  height: 40px;\n  /* line-height: 40px; */\n  /* margin-left: 20px; */ }\n.checkoutMsg {\n  width: 100%;\n  padding-top: 5px; }\n.stripeElement {\n  color: white; }\n"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// var stripes = stripe('pk_test_EPjnzpxnrgvUiGWsYrJjqN5t');
// var elements = stripes.elements();
var MookieCheckoutComponent = /** @class */ (function () {
    function MookieCheckoutComponent() {
        this.setupStripeCard = function () {
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
            // this.card = elements.create('card',{style:style});
        };
    }
    MookieCheckoutComponent.prototype.ngOnInit = function () {
        this.chargeSuccessful = false;
    };
    MookieCheckoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mookie-checkout',
            template: __webpack_require__(/*! ./mookie-checkout.component.html */ "./src/app/components/mookie-checkout/mookie-checkout.component.html"),
            styles: [__webpack_require__(/*! ./mookie-checkout.component.scss */ "./src/app/components/mookie-checkout/mookie-checkout.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MookieCheckoutComponent);
    return MookieCheckoutComponent;
}());

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


/***/ }),

/***/ "./src/app/components/mookie-footer/mookie-footer.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/mookie-footer/mookie-footer.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- New footer -->\n<footer id=\"main-footer\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <p>&copy; 2018 all rights reserved. Mookie Dough LLC</p>\n        <br>\n        <p *ngIf=\"numberOfSiteVisitors > 0\"> Site has been accessed {{numberOfSiteVisitors}} times.</p>\n        <br>\n        <!-- <h3 class=\"widget-title\">\n          <small>Subscribe to the Mookie Dough email list</small>\n        </h3>\n        <form class=\"subscribe-form\" novalidate>\n          <input type=\"email\" name=\"EMAIL\" placeholder=\"Your e-mail\" ng-model=\"subEmail\">\n          <div style=\"position: absolute; left: -5000px;\" aria-hidden=\"true\">\n            <input type=\"text\" name=\"\" tabindex=\"-1\" value=\"\">\n          </div>\n          <button type=\"submit\" ng-click=\"main.addSubscription(subEmail)\">\n            <i class=\"fas fa-paper-plane\"></i>\n          </button>\n        </form> -->\n\n      </div>\n      <div class=\"col-md-2\">\n        <h6>Relevant Links</h6>\n        <ul class=\"list-unstyled\">\n          <li>\n            <a href=\"/about\">About us</a>\n          </li>\n          <li>\n            <a href=\"/menu\">Menu</a>\n          </li>\n          <li>\n            <a href=\"/thesecret\">Social Media</a>\n          </li>\n          <li>\n            <a href=\"/register\">Sign in</a>\n          </li>\n        </ul>\n      </div>\n      <div class=\"col-md-2\">\n        <h6>Our team</h6>\n        <ul class=\"list-unstyled\">\n          <li>\n            <a href=\"https://www.linkedin.com/in/abempah/\">Bempah</a>\n          </li>\n          <li>\n            <a href=\"https://www.linkedin.com/in/akim-richards-a8303610a/\">Akim</a>\n          </li>\n          <li>\n            <a href=\"https://www.linkedin.com/in/dellarontay/\">Dellarontay</a>\n          </li>\n          <li>\n            <a href=\"https://www.linkedin.com/in/oluwaseyi-olaleye-a523b210a/\">Oluwaseyi</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</footer>"

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

/***/ "./src/app/components/mookie-header/mookie-header.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/mookie-header/mookie-header.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"navbar navbar-sticky nav-down\">\n  <div id=\"logo\" href=\"/home\">\n    <a href=\"/home\">\n      <img src=\"assets/imgs/toplogo.svg\" alt=\"App Loading\">\n    </a>\n  </div>\n  <nav [ngClass]=\"{'open':menuToggleOpen}\" class=\"main-navigation text-center\">\n    <ul class=\"menu\">\n      <li>\n        <a href=\"/home\">\n          <span>Home</span>\n        </a>\n      </li>\n      <li>\n        <a href=\"/menu\">\n          <span>menu</span>\n        </a>\n      </li>\n      <li>\n        <a href=\"/thesecret\">\n          <span>the secret</span>\n        </a>\n      </li>\n      <li>\n        <a href=\"/about\">\n          <span>about us</span>\n        </a>\n      </li>\n      <li *ngIf=\"!loggedIn\">\n        <a href=\"/register\">\n          Sign In/Up\n        </a>\n      </li>\n    </ul>\n  </nav>\n  <div class=\"toolbar\">\n    <div class=\"inner\">\n      <a (click)=\"openMenuToggle()\" class=\"mobile-menu-toggle mookieIcon\">\n        <i *ngIf=\"!menuToggleOpen\" class=\"fas fa-bars fa-xs fa-fw menu\"></i>\n        <i *ngIf=\"menuToggleOpen\" class=\"fas fa-times fa-xs fa-fw cross\"></i>\n      </a>\n      <a href=\"/account\" class=\"mookieIcon\" *ngIf=\"loggedIn\">\n        <i class=\"fas fa-user fa-xs fa-fw\"></i>\n      </a>\n      <a href=\"/shopping-cart\" class=\"mookieIcon\" *ngIf=\"cartItemCount> 0\">\n        <i class=\"fas fa-shopping-cart fa-xs fa-fw\"></i>\n        <!-- <span class=\"shop-count\">{{mookie.cartItemCount}}</span> -->\n      </a>\n    </div>\n  </div>\n</header>"

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
    function MookieHeaderComponent(shared) {
        this.shared = shared;
        this.menuToggleOpen = false;
        this.loggedIn = false;
        this.openMenuToggle = function () {
            this.menuToggleOpen = !this.menuToggleOpen;
            jquery__WEBPACK_IMPORTED_MODULE_2__('body').toggleClass('no-scroll-body');
            // if(this.menuToggleOpen) 
        };
    }
    MookieHeaderComponent.prototype.ngOnInit = function () {
        this.loggedIn = false;
        this.loggedIn = this.shared.getSharedVar('loggedIn');
    };
    MookieHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mookie-header',
            template: __webpack_require__(/*! ./mookie-header.component.html */ "./src/app/components/mookie-header/mookie-header.component.html"),
            styles: [__webpack_require__(/*! ./mookie-header.component.scss */ "./src/app/components/mookie-header/mookie-header.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_shared_service__WEBPACK_IMPORTED_MODULE_1__["SharedService"]])
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

module.exports = "<div class=\"\">\n\n  <div class=\"row centerH\">\n    <div class=\"col-md-8 col-lg-6 mookieC\">\n      <ngb-carousel *ngIf=\"images\" class=\"mookieC\">\n        <ng-template ngbSlide>\n          <img class=\"carousel-img\" [src]=\"images[0]\" alt=\"Random first slide\">\n          <div class=\"carousel-caption\">\n            <h3>Dellarontay Readus</h3>\n            <p>Co-Founder, Head of Technology and Software</p>\n          </div>\n        </ng-template>\n        <ng-template ngbSlide>\n          <img class=\"carousel-img\" [src]=\"images[1]\" alt=\"Random second slide\">\n          <div class=\"carousel-caption\">\n            <h3>Andrew Bempah</h3>\n            <p>President</p>\n          </div>\n        </ng-template>\n        <ng-template ngbSlide>\n          <img class=\"carousel-img\" [src]=\"images[2]\" alt=\"Random third slide\">\n          <div class=\"carousel-caption\">\n            <h3>Oluwaseyi Olaleye</h3>\n            <p>Co-Founder, Head Of Operations</p>\n          </div>\n        </ng-template>\n        <ng-template ngbSlide>\n          <img class=\"carousel-img\" [src]=\"images[3]\" alt=\"Random third slide\">\n          <div class=\"carousel-caption\">\n            <h3>Akim Richards</h3>\n            <p>Co Founder, Head of Strategy Implementation</p>\n          </div>\n        </ng-template>\n      </ngb-carousel>\n\n    </div>\n\n  </div>\n\n  <!-- <div id=\"stage\">\n    <div id=\"stage-caption\">\n      <h1 class=\"display-3\">Welcome to Mookie Dough</h1>\n      <p>Deliveries of cookie dough are in your future.</p>\n      <a href=\"/register\" class=\"btn btn-lg btn-success\" *ngIf=\"!loggedIn\">Sign up now</a>\n      <a href=\"/menu\" class=\"btn btn-lg btn-success\" *ngIf=\"loggedIn\">Order now</a>\n\n    </div>\n  </div> -->\n\n  <section id=\"feature-one\">\n    <div class=\"container text-center\">\n      <div class=\"row\">\n        <div class=\"feature-content\">\n          <div class=\"col-lg-6 \">\n            <h6>Who we are</h6>\n            <h2>Mookie Dough has been serving premium quality cookie dough to our customers since 2017</h2>\n            <p class=\"lead\">In that time Stanford students and our valued customers in the nearby Stanford area have propeled our small company\n              forward into a platform to share amazing content and of course delicious edible cookie dough.</p>\n            <a href=\"/about\">About us</a>\n          </div>\n          <div class=\"col-lg-6\">\n            <img src=\"assets/imgs/colM0.jpg\">\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <section id=\"feature-two\" class=\"feature-dark\">\n    <div class=\"container text-center\">\n      <div class=\"row\">\n        <div class=\"feature-content\">\n          <div class=\"col-lg-6 feature-caption\">\n            <h2>Have a craving for cookie dough?</h2>\n            <p class=\"lead\">Enjoy our safe and delicious artisian quality cookie dough made without eggs!</p>\n          </div>\n          <div class=\"col-lg-6 text-sm-center hidden-md-down lowish\">\n            <img src=\"assets/imgs/beachdo1.jpg\" alt=\"Beach Mookie\">\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <section id=\"feature-three\">\n    <div class=\"container text-center\">\n      <div class=\"row\">\n        <div class=\"feature-content\">\n          <div class=\"col-lg-6 hidden-md-down\">\n            <img src=\"assets/imgs/M00KIE.jpg\" alt=\"M00kie img\">\n          </div>\n          <div class=\"col-lg-5 col-lg-offset-1\">\n            <h6>EXCLUSIVE CATERING</h6>\n            <h2>Serving Stanford and nearby areas</h2>\n            <p class=\"lead\">Contact Andrew Bempah or Oluwaseyi Olaleye at bempah@mookiedough.com and olaleye@mookiedough.com for exclusive\n              catering!\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <section id=\"feature-four\" class=\"feature-alt\">\n    <div class=\"container text-center\">\n      <div class=\"row\">\n        <div class=\"feature-content\">\n          <div class=\"col-lg-6\">\n            <h6>Dream Big</h6>\n            <blockquote class=\"blockquote\">\n              &ldquo; When people eat Mookie Dough Cookie Dough and support our platform, they are cosigning and supporting the dreams\n              of a team of hustlers that weren't afraid to dream &rdquo;\n              <footer class=\"blockquote-footer\">\n                Andrew Bempah,\n                <cite>President of Mookie Dough LLC</cite>\n              </footer>\n            </blockquote>\n          </div>\n          <div class=\"col-lg-6 hidden-md-down\">\n            <img src=\"assets/imgs/side.png\" alt=\"Brelvis Hesley\">\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n</div>"

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

/***/ "./src/app/components/mookie-menu/mookie-menu.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/mookie-menu/mookie-menu.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"mainWrapper\" class=\"container\">\n\n\t<h1 style=\"text-align:center;font-family:'Lato\" class=\"logo-style\">Mookie Dough Delivery Coming soon</h1>\n\t<section class=\"row\">\n\t\t<div class=\"product-card col-xs-12 col-sm-6 col-md-4 col-lg-3 product-shadow\" *ngFor=\"let catalogProduct of products\">\n\t\t\t<figure class=\"snip1418\">\n\t\t\t\t<p [ngClass]=\"{'inStock': catalogProduct.inStock == 'In Stock', 'notInStock': catalogProduct.inStock == 'Not In Stock'}\">{{catalogProduct.inStock}}</p>\n\n\t\t\t\t<img class=\"mookie-product-img\" (src)=\"catalogProduct.imagePath\" alt=\"sample85\" />\n\n\t\t\t\t<div class=\"add-to-cart\" onclick=\"\">\n\t\t\t\t\t<i class=\"ion-android-add\"></i>\n\t\t\t\t\t<span (click)=\"addToCart(catalogProduct,catalogProduct._id);\">\n\t\t\t\t\t\t<a class=\"nah\"></a>Buy Now</span>\n\t\t\t\t</div>\n\t\t\t\t<figcaption>\n\t\t\t\t\t<h3>{{catalogProduct.title}}</h3>\n\t\t\t\t\t<!-- <p>{{catalogProduct.description}}</p> -->\n\t\t\t\t\t<div class=\"price\">\n\t\t\t\t\t\t{{catalogProduct.price | currency}}\n\t\t\t\t\t</div>\n\t\t\t\t</figcaption>\n\t\t\t\t<!-- <a href=\"#\"></a> -->\n\t\t\t</figure>\n\t\t</div>\n\t</section>\n\n\t<!-- \n\t<section id=\"summer-collection\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"sc-content\">\n\t\t\t\t<h1>Exclusive Catering</h1>\n\t\t\t\t<p class=\"description\">Contact Andrew Bempah or Oluwaseyi Olaleye at bempah@mookiedough.com and olaleye@mookiedough.com for exclusive catering\n\t\t\t\t\tfor Stanford club events and nearby areas\n\t\t\t\t</p>\n\t\t\t</div>\n\t\t\t<div class=\"sc-media\">\n\t\t\t\t<div class=\"sc-media-bg\">\n\t\t\t\t\t<img src=\"assets/imgs/M00KIE.jpg\" alt=\"sc-image\" /> </div>\n\t\t\t</div>\n\t\t</div>\n\t</section> -->\n\n\t<!-- NEW HOME -->\n\t<div class=\"newHome\">\n\t\t<section id=\"summer-collection\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div style=\"text-align:center;\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"sc-content col-lg-6\">\n\t\t\t\t\t\t\t<h1>Exclusive Catering</h1>\n\t\t\t\t\t\t\t<p class=\"description\">Contact Andrew Bempah or Oluwaseyi Olaleye at bempah@mookiedough.com and olaleye@mookiedough.com for exclusive catering\n\t\t\t\t\t\t\t\tfor Stanford club events and nearby areas\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"sc-media col-lg-6\">\n\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t<img src=\"assets/imgs/M00KIE.jpg\" alt=\"sc-image\" /> </div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- <div style=\"width:100%; text-align:center;\">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</div> -->\n\n\t\t\t\t\t</div>\n\n\n\t\t\t\t</div>\n\n\n\t\t\t</div>\n\t\t</section>\n\n\t\t<section id=\"products\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"products-header\">\n\t\t\t\t\t<h2>popular products</h2>\n\t\t\t\t\t<p>Our Artisian frozen cookie dough bricks will leave you wanting more</p>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"product product-1\">\n\t\t\t\t\t<figure>\n\t\t\t\t\t\t<img src=\"assets/imgs/OGMookiepackaging.png\" alt=\"product-image\">\n\t\t\t\t\t\t<figcaption>Cookie Dough Bricks</figcaption>\n\t\t\t\t\t\t<figcaption>$ 2.99</figcaption>\n\t\t\t\t\t</figure>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"product product-2\">\n\t\t\t\t\t<figure>\n\t\t\t\t\t\t<img src=\"assets/imgs/cookies.png\" alt=\"product-image\">\n\t\t\t\t\t\t<figcaption>Cookie Dough Bricks</figcaption>\n\t\t\t\t\t\t<figcaption>$ 2.99</figcaption>\n\t\t\t\t\t</figure>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"product product-3\">\n\t\t\t\t\t<figure>\n\t\t\t\t\t\t<img src=\"assets/imgs/Ogmookieconfetti.png\" alt=\"product-image\">\n\t\t\t\t\t\t<figcaption>Cookie Dough Bricks</figcaption>\n\t\t\t\t\t\t<figcaption>$ 2.99</figcaption>\n\t\t\t\t\t</figure>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"product product-4\">\n\t\t\t\t\t<figure>\n\t\t\t\t\t\t<img src=\"assets/imgs/redvelvet.png\" alt=\"product-image\">\n\t\t\t\t\t\t<figcaption>Cookie Dough Bricks</figcaption>\n\t\t\t\t\t\t<figcaption>$ 2.99</figcaption>\n\t\t\t\t\t</figure>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</section>\n\t\t<section id=\"collections\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"c-1\">\n\t\t\t\t\t<div class=\"c-1-image-holder\">\n\t\t\t\t\t\t<img src=\"assets/imgs/mookiecar.svg\" alt=\"image\"> </div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"c-2\">\n\t\t\t\t\t<h2>Work Coming Soon</h2>\n\t\t\t\t\t<hr />\n\t\t\t\t\t<div class=\"c-2-image-holder\">\n\t\t\t\t\t\t<img class=\"left\" src=\"assets/imgs/dorm5-min.jpg\" alt=\"\">\n\t\t\t\t\t\t<img class=\"right\" src=\"assets/imgs/header3.png\" alt=\"\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</section>\n\n\t\t<!-- <div class=\"back-to-top\">\n\t\t\t<a href=\"#nav\">\n\t\t\t\t<img title=\"Back to Top.\" src=\"https://res.cloudinary.com/de8cuyd0n/image/upload/v1520412541/E-commerce%20landing%20page/icons/back_-_top_1x.png\"\n\t\t\t\t alt=\"back to top\">\n\t\t\t</a>\n\t\t</div> -->\n\t</div>\n</div>"

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
    function MookieMenuComponent(productService, shared, inventoryService, cartService, userService, authService) {
        this.productService = productService;
        this.shared = shared;
        this.inventoryService = inventoryService;
        this.cartService = cartService;
        this.userService = userService;
        this.authService = authService;
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
    MookieMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mookie-menu',
            template: __webpack_require__(/*! ./mookie-menu.component.html */ "./src/app/components/mookie-menu/mookie-menu.component.html"),
            styles: [__webpack_require__(/*! ./mookie-menu.component.scss */ "./src/app/components/mookie-menu/mookie-menu.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"], _services_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"], _services_inventory_service__WEBPACK_IMPORTED_MODULE_3__["InventoryService"], _services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"], _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]])
    ], MookieMenuComponent);
    return MookieMenuComponent;
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

/***/ "./src/app/components/mookie-preloader/mookie-preloader.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/mookie-preloader/mookie-preloader.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container progress-container\">\n\n  <div class=\"preload-img col-lg-2\">\n    <img src=\"assets/imgs/toplogo.svg\">\n  </div>\n  <div class=\"row mookie-progress\">\n    <div class=\"col-lg-12\">\n      <p>\n        <ngb-progressbar [value]=\"progressValue\"></ngb-progressbar>\n      </p>\n    </div>\n  </div>\n\n\n\n</div>"

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

module.exports = "<!-- Page Wrapper -->\n<div class=\"page-wrapper text-center\">\n  <!-- Content -->\n  <section class=\"container padding-top-3x padding-bottom-2x\">\n    <!-- TODO Change ng-show/hide to *ngIf -->\n    <h1 *ngIf=\"!loggedIn\">User Account</h1>\n\n    <div class=\"row match-my-cols\">\n\n      <div class=\"col-md-4 offset-md-3 padding-bottom\" *ngIf=\"chooseLogin\">\n        <h3>Login</h3>\n        <form method=\"post\" class=\"login-form\" (ngSubmit)=\"mookieLogin(loginData)\">\n          <input type=\"email\" class=\"form-control\" placeholder=\"Email\" required [(ngModel)]=\"loginData.email\" name=\"loginEmail\">\n          <input type=\"password\" class=\"form-control\" placeholder=\"Password\" required [(ngModel)]=\"loginData.password\" name=\"loginPassword\">\n          <div class=\"form-footer row\">\n            <div class=\"rememberme\">\n              <label class=\"checkbox\">\n                <input type=\"checkbox\" checked> Remember me\n              </label>\n            </div>\n            <div class=\"form-submit\">\n              <button type=\"submit\" class=\"btn btn-primary btn-block waves-effect waves-light inlineButton\">Login</button>\n            </div>\n          </div>\n          <div class=\"form-element help-block\" *ngIf=\"loginMessage\">\n            <p> {{loginMsg}}</p>\n          </div>\n        </form>\n        <!-- .login-form -->\n        <p class=\"text-danger switchText aButton\" *ngIf=\"chooseLogin\" (click)=\"switchToReg()\">Sign up?</p>\n      </div>\n      <!-- .col-md-4 -->\n\n\n      <div class=\"col-md-4 offset-md-3 padding-bottom\" *ngIf=\"chooseReg\">\n        <h3>Register</h3>\n        <div class=\"inner\">\n          <form method=\"post\" class=\"login-form\" (ngSubmit)=\"mookieRegister(regData)\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Name\" required [(ngModel)]=\"regData.username\" name=\"regUsername\">\n            <input type=\"email\" class=\"form-control\" placeholder=\"E-mail\" required [(ngModel)]=\"regData.email\" name=\"regEmail\">\n            <input type=\"password\" class=\"form-control\" placeholder=\"Password\" required [(ngModel)]=\"regData.password\" name=\"regEmail\">\n            <div class=\"form-footer row\">\n              <div class=\"rememberme\"></div>\n              <div class=\"form-submit\">\n                <button type=\"submit\" class=\"btn btn-primary btn-block waves-effect waves-light inlineButton\">Sign up</button>\n              </div>\n            </div>\n            <div class=\"form-element help-block\" *ngIf=\"regMessage\">\n              <p> {{regMsg}}</p>\n            </div>\n          </form>\n          <!-- .login-form -->\n        </div>\n        <!-- .inner -->\n        <p class=\"text-success switchText aButton\" *ngIf=\"chooseReg\" (click)=\"switchToLogin()\">Login?</p>\n      </div>\n      <!-- .col-md-4.col-md-offset-1 -->\n\n      <!-- Social media login links -->\n      <div class=\"col-md-3 padding-top-2x sethalf\" *ngIf=\"chooseLogin\">\n        <a href=\"/auth/facebook\" target=\"_\" class=\"social-signup-btn ssb-facebook\">\n          <i class=\"fab fa-facebook-f\"></i>\n          <span>Login with Facebook</span>\n        </a>\n        <a href=\"/auth/google\" target=\"_\" class=\"social-signup-btn ssb-google\">\n          <i class=\"fab fa-google\"></i>\n          <span>Login with Google+</span>\n        </a>\n      </div>\n      <!-- .col-md-3 -->\n      <div class=\"col-md-3 padding-top-2x sethalf\" *ngIf=\"chooseReg\">\n        <a href=\"/auth/facebook\" target=\"_\" class=\"social-signup-btn ssb-facebook\">\n          <i class=\"fab fa-facebook-f\"></i>\n          <span>Signup with Facebook</span>\n        </a>\n        <a href=\"/auth/google\" target=\"_\" class=\"social-signup-btn ssb-google\">\n          <i class=\"fab fa-google\"></i>\n          <span>Signup with Google+</span>\n        </a>\n      </div>\n      <!-- .col-md-3 -->\n\n    </div>\n    <!-- .row -->\n  </section>\n  <!-- .container -->\n</div>\n<!-- .page-wrapper -->"

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
    function MookieRegisterComponent(userService, authService, shared, router) {
        this.userService = userService;
        this.authService = authService;
        this.shared = shared;
        this.router = router;
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
                        _this.shared.updateSharedVar('checkingSession', true);
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
                            _this.shared.updateSharedVar('checkingSession', true);
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
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
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

module.exports = "<div class=\"container socialMedia\">\n  <div class=\"text-center\">\n    <p>Check out our instagram and Twitter Feeds</p>\n    <a href=\"https://instagram.com/_mookie_dough\" class=\"secretsocial\">\n      <i class=\"fab fa-instagram\"></i>\n    </a>\n    <a href=\"https://twitter.com/_Mookie_Dough\" class=\"secretsocial\">\n      <i class=\"fab fa-twitter\"></i>\n    </a>\n  </div>\n\n  <div style=\"display:block; height:100%\">\n    <script style=\"height:100%\" src=\"https://lightwidget.com/widgets/lightwidget.js\"></script>\n    <iframe id=\"insta\" src=\"https://lightwidget.com/widgets/6c3070862eb4520e9880b7583b1c710d.html\" scrolling=\"no\" allowtransparency=\"true\"\n      class=\"lightwidget-widget\" style=\"width: 100%; border: 0;height:100%;\"></iframe>\n  </div>\n\n  <!-- <insta style=\"width: 100%; border: 0; display:block;\"></insta> -->\n\n  <div id=\"twit\" style=\"display:block; height:100%\">\n    <a class=\"twitter-timeline\" href=\"https://twitter.com/_Mookie_Dough?ref_src=twsrc%5Etfw\">Tweets by _Mookie_Dough</a>\n  </div>\n\n</div>"

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
                var eventData = JSON.parse(event.data);
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
        this.socialMedia = function () {
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
            return this.http.post('/api/updateUserCart', cartData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { console.log(res); return res; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return _this.handleError(err); }));
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
            return this.http.post('/api/cartCheckout', checkoutData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { console.log(res); return res; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return _this.handleError(err); }));
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
        this.cartItemCount = false;
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