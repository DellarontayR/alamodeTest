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

    // Remove an inventory update
    inventoryServiceFactory.removeInventoryUpdate = function(itemData){
        return $http.post('/api/removeInventoryUpdate',itemData);
    };

    // Get totals to let user know if product is in stock
    // inventoryServiceFactory.getInventoryTotals = function(){
    //     return $http.post('/api/getInventoryTotals');
    // };

    return inventoryServiceFactory;
});