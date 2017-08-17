var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;


var ProductSchema = new Schema({
    title: {type:String, lowercase:true, required:true, unique:false},
    description:{type: String, required:true,unique:false},
    price:{ type: Number, required:true,unique:false},
    imagePath:{type:String, required:true,unique:false},
    catalogProduct:{type:Boolean,required:true,default:false},
    category:{type:String,required:true,default:'inCart'},
    qty:{type:Number, required:false}
});

module.exports = mongoose.model('Product',ProductSchema);