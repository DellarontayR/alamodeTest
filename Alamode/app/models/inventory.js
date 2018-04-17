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
                itemUpdatedDate: { type: Date, default: Date.now(), required: true }
        }]
});

module.exports = mongoose.model('Inventory', InventorySchema);
