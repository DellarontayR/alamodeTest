'use strict';

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;
var validate = require('mongoose-validator'); // Import Mongoose Validator Plugin

var ReceiptCounterSchema = new mongoose.Schema({
    _id: {type: String, required: true},
    seq: { type: Number, default: 0 }
});
var counter = mongoose.model('ReceiptCounter', ReceiptCounterSchema);

var ReceiptSchema = new Schema({
    customerName: {type:String,required: true, unique:false},
    created: { type: Date, required: true, default: Date.now },
    customerAddresss:{type:String,required:true,unique:false},
    customerCart: {type:Schema.ObjectId,ref:'Cart'},
    receiptNumber:{type:Number,required:true}
});

ReceiptSchema.pre('save',function(next){
    var doc = this; 
    counter.findByIdAndUpdateAsync({id},{$inc:{seq:1}},{new:true,upsert:true}).then(function(count){
        doc.receiptNumber = count.seq;
    }).catch(function(error)
     {
         console.log("counter error-> : "+ error);
         throw error;
     });
});

module.exports = mongoose.model('Receipt', ReceiptSchema);
