'use strict';

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;
var validate = require('mongoose-validator'); // Import Mongoose Validator Plugin
var ReceiptCounter = require('../models/receiptcounter');

var ReceiptSchema = new Schema({
    customerName: { type: String, required: true, unique: false },
    created: { type: Date, required: true, default: Date.now },
    customerAddress: { type: String, required: true, unique: false },
    customerCart: { type: Schema.ObjectId, ref: 'Cart' },
    receiptNumber: { type: Number }
});

ReceiptSchema.pre('save', function (next) {
    var doc = this;
    console.log('outside save');
    console.log(ReceiptCounter);
    ReceiptCounter.findByIdAndUpdate('5abf017117d0b116a0ad161d', { $inc: { seq: 1 } }, { new: true, upsert: true },function (error,count) {
        console.log('What the fuck');
        if(error){
            console.log('error');
            console.log(error);
            return next(error);
        }
        doc.receiptNumber = count.seq;
        console.log(doc);
        next();
    });
});

module.exports = mongoose.model('Receipt', ReceiptSchema);
