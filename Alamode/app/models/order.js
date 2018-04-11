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
    currentDriverLocation:{lat:{type:String,default:'37.4266083'},lng:{type:String,default:'-122.15756340000002'}}
    // created: { type: Date, required: true, default: Date.now },


});

// OrderSchema.pre('save',function(next){
//     var doc = this;
//     if(doc.orderStatus === 'Completed'){
//         doc.orderCompleted = true;
//         doc.orderCompletedOn = Date.now();
//         next();
//     }
//     else{
//         next();
//     }

// });

module.exports = mongoose.model('Order', OrderSchema);
