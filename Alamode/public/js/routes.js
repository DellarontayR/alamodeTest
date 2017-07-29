"use strict";
console.log("what");

var app = angular.module('appRoutes',['ngRoute'])

.config(function ($routeProvider, $locationProvider){
    $routeProvider.when('/',{
        templateUrl: '../mookiedoughfrontend/home.html',
        authenticated: false

    }).
    when('/about',{
        templateUrl: '../mookiedoughfrontend/about.html',
        authenticated: false

    }).
    when('/cookiedoughmainshop',{
        templateUrl: '../mookiedoughfrontend/cookiedough/cookiedoughmainshop.html',
        authenticated: false
    }).
    when('/localfavmainshop',{
        templateUrl: '../mookiedoughfrontend/localfav/localfavmainshop.html',
        authenticated: false
    }).

    when('/minicookiedoughmainshop.html',{
        templateUrl: '../mookiedoughfrontend/minicookiedough/minicookiedoughmainshop.html',
        authenticated: false
    }).
    when('/milkmainshop',{
        templateUrl: '../mookiedoughfrontend/organicvalley/milkmainshop.html',
        authenticated: false
    }).
    when('/home',{
        templateUrl: '../mookiedoughfrontend/home.html',
        controller: 'MenuController',
        controllerAs: 'menu',
        authenticated: false
    })//No menu for mookiedoughfrontend just use home page
    .when('/register',{
        templateUrl: '../mookiedoughfrontend/login.html',
        controller: 'regCtrl',
        controllerAs: 'register',
        authenticated: false
    })
    // Route: User Profile
    .when('/account', {
        templateUrl: '../mookiedoughfrontend/account.html',
        authenticated: true
    })
    .when('/')
    // Route: Facebook Callback Result            
    .when('/facebook/:token', {
        templateUrl: '../../views/user/social/social.html',
        controller: 'facebookCtrl',
        controllerAs: 'facebook',
        authenticated: false
    })
    .when('/shop-single',{
        templateUrl: '../mookiedoughfrontend/shop-single.html',
        authenticated: false
    })
    .when('/shopping-cart',{
        templateUrl: '../mookiedoughfrontend/shopping-cart.html',
        authenticated: false
    })
    .when('/faq', {
        templateUrl: '../mookiedoughfrontend/faq.html',
        authenticated: false
    })
    .when('/contacts', {
        templateUrl: '../mookiedoughfrontend/contacts.html',
        authenticated: false
    })
    .when('/fuegophotos', {
        templateUrl: '../mookiedoughfrontend/fuegophotos.html',
        authenticated: false
    })
    .when('/checkout',{
        templateUrl: '../mookiedoughfrontend/checkout.html',
        authenticated: true
    })
    .when('/blog', {
        templateUrl: '../mookiedoughfrontend/blog.html',
        authenticated: false
    })
    // Route: Twitter Callback Result
    .when('/twitter/:token', {
        templateUrl: '../../views/user/social/social.html',
        controller: 'twitterCtrl',
        controllerAs: 'twitter',
        authenticated: false
    })
    // Route: Google Callback Result
    .when('/google/:token', {
        templateUrl: '../../views/user/social/social.html',
        controller: 'twitterCtrl',
        controllerAs: 'twitter',
        authenticated: false
    })

    // Route: Facebook Error
    .when('/facebookerror', {
        templateUrl: '../../views/user/login.html',
        controller: 'facebookCtrl',
        controllerAs: 'facebook',
        authenticated: false
    })

    // Route: Twitter Error
    .when('/twittererror', {
        templateUrl: '../../views/user/login.html',
        controller: 'twitterCtrl',
        controllerAs: 'twitter',
        authenticated: false
    })

    // Route: Google Error
    .when('/googleerror', {
        templateUrl: '../../views/user/login.html',
        controller: 'googleCtrl',
        controllerAs: 'google',
        authenticated: false
    })

    // Route: Facebook Account-Inactive Error
    .when('/facebook/inactive/error', {
        templateUrl: '../../views/user/login.html',
        controller: 'facebookCtrl',
        controllerAs: 'facebook',
        authenticated: false
    })

    // Route: Google Account-Inactive Error
    .when('/google/inactive/error', {
        templateUrl: '../../views/user/login.html',
        controller: 'googleCtrl',
        controllerAs: 'google',
        authenticated: false
    })

    // Route: Twitter Account-Inactive Error
    .when('/twitter/inactive/error', {
        templateUrl: '../../views/user/login.html',
        controller: 'twitterCtrl',
        controllerAs: 'twitter',
        authenticated: false
    })

    // Route: Twitter Not Yet Activated Error
    .when('/twitter/unconfirmed/error', {
        templateUrl: '../../views/user/login.html',
        controller: 'twitterCtrl',
        controllerAs: 'twitter',
        authenticated: false
    })

    // Route: Activate Account Through E-mail
    .when('/activate/:token', {
        templateUrl: '../../views/user/activate.html',
        controller: 'emailCtrl',
        controllerAs: 'email',
        authenticated: false
    })

    // Route: Request New Activation Link            
    .when('/resend', {
        templateUrl: '../../views/user/activation/resend.html',
        controller: 'resendCtrl',
        controllerAs: 'resend',
        authenticated: false
    })

    // Route: Send Username to E-mail
    .when('/resetusername', {
        templateUrl: '../../views/user/reset/username.html',
        controller: 'usernameCtrl',
        controllerAs: 'username',
        authenticated: false
    })

    // Route: Send Password Reset Link to User's E-mail
    .when('/resetpassword', {
        templateUrl: '../../views/user/reset/password.html',
        controller: 'passwordCtrl',
        controllerAs: 'password',
        authenticated: false
    })

    // Route: User Enter New Password & Confirm
    .when('/reset/:token', {
        templateUrl: '../../views/user/reset/newpassword.html',
        controller: 'resetCtrl',
        controllerAs: 'reset',
        authenticated: false
    })

    // Route: Manage User Accounts
    .when('/management', {
        templateUrl: '../../views/management/management.html',
        controller: 'managementCtrl',
        controllerAs: 'management',
        authenticated: true,
        permission: ['admin', 'moderator']
    })

    // Route: Edit a User
    .when('/edit/:id', {
        templateUrl: '../../views/management/edit.html',
        controller: 'editCtrl',
        controllerAs: 'edit',
        authenticated: true,
        permission: ['admin', 'moderator']
    })

    // Route: Search Database Users
    .when('/search', {
        templateUrl: '../../views/management/search.html',
        controller: 'managementCtrl',
        controllerAs: 'management',
        authenticated: true,
        permission: ['admin', 'moderator']
    })

    .otherwise({ redirectTo: '/' }); // If user tries to access any other route, redirect to home page

    $locationProvider.html5Mode({ enabled: true, requireBase: false }); // Required to remove AngularJS hash from URL (no base is required in index file)
});

// Run a check on each route to see if user is logged in or not (depending on if it is specified in the individual route)
app.run(['$rootScope', 'Auth', '$location', 'User', function($rootScope, Auth, $location, User) {

    // Check each time route changes    
    $rootScope.$on('$routeChangeStart', function(event, next, current) {

        // Only perform if user visited a route listed above
        if (next.$$route !== undefined) {
            // Check if authentication is required on route
            if (next.$$route.authenticated === true) {
                // Check if authentication is required, then if permission is required
                if (!Auth.isLoggedIn()) {
                    event.preventDefault(); // If not logged in, prevent accessing route
                    $location.path('/'); // Redirect to home instead
                } else if (next.$$route.permission) {
                    // Function: Get current user's permission to see if authorized on route
                    User.getPermission().then(function(data) {
                        // Check if user's permission matches at least one in the array
                        if (next.$$route.permission[0] !== data.data.permission) {
                            if (next.$$route.permission[1] !== data.data.permission) {
                                event.preventDefault(); // If at least one role does not match, prevent accessing route
                                $location.path('/'); // Redirect to home instead
                            }
                        }
                    });
                }
            } else if (next.$$route.authenticated === false) {
                // If authentication is not required, make sure is not logged in
                if (Auth.isLoggedIn()) {
                    event.preventDefault(); // If user is logged in, prevent accessing route
                    $location.path('/profile'); // Redirect to profile instead
                }
            }
        }
    });
}]);

console.log("what");
