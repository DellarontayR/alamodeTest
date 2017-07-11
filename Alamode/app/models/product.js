var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;


var ProductSchema = new Schema({
    title: {type:String, lowercase:true, required:true, unique:true},
    description:{type: String, required:true},
    price:{ type: Number, required:true},
    imagePath:{type:String, required:true}
});

module.exports = mongoose.model('Product',ProductSchema);