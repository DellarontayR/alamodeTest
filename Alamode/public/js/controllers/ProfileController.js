'use strict';

alamode.controller('ProfileController', function ($scope, $location, User, orderService, Auth) {
    var profileCtrl = this;
    profileCtrl.carts = false;
    profileCtrl.cartHistory = [{}];//tracking number, date purchased,order status, total
    profileCtrl.orderHistory = [{}];


    $scope.mookie.checkUserState(function (userData) {
        profileCtrl.username = userData.username;
        profileCtrl.userEmail = userData.userEmail;
        if (userData.success) {
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
                            console.log('could not get order history');

                        }
                    });
                }
                else {
                    // Couldn't get user redirect from page
                    Auth.logout(); // Log the user out
                    $scope.mookie.loggedIn = false; // Set session to false
                    $location.path('/register'); // Redirect to home page
                }
            });
        }
        else {
            console.log('could not check userState');
        }
    })
});
