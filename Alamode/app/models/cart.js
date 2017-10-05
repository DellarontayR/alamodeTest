'use strict';

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;

var CartSchema = new Schema({
    products:[{
        type:Schema.ObjectId,ref:'Product'
    }],
    created: { type: Date, required: true, default: Date.now },
    checkoutDate:{type:Date,required:false},
    oldCart:{type:Boolean, required:false,default:false},
    user:{type:Schema.ObjectId,ref:'User',required:false}    
});

module.exports = mongoose.model('Cart',CartSchema);
