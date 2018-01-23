"use strict";

angular.module('stripeServices',[])

.factory('stripeService',function($http){
    var stripeServiceFactory = {};

    stripeServiceFactory.checkout = function(checkoutData){
        return $http.post('/api/checkout',checkoutData);
    };

    stripeServiceFactory.donate = function(donateData){
        return $http.post('/api/donate',donateData);
    }

    return stripeServiceFactory;
});