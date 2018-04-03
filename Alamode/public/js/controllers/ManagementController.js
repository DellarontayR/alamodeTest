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
            console.log(data);
            manage.orders = data.data.orders;
        }, function (err) {
            console.log('error geeting orders');
            console.log(err);
        });
    };

    manage.getCurrentOrders();

})

    .controller('orderCtrl', function ($scope, orderService, $routeParams) {
        var order = this;
        var container = {};
        container.orderId = $routeParams.orderId;

        // Get the order to display for Management
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
        // >
    })
    // Controller to handle customer orders
    .controller('customerOrderCtrl', function ($scope, orderService, $routeParams,Auth,$location) {
        var order = this;
        order.order = {};
        var container = {};
        order.showMe = false;

        container.orderId = $routeParams.orderId;
        // Give em order and allow to be updated

        orderService.getOrder(container).then(function (data) {
            console.log(data);
            if (data.data.success) {
                Auth.getUser().then(function(userData){
                    console.log(data.data.order.customerReceipt.customerCart);
                    if(userData.data.email === data.data.order.customerReceipt.customerCart.user.email){
                        console.log('here');
                        console.log(data.data);
                        var orderData = data.data.order;
                        order.order = orderData;
                        console.log(order.order);
                        order.message= 'There is something weird going on ';
                        order.showMe= true;


                    }
                    else{
                        $location.path('/');
                    }

                },function(err){
                    $location.path('/');

                });

            }
            else {
                $location.path('/');
            }
        }, function (err) {
            console.log('this is the error');
            console.log(err);
        });
    });
;


