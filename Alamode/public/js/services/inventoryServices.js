"use strict";

angular.module('inventoryServices',[])

.factory('inventoryService',function($http){
    var inventoryServiceFactory = {};


    // Update Inventory 
    inventoryServiceFactory.updateInventory = function(inventoryData){
        return $http.post('/api/updateInventory',inventoryData);
    };

    // Get inventory to laod in frontend
    inventoryServiceFactory.getInventory = function(){
        return $http.post('/api/getInventory');
    };

    inventoryServiceFactory.removeInventoryUpdate = function(itemData){
        return $http.post('/api/removeInventoryUpdate',itemData);
    };

    return inventoryServiceFactory;
});