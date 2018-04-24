'use strict';

alamode.controller('ProfileController', function ($scope, $location, User, orderService) {
    var profileCtrl = this;
    profileCtrl.carts = false;
    profileCtrl.cartHistory = [{}];//tracking number, date purchased,order status, total
    profileCtrl.orderHistory = [{}];
    // TODO: Change to get Orders instead of Carts

    $scope.mookie.getEmailAndUsername(function (userData) {
        profileCtrl.username = userData.username;
        profileCtrl.userEmail = userData.userEmail;

        User.getUser(userData).then(function (data) {
            if (data.data.success) {
                var userData = {};
                userData.userId = data.data.user._id;
                orderService.getUserOrders(userData).then(function (data) {
                    if (data.data.success) {
                        profileCtrl.orderHistory = data.data.orders;
                    }
                    else {
                        // Couldn't get order history successfuly because of error
                        // Should present user error

                    }
                });
            }
            else {
                // Couldn't get order history successfuly because of error
                // Should present user error
            }
        });
    });
});
