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

        if ("geolocation" in navigator) {
            console.log('hmmmmmm');
            /* geolocation is available */
        } else {
            /* geolocation IS NOT available */
        }
        var handleErr = function (err) {
            console.log(err);
        };
        order.updateDriverLocation = function (pos) {
            var coords = pos.coords;

            var orderData = {};
            orderData.deliveryLatLng = {};
            orderData.lat = coords.latitude;
            orderData.lng = coords.longitude;
            orderData.order = order.order._id;


            orderService.updateDriverLocation(orderData).then(function (data) {
                console.log(data);
                if (data.data.success) {
                    console.log(data)
                }

            }, handleErr);
        };

        order.updateLocation = function () {
            navigator.geolocation.getCurrentPosition(
                order.updateDriverLocation,
                // Optional settings below
                handleErr,
                {
                    timeout: 500,
                    // enableHighAccuracy: true,
                    maximumAge: Infinity
                }
            );
        };

        // Delivery status, Pending, OutForOrders, OnTheWay, Completed

        var deliveryStatuses =  ['Pending','OutForOrders','OnTheWay','Completed'];
        // Updated order Delivery status
        order.updateDeliveryStatus = function (status) {
            var orderData = {};
            orderData.orderStatus = status;
            orderData.orderId = order.order._id;
            orderService.updateDeliveryStatus(orderData).then(function(data){
                console.log(data);
                if(data.data.success){
                    order.order.orderStatus = status;

                }
                else{

                }
            });
        };
        // >

        // //Tracking users position
        // watchId = navigator.geolocation.watchPosition(
        //     processGeolocation,
        //     // Optional settings below
        //     geolocationError,
        //     {
        //         timeout: 0,
        //         enableHighAccuracy: true,
        //         maximumAge: Infinity
        //     }
        // );

        // Get the order to display for Management
        orderService.getOrder(container).then(function (data) {
            console.log(data);
            if (data.data.success) {
                if (data.data.order) {
                    order.order = data.data.order;
                    order.order.customerReceipt.customerCart.total = order.order.customerReceipt.customerCart.subtotal + order.order.customerReceipt.customerCart.tax;
                    order.order.customerReceipt.customerCart.total = order.order.customerReceipt.customerCart.total.toFixed(2);
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
    .controller('customerOrderCtrl', function ($scope, orderService, $routeParams, Auth, $location) {
        var order = this;
        order.order = {};
        var container = {};
        order.showMe = false;

        container.orderId = $routeParams.orderId;

        // Order Statuses
        // Pending, OnTheWay, Completed
        // 

        var statusMap = new Map();
        statusMap.set('Pending','Your order is being Prepared');
        statusMap.set('OnTheWay','The driver is out with your order!');
        statusMap.set('Completed','Your order was completed');

        orderService.getOrder(container).then(function (data) {
            if (data.data.success) {
                Auth.getUser().then(function (userData) {
                    console.log(data.data.order.customerReceipt.customerCart);
                    if (userData.data.email === data.data.order.customerReceipt.customerCart.user.email) {
                        console.log(data.data);
                        var orderData = data.data.order;
                        order.order = orderData;

                        order.order.customerReceipt.customerCart.total = order.order.customerReceipt.customerCart.subtotal + order.order.customerReceipt.customerCart.tax;
                        order.order.customerReceipt.customerCart.total = order.order.customerReceipt.customerCart.total.toFixed(2);
                        order.orderMessage = statusMap.get(order.order.orderStatus);
                        order.showMe = true;


                    }
                    else {
                        $location.path('/');
                    }

                }, function (err) {
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


