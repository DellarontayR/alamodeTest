var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;

var CartSchema = new Schema({
    
    usernameRef : {type:String,required:true,unique:true,lowercase:true},
    items:[{}],

});

module.exports = mongoose.model('Cart',CartSchema);

//   type: mongoose.Schema.Types.ObjectId,
//     ref: 'User',
//     required: true
