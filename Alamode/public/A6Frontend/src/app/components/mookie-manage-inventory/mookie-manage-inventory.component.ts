import { Component, OnInit } from '@angular/core';
import { ILooseObject } from '../../interfaces/looseObject';
import { InventoryService } from '../../services/inventory.service';
import { IItemInventory } from '../../interfaces/itemInventory';

@Component({
  selector: 'app-mookie-manage-inventory',
  templateUrl: './mookie-manage-inventory.component.html',
  styleUrls: ['./mookie-manage-inventory.component.scss']
})
export class MookieManageInventoryComponent implements OnInit {

  inventory: [ILooseObject];
  inventoryMap: Map<String, Number>;
  currentNames: [String];
  inventoryMapZ;
  newItem: ILooseObject;
  totals: [ILooseObject];

  constructor(private inventoryService: InventoryService) { 
    this.newItem = {itemName:'',itemQty:0,addInventory:false,removeInventory:false,oldInventory:false};

  }

  ngOnInit() {
    this.newItem = {};
    this.inventoryMapZ = [];
    this.loadInventory();
  }

  // // Get total inventory from searching and creating inventoryMap
  getTotals = function () {
    this.inventoryMap = new Map();
    this.currentNames = [];
    this.inventory.forEach(item => {
      if (this.inventoryMap.has(item.itemName)) {
        this.inventoryMap.set(item.itemName, this.inventoryMap.get(item.itemName) + item.itemQty);
      }
      else {
        this.inventoryMap.set(item.itemName, item.itemQty);
      }
    });

    this.inventoryMap.forEach((v, k, m) => {
      this.inventoryMapZ.push({ name: k, qty: v });
      this.currentNames.push(k);
    });

  };

  // // customize inventory for display
  customizeInventory = function () {
    console.log(this.inventory);
    this.inventory = this.inventory.map(item => {
      if (item.itemQty > 0 && !item.olInventory) {
        item.addInventory = true;
      }
      else if (item.itemQty < 0 && !item.oldInventory) {
        item.removeInventory = true;
      }
      return item;
    });
    // this.getTotals();
  };

  // // Load inventory for display
  loadInventory = function () {
    this.inventoryService.getInventory().subscribe(data => {
      if (data.success) {
        this.inventory = data.inventory.itemInventory;
        this.totals = data.inventory.totals;
        this.customizeInventory();
      }
      else {
        // Display general admin error
      }
    });
  };

  // // Update inventory
  updateInventory = function () {
    if (this.newItem.itemName && this.newItem.itemPrice && this.newItem.itemQty) {
      this.inventoryService.updateInventory(this.newItem).subscribe(data => {
        if (data.success) {
          this.inventory = data.inventory.itemInventory;
          this.customizeInventory();
        }
        else {
          // display general admin error
        }
      });
    }
    else {
      // display item not configured error
    }
  };

  // // Remove inventory Update
  removeInventoryUpdate = function (itemId) {
    let itemData = { itemId: itemId };
    this.inventoryService.removeInventoryUpdate(itemData).subscribe(data => {
      if (data.success) {
        this.loadInventory();
      }
      else {
        // display general admin error
      }
    });
  };
}


