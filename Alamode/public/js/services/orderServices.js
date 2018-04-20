"use strict";

angular.module('orderServices', [])

    .factory('orderService', function ($http) {
        var orderServiceFactory = {};

        // Get current orders for management
        orderServiceFactory.getCurrentOrders = function () {
            return $http.post('/api/getcurrentOrders');
        };

        // Get order for management and customers
        orderServiceFactory.getOrder = function (orderId) {
            return $http.post('/api/getOrder', orderId);
        };

        // Update driver location for an order
        orderServiceFactory.updateDriverLocation = function (driverLatLng) {
            return $http.post('/api/updateDriverLocation', driverLatLng);
        };

        // Update the delivery status of an order
        orderServiceFactory.updateDeliveryStatus = function (orderData) {
            return $http.post('/api/updateDeliveryStatus', orderData);
        };

        // Get the old orders for the user
        orderServiceFactory.getUserOrders = function(userData){
            return $http.post('/api/getUserOrders',userData);
        };


        return orderServiceFactory;
    });