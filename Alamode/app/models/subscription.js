'use strict';

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;

var emailValidator = [
    validate({
        validator: 'matches',
        arguments: /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/,
        message: 'Email must be at least 3 characters, max 40 and must be in correct format'
    }),
    validate({
        validator: 'isLength',
        arguments: [3, 40],
        message: 'Email should be between {ARGS[0]} and {ARGS[1]} characters'
    })
];

var SubscriptionSchema = new Schema({
    products:{type:String,required:true, validator:emailValidator},
    created: { type: Date, required: true, default: Date.now }
    
});

module.exports = mongoose.model('Cart',SubscriptionSchema);
