"use strict";

angular.module('scheduleServices',[])

.factory('scheduleService',function($http){
    var scheduleServiceFactory = {};

    scheduleServiceFactory.getOrderingSchedule = function(){
        return $http.post('/api/checkOrderingSchedule');
    };

    return scheduleServiceFactory;
});