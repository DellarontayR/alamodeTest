import { Component, OnInit } from '@angular/core';
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
import { $ } from 'protractor';
import { ProductService } from './services/product.service';
import { InventoryService } from './services/inventory.service';




@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'app';

    constructor(private authService: AuthService, private router: Router, private cartService: CartService, shared: SharedService, userService: UserService, product: ProductService) {
        router.events
            .pipe(filter(event => event instanceof NavigationStart)
            ).subscribe((route: ActivatedRoute) => {
                console.log(route);
            });

    }
    // Item Name map
    itemNameMap = new Map();

    ngOnInit() {
        this.checkIp();
        // this.resetProducts();


        this.itemNameMap.set("og mookie", "og mookie");
        this.itemNameMap.set("og mookie's confetti party", "funfetti");
        this.itemNameMap.set("cookies n creme", "oreo");
        this.itemNameMap.set("aunty vicky's red velvet", "Red velvet");
        this.itemNameMap.set("dark chocolate mocha", "Dark chocolate");

    }

    // Authentication Interceptor that should add jsonwebtoken to header
    public currToken = '';
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.authService.getToken().subscribe(token => { this.currToken = token; console.log(this.currToken) });
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
    numberOfSiteVisitors = 0;
    user = {};
    // >


    // Session Functions

    // Checks to see if visitor has visitor's ip address has visited our site before
    checkVisitor = function (ipAddress) {
        const ipData = { ipAddress: '' };
        ipData.ipAddress = ipAddress;
        //   AuthService.checkVisitor(ipData)
        this.authService.checkVisitor(ipData).subscribe(data => {
            // Data objects returned from subscribed don't require an extra .data to get information
            if (data.success) {
                // Telemetry
            }
            else {
                // Telemetry
            }
        });
    }

    // Use Auth's acess to 3rd party api to get user's ip address
    checkIp = function () {
        this.authService.getIp().subscribe(data => {
            console.log(data);
            this.checkVisitor(data.ip);

        });
    }

    // Updates the cart after adding an item to the cart
    updateCart = function (getCartData, callback) {
        this.cartService.subscribe(data => {
            console.log(data);
            if (data.success) {
                let itemCount = 0;
                data.cart.products.forEach(function (cartProduct) {
                    itemCount++;
                });
                var cartData = data.cart;
                cartData.itemCount = itemCount;
                // Find Way to set scope variables
                this.shared.updateSharedVar("cartItemCount", itemCount);
                this.shared.updateSharedVar("cart", cartData);
                return callback(data);


            }
            else {
                // Err

            }
        });
    }


    addToCart = function (product, catalogProduct) {
        this.authService.getOrderingSchedule().subscribe(data => {
            console.log(data);
            if (data.success) {
                let schedule = data.schedule;
                let currentTime = new Date();
                let hours = currentTime.getHours();
                if (hours > schedule.startHour && hours < schedule.endHour) {
                    this.auth.getUser().subscribe(tokenData => {
                        if (tokenData.email) {
                            this.shared.updateSharedVar('user', { userEmail: data.email, username: data.usernmae });
                            let userData = { userEmail: data.email };
                            this.user.getUser(userData).subscribe(data => {
                                if (data.success) {
                                    let cartData: ILooseObject = {};
                                    cartData.qty = 1;
                                    cartData.description = product.description;
                                    cartData.price = product.price;
                                    cartData.title = product.title;
                                    cartData.imagePath = product.imagePath;
                                    cartData.userId = data.user._id;
                                    cartData.product = catalogProduct;
                                    if (data.user.active) {
                                        this.cart.addItemToCart(cartData).subscribe(resData => {
                                            console.log(resData);
                                            if (resData.success) {
                                                let getCartData = { cartId: resData.cart._id };
                                                this.updateCart(getCartData, moreData => {
                                                    console.log(moreData);
                                                    this.shared.updateSharedVar('cartItemCount', moreData.itemCount);
                                                });
                                            }
                                            else {
                                                // Show Error

                                            }
                                        })
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
    }

    // updateCart
    // Adds a email subscription to be added for our newsletters and special announcements
    addSubscription = function (subEmail) {
        let subData = { subEmail: subEmail };
        this.auth.addSubscription(subData).subscribe(data => {
            // Add time out and subscriptions message
            // TODO
        });
    };

    //Used to reset contact information form after information is put in
    addContactMessage = function (contactData) {
        this.auth.addContactMessage(contactData).subscribe(data => {

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

    // Modal Functions
    hideModal = function () {
        jQuery("#myModal").modal('hide');
    };
    // cont.
    hideStripeMOdal = function () {
        jQuery("#stripeModal").modal('hide');
        ;
    }
    //  cont.
    showModal = function (title, body) {
        // modalTitle,modalBody
        jQuery("#myModal").modal();
    }
    // cont.
    showProductModal = function (product) {
        // Product Modal
    }
    // cont.
    showStripeModal = function () {
        jQuery("#stripeModal").modal();
    }
    // >

    //     // Attempt to provide slides at home page
    //     $scope.mookie.slides = {
    //         slides: ["../../imgs/Media/dorm5-min.jpg", "../../imgs/Media/header3.png", "../../imgs/Media/M00KIE.jpg"]
    //     };
    // >

    //Add a product to product catalog in database
    addProductToDB = function (productData) {
        this.product.seedProduct(productData).subscribe(data => {
            if (data.success) {
                // Telemetry
                // TODO
            }
        });
    }

    // Run to check the database and see if the products are currently there
    resetProducts = function () {
        // loadme?
        this.product.getCatalogProducts().subscribe(data => {
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
            this.product.getCatalogProducts().subscribe(data => {
                this.shared.updateSharedVar('products', data.catalogProducts);
                this.getInventory().subscribe(data => {
                    console.log(data);
                    if (data.success) {
                        let inventory = data.inventory;
                        let totals = inventory.totals;
                        var totalMap = new Map();
                        totals.forEach(total => {
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
    getSubscribers = function (callback) {
        this.auth.getSubscribers().subscribe(data => {
            if (data.success) {
                return callback(data.subscribers);
            }
        });
    };

    // Get Contact Messages for Management
    getContactMessages = function (callback) {
        this.auth.getContactMessages().subscribe(data => {
            if (data.success) {
                return callback(data.contactMessages);
            }
        });
    };

    // Get Users for Management
    getUsers = function (callback) {
        this.userService.subscribe(data => {
            if (data.success) {
                return callback(data.users);
            }
        });
    };
    // >

    // Get The User's current cart
    getCurrentCart = function (callback) {
        let userData = this.shared.getSharedVar('user');
        this.user(userData).subscribe(data => {
            console.log(data);
            if (data.success) {
                if (data.user.cart != null && data.user.cart != "") {
                    let cartData = { cartId: data.user.cart };
                    this.cartService.getCart(cartData).subscribe(data => {
                        console.log(data);
                        if (data.success) {
                            let total = 0;
                            let count = 0;
                            data.cart.products.forEach(product => {
                                total += product.price;
                                count++;
                            });
                            this.shared.updateSharedVar('cartItemCount', count);
                            this.shared.updateSharedVar('cart', data.cart);
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
    checkUserState = function (callback) {
        let userData = { userEmail: '', username: '', success: false };

        if (this.auth.isLoggedIn()) {
            this.auth.getUser.subscribe(data => {
                userData.userEmail = data.email;
                userData.username = data.username;
                this.shared.updateSharedVar('loggedIn', true);
                this.shared.addMinUser(data.userEmail, data.username);
                if (data.username === undefined) {
                    this.auth.logout();
                    this.shared.updateSharedVar('loggedIn', false);
                    this.router.navigate(['/register'], { relativeTo: this.route });
                }
                else {
                    this.userService.getUser(userData).subscribe(data => {
                        if (data.success) {
                            userData.success = true;

                        }
                        return callback(userData);
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

    //     // Setup interval to check user session every 15 seconds

    checkSession = function () {
        this.checkUserState(function (userData) {
            if (userData.success) {
                // Run interval ever 30000 milliseconds (30 seconds) 
                interval(30000).subscribe(event=>{
                    let mWindow = this.windowRef.nativeWindow();
                    let token = mWindow.localStorage.getItem('token');
                    if(token === null){
                        
                    }
                    this.shared.addMinUser(userData.userEmail, userData.username);
                    this.shared.updateSharedVar('checkingSession', true);
                    this.getCurrentCart(function (cart) {
                        let total = 0;
                        let count = 0;
                        cart.products.forEach(function (product) {
                            total += product.price;
                            count++;
                        });
                        this.shared.updateSharedVar('cartItemCount', count);
                        this.shared.updateSharedVar('cart', cart);
    
                    });
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

    //     // Call when main controller loads
    //     app.mookieCheckSession();
    //     // >

}




// alamode.controller('mainCtrl', function (Auth, $timeout, $location, $rootScope,
//     $window, $interval, User, AuthToken, $scope, Cart, Product, MookieSubscription, ContactMessage, scheduleService, inventoryService) {
//     // $window.location.pathname




//     // Function to run an interval that checks if the user's token has expired
//     app.checkSession = function () {
//         // Only run check if user is logged in
//         if (Auth.isLoggedIn()) {
//             $scope.mookie.loggedIn = true;

//             app.checkingSession = true; // Use variable to keep track if the interval is already running
//             // Run interval ever 30000 milliseconds (30 seconds) 
//             var interval = $interval(function () {
//                 var token = $window.localStorage.getItem('token'); // Retrieve the user's token from the client local storage
//                 // Ensure token is not null (will normally not occur if interval and token expiration is setup properly)
//                 if (token === null) {
//                     $interval.cancel(interval); // Cancel interval if token is null
//                 } else {
//                     // Parse JSON Web Token using AngularJS for timestamp conversion
//                     self.parseJwt = function (token) {
//                         var base64Url = token.split('.')[1];
//                         var base64 = base64Url.replace('-', '+').replace('_', '/');
//                         return JSON.parse($window.atob(base64));
//                     };
//                     var expireTime = self.parseJwt(token); // Save parsed token into variable
//                     var timeStamp = Math.floor(Date.now() / 1000); // Get current datetime timestamp
//                     var timeCheck = expireTime.exp - timeStamp; // Subtract to get remaining time of token
//                     // Check if token has less than 30 minutes till expiration
//                     if (timeCheck <= 1800) {
//                         // showModal(1); // Open bootstrap modal and let user decide what to do
//                         $interval.cancel(interval); // Stop interval
//                     }
//                     // Check Mookie Session
//                     app.mookieCheckSession();
//                 }
//             }, 10000);
//         }
//     };

//     app.checkSession(); // Ensure check is ran check, even if user refreshes

//     // Check if user is on checkout
//     $rootScope.$on('$routeChangeSuccess', function () {
//         if ($window.location.pathname === '/checkout') {
//             $scope.mookie.checkout = true;
//         } else {
//             $scope.mookie.checkout = false;
//         }

//         if ($window.location.pathname === '/about' || $window.location.pathname === '/' || $window.location.pathname === '/home') {
//             $scope.mookie.about = true; // Set home page div
//         } else {
//             $scope.mookie.about = false; // Clear home page div
//         }
//     });
//     // >

//     // Will run code every time a route changes
//     $rootScope.$on('$routeChangeStart', function (event, next, current) {
//         if (!app.checkingSession) app.checkSession();
//         // Check if user is logged in
//         if (Auth.isLoggedIn()) {
//             // Custom function to retrieve user data
//             Auth.getUser().then(function (data) {
//                 if (data.data.username === undefined) {
//                     console.log('username invalid');
//                     $scope.mookie.loggedIn = false;  // Variable to deactivate ng-show on index
//                     Auth.logout();
//                     $scope.mookie.loggedIn = false;
//                     $location.path('/');
//                 } else {
//                     $scope.mookie.loggedIn = true; // Variable to activate ng-show on index
//                     app.username = data.data.username; // Get the user name for use in index
//                     app.checkLoginStatus = data.data.username;
//                     // app.useremail = data.data.email; // Get the user e-mail for use in index
//                     User.getPermission().then(function (data) {
//                         if (data.data.permission === 'admin' || data.data.permission === 'moderator') {
//                             $scope.mookie.admin = true;

//                             app.authorized = true; // Set user's current permission to allow management
//                             app.permission = 'admin';
//                             app.loadme = true; // Show main HTML now that data is obtained in AngularJS
//                         } else {
//                             $scope.mookie.admin = false;

//                             app.authorized = false;
//                             app.loadme = true; // Show main HTML now that data is obtained in AngularJS
//                         }
//                     });
//                 }
//             }, function (error) {
//                 console.log(error);
//             });
//         } else {
//             app.username = ''; // Clear username
//             app.loadme = true; // Show main HTML now that data is obtained in AngularJS
//         }
//         if ($location.hash() == '_=_') $location.hash(null); // Check if facebook hash is added to URL
//     });

//     // // Function to redirect users to facebook authentication page
//     // this.facebook = function () {
//     //     app.disabled = true;
//     //     $window.location = $window.location.protocol + '//' + $window.location.host + '/auth/facebook';
//     // };

//     // // Function to redirect users to twitter authentication page        
//     // this.twitter = function () {
//     //     app.disabled = true;
//     //     $window.location = $window.location.protocol + '//' + $window.location.host + '/auth/twitter';
//     // };

//     // // Function to redirect users to google authentication page
//     // this.google = function () {
//     //     app.disabled = true;
//     //     $window.location = $window.location.protocol + '//' + $window.location.host + '/auth/google';
//     // };

//     // Function to logout the user
//     app.logout = function () {
//         Auth.logout(); // Logout user by removing jwt token
//         $scope.mookie.loggedIn = false;
//         $timeout(function () {
//             $scope.mookie.loggedIn = false;
//             $location.path('/register');
//         }, 2000);
//     };

//     $scope.mookie.logout = function () {
//         Auth.logout(); // Logout user by removing jwt token
//         $scope.mookie.loggedIn = false;
//         // $scope.apply();
//         $scope.mookie.loggedIn = false;
//         $timeout(function () {
//             $scope.mookie.loggedIn = false;
//             $location.path('/register');
//         }, 2000);
//     };

// });



// Finished with Main Controller


// Below is Guard



// down vote
// accepted
// You can create a guard. Let's take this example:

// import {Injectable} from '@angular/core';
// import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
// import {UserService} from '../auth';

// @Injectable()
// export class RoleGuard implements CanActivate {
//   constructor(private userService:UserService, private router:Router) {
//   }

//   canActivate(next:ActivatedRouteSnapshot, state:RouterStateSnapshot) {
//     if (this.userService.hasRole('ROLE_ADMIN')) {
//       return true;
//     }
//     this.router.navigate(['some-other-route']);
//     return false;
//   }
// }
// Then you add it to your routing:

//     path: 'pathToAdminRoute',
//     component: SomeComponent,
//     canActivate: [RoleGuard]

// Different Stuff
// >