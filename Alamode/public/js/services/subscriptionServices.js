"use strict";

angular.module('subscriptionServices',[])

.factory('MookieSubscription',function($http){
    var subscriptionFactory = {};

    subscriptionFactory.getSubscribers = function(){
        return $http.get('/api/getSubscribers');
    };

    return subscriptionFactory;
});