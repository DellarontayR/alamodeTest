'use strict';
console.log('at javascript');
alamode.controller('TestController', function ($scope, $location, User,orderService,$routeParams) {
    var order = this;


    orderService.getOrder($routeParams.orderId).then(function (data) {
        console.log(data);
        if (data.data.success) {
            if (data.data.order) {
                order.order = order;
            }
        }
        else {

        }
    }, function (err) {
        console.log('this is the error');
        console.log(err);
    });
    // var app = this;
    // app.users = false;
    // User.getUsers().then(function (data) {
    //     if (data.data.success) {
    //         app.users = data.data.users;
    //         console.log(app.users);


    //     } else {
    //         console.log("There was an error getting the user list");
    //     }
    // });
    // Product.getProducts().then(function (data) {
    //     if (data.data.success) {
    //         console.log(data.data.products);
    //     }
    //     else {
    //         console.log('no products');
    //     }
    // });
});
