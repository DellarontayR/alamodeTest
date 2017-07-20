'use strict';

alamode.controller('mainCtrl',function(Auth,$timeout,$location,$rootScope,$window,$interval,User,AuthToken,$scope){

    var app = this;
    app.loadme = false; // Hide main HTML until data is obtained in AngularJS
    if ($window.location.pathname === '/') app.home = true; // Check if user is on home page to show home page div

    app.user = {};

    //Bempah code for cart manager could be switched with really chepa modal
    // $('a.remove').click(function(){
    // event.preventDefault();
    // $( this ).parent().parent().parent().hide( 400 );

    // });

    // // Just for testing, show all items
    // $('a.btn.continue').click(function(){
    //     $('li.items').show(400);
    // });

    //main controller nees to keep user session, also checks every 30 seconds with $interval -- Check session
    //main controller neeeds to signin, loging, auth

    
    // Check if user's session has expired upon opening page for the first time
    if (Auth.isLoggedIn()) {
        console.log(' is logged');

        // Check if a the token expired
        Auth.getUser().then(function(data) {
            // Check if the returned user is undefined (expired)
            if (data.data.username === undefined) {
                Auth.logout(); // Log the user out
                app.isLoggedIn = false; // Set session to false
                $location.path('/'); // Redirect to home page
                app.loadme = true; // Allow loading of page
            }
        });
    }

    console.log('after is logged');

    // Function to run an interval that checks if the user's token has expired
    app.checkSession = function() {
        // Only run check if user is logged in

        if (Auth.isLoggedIn()) {
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
                        showModal(1); // Open bootstrap modal and let user decide what to do
                        $interval.cancel(interval); // Stop interval
                    }
                }
            }, 30000);
        }
    };

    console.log('check session');

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
            Auth.getUser().then(function(data) {
                if (data.data.username === undefined) {
                    app.isLoggedIn = false; // Variable to deactivate ng-show on index
                    Auth.logout();
                    app.isLoggedIn = false;
                    $location.path('/');
                } else {
                    app.isLoggedIn = true; // Variable to activate ng-show on index
                    app.username = data.data.username; // Get the user name for use in index
                    checkLoginStatus = data.data.username;
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
        Auth.login(app.loginData).then(function(data) {
            // Check if login was successful 
            if (data.data.success) {
                app.loading = false; // Stop bootstrap loading icon
                $scope.alert = 'alert alert-success'; // Set ng class
                app.successMsg = data.data.message + '...Redirecting'; // Create Success Message then redirect
                // Redirect to home page after two milliseconds (2 seconds)
                $timeout(function() {
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
    app.logout = function() {
        showModal(2); // Activate modal that logs out user
    };
});