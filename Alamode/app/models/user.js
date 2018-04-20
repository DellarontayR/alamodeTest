var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;
// var bcrypt = require('bcrypt-nodejs');
var bcryptjs = require('bcryptjs');
var titlize = require('mongoose-title-case'); // Import Mongoose Title Case Plugin
var validate = require('mongoose-validator'); // Import Mongoose Validator Plugin


// // Username Validator
var usernameValidator = [
    validate({
        validator: 'isLength',
        arguments: [3, 25],
        message: 'Username should be between {ARGS[0]} and {ARGS[1]} characters'
    }),
    validate({
        validator: 'isAlphanumeric',
        message: 'Username must contain letters and numbers only'
    })
];

// User E-mail Validator
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

// Password Validator
var passwordValidator = [
    validate({
        validator: 'matches',
        arguments: /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[\d])(?=.*?[\W]).{8,35}$/,
        message: 'Password needs to have at least one lower case, one uppercase, one number, one special character, and must be at least 8 characters but no more than 35.'
    }),
    validate({
        validator: 'isLength',
        arguments: [8, 35],
        message: 'Password should be between {ARGS[0]} and {ARGS[1]} characters'
    })
];


// User Mongoose Schema
var UserSchema = new Schema({
    username: { type: String, required: true ,unique:false},
    email: { type: String, required: true, lowercase: true, unique: true, validate: emailValidator },
    socialToken: { type: String, required: false },
    password: { type: String, required: false, select: false },
    cart: { type: Schema.ObjectId, ref: 'Cart', required: false },
    active: { type: Boolean, required: true, default: false },
    temporarytoken: { type: String, required: true },
    resettoken: { type: String, required: false },
    permission: { type: String, required: true, default: 'customer' }
    // phonenumber: {type: String, required: true},
    // address: {type:String, required: true},
    // country :{type:String, required:true},
    // state: {type: String, required: true},
    // city: {type:String, required: true},
    // zipcode: {type:String, required:true},

});


UserSchema.pre('save', function (next) {
    var user = this;
    if (user.password == null) return next();
    if (!user.isModified('password')) return next(); // If password was not changed or is new, ignore middleware

    bcryptjs.genSalt(10, function (err, salt) {
        bcryptjs.hash(user.password, salt, function (err, hash) {
            if (err) return next(err);
            user.password = hash;
            next();
        });
    });
});

UserSchema.methods.comparePassword = function (password) {
    return bcryptjs.compare(password, this.password);
};

module.exports = mongoose.model('User', UserSchema);
