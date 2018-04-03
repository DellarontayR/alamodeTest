"use strict";

angular.module('orderServices',[])

.factory('orderService',function($http){
    var orderServiceFactory = {};

    orderServiceFactory.getCurrentOrders = function(){
        return $http.post('/api/getcurrentOrders');
    };

    orderServiceFactory.getOrder = function(orderId){
        return $http.post('/api/getOrder',orderId);
    };

    orderServiceFactory.updateDriverLocation = function(driverLatLng){
        return $http.post('/api/updateDriverLocation',driverLatLng);
    };



    // stripeServiceFactory.checkout = function(checkoutData){
    //     return $http.post('/api/checkout',checkoutData);
    // };

    // stripeServiceFactory.donate = function(donateData){
    //     return $http.post('/api/donate',donateData);
    // }

    return orderServiceFactory;
});