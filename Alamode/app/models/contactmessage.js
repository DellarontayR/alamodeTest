'use strict';

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;
var validate = require('mongoose-validator'); // Import Mongoose Validator Plugin


var ContactMessageSchema = new Schema({
    name:{type:String, required:true},
    email:{type:String,required:true},
    message:{type:String,required:true},
    created: { type: Date, required: true, default: Date.now }    
});

module.exports = mongoose.model('ContactMessage',ContactMessageSchema);
