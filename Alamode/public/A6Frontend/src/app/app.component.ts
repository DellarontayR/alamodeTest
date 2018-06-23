import { Component, OnInit, ViewChild, AfterViewInit,ViewChildren } from '@angular/core';
import { AuthService } from './services/auth.service';
console.log("Hello! :) Welcome Mookie Dough inspector. If you're a Mookie Dough advocate and would like to see more of it near you email readus@mookiedough.com <3");


import { Routes, RouterModule, Router, ActivatedRoute, NavigationStart } from '@angular/router';
import { HttpClient, HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { interval } from 'rxjs';

import { CartService } from './services/cart.service';
import { SharedService } from './services/shared.service';
import { UserService } from './services/user.service';

import { IUser } from './interfaces/user';
import { ILooseObject } from './interfaces/looseObject';
import { ProductService } from './services/product.service';
import { InventoryService } from './services/inventory.service';

import * as $ from 'jquery';
import { WindowRefService } from './services/window-ref.service';
import { MookieHeaderComponent } from './components/mookie-header/mookie-header.component';
import { MookieEmitService } from './services/mookie-emit.service';




@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {

    @ViewChild(MookieHeaderComponent) headerComponent: MookieHeaderComponent;

    title = 'Mookie Dough';

    // Item Name map
    itemNameMap = new Map();
    public showBody: Boolean = false;
    private checkUser$ = interval(3000);



    constructor(private authService: AuthService, private router: Router, private cartService: CartService, private shared: SharedService, private userService: UserService, private productService: ProductService, private inventoryService: InventoryService, private windowRef: WindowRefService, private mookieEmit:MookieEmitService) {
    
    };

    ngOnInit() {
        this.mookieEmit.changeEmitted$.subscribe(data=>{
            this.headerComponent.cartItemCount = this.shared.getSharedVar('cartItemCount');
        });
        this.mookieEmit.largeChangeEmitted$.subscribe(data=>{
            this.headerComponent.cartItemCount = this.shared.getSharedVar('cartItemCount');
            this.headerComponent.loggedIn = this.shared.getSharedVar('loggedIn');
        });
        this.mookieEmit.sessionEmitted$.subscribe(data=>{
            if(this.shared.getSharedVar('checkingSession')){
                this.shared.updateSharedVar('checkingSession',false);
                this.checkSession();
            }
            else{
                this.checkSession();
            }
        });
        this.checkUser$ = interval(30000);
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
            .pipe(filter(event => event instanceof NavigationStart)
            ).subscribe((route: ActivatedRoute) => {
                //     // Will run code every time a route changes
                // console.log(route);
                if (!this.shared.getSharedVar('checkingSession')) this.checkSession();
                console.log(this.shared.getSharedVar('checkingSession'));
                if (this.authService.isLoggedIn()) {
                    this.authService.getUser().subscribe(data => {
                        console.log(data);
                        if (data.username === undefined) {
                            this.shared.updateSharedVar('loggedIn', false);
                            this.authService.logout();
                            this.router.navigate(['/home']);
                            console.log('user logged out after username found to be undefined');
                        }
                        else {
                            this.shared.updateSharedVar('loggedIn', true);
                            this.userService.getPermission().subscribe(data => {
                                if (data.permission === 'amdin') {
                                    this.shared.updateSharedVar('admin', true);
                                }
                                else {
                                    this.shared.updateSharedVar('admin', false);
                                }
                            });
                        }
                    })
                }
                setTimeout(() => {
                    this.showBody = true;
                    // Display page from preloader in one and half seconds
                }, 1500);
                //         if ($location.hash() == '_=_') $location.hash(null); // Check if facebook hash is added to URL

            });

    }

    ngAfterViewInit() {
    }

    // Authentication Interceptor that should add jsonwebtoken to header
    public currToken = '';
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.currToken = this.authService.getToken();
        console.log(req);
        console.log('This is the request from intercept');
        if (this.currToken) {
            const cloned = req.clone({
                headers: req.headers.set("x-access-token", this.currToken)
            });
            return next.handle(cloned);

        }
        else {
            return next.handle(req);
        }
    }
    // >

    // Session variables
    checkingSession = false;
    cart = {};
    cartItemCount = false;
    admin = false;
    products = {};
    loggedIn = false;
    deliveryLatLng = {};
    deliveryLocation = null;
    numberOfSiteVisitors: Number = 0;
    user = {};
    // >


    // Session Functions
    // Checks to see if visitor has visitor's ip address has visited our site before
    checkVisitor = function (ipAddress) {
        const ipData = { ipAddress: '' };
        ipData.ipAddress = ipAddress;
        //   AuthService.checkVisitor(ipData)
        this.authService.checkVisitor(ipData).subscribe(data => {
            console.log(data);
        });
    };

    // Use Auth's acess to 3rd party api to get user's ip address
    checkIp = function () {
        this.authService.getIp().subscribe(data => {
            console.log(data);
            this.checkVisitor(data.ip);
        });
    };





    // updateCart

    updateCart = function(event){
        console.log(event);
        this.headerComponent.cartItemCount = event;
    };
    // Adds a email subscription to be added for our newsletters and special announcements
    addSubscription = function (subEmail) {
        let subData = { subEmail: subEmail };
        this.authService.addSubscription(subData).subscribe(data => {
            // Add time out and subscriptions message
            // TODO
        });
    };

    //Used to reset contact information form after information is put in
    addContactMessage = function (contactData) {
        this.authService.addContactMessage(contactData).subscribe(data => {

            if (data.success) {
                this.shared.updateSharedVar('contactMes', {});

            }
            else {
                // TODO
                // Create showModal with angular
                //                 var title = "Contact Message not saved";
                //                 var body = data.data.message;
                //                 $scope.mookie.showModal(title, body);
            }
        });
    }

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
    addProductToDB = function (productData) {
        this.productService.seedProduct(productData).subscribe(data => {
            if (data.success) {
                // Telemetry
                // TODO
            }
        });
    }

    // Run to check the database and see if the products are currently there
    resetProducts = function () {
        // loadme?
        this.productService.getCatalogProducts().subscribe(data => {
            if (data.success) {
                // laodme
            }
            else {
                if (data.data.noProducts) {
                    // Add Products to DB if they are not there

                }
            }
        })
    }

    getBase64(file) {
        return new Promise(function (resolve, reject) {
            var reader = new FileReader();
            reader.onload = function () {
                resolve(reader.result);
            }
            reader.onerror = function (error) {
                reject('Error');
            }
            reader.readAsDataURL(file);
        });
        // Displays returning promises and is apart of image manipulation development scenario
    }

    // Get products from server to produce on home page in mookie scope
    getProductsFromServer = function (callback) {
        (function () {
            this.productService.getCatalogProducts().subscribe(data => {
                this.shared.updateSharedVar('products', data.catalogProducts);
                this.inventoryService.getInventory().subscribe(data => {
                    console.log(data);
                    if (data.success) {
                        let inventory = data.inventory;
                        let totals = inventory.totals;
                        var totalMap = new Map();
                        totals.forEach(total => {
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
    getSubscribers = function (callback) {
        this.authService.getSubscribers().subscribe(data => {
            if (data.success) {
                return callback(data.subscribers);
            }
        });
    };

    // Get Contact Messages for Management
    getContactMessages = function (callback) {
        this.authService.getContactMessages().subscribe(data => {
            if (data.success) {
                return callback(data.contactMessages);
            }
        });
    };



    // Get The User's current cart
    getCurrentCart = function (callback) {
        let userData = this.shared.getSharedVar('user');

        this.cartService.getCart({ cartId: userData.user.cart }).subscribe(data => {
            if (data.success) {
                this.shared.updateSharedVar('cartItemCount', data.cart.products.length);
                this.shared.updateSharedVar('cart', data.cart);
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
    checkUserState = function (callback) {
        let userData = { userEmail: '', username: '', success: false };

        if (this.authService.isLoggedIn()) {
            this.authService.getUser().subscribe((data) => {
                userData.userEmail = data.email;
                userData.username = data.username;
                console.log(data);
                this.shared.updateSharedVar('loggedIn', true);
                // this.shared.addMinUser(userData.userEmail, userData.username);
                if (data.username === undefined) {
                    this.authService.logout();
                    this.shared.updateSharedVar('loggedIn', false);
                    this.router.navigate(['/register'], { relativeTo: this.route });
                    return callback({ success: false });
                }
                else {
                    this.userService.getUser().subscribe(retUser => {
                        let newUser: ILooseObject;
                        newUser = {};
                        this.shared.updateSharedVar('user', retUser);
                        console.log(this.shared.getSharedVar('user'));
                        if (retUser.success) {
                            newUser = retUser;
                            newUser.success = true;
                            this.getCurrentCart( (cart)=> {
                                this.mookieEmit.emitLargeChange();
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
            })

        }
        else {
            return callback(userData);
        }
    }

    // Setup interval to check user session every 15 seconds
    // Function to run an interval that checks if the user's token has expired
    checkSession = function () {
        this.checkUserState((userData) => {
            this.shared.updateSharedVar('checkingSession', true);
            if (userData.success) {
                // Run interval ever 30000 milliseconds (30 seconds) 
                this.checkUser$ = this.checkUser$.subscribe(event => {
                    console.log('in subscribe');
                    let mWindow = this.windowRef.nativeWindow;
                    let token = mWindow.localStorage.getItem('token');
                    if (token === null) {
                        // Cancel interval somehow
                        console.log('espcaing interval');
                        this.checkUser$.unsubscribe();
                    }
                    else {
                        let parseJwt = function (token) {
                            let base64Url = token.split('.')[1];
                            let base64 = base64Url.replace('-', '+').replace('_', '/');
                            return JSON.parse(mWindow.atob(base64));
                        }
                        let expireTime = parseJwt(token);
                        let timeStamp = Math.floor(Date.now() / 1000);
                        let timeCheck = expireTime.exp - timeStamp;
                        if (timeCheck <= 1800) {
                            console.log('espcaing interval');
                            this.checkUser$.unsubscribe();
                            // Cancel interval
                        }
                        // this.shared.addMinUser(userData.userEmail, userData.username);
                    }

                });
                // loadme true
            }
            else {
                this.authService.logout();
                this.shared.updateSharedVar('loggedIn', false);
                // this.router.navigate(['/register'], { relativeTo: this.route });


            }
        });
    };



    //     // // Function to redirect users to facebook authentication page

    facebook = function () {
        this.router.navigate(['/auth/facebook']);
    }
    //     // // Function to redirect users to twitter authentication page        

    twitter = function () {
        this.router.navigate(['/auth/twitter']);
    }
    //     // // Function to redirect users to google authentication page

    google = function () {
        this.router.navigate(['/auth/google']);
    }

    logout = function () {
        this.authService.logout();
        this.shared.updateSharedVar('loggedIn', false);
        this.route.navigate(['/register']);
    };



}