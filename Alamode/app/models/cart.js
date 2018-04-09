'use strict';

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;

var CartSchema = new Schema({
    products:[{
        type:Schema.ObjectId,ref:'Product'
    }],
    created: { type: Date, required: true, default: Date.now },
    checkoutDate:{type:Date,required:false},
    oldCart:{type:Boolean, required:false,default:false},
    user:{type:Schema.ObjectId,ref:'User',required:false}    
});

CartSchema.pre("save", function(next) {
    var self = this;
    console.log(this.products);
    next();


    // model.findOne({email : this.email}, 'email', function(err, results) {
    //     if(err) {
    //         next(err);
    //     } else if(results) {
    //         console.warn('results', results);
    //         self.invalidate("email", "email must be unique");
    //         next(new Error("email must be unique"));
    //     } else {
    //         next();
    //     }
    // });
});

module.exports = mongoose.model('Cart',CartSchema);
