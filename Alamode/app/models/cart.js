'use strict';

var mongoose = require('mongoose');
var Product = require('../models/product');
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;

var CartSchema = new Schema({
    products: [{
        type: Schema.ObjectId, ref: 'Product'
    }],
    created: { type: Date, required: true, default: Date.now },
    checkoutDate: { type: Date, required: false },
    oldCart: { type: Boolean, required: false, default: false },
    user: { type: Schema.ObjectId, ref: 'User', required: false },
    subtotal: { type: Number },
    tax: { type: Number }
});

var getCartTotal = function (products, callback) {
    let totalPrice = 0;
    for (let i = 0; i < products.length; i++) {
        Product.findById(products[i]).select('price').exec(function (err, newProduct) {
            console.log(newProduct);
            if (err || !newProduct) {

            }
            else {
                totalPrice += newProduct.price;
            }

        });
        if (i === products.length - 1) {
            console.log(totalPrice);
            callback(totalPrice);
        }

    }
};

CartSchema.pre("save", function (next) {
    var self = this;
    var CATAX = 0.09;

    mongoose.model('Cart', CartSchema).populate(self, { path: 'products', model: 'Product' }, function (err, cart) {
        let totalPrice = 0;
        cart.products.forEach(function (product) {
            totalPrice += product.price;
        })
        self.subtotal = parseFloat(Math.round(totalPrice * 100) / 100).toFixed(2);
        self.tax = parseFloat(Math.round(self.subtotal * CATAX * 100) / 100).toFixed(2);
        next();
    }, function (err) {
        next(err);
    });
});

module.exports = mongoose.model('Cart', CartSchema);
