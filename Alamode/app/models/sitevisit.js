'use strict';

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;
var validate = require('mongoose-validator'); // Import Mongoose Validator Plugin


var SiteVisitSchema = new Schema({
    ipAddress:{type:String,required:true},
    created: { type: Date, required: true, default: Date.now }    
});

module.exports = mongoose.model('SiteVisit',SiteVisitSchema);
