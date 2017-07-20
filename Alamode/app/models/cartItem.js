var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;

var CartItemSchema = new Schema({

    usernameRef : {type:String,required:true,unique:true,lowercase:true},
    items:[{}]
});

// person.friends.push(person);
// person.save(done);
// or

// PersonModel.update(
//     { _id: person._id }, 
//     { $push: { friends: friend } },
//     done
// );
// I always try and go for the first option when possible, because it'll respect more of the benefits that mongoose gives you (hooks, validation, etc.).

// However, if you are doing lots of concurrent writes

module.exports = mongoose.model('CartItem',CartItemSchema);
