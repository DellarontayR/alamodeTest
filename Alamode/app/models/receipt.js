'use strict';

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;
var validate = require('mongoose-validator'); // Import Mongoose Validator Plugin

var ReceiptSchema = new Schema({
    customerName: {type:String,required: true, unique:false},
    created: { type: Date, required: true, default: Date.now },
    customerAddresss:{type:String,required:true,unique:false},
    customerCart: {type:Schema.ObjectId,ref:'Cart'}
});

module.exports = mongoose.model('Receipt', ReceiptSchema);
