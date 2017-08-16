'use strict';

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;

var CartSchema = new Schema({
    products:[{
        type:Schema.ObjectId,ref:'Product'
    }]
    // cartItems:[{type:Schema.ObjectId, ref:'Product',required:false} {type:Number, required:false}]
    
});

module.exports = mongoose.model('Cart',CartSchema);
