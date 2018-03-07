let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let bcrypt = require('bcrypt');

//Define user schema
let userSchema = new Schema({
   email: {type: String, required: true},
   password: {type: String, required: true}
});

//helper methods to create and compare hashed passwords
userSchema.methods.encryptPassword = function(password) {
 return bcrypt.hash(password, 5);
};

userSchema.methods.validPassword = function(password) {
   return bcrypt.compareSync(password, this.password);
};

module.exports= mongoose.model('User', userSchema);