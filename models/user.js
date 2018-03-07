let mongoose = require('mongoose');
let Schema = mongoose.Schema;

//Define user schema
let userSchema = new Schema({
   email: {type: String, required: true},
   password: {type: String, required: true}
});

module.exports= mongoose.model('User', userSchema);