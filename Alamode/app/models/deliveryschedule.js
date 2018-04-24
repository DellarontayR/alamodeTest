'use strict';

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;
var validate = require('mongoose-validator'); // Import Mongoose Validator Plugin


var DeliveryScheduleSchema = new Schema({
        startHour:{type:Number},
        endHour: {type:Number},
        timeZoneFosset:{type:Number}
});

module.exports = mongoose.model('DeliverySchedule', DeliveryScheduleSchema);
