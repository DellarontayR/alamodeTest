"use strict";

var app = angular.module('appRoutes', ['ngRoute', 'angularCSS'])

    .config(function ($routeProvider, $locationProvider) {
        $routeProvider.when('/', {
            redirectTo: '/home'
        }).
            when('/home', {
                templateUrl: '../updatedFrontend/mookie.html',
                authenticated: false,
                controller: 'HomeController',
                controllerAs: 'home',
                css: ['../css/home.css']
            })
            .when('/orderComplete', {
                templateUrl: '../views/ordercomplete.html',
                css: '../css/ordercomplete.css',
                authenticated: true
            })
            .when('/management/users', {
                templateUrl: '../views/manageusers.html',
                css: '../css/manageusers.css',
                controller: 'managementCtrl',
                controllerAs: 'management',
                authenticated: true,
                permission: ['admin', 'moderator']
            }).
            when('/management/products', {
                templateUrl: '../views/manageproducts.html',
                css: '../css/manageproducts.css',
                controller: 'managementCtrl',
                controllerAs: 'management',
                authenticated: true,
                permission: ['admin', 'moderator']
            }).
            when('/management/otherdata', {
                templateUrl: '../views/manageotherdata.html',
                css: '../css/manageotherdata.css',
                controller: 'managementCtrl',
                controllerAs: 'management',
                authenticated: true,
                permission: ['admin', 'moderator']
            }).
            when('/management/manageInventory',{
                templateUrl: '../views/manageInventory.html',
                css: '../css/manageInventory.css',
                controller: 'inventoryCtrl',
                controllerAs: 'inventoryCtrl',
                permission: ['admin','moderator']
            }).
            when('/manageorders/:orderId', {
                templateUrl: '../views/manageorders.html',
                css: '../css/manageorders.css',
                controller: 'orderCtrl',
                controllerAs: 'orderContainer',
                authenticated: true,
                permission: ['admin', 'moderator']
            }).
            when('/orders/:orderId', {
                templateUrl: '../views/order.html',
                css: '../css/order.css',
                authenticated: true,
                controller: 'customerOrderCtrl',
                controllerAs: 'customerCtrl'
            }).
            when('/management/currentorders', {
                templateUrl: '../views/currentorders.html',
                css: '../css/currentorders.css',
                controller: 'managementCtrl',
                controllerAs: 'management',
                authenticated: true,
                permission: ['admin', 'moderator']
            }).
            when('/ontheway', {
                templateUrl: '../views/ontheway.html',
                css: ['../css/ontheway.css', '../css/checkout.css'],
                controller: 'CheckoutController',
                controllerAs: 'checkoutCtrl',
                authenticated: true
            }).
            when('/coterie', {
                templateUrl: '../updatedFrontend/coterie.html',
                css: ['..updatedFrontend/eCommerceAssets/styles/eCommerceStyle.css', '..updatedFrontend/productpage.css', '../updatedFrontend/coterie.css']
            }).
            when('/productpage', {
                templateUrl: '../updatedFrontend/productpage.html',
                css: ['..updatedFrontend/eCommerceAssets/styles/eCommerceStyle.css', '../updatedFrontend/productpage.css']
            })
            .when('/thesecret', {
                css: '../css/secret.css'
                // , templateUrl: '../views/secret.html'
            })
            .when('/donate', {
                templateUrl: './/views/donate.html',
                authenticated: false,
                controller: 'DonateController',
                controllerAs: 'cartCtrl'
            }).
            when('/catering', {
                templateUrl: '../views/catering.html',
                authenticated: false
            }).
            when('/about', {
                templateUrl: '../views/aboutus.html',
                authenticated: false,
                css: '../css/aboutus.css'
            })
            .when('/register', {
                templateUrl: '../mookiedoughfrontend/new-reg.html',
                controller: 'regCtrl',
                controllerAs: 'user',
                authenticated: false,
                css: '../css/register.css'

            })
            .when('/new-reg', {
                templateUrl: '../mookiedoughfrontend/login.html',
                controller: 'regCtrl',
                controllerAs: 'user',
                authenticated: false
            })
            .when('/login', {
                templateUrl: '../mookiedoughfrontend/register.html',
                authenticated: false,
                css: '../css/register.css'
            })
            // Route: User Profile
            .when('/account', {
                templateUrl: '../mookiedoughfrontend/account.html',
                authenticated: true,
                controller: 'ProfileController',
                controllerAs: 'profile',
                css: '../css/account.css'
            })
            // Route: Facebook Callback Result            
            .when('/facebook/:token', {
                templateUrl: '../views/social.html',
                controller: 'facebookCtrl',
                controllerAs: 'facebook',
                authenticated: false
            })
            .when('/shop-single', {
                templateUrl: '../mookiedoughfrontend/shop-single.html',
                authenticated: false
            })
            .when('/shopping-cart', {
                templateUrl: '../mookiedoughfrontend/shopping-cart.html',
                authenticated: false,
                controller: 'CartController',
                controllerAs: 'cartCtrl',
                css: '../css/shoppingCart.css'
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
            .when('/checkout', {
                templateUrl: '../mookiedoughfrontend/checkout.html',
                authenticated: true,
                controller: 'CheckoutController',
                controllerAs: 'cartCtrl',
                css: '../css/checkout.css'
            })
            // Route: Twitter Callback Result
            .when('/twitter/:token', {
                templateUrl: '../views/social.html',
                controller: 'twitterCtrl',
                controllerAs: 'twitter',
                authenticated: false
            })
            // Route: Google Callback Result
            .when('/google/:token', {
                templateUrl: '../views/social.html',
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
                templateUrl: '../views/social.html',
                controller: 'twitterCtrl',
                controllerAs: 'twitter',
                authenticated: false
            })

            // Route: Activate Account Through E-mail
            .when('/activate/:token', {
                templateUrl: '../views/activate.html',
                controller: 'activationCtrl',
                controllerAs: 'activation',
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
                templateUrl: '../../views/management.html',
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

        $locationProvider.html5Mode({ enabled: true, requireBase: false, rewriteLinks: false }); // Required to remove AngularJS hash from URL (no base is required in index file)
    });

// Run a check on each route to see if user is logged in or not (depending on if it is specified in the individual route)
app.run(['$rootScope', 'Auth', '$location', 'User', 'Carousel', function ($rootScope, Auth, $location, User, Carousel, scope) {
    // Check each time route changes    
    $rootScope.$on('$routeChangeStart', function (event, next, current) {
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
                    User.getPermission().then(function (data) {
                        // Check if user's permission matches at least one in the array
                        if (next.$$route.permission[0] !== data.data.permission) {
                            if (next.$$route.permission[1] !== data.data.permission) {
                                event.preventDefault(); // If at least one role does not match, prevent accessing route
                                $location.path('/'); // Redirect to home instead
                            }
                        }
                        // $rootScope.mookieChild.mookie.admin = false;

                    });
                }
            } else if (next.$$route.authenticated === false) {
                // If authentication is not required, make sure is not logged in
                // if (Auth.isLoggedIn()) {
                //     event.preventDefault(); // If user is logged in, prevent accessing route
                //     $location.path('/home'); // Redirect to profile instead
                // }

            }
        }
    });
}]);
