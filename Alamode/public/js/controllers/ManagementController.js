'use strict';
// angular.module('alamode.controllers', [])

// Controller: User to control the management page and managing of user accounts
alamode.controller('managementCtrl', function (User, orderService, $scope, $routeParams) {
    var manage = this;
    //$scope.mookie

    //Get Users
    $scope.mookie.getUsers(function (users) {
        manage.users = users;
    });

    //Get Product Catalog
    $scope.mookie.getProductsFromServer(function (catalogProducts) {
        manage.products = catalogProducts;
    });

    //Get Subscriptions

    $scope.mookie.getSubscribers(function (subscribers) {
        manage.subscribers = subscribers;
    });


    //Get ContactMessages

    $scope.mookie.getContactMessages(function (contactMessages) {
        manage.contactMessages = contactMessages;
    });


    // 
    manage.getCurrentOrders = function () {
        console.log('getting orders');
        orderService.getCurrentOrders().then(function (data) {
            console.log(data.data.orders);
            manage.orders = data.data.orders;
        }, function (err) {
            console.log(err);
        });
    };

    manage.getCurrentOrders();

})

.controller('orderCtrl', function ($scope, orderService, $routeParams) {
    var order = this;


    console.log($routeParams.orderId);
    var container = {};
    container.orderId = $routeParams.orderId;
    orderService.getOrder(container).then(function (data) {
        console.log(data);
        if (data.data.success) {
            if (data.data.order) {
                order.order = data.data.order;
            }
        }
        else {

        }
    }, function (err) {
        console.log('this is the error');
        console.log(err);
    });
});


