'use strict';

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;


var PRSchema = new Schema({
        title: {type:String},
        imagePath:{type:String},
        textBody:{type:String},
        author:{type:String},
        created:{type:Date,default:Date.now,required:true}

});

module.exports = mongoose.model('PR', PRSchema);
