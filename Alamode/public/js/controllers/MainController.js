'use strict';// Enable typescript

alamode.controller('mainCtrl', function (Auth, $timeout, $location, $rootScope, $window, $interval, User, AuthToken, $scope, Cart, Product, MookieSubscription, ContactMessage) {
    var app = this;
    if ($window.location.pathname === '/') app.home = true; // Check if user is on home page to show home page div
    app.username = "";
    app.user = {};
    app.loggedIn = false;
    app.userEmail = "";
    app.userData = {};
    app.loadme = true;
    app.cart = {};
    app.products = false;

    // Needed to keep Canva presentation loaded correctly
    $(".canvasId").show(function () {
        // Find the iframes within our newly-visible element
        $(this).find("script").prop("src", function () {
          // Set their src attribute to the value of data-src
          return $(this).data("src");
        });
    });

    $scope.mookie = {};
    $scope.mookie.userCart = {};
    $scope.mookie.user = {};
    $scope.mookie.cartItemCount = false;
    $scope.mookie.home = false;
    $scope.mookie.admin = false;

    $scope.mookie.numberOfSiteVisitors = 0;//Display visitors to site

    // Checks to see if visitor has visitor's ip address has visited our site before
    $scope.mookie.checkVisitor = function(ipAddress){
        var ipData ={};
        ipData.ipAddress = ipAddress;
        Auth.checkVisitor(ipData).then(function(data){
            if(data.data.success){
                Auth.getSiteVisitors().then(function(data){
                    if(data.data.success){
                        if(data.data.numberOfSiteVisitors ===0){
                            $scope.mookie.numberOfSiteVisitors = 0;
                        }
                        else{
                            $scope.mookie.numberOfSiteVisitors = data.data.numberOfSiteVisitors;
                        }
                    }
                    else{
                        $scope.mookie.numberOfSiteVisitors = 0;
                    }
                });
            }
            else{
                $scope.mookie.numberOfSiteVisitors = 0;                
            }
        })
    };

    Auth.getIp().then(function(data){
        $scope.mookie.checkVisitor(data.data.ip);        
    });

    //

    // Updates the cart after adding an item to the cart
    $scope.mookie.updateCart = function (getCartData, callback) {
        Cart.getCart(getCartData).then(function (data) {
            if (data.data.success) {
                var itemCount = 0;
                data.data.cart.products.forEach(function (cartProduct) {
                    itemCount += cartProduct.qty;
                });
                var cartData = {};
                cartData.cart = data.data.cart;
                cartData.itemCount = itemCount;
                $scope.mookie.cartItemCount = itemCount;
                console.log('success');
                return callback(cartData);
            }
            else {
                console.log(data);
            }
        });
    };

    // Adds an item to a user's cart, shuold be used as a model for errors for users
    $scope.mookie.addToCart = function (product) {
        Auth.getUser().then(function (data) {
            if (data.data.email) {
                $scope.mookie.userEmail = data.data.email;
                $scope.mookie.username = data.data.username;
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
                                var body = "Item could not be added to cart.";
                                $scope.mookie.showModal(title, body);
                            }
                        });
                    }
                    else {
                        console.log(data);
                        // if (Auth.isLoggedIn()) {
                        //     Auth.logout();
                        // }
                        var title = "User could not be found on server";
                        var body = "Item could not be added to unknown user cart. Please register new user";
                        $scope.mookie.showModal(title, body);
                    }
                });

            }
            else {
                // if (Auth.isLoggedIn()) {
                //     Auth.logout();
                // }
                var title = "Local user token not found";
                var body = "Item could not be added to unknown user cart. Please register or sign in user";
                $scope.mookie.showModal(title, body);
            }

        }, function (err) {
            // if (Auth.isLoggedIn()) {
            //     Auth.logout();
            // }
            var title = "Local user token not found";
            var body = "Item could not be added to unknown user cart. Please register or sign in user";
            $scope.mookie.showModal(title, body);
        });
    };

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

    $scope.mookie.contactMes = {};//Used to reset contact information form after information is put in


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
                // $scope.mookie.showModal(title, body);
            }
        });
    };

    // Get a user's email and username from authtoken
    $scope.mookie.getEmailAndUsername = function (callback) {
        if (Auth.isLoggedIn()) {
            Auth.getUser().then(function (data) {
                var userData = {};
                userData.userEmail = data.data.email;
                userData.username = data.data.username;
                if (data.data.username === undefined) {
                    Auth.logout();//Check against database to make sure this is a real user and not a deleted one
                }
                else {
                    return callback(userData);
                }
            });
        }
    };

    $scope.mookie.getUserSession= function(){
        $scope.mookie.getEmailAndUsername(function(userData){
            User.getUser(userData).then(function(data){
                if(data.data.success){
                    if(data.data.user.cart!=null && data.data.user.cart){
                        var cartData = {};
                        cartData.cartId = data.data.user.cart;
                        Cart.getCart(cartData).then(function(data){
                            if(data.data.success){
    
                            }
                        });
                    }
                }   
                else{
    
                }
            });          
        });
    };
    


    $scope.mookie.getCurrentCart = function (callback) {
        $scope.mookie.getEmailAndUsername(function (userData) {
            User.getUser(userData).then(function (data) {
                if (data.data.success) {
                    if (data.data.user.cart != null && data.data.user.cart) {
                        var cartData = {};
                        cartData.cartId = data.data.user.cart;
                        Cart.getCart(cartData).then(function (data) {
                            if (data.data.success) {
                                var itemCount = 0;
                                var cart = data.data.cart;
                                (function(){cart.products.forEach(function (cartProduct) {
                                    itemCount += cartProduct.qty;
                                })})();//Self invoking
                                var cartData = {};
                                cartData.cart = cart;
                                cartData.itemCount = itemCount;
                                return callback(cartData);
                            }
                            else {

                            }
                        });
                    }
                }
                else {
                    //no success whatsoever getting user 
                    console.log('no success whatsoever');
                }
            });

        });
    };

    $scope.mookie.getCurrentCart(function (cartData) {//Call when maincontroller is loaded to get current cart information//Also possible to get user information here
        $scope.mookie.cartItemCount = cartData.itemCount;
    });

    $scope.mookie.hideModal = function () {
        $("#myModal").modal('hide');
    };
    $scope.mookie.showModal = function (title, body) {
        $scope.mookie.modalTitle = title;
        $scope.mookie.modalBody = body;
        $("#myModal").modal({ backdrop: "static" }); // Open modal        
    };

    $scope.mookie.showProductModal = function (product) {
        $scope.mookie.modal = {};
        $scope.mookie.modal.imagePath = product.imagePath;
        $scope.mookie.modal.title = product.title;
        $scope.mookie.modal.description = product.description;
        $scope.mookie.modal.price = product.price;
        $("#productModal").modal({ backdrop: "static" }); // Open modal        

    };

    $scope.mookie.showStripeModal = function () {
        $("#stripeModal").modal({ backdrop: "static" });
    };

    app.addProductToDB = function (productData) {
        Product.seedProduct(productData).then(function (data) {
            if (data.data.success) {
                // Some kind of telemetry maybe
            }
            else {
            }
        })
    };

    app.checkForProducts = function () {
        app.loadme = false;
        Product.getCatalogProducts().then(function (data) {
            if (data.data.success) {
                app.loadme = true;
            }
            else {
                if (data.data.noProducts) {
                    (function () {
                        var productData = {};
                        productData.imagePath = "../imgs/Media/peanutbutter-min.png";
                        productData.price = 5.99;
                        productData.description = "Peanut Butter Quivering Goodness";
                        productData.title = "Peanut Butter Quivering Goodness";
                        productData.catalogProduct = true;
                        app.addProductToDB(productData);
                        var productData2 = {}
                        productData2.imagePath = "../imgs/Media/almondmilk-min.png";
                        productData2.price = 3.99;
                        productData2.description = "Refreshing almond milk";
                        productData2.title = "Refreshing almond milk";
                        productData2.catalogProduct = true;
                        app.addProductToDB(productData2);
                        var productData3 = {}
                        productData3.imagePath = "../imgs/Media/petesbaridi-min.png";
                        productData3.price = 3.99;
                        productData3.description = "Ice Cold Brew";
                        productData3.title = "Ice Cold Brew";
                        productData3.catalogProduct = true;
                        app.addProductToDB(productData3);
                        var productData4 = {};
                        productData4.imagePath = "../imgs/Media/highbrewcoffee-min.png";
                        productData4.price = 3.99;
                        productData4.description = "High Brew Coffee";
                        productData4.title = "High Brew Coffee";
                        productData4.catalogProduct = true;
                        app.addProductToDB(productData4);
                        var productData5 = {};
                        productData5.imagePath = "../imgs/Media/minicookiedough-min.png";
                        productData5.price = 3.99;
                        productData5.description = "Mini Cookie Dough";
                        productData5.title = "Mini Cookie Dough";
                        productData5.catalogProduct = true;
                        app.addProductToDB(productData5);
                    })();
                    (function () {
                        var productData = {};
                        productData.imagePath = "../imgs/Media/localfav-min.png";
                        productData.price = 5.99;
                        productData.description = "Delicious birthday cake style cookie dough treat";
                        productData.title = "Birthday Surprise";
                        productData.catalogProduct = true;
                        productData.category = 'Bestseller';
                        app.addProductToDB(productData);

                        var productData2 = {};
                        productData2.imagePath = "../imgs/Media/cookiesnmilk-min.png";
                        productData2.price = 5.99;
                        productData2.description = "Oreo Cookie Dough Half Pint";
                        productData2.title = "Oreo Cookie Dough Half Pint";
                        productData2.catalogProduct = true;
                        productData2.category = 'Bestseller';
                        app.addProductToDB(productData2);

                        var productData3 = {};
                        productData3.imagePath = "../imgs/Media/ChocolateChip-min.png";
                        productData3.price = 5.99;
                        productData3.description = "Chocolate Chip Quarter Pint";
                        productData3.title = "Chocolate Chip Quarter Pint";
                        productData3.catalogProduct = true;
                        productData3.category = 'Bestseller';
                        app.addProductToDB(productData3);
                    })();

                }
                else {
                    console.log('Getting catalog products has caused errors');
                }
            }
        })
    };

    app.checkForProducts();

    $scope.mookie.getProductsFromServer = function (callback) {
        (function () {
            Product.getCatalogProducts().then(function (data) {
                if (data.data.success) {
                    return callback(data.data.catalogProducts);
                }
            })
        })();
    };

    $scope.mookie.getSubscribers = function (callback) {
        MookieSubscription.getSubscribers().then(function (data) {
            if (data.data.success) {
                return callback(data.data.subscribers);
            }
        });
    };

    $scope.mookie.getContactMessages = function (callback) {
        ContactMessage.getContactMessages().then(function (data) {
            if (data.data.success) {
                return callback(data.data.contactMessages);
            }
        });
    };

    $scope.mookie.getUsers = function (callback) {
        User.getUsers().then(function (data) {
            if (data.data.success) {
                return callback(data.data.users);
            }
        });
    };

    $scope.mookie.getUserAndCart = function(callback){
        Auth.getUser().then(function(data){
            if(data.data.success){
                var userData = {};
                userData.userEmail = data.data.email;
                User.getUser(userData).then(function(data){
                    if(data.data.success){
                        var retData = {};
                        retData.user = data.data.user;
                        retData.cartId = data.data.user.cart;
                        return callback(retData);
                    }
                    else{
                        console.log('fail');
                    }
                });
            }
            else{
                console.log('fail');
            }
        });
        
    };

    $scope.mookie.getUserAndCart(function(data){
        app.email = data.userEmail;
        app.cartId = data.cartId;
    });

    app.getProductsFromServer = function (callback) {
        (function () {
            Product.getCatalogProducts().then(function (data) {
                console.log('data from catalog');
                console.log(data);
                if (data.data.success) {
                    console.log("get catalog list success");
                    // app.catalogProducts = data.data.catalogProducts;
                    return callback(data.data.catalogProducts);
                }
                else {
                    console.log("get catalog list failure");
                }
            })

        })();
    };

    app.getBestsellers = function (callback) {
        var best = {};
        best.category = 'Bestseller';

        // Get Bestseller products for display in model
        (function (best) {
            Product.getProductCategory(best).then(function (data) {
                if (data.data.success) {
                    // app.bestsellers = data.data.bestsellers;
                    return callback(data.data.bestsellers);
                }
            });
        }(best));

    };

    app.getProducts = function (callback) {

        app.getProductsFromServer(function (catalogProducts) {
            app.catalogProducts = catalogProducts;
            return callback(catalogProducts);
        });

        app.getBestsellers(function (bestsellers) {
            app.bestsellers = bestsellers;
        });
    };

    app.getCurrentCart = function (callback) {
        var userData = {};
        userData.userEmail = app.email;

        User.getUser(userData).then(function (data) {
            if (data.data.success) {
                if (data.data.user.cart != null && data.data.user.cart != "") {
                    var cartData = {};
                    cartData.cartId = data.data.user.cart;
                    Cart.getCart(cartData).then(function (data) {
                        if (data.data.success) {
                            return callback(data.data.cart.products);

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
                    console.log('started from the bottom');
                    console.log(data);
                    //Make messaging service for different errors users can git
                }

            }
            else {
                console.log(data);
            }
        });
    };

    // Check if user's session has expired upon opening page for the first time
    //For all intents and purposes getemailAndUsername
    app.checkUserState = function (callback) {
        if (Auth.isLoggedIn()) {
            app.loggedIn = true;
            Auth.getUser().then(function (data) {
                var userData = {};
                userData.userEmail = data.data.email;
                userData.username = data.data.username;
                // Check if the returned user is undefined (expired)
                if (data.data.username === undefined) {
                    Auth.logout(); // Log the user out
                    app.isLoggedIn = false; // Set session to false
                    $location.path('/'); // Redirect to home page
                    app.loadme = true; // Allow loading of page
                }
                else {
                    return callback(userData);
                }
            });
        }
    };

    app.checkUserState(function (userData) {
        app.username = userData.username;
        app.email = userData.userEmail;
        app.getCurrentCart(function (products) {
            app.products = products;
            console.log(app.products);
            var total = 0;
            var counter = products.length;
            products.forEach(function (product) {
                total += product.qty * product.price;
                counter -= 1;
                if (counter === 0) {
                    app.cart.total = Math.round(total);
                    $scope.mookie.total = Math.round(total);
                }
            });
        });
        app.loadme = true;
    });

    app.mookieCheckSession = function () {
        var interval = $interval(function () {
            app.checkUserState(function (userData) {
                app.username = userData.username;
                app.email = userData.userEmail;
                app.getCurrentCart(function (products) {
                    app.products = products;
                    var total = 0;
                    var count = 0;
                    products.forEach(function (product) {
                        total += product.qty * product.price;
                        count += product.qty;
                    })
                    $scope.mookie.cartItemCount = count;
                    app.cart.total = total;
                });
                app.loadme = true;
            });
        }, 15000);
    };

    app.mookieCheckSession();
    // Function to run an interval that checks if the user's token has expired
    app.checkSession = function () {
        // Only run check if user is logged in

        if (Auth.isLoggedIn()) {
            app.loggedIn = true;

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
                }
            }, 30000);
        }
    };

    app.checkSession(); // Ensure check is ran check, even if user refreshes

    // Check if user is on the home page
    $rootScope.$on('$routeChangeSuccess', function () {
        if ($window.location.pathname === '/') {
            app.home = true; // Set home page div
        } else {
            app.home = false; // Clear home page div
        }

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

    // Will run code every time a route changes
    $rootScope.$on('$routeChangeStart', function () {
        if (!app.checkingSession) app.checkSession();

        // Check if user is logged in
        if (Auth.isLoggedIn()) {
            // Custom function to retrieve user data
            Auth.getUser().then(function (data) {
                if (data.data.username === undefined) {
                    app.isLoggedIn = false; // Variable to deactivate ng-show on index
                    Auth.logout();
                    app.isLoggedIn = false;
                    $location.path('/');
                } else {
                    app.isLoggedIn = true; // Variable to activate ng-show on index
                    app.username = data.data.username; // Get the user name for use in index
                    app.checkLoginStatus = data.data.username;
                    app.useremail = data.data.email; // Get the user e-mail for us ein index
                    User.getPermission().then(function (data) {
                        if (data.data.permission === 'admin' || data.data.permission === 'moderator') {
                            app.authorized = true; // Set user's current permission to allow management
                            app.permission = 'admin';
                            $scope.mookie.admin = true;
                            app.loadme = true; // Show main HTML now that data is obtained in AngularJS
                        } else {
                            app.authorized = false;
                            $scope.mookie.admin = false;
                            app.loadme = true; // Show main HTML now that data is obtained in AngularJS
                        }
                    });
                }
            });
        } else {
            app.isLoggedIn = false; // User is not logged in, set variable to falses
            app.username = ''; // Clear username
            app.loadme = true; // Show main HTML now that data is obtained in AngularJS
        }
        if ($location.hash() == '_=_') $location.hash(null); // Check if facebook hash is added to URL
        app.disabled = false; // Re-enable any forms
        app.errorMsg = false; // Clear any error messages

    });

    // Function to redirect users to facebook authentication page
    this.facebook = function () {
        app.disabled = true;
        $window.location = $window.location.protocol + '//' + $window.location.host + '/auth/facebook';
    };

    // Function to redirect users to twitter authentication page        
    this.twitter = function () {
        app.disabled = true;
        $window.location = $window.location.protocol + '//' + $window.location.host + '/auth/twitter';
    };

    // Function to redirect users to google authentication page
    this.google = function () {
        app.disabled = true;
        $window.location = $window.location.protocol + '//' + $window.location.host + '/auth/google';
    };

    // Function that performs login
    this.doLogin = function (loginData) {
        app.loading = true; // Start bootstrap loading icon
        app.errorMsg = false; // Clear errorMsg whenever user attempts a login
        app.expired = false; // Clear expired whenever user attempts a login 
        app.disabled = true; // Disable form on submission
        $scope.alert = 'default'; // Set ng class

        // Function that performs login
        Auth.login(loginData).then(function (data) {
            // Check if login was successful 
            if (data.data.success) {
                app.loading = false; // Stop bootstrap loading icon
                $scope.alert = 'alert alert-success'; // Set ng class
                app.successMsg = data.data.message + '...Redirecting'; // Create Success Message then redirect
                // Redirect to home page after two milliseconds (2 seconds)
                showModal();
                $timeout(function () {
                    $location.path('/'); // Redirect to home
                    app.loginData = ''; // Clear login form
                    app.successMsg = false; // CLear success message
                    app.disabled = false; // Enable form on submission
                    app.checkSession(); // Activate checking of session
                }, 2000);
            } else {
                // Check if the user's account is expired

                if (data.data.expired) {
                    app.expired = true; // If expired, set variable to enable "Resend Link" on login page
                    app.loading = false; // Stop bootstrap loading icon
                    $scope.alert = 'alert alert-danger'; // Set ng class
                    app.errorMsg = data.data.message; // Return error message to login page
                } else {
                    app.loading = false; // Stop bootstrap loading icon
                    app.disabled = false; // Enable form
                    $scope.alert = 'alert alert-danger'; // Set ng class
                    app.errorMsg = data.data.message; // Return error message to login page
                }
            }
        });
    };

    // Function to logout the user
    app.logout = function () {
        Auth.logout(); // Logout user
        app.loggedIn = false;

        $location.path('/login');
        app.loggedIn = false;
        $scope.loggedIn = false;
    };


});