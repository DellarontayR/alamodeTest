'use strict';

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;
var validate = require('mongoose-validator'); // Import Mongoose Validator Plugin

var ReceiptCounterSchema = new mongoose.Schema({
    seq: { type: Number, default: 0 }
});

// ReceiptSchema.pre('save', function (next) {
//     var doc = this;
//     counter.findByIdAndUpdateAsync({_id: 'entityId' }, { $inc: { seq: 1 } }, { new: true, upsert: true }).then(function (error,count) {
//         if(error){
//             return next(error);
//         }
//         doc.receiptNumber = count.seq;
//         next();
//     });
// });

module.exports = mongoose.model('ReceiptCounter', ReceiptCounterSchema);
