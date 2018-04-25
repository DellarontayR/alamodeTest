'use strict';// Enable typescript
console.log("Hello! :) Welcome Mookie Dough inspector. If you're a Mookie Dough advocate and would like to see more of it near you email readus@mookiedough.com <3");
alamode.controller('mainCtrl', function (Auth, $timeout, $location, $rootScope,
    $window, $interval, User, AuthToken, $scope, Cart, Product, MookieSubscription, ContactMessage, scheduleService) {
    // $window.location.pathname
    var app = this;
    app.checkingSession = false;

    // Definitely Used Mookie Scope vars
    $scope.mookie = {};
    $scope.mookie.cart = {};
    $scope.mookie.cartItemCount = false;
    $scope.mookie.admin = false;
    $scope.mookie.products = {};
    $scope.mookie.loggedIn = false;
    $scope.mookie.deliveryLatLng = {};
    $scope.mookie.deliveryLocationChanged = false;
    $scope.mookie.deliveryLocation = null;
    $scope.mookie.numberOfSiteVisitors = 0;//Display visitors to site
    $scope.mookie.user = {};
    // >


    // This is a good time to implement a Thanks for visiting our site bool
    // Checks to see if visitor has visitor's ip address has visited our site before
    $scope.mookie.checkVisitor = function (ipAddress) {
        var ipData = {};
        ipData.ipAddress = ipAddress;
        Auth.checkVisitor(ipData).then(function (data) {
            if (data.data.success) {
                Auth.getSiteVisitors().then(function (data) {
                    if (data.data.success) {
                        if (data.data.numberOfSiteVisitors === 0) {
                            $scope.mookie.numberOfSiteVisitors = 0;
                        }
                        else {
                            $scope.mookie.numberOfSiteVisitors = data.data.numberOfSiteVisitors;
                        }
                    }
                    else {
                        $scope.mookie.numberOfSiteVisitors = 0;
                    }
                });
            }
            else {
                $scope.mookie.numberOfSiteVisitors = 0;
            }
        })
    };
    // >

    // Use Auth's acess to 3rd party api to get user's ip address
    Auth.getIp().then(function (data) {
        $scope.mookie.checkVisitor(data.data.ip);
    });
    // >

    // Updates the cart after adding an item to the cart
    $scope.mookie.updateCart = function (getCartData, callback) {
        Cart.getCart(getCartData).then(function (data) {
            if (data.data.success) {
                var itemCount = 0;
                data.data.cart.products.forEach(function (cartProduct) {
                    itemCount++;
                });
                var cartData = {};
                cartData.cart = data.data.cart;
                cartData.itemCount = itemCount;
                $scope.mookie.cartItemCount = itemCount;
                $scope.mookie.cart = data.data.cart;
                return callback(cartData);
            }
            else {
                console.log(data);
            }
        });
    };
    // >

    // Adds an item to a user's cart, shuold be used as a model for errors for users
    $scope.mookie.addToCart = function (product, catalogProduct) {
        scheduleService.getOrderingSchedule().then(function (data) {
            if (data.data.success) {
                var schedule = data.data.schedule;
                var currentTime = new Date();
                var hours = currentTime.getHours();
                if (hours > schedule.startHour && hours < schedule.endHour) {
                    Auth.getUser().then(function (data) {
                        if (data.data.email) {
                            $scope.mookie.user.userEmail = data.data.email;
                            $scope.mookie.user.username = data.data.username;
                            var userData = {};
                            userData.userEmail = data.data.email;
                            User.getUser(userData).then(function (data) {
                                if (data.data.success) {
                                    var cartData = {};
                                    cartData.price = product.price;
                                    cartData.description = product.description;
                                    cartData.title = product.title;
                                    cartData.imagePath = product.imagePath;
                                    cartData.qty = 1;
                                    cartData.userId = data.data.user._id;// replace with $scope.mookie.user._id
                                    cartData.product = catalogProduct;
                                    Cart.addItemToCart(cartData).then(function (data) {
                                        if (data.data.success) {
                                            var getCartData = {};
                                            getCartData.cartId = data.data.cart._id;
                                            $scope.mookie.updateCart(getCartData, function (moreData) {
                                                $scope.mookie.cartItemCount = moreData.itemCount;
                                            });

                                        }
                                        else {
                                            var title = "Item could not be added cart";
                                            var body = "Item could not be added to cart for some unknown reason.";
                                            $scope.mookie.showModal(title, body);
                                        }
                                    });
                                }
                                else {
                                    var title = "We couldn't add the item to your cart.";
                                    var body = "Item could not be added to unknown user cart. Please register new user";
                                    $scope.mookie.showModal(title, body);
                                }
                            });

                        }
                        else {
                            var title = "We couldn't add the item to your cart.";
                            var body = "Item could not be added to unknown user cart. Please register or sign in user";
                            $scope.mookie.showModal(title, body);
                        }

                    }, function (err) {
                        var title = "We couldn't add the item to your cart.";
                        var body = "Item could not be added to unknown user cart. Please register or sign in user";
                        $scope.mookie.showModal(title, body);
                    }).catch(function (error) {
                        console.log(error);
                        var title = "Unknown Error occurred.";
                        var body = "Please try again later.";
                        $scope.mookie.showModal(title, body);
                    });


                }
                else {
                    // return false;
                    var title = "Ordering is closed for now.";
                    var body = "Mookie Dough hours will be from 8 am to 7pm Monday Through Sunday with deliveyr starting at 9pm.  ";
                    $scope.mookie.showModal(title, body);
                }
            }
            else {
                // return false
                var title = "Ordering is closed for now.";
                var body = "Mookie Dough hours will be from 8 am to 7pm Monday Through Sunday with deliveyr starting at 9pm.  ";
                $scope.mookie.showModal(title, body);
            }
        });



      

    };
    // >

    // Adds a email subscription to be added for our newsletters and special announcements
    app.addSubscription = function (subEmail) {
        var subData = {};
        subData.subEmail = subEmail;
        Auth.addSubscription(subData).then(function (data) {
            app.subMessage = data.data.message;
            subEmail = "";
            $timeout(function () {
                app.subMessage = false;
            }, 2000);

        })
    };
    // >

    //Used to reset contact information form after information is put in
    $scope.mookie.contactMes = {};
    // Adds a contact message with a person's email and name
    $scope.mookie.addContactMessage = function (contactData) {
        Auth.addContactMessage(contactData).then(function (data) {
            $scope.mookie.contactNotification = data.data.message;
            if (data.data.success) {
                $scope.mookie.contactMes.email = '';
                $scope.mookie.contactMes.message = '';
                $scope.mookie.contactMes.name = '';
            }
            else {
                var title = "Contact Message not saved";
                var body = data.data.message;
                $scope.mookie.showModal(title, body);
            }
        });
    };
    // >

    //Modal functions
    $scope.mookie.hideModal = function () {
        $("#myModal").modal('hide');
    };
    //cont.
    $scope.mookie.hideStripeModal = function () {
        $('#stripeModal').modal('hide');
    };
    // cont.
    $scope.mookie.showModal = function (title, body) {
        $scope.mookie.modalTitle = title;
        $scope.mookie.modalBody = body;
        $("#myModal").modal(); // Open modal        
    };
    // cont.
    $scope.mookie.showProductModal = function (product) {
        $scope.mookie.modal = {};
        $scope.mookie.modal.imagePath = product.imagePath;
        $scope.mookie.modal.title = product.title;
        $scope.mookie.modal.description = product.description;
        $scope.mookie.modal.price = product.price;
        $scope.mookie.modal.category = product.category;
        $("#productModal").modal(); // Open modal        
    };
    $scope.mookie.showStripeModal = function () {
        $("#stripeModal").modal();
    };
    // >

    // Attempt to provide slides at home page
    $scope.mookie.slides = {
        slides: ["../../imgs/Media/dorm5-min.jpg", "../../imgs/Media/header3.png", "../../imgs/Media/M00KIE.jpg"]
    };
    // >

    //Add a product to product catalog in database
    app.addProductToDB = function (productData) {
        Product.seedProduct(productData).then(function (data) {
            if (data.data.success) {
                // Telemetry model could include Category, field one, field two, field three, Date, 

                // Some kind of telemetry maybe

                //No telemetry system setup yet
                //Maybe setup some type of system like Microsoft where we can manipulate a system of strings
                //These strings as telemetry can then have an array of attributes of strings

                //These attributes could include information readily available during runtime
                //This information could be time of execution, user during execution, number of such users action, users approximate area, 
                //Telemtry could be a meeting later on in the business process
                //I should attempt to get something up and running for proof of concept for usefullness
            }
            else {
            }
        })
    };
    // >

    // Run to check the database and see if the products are currently there
    app.resetProducts = function () {
        app.loadme = false;
        Product.getCatalogProducts().then(function (data) {
            if (data.data.success) {
                app.loadme = true;
            }
            else {
                if (data.data.noProducts) {
                    (function () {

                        var standardPrice = 2.99;
                        var productData = {};
                        productData.imagePath = "../updatedFrontend/redvelvet.png";
                        productData.price = standardPrice;
                        productData.title = "aunty vicky's red velvet";
                        productData.catalogProduct = true;
                        productData.category = "cookie dough bricks";
                        productData.description = "Mookies Dark Chocolate fudge mixed with some red velvet sizzurp syrup \“bricks\” Mookie’s Real Chocolate Chip Cookie Dough Bricks";
                        productData.about = "No one can touch og mookie’s auntie vicky’s red velvet cake. So we promised to buy her a Red Range Rover if she gave us the recipe so we could bless the world with some straight heat. You’re welcome.";

                        var productData2 = {};
                        productData2.imagePath = "../imgs/Media/Ogmookieconfetti.png";
                        productData2.price = standardPrice;
                        productData2.title = "og mookie's confetti party";
                        productData2.catalogProduct = true;
                        productData2.category = "cookie dough bricks";
                        productData2.description = "Mookie’s White Chocolate fudge mixed with sprinkles and some cupcake sizzurp syrup \“bricks\” Mookie’s Real Chocolate Chip Cookie Dough Bricks"
                        productData2.about = "Remember those vanilla cupcakes Big Tyler’s mom used to bring to class on his birthday? Yeah we finessed his mom’s recipe.";

                        var productData3 = {};
                        productData3.imagePath = "../updatedFrontend/cookies.png";
                        productData3.price = standardPrice;
                        productData3.title = "Cookies N Creme";
                        productData3.catalogProduct = true;
                        productData3.cateogry = "cookie dough bricks";
                        productData3.description = "Mookies White Chocolate fudge mixed with chocolate and dutch cookie bits \“bricks\” Mookie’s Real Chocolate Chip Cookie Dough Bricks"
                        productData3.about = "We have a guy that works security at that big cookie company with some deep pockets. You already know what we were on. We busted a lick,cracked the safe, and snatched the recipe.";

                        var productData4 = {};
                        productData4.imagePath = "../updatedFrontend/mocha.png";
                        productData4.price = standardPrice;
                        productData4.title = "dark chocolate mocha";
                        productData4.catalogProduct = true;
                        productData4.cateogry = "cookie dough bricks";
                        productData4.description = "Mookies Dark Chocolate fudge mixed with hints of mocha \“bricks\” Mookie’s Real Chocolate Chip Cookie Dough Bricks";

                        productData4.about = "";

                        var productData5 = {};
                        productData5.imagePath = "../imgs/Media/OGMookiepackaging.png";
                        productData5.price = standardPrice;
                        productData5.title = "og mookie";
                        productData5.catalogProduct = true;
                        productData5.cateogry = "cookie dough bricks";
                        productData5.description = "Mookies OG Cookie Dough Bricks packed with tasty cookie dough";
                        productData5.about = "";

                        // app.addProductToDB(productData);
                        // app.addProductToDB(productData2);
                        // app.addProductToDB(productData3);
                        // app.addProductToDB(productData4);
                        // app.addProductToDB(productData5);

                        // $scope.mookie.products = { productData, productData2, productData3, productData4 };

                    })();
                }
                else {
                    console.log('Getting catalog products has caused errors');
                }
            }
        })
    };

    app.resetProducts();
    // >

    // Get products from server to produce on home page in mookie scope
    $scope.mookie.getProductsFromServer = function (callback) {
        (function () {
            Product.getCatalogProducts().then(function (data) {
                if (data.data.success) {
                    $scope.mookie.products = data.data.catalogProducts;
                    // return callback(data.data.catalogProducts);
                }
            })
        })();
    };

    $scope.mookie.getProductsFromServer();
    // >

    // Get Subscribers for Management
    $scope.mookie.getSubscribers = function (callback) {
        MookieSubscription.getSubscribers().then(function (data) {
            if (data.data.success) {
                return callback(data.data.subscribers);
            }
        });
    };
    // >

    // Get Contact Messages for Management
    $scope.mookie.getContactMessages = function (callback) {
        ContactMessage.getContactMessages().then(function (data) {
            if (data.data.success) {
                return callback(data.data.contactMessages);
            }
        });
    };
    // >

    // Get Users for Management
    $scope.mookie.getUsers = function (callback) {
        User.getUsers().then(function (data) {
            if (data.data.success) {
                return callback(data.data.users);
            }
        });
    };
    // >

    // Get The User's current cart
    app.getCurrentCart = function (callback) {
        var userData = {};
        userData.userEmail = $scope.mookie.user.userEmail;
        console.log(userData);
        // Email different things to user

        User.getUser(userData).then(function (data) {
            if (data.data.success) {
                if (data.data.user.cart != null && data.data.user.cart != "") {
                    var cartData = {};
                    cartData.cartId = data.data.user.cart;
                    Cart.getCart(cartData).then(function (data) {
                        if (data.data.success) {
                            console.log(data.data);
                            var total = 0;
                            var count =0;
                            data.data.cart.products.forEach(function (product) {
                                total += product.price;
                                count++;
                            })
                            $scope.mookie.cartItemCount = count;
                            $scope.mookie.cart = data.data.cart;
                            return callback($scope.mookie.cart);

                        } else {
                            if (!data.data.cart) {
                                console.log('There is no cart attached to the user.');
                            }
                            else {
                                console.log(data);
                            }
                        }
                    });
                }
                else {
                    // User has no cart
                    // Do nothing
                    // console.log(data);
                }

            }
            else {
                // console.log(data);
                // Could not get user error
            }
        });
    };
    // >

    // Check if user's session has expired upon opening page for the first time
    //For all intents and purposes getemailAndUsername
    //Check to see if user
    app.checkUserState = function (callback) {
        if (Auth.isLoggedIn()) {
            $scope.mookie.loggedIn = true;
            Auth.getUser().then(function (data) {
                var userData = {};
                userData.userEmail = data.data.email;
                userData.username = data.data.username;
                // Check if the returned user is undefined (expired)
                if (data.data.username === undefined) {
                    console.log(data.data.username);
                    Auth.logout(); // Log the user out
                    $scope.mookie.loggedIn = false; // Set session to false
                    $location.path('/'); // Redirect to home page
                    app.loadme = true; // Allow loading of page
                }
                else {
                    return callback(userData);
                }
            }, function (error) {
                console.log(error);
            });
        }
    };
    
    // Usage of checkUserState when main doc loads
    // app.checkUserState(function (userData) {
    //     $scope.mookie.user.username = userData.username;
    //     $scope.mookie.user.userEmail = userData.userEmail;
    //     app.getCurrentCart(function (cart) {
    //         var total = 0;
    //         var counter = cart.products.length;
    //         cart.products.forEach(function (product) {
    //             var total = 0;
    //             var count = 0;
    //             cart.products.forEach(function (product) {
    //                 total += product.price;
    //                 count++;
    //             })
    //             $scope.mookie.cartItemCount = count;
    //             $scope.mookeie.cart = cart;           
    //         });
    //     });
    //     app.loadme = true;
    // });
    // >

    // Setup interval to check user session every 15 seconds
    app.mookieCheckSession = function () {
        var interval = $interval(function () {
            app.checkUserState(function (userData) {
                $scope.mookie.user.username = userData.username;
                $scope.mookie.user.userEmail = userData.userEmail;
                app.getCurrentCart(function (cart) {
                    var total = 0;
                    var count = 0;
                    cart.products.forEach(function (product) {
                        total += product.price;
                        count++;
                    })
                    $scope.mookie.cartItemCount = count;
                    $scope.mookie.cart = cart;
                });
                app.loadme = true;
            });
        }, 5000);
    };
    // >

    // Call when main controller loads
    app.mookieCheckSession();
    // >


    // Function to run an interval that checks if the user's token has expired
    app.checkSession = function () {
        // Only run check if user is logged in

        if (Auth.isLoggedIn()) {
            $scope.mookie.loggedIn = true;

            app.checkingSession = true; // Use variable to keep track if the interval is already running
            // Run interval ever 30000 milliseconds (30 seconds) 
            var interval = $interval(function () {
                var token = $window.localStorage.getItem('token'); // Retrieve the user's token from the client local storage
                // Ensure token is not null (will normally not occur if interval and token expiration is setup properly)
                if (token === null) {
                    $interval.cancel(interval); // Cancel interval if token is null
                } else {
                    // Parse JSON Web Token using AngularJS for timestamp conversion
                    self.parseJwt = function (token) {
                        var base64Url = token.split('.')[1];
                        var base64 = base64Url.replace('-', '+').replace('_', '/');
                        return JSON.parse($window.atob(base64));
                    };
                    var expireTime = self.parseJwt(token); // Save parsed token into variable
                    var timeStamp = Math.floor(Date.now() / 1000); // Get current datetime timestamp
                    var timeCheck = expireTime.exp - timeStamp; // Subtract to get remaining time of token
                    // Check if token has less than 30 minutes till expiration
                    if (timeCheck <= 1800) {
                        // showModal(1); // Open bootstrap modal and let user decide what to do
                        $interval.cancel(interval); // Stop interval
                    }
                    // Check Mookie Session
                    app.mookieCheckSession();
                }
            }, 5000);
        }
    };

    app.checkSession(); // Ensure check is ran check, even if user refreshes

    // Check if user is on checkout
    $rootScope.$on('$routeChangeSuccess', function () {
        if ($window.location.pathname === '/checkout') {
            $scope.mookie.checkout = true;
        } else {
            $scope.mookie.checkout = false;
        }

        if ($window.location.pathname === '/about' || $window.location.pathname === '/' || $window.location.pathname === '/home') {
            $scope.mookie.about = true; // Set home page div
        } else {
            $scope.mookie.about = false; // Clear home page div
        }
    });
    // >

    // Will run code every time a route changes
    $rootScope.$on('$routeChangeStart', function (event, next, current) {
        if (!app.checkingSession) app.checkSession();
        // Check if user is logged in
        if (Auth.isLoggedIn()) {
            // Custom function to retrieve user data
            Auth.getUser().then(function (data) {
                if (data.data.username === undefined) {
                    console.log('username invalid');
                    $scope.mookie.loggedIn = false;  // Variable to deactivate ng-show on index
                    Auth.logout();
                    $scope.mookie.loggedIn = false;
                    $location.path('/');
                } else {
                    $scope.mookie.loggedIn = true; // Variable to activate ng-show on index
                    app.username = data.data.username; // Get the user name for use in index
                    app.checkLoginStatus = data.data.username;
                    // app.useremail = data.data.email; // Get the user e-mail for use in index
                    User.getPermission().then(function (data) {
                        if (data.data.permission === 'admin' || data.data.permission === 'moderator') {
                            $scope.mookie.admin = true;

                            app.authorized = true; // Set user's current permission to allow management
                            app.permission = 'admin';
                            app.loadme = true; // Show main HTML now that data is obtained in AngularJS
                        } else {
                            $scope.mookie.admin = false;

                            app.authorized = false;
                            app.loadme = true; // Show main HTML now that data is obtained in AngularJS
                        }
                    });
                }
            }, function (error) {
                console.log(error);
            });
        } else {
            app.username = ''; // Clear username
            app.loadme = true; // Show main HTML now that data is obtained in AngularJS
        }
        if ($location.hash() == '_=_') $location.hash(null); // Check if facebook hash is added to URL
    });

    // // Function to redirect users to facebook authentication page
    // this.facebook = function () {
    //     app.disabled = true;
    //     $window.location = $window.location.protocol + '//' + $window.location.host + '/auth/facebook';
    // };

    // // Function to redirect users to twitter authentication page        
    // this.twitter = function () {
    //     app.disabled = true;
    //     $window.location = $window.location.protocol + '//' + $window.location.host + '/auth/twitter';
    // };

    // // Function to redirect users to google authentication page
    // this.google = function () {
    //     app.disabled = true;
    //     $window.location = $window.location.protocol + '//' + $window.location.host + '/auth/google';
    // };

    // Function to logout the user
    app.logout = function () {
        Auth.logout(); // Logout user by removing jwt token
        $scope.mookie.loggedIn = false;
        $timeout(function () {
            $scope.mookie.loggedIn = false;
            $location.path('/register');
        }, 2000);
    };

    $scope.mookie.logout = function () {
        Auth.logout(); // Logout user by removing jwt token
        $scope.mookie.loggedIn = false;
        // $scope.apply();
        $scope.mookie.loggedIn = false;
        $timeout(function () {
            $scope.mookie.loggedIn = false;
            $location.path('/register');
        }, 2000);
    };

});

