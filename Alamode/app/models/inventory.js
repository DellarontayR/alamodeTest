'use strict';

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;
var validate = require('mongoose-validator'); // Import Mongoose Validator Plugin


var InventorySchema = new Schema({
        itemInventory: [{
                itemName: { type: String, required: true },
                itemPrice: { type: Number, required: true },
                itemQty: { type: Number, required: true },
                itemUpdatedDate: { type: Date, default: Date.now(), required: true },
                oldInventory: { type: Boolean, required: true, default: false },
                comment: { type: String },
                itemId: { type: Schema.ObjectId, ref: 'Product' }
        }],
        totals: [{
                itemName: { type: String, required: true },
                itemQtyTotal: { type: Number, required: true },
                itemId:{}
        }]
});

var productIdMap = new Map();
productIdMap.set("og mookie", "5ac3ca60f3ac611f582f031e");
productIdMap.set("funfetti", "5ac3ca60f3ac611f582f031b");
productIdMap.set("oreo", "5ac3ca60f3ac611f582f031c");
productIdMap.set("Red velvet", "5ac3ca60f3ac611f582f031a");
productIdMap.set("Dark chocolate", "5ac3ca60f3ac611f582f031d");

InventorySchema.pre('save', function (next) {
        var doc = this;
        doc.totals = [];// Hopefully reset totals
        var inventoryMap = new Map();

        doc.itemInventory.forEach(itemInventory => {
                if (productIdMap.has(itemInventory.itemName)) {
                        itemInventory.itemId = productIdMap.get(itemInventory.itemName);
                }

                if (inventoryMap.has(itemInventory.itemName)) {
                        inventoryMap.set(itemInventory.itemName, inventoryMap.get(itemInventory.itemName) + itemInventory.itemQty);
                }
                else {
                        inventoryMap.set(itemInventory.itemName, itemInventory.itemQty);
                }
        });
        var iterator1 = inventoryMap[Symbol.iterator]();
        for (let item of iterator1) {
                doc.totals.push({ itemName: item[0], itemQtyTotal: item[1] });
        }
        next();
});

module.exports = mongoose.model('Inventory', InventorySchema);
