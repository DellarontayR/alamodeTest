'use strict';

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;
var validate = require('mongoose-validator'); // Import Mongoose Validator Plugin

var OrderSchema = new Schema({
    customerReceipt: {type:Schema.ObjectId,ref:'Receipt',required:true},
    orderCompletedOn:{type:Date},
    orderStartedOn:{type:Date,required:true,default:Date.now},
    orderCompleted:{type:Boolean,required:true,default:false},
    orderStatus:{type:String,required:true,default:'Pending'},
    currentDriverLocation:{lat:{type:String},lng:{type:String}}
    // created: { type: Date, required: true, default: Date.now },


});

module.exports = mongoose.model('Order', OrderSchema);
