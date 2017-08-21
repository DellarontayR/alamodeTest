'use strict';
// angular.module('alamode.controllers', [])

// Controller: User to control the management page and managing of user accounts
alamode.controller('managementCtrl', function(User, $scope) {
    var manage = this;
    //$scope.mookie

    //Get Users
    $scope.mookie.getUsers(function(users){
        manage.users = users;
    });

    //Get Product Catalog
    $scope.mookie.getProductsFromServer(function(catalogProducts){
        manage.products = catalogProducts;
    });

    //Get Subscriptions

    $scope.mookie.getSubscribers(function(subscribers){
        manage.subscribers = subscribers;
    });


    //Get ContactMessages

    $scope.mookie.getContactMessages(function(contactMessages){
        manage.contactMessages = contactMessages;
    });
    
});