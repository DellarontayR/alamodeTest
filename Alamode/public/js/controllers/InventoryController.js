'use strict';
alamode.controller('inventoryCtrl', function ($scope, inventoryService) {
    var inventoryCtrl = this;

    // Inventory variables
    inventoryCtrl.inventory = {};
    inventoryCtrl.inventoryMap = {};
    inventoryCtrl.currentNames = [];
    inventoryCtrl.inventoryMapZ = [];
    inventoryCtrl.newItem = {};
    inventoryCtrl.newItem.oldInventory = 'false';
    inventoryCtrl.newItem.itemPrice = 2.99;
    // >

    // Remove inventory Update
    inventoryCtrl.removeInventoryUpdate = function (itemId) {
        var itemData = {};
        itemData.itemId = itemId;
        inventoryService.removeInventoryUpdate(itemData).then(function (data) {
            console.log(data);
            if (data.data.success) {
                // item removed successfully

            }
            else {
                // item not removed successfully


            }
        });
    }
    // >

    // Get total inventory from searching and creating inventoryMap
    inventoryCtrl.getTotals = function () {
        inventoryCtrl.inventoryMap = new Map();
        inventoryCtrl.currentNames = [];//Reset

        inventoryCtrl.inventory.forEach(itemInventory => {
            if (inventoryCtrl.inventoryMap.has(itemInventory.itemName)) {
                inventoryCtrl.inventoryMap.set(itemInventory.itemName, inventoryCtrl.inventoryMap.get(itemInventory.itemName) + itemInventory.itemQty);
            }
            else {
                inventoryCtrl.inventoryMap.set(itemInventory.itemName, itemInventory.itemQty);
            }
        });
        var iterator1 = inventoryCtrl.inventoryMap[Symbol.iterator]();
        for (let item of iterator1) {
            inventoryCtrl.inventoryMapZ.push({ name: item[0], qty: item[1] });
            inventoryCtrl.currentNames.push(item[0]);
        }
        inventoryCtrl.inventoryMap = inventoryCtrl.inventoryMap;//Array.from(inventoryCtrl.inventoryMap.entries());
    };
    // 

    // customize inventory for display
    inventoryCtrl.customizeInventory = function () {
        inventoryCtrl.inventory = inventoryCtrl.inventory.map(itemInventory => {
            if (itemInventory.itemQty > 0 && !itemInventory.oldInventory) {
                itemInventory.addInventory = true;
            }
            else if (itemInventory.itemQty < 0 && !itemInventory.oldInventory) {
                itemInventory.removeInventory = true;
            }
            return itemInventory;
        });
        inventoryCtrl.getTotals();
    };
    // >

    // Load inventory for display
    inventoryCtrl.loadInventory = function () {
        inventoryService.getInventory().then(function (data) {
            if (data.data.success) {
                inventoryCtrl.inventory = data.data.inventory.itemInventory;
                inventoryCtrl.customizeInventory();
            }
            else {

            }
        })
    };
    inventoryCtrl.loadInventory();
    // >

    // Update inventory
    inventoryCtrl.updateInventory = function () {
        if (inventoryCtrl.newItem.itemName && inventoryCtrl.newItem.itemPrice && inventoryCtrl.newItem.itemQty) {
            inventoryService.updateInventory(inventoryCtrl.newItem).then(function (data) {
                if (data.data.success) {
                    inventoryCtrl.inventory = data.data.inventory.itemInventory;
                    inventoryCtrl.customizeInventory();
                }
                else {

                }
            });

        }
        else {
            console.log('No new item');

        }
    };
    // >
});
