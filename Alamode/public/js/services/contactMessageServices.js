"use strict";

angular.module('contactMessageServices',[])

.factory('ContactMessage',function($http){
    var contactMessageFactory = {};

    contactMessageFactory.getContactMessages = function(){
        return $http.get('/api/getContactMessages');
    };
    return contactMessageFactory;
});