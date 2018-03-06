let mongoose = require('mongoose');
let Schema = mongoose.Schema;

//Defining the general schema of the store.
let schema = new Schema({
    imagePath: {type: String, required: true},
    title: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
});

model.exports = mongoose.model('Product', schema);