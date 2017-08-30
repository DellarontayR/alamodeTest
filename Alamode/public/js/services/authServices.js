"use strict";

angular.module('authServices', [])

// Factor: Auth handles all login/logout functions	
.factory('Auth', function($http, AuthToken,$q) {
    var authFactory = {}; // Create the factory object
    // Function to log the user in
     
    authFactory.login = function(loginData) {
        return $http.post('/api/mookie-login', loginData).then(function(data) {
            if(data.data.success){
                AuthToken.setToken(data.data.token); // Endpoint will return a token to set
                console.log(data.data.token);
                console.log(data);
                return data;
            }
            else{
                return data;    ` `                
            }
        });
    };

    authFactory.addSubscription = function(subData){
        return $http.post('/api/addSubscription',subData);
    };

    authFactory.addContactMessage = function(contactData){
        return $http.post('/api/addContactMessage',contactData);
    };

    authFactory.checkVisitor = function(ipData){
        return $http.post('/api/checkVisitor',ipData);
    };

    authFactory.getIp= function(data){
        return $http.post('http://ipinfo.io/?format=jsonp');
    };

    authFactory.getSiteVisitors = function(){
        return $http.post('/api/getSiteVisitors');
    };
    // Function to check if user is currently logged in
    authFactory.isLoggedIn = function() {
        // CHeck if token is in local storage
        if (AuthToken.getToken()) {
            return true; // Return true if in storage
        } else {
            return false; // Return false if not in storage
        }
    };

    // Function to set token for social media logins
    authFactory.socialMedia = function(token) {
        AuthToken.setToken(token); // Set token retrieved from passportJS
    };

    // Function to get current user's data
    authFactory.getUser = function() {
        // Check first if user has a token
        if (AuthToken.getToken()) {
            return $http.post('/api/me'); // Return user's data
        } else {
            var data = {};
            data.data = {};
            data.data.success=false;
            data.data.message ="User token not found locally";
            // return (data);
            return $q.reject({message:'UserToken not found'}); // Reject if no token exists
        }
    };

    // Function to logout the user
    authFactory.logout = function() {
        AuthToken.setToken(); // Removes token from local storage
    };

    return authFactory; // Return object
})

// Factory: AuthToken handles all token-associated functions
.factory('AuthToken', function($window) {
    var authTokenFactory = {}; // Create factory object

    // Function to set and remove the token to/from local storage
    authTokenFactory.setToken = function(token) {
        // Check if token was provided in function parameters
        if (token) {
            $window.localStorage.setItem('token', token); // If so, set the token in local storage
        } else {
            $window.localStorage.removeItem('token'); // Otherwise, remove any token found in local storage (logout)
        }
    };

    // Function to retrieve token found in local storage
    authTokenFactory.getToken = function() {
        return $window.localStorage.getItem('token');
    };

    return authTokenFactory; // Return factory object
})

// Factory: AuthInterceptors is used to configure headers with token (passed into config, app.js file)
.factory('AuthInterceptors', function(AuthToken) {
    var authInterceptorsFactory = {}; // Create factory object

    // Function to check for token in local storage and attach to header if so
    authInterceptorsFactory.request = function(config) {
        var token = AuthToken.getToken(); // Check if a token is in local storage
        if (token) config.headers['x-access-token'] = token; //If exists, attach to headers

        return config; // Return config object for use in app.js (config file)
    };

    return authInterceptorsFactory; // Return factory object

});