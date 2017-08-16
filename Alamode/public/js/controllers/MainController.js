'use strict';

alamode.controller('mainCtrl',function(Auth,$timeout,$location,$rootScope,$window,$interval,User,AuthToken,$scope,Cart,Product){
    var app = this;
    if ($window.location.pathname === '/') app.home = true; // Check if user is on home page to show home page div
    app.username = "";
    app.message = "Welcome" + app.username;
    app.user = {};
    app.justRegistered = false;
    app.numberofcartitems = "";
    app.scopemessage = "hopppppe";
    app.loggedIn = false;
    app.userEmail = "";
    app.userData = {};

    var getEmail =function(userEmail){
        app.userEmail = userEmail;
        console.log("user email: " + app.userEmail);
    };

    var getEmailClosure =function(data,callback){
        return function(){
            return callback(data);
        }
    };
    app.tryAddCart = function(){
        console.log('try');
        app.userData = {};
        app.userData.userEmail = app.userEmail;
        console.log(app.userEmail);

        Cart.addCartToUser(app.userData).then(function(data){
            if(data.data.success){
                console.log("tryAddCart success");
                console.log(data);
            }
            else{
                console.log('not tryaddcart');
                console.log(data.data.message);
            }
        });
    };

    // app.tryAddCart();

    app.addProductToDB = function(productData){
        Product.seedProduct(productData).then(function(data){
            if(data.data.success){
                console.log('seed product data successful');
                console.log(data);
            }
            else{
                console.log("error when seeding product data");
                console.log(data);
            }
        })
    };

    // app.seedBestsellers = 
    // (function(){
    //     var productData = {};
    //     productData.imagePath = "../imgs/Media/localfav.jpg";
    //     productData.price = 5.99;
    //     productData.description = "Delicious birthday cake style cookie dough treat";
    //     productData.title = "Birthday Surprise";
    //     productData.catalogProduct = true;
    //     productData.category = 'Bestseller';
    //     app.addProductToDB(productData);

    //     var productData2 ={};
    //     productData2.imagePath = "../imgs/cookiesnmilk.jpg";
    //     productData2.price = 5.99;
    //     productData2.description = "Oreo Cookie Dough Half Pint";
    //     productData2.title = "Oreo Cookie Dough Half Pint";
    //     productData2.catalogProduct = true;
    //     productData2.category = 'Bestseller';
    //     app.addProductToDB(productData2);

    //     var productData3 ={};
    //     productData3.imagePath = "../imgs/ChocolateChip.jpg";
    //     productData3.price = 5.99;
    //     productData3.description = "Chocolate Chip Quarter Pint";
    //     productData3.title = "Chocolate Chip Quarter Pint";
    //     productData3.catalogProduct = true;
    //     productData3.category = 'Bestseller';
    //     app.addProductToDB(productData3);
    // })();

    // app.seedBestsellers();

    // app.seedProducts = 
    // (function(){
    //     var productData = {};
    //     productData.imagePath = "../imgs/Media/peanutButter.jpg";
    //     productData.price = 5.99;
    //     productData.description = "Peanut Butter Quivering Goodness";
    //     productData.title = "Peanut Butter Quivering Goodness";
    //     productData.catalogProduct = true;
    //     app.addProductToDB(productData);
    //     var productData2 ={}
    //     productData2.imagePath = "../imgs/Media/almondmilk.jpg";
    //     productData2.price = 3.99;
    //     productData2.description = "Refreshing almond milk";
    //     productData2.title = "Refreshing almond milk";
    //     productData2.catalogProduct = true;
    //     app.addProductToDB(productData2);
    //     var productData3 ={};
    //     productData3.imagePath = "../imgs/Media/highbrewcoffee.jpg";
    //     productData3.price = 3.99;
    //     productData3.description = "High Brew Coffee";
    //     productData3.title = "High Brew Coffee";
    //     productData3.catalogProduct = true;
    //     app.addProductToDB(productData3);
    // })();

    // app.seedProducts();

    app.seedCart = function(){
        var seedData = {};
        seedData.productId = "599252070f0b62b5cc1fd1f3";
        seedData.quantity = 1;
        Cart.seedCart(seedData).then(function(data){
            console.log(seedData);
            if(data.data.success){
                console.log('seed cart successful');
                console.log(data);

            }
            else{
                console.log('seed cart not successful');
                console.log(data);
            }
        });
    };

    // app.seedCart();

    app.addItemToCart = function(productId,cartId){
        Auth.getUser().then(function(data){
            app.userEmail = data.data.email;
            var userData = {};
            userData.userEmail = data.data.email;
            console.log('important email');
            console.log(data.data.email);
            User.getUserCart(userData).then(function(innerData){
                console.log('user data');
                console.log(userData);
                console.log(innerData);
                var cartData={};
                cartData.cartId=cartId;
                cartData.productId = productId;
                console.log('cartId');
                console.log(cartData);

                    Cart.addItemToCart(cartData).then(function(incart){
                        console.log(incart);
                        if(incart.data.success){
                            console.log('item added to cart successuflly');
                            console.log(incart);
                        }
                        else{
                            console.log('Cart not updated');
                            console.log(incart);
                        }
                    });
            });
            // cartData.cartId = data.data.cart;
         
        });
    };

    app.addToCart = function(){

    };

    // app.addItemToCart("599278c4351a9be0902e738a","5993887661572d44c9bddaf2");

    // Check if user's session has expired upon opening page for the first time
    if (Auth.isLoggedIn()) {
        console.log('User is logged in');
        app.loggedIn= true;
        Auth.getUser().then(function(data){
            app.userEmail = data.data.email;
            app.userEmail = angular.copy(data.data.email);


            // getEmail(data.data.email);
            // app.tryAddCart();

            console.log('user email');
            console.log(app.userEmail);
            // Check if the returned user is undefined (expired)
            if (data.data.username === undefined) {
                Auth.logout(); // Log the user out
                app.isLoggedIn = false; // Set session to false
                $location.path('/'); // Redirect to home page
                app.loadme = true; // Allow loading of page
            }
        });
    }   

    // Function to run an interval that checks if the user's token has expired
    app.checkSession = function() {
        // Only run check if user is logged in

        if (Auth.isLoggedIn()) {
            app.loggedIn= true;

            app.checkingSession = true; // Use variable to keep track if the interval is already running
            // Run interval ever 30000 milliseconds (30 seconds) 
            var interval = $interval(function() {
                var token = $window.localStorage.getItem('token'); // Retrieve the user's token from the client local storage
                // Ensure token is not null (will normally not occur if interval and token expiration is setup properly)
                if (token === null) {
                    $interval.cancel(interval); // Cancel interval if token is null
                } else {
                    // Parse JSON Web Token using AngularJS for timestamp conversion
                    self.parseJwt = function(token) {
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
    $rootScope.$on('$routeChangeSuccess', function() {
        if ($window.location.pathname === '/') {
            app.home = true; // Set home page div
        } else {
            app.home = false; // Clear home page div
        }
    });

    // Will run code every time a route changes
    $rootScope.$on('$routeChangeStart', function() {
        if (!app.checkingSession) app.checkSession();

        // Check if user is logged in
        if (Auth.isLoggedIn()) {
            // Custom function to retrieve user data
            console.log("realling logged in though");
            Auth.getUser().then(function(data) {
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
                    User.getPermission().then(function(data) {
                        if (data.data.permission === 'admin' || data.data.permission === 'moderator') {
                            app.authorized = true; // Set user's current permission to allow management
                            app.loadme = true; // Show main HTML now that data is obtained in AngularJS
                        } else {
                            app.authorized = false;
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
    this.facebook = function() {
        app.disabled = true;
        $window.location = $window.location.protocol + '//' + $window.location.host + '/auth/facebook';
    };

    // Function to redirect users to twitter authentication page        
    this.twitter = function() {
        app.disabled = true;
        $window.location = $window.location.protocol + '//' + $window.location.host + '/auth/twitter';
    };

    // Function to redirect users to google authentication page
    this.google = function() {
        app.disabled = true;
        $window.location = $window.location.protocol + '//' + $window.location.host + '/auth/google';
    };

    // Function that performs login
    this.doLogin = function(loginData) {
        app.loading = true; // Start bootstrap loading icon
        app.errorMsg = false; // Clear errorMsg whenever user attempts a login
        app.expired = false; // Clear expired whenever user attempts a login 
        app.disabled = true; // Disable form on submission
        $scope.alert = 'default'; // Set ng class

        // Function that performs login
        Auth.login(loginData).then(function(data) {
            // Check if login was successful 
            if (data.data.success) {
                app.loading = false; // Stop bootstrap loading icon
                $scope.alert = 'alert alert-success'; // Set ng class
                app.successMsg = data.data.message + '...Redirecting'; // Create Success Message then redirect
                // Redirect to home page after two milliseconds (2 seconds)
                console.log("success");
                showModal();
                $timeout(function() {
                    $location.path('/'); // Redirect to home
                    app.loginData = ''; // Clear login form
                    app.successMsg = false; // CLear success message
                    app.disabled = false; // Enable form on submission
                    app.checkSession(); // Activate checking of session
                }, 2000);
            } else {
                // Check if the user's account is expired
                console.log("Login failed");

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
    app.logout = function() {
        Auth.logout(); // Logout user
                app.loggedIn = false;

        $location.path('/login');
        app.loggedIn = false;
        $scope.loggedIn = false;

        // showModal(2); // Activate modal that logs out user
    };

     var hideModal = function() {
        $("#myModal").modal('hide'); // Hide modal once criteria met
    };
    

     // Function to open bootstrap modal     
    var showModal = function() {
            app.modalHeader = 'Sign in notifaction'; // Set header
            app.modalBody = 'Thank you for signing in'; // Set body
            $("#myModal").modal({ backdrop: "static" }); // Open modal
    };
});