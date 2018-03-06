let Product = require('../models/product');
let mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/shopping', function(error, db) {
    if(!error) {
        console.log("We are connected");
    } else {
        console.log(error);
    }
});


let products = [
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/3/3d/PlayerUnknown%27s_Battlegrounds_Steam_Logo.jpg',
        title: 'Player\'s Unknown Battlegrounds',
        description: 'First-Person Shooter',
        price: 60
    }),
    new Product({
        imagePath: '/images/League_of_Legends_logo.png',
        title: 'League of Legends',
        description: 'Multi-player Online',
        price: 20
    }),
    new Product({
        imagePath: 'https://en.wikipedia.org/wiki/World_of_Warcraft#/media/File:WoW_Box_Art1.jpg',
        title: 'World of Warcraft',
        description: 'Multi-player Online',
        price: 10
    }),
    new Product({
        imagePath: 'https://en.wikipedia.org/wiki/Call_of_Duty:_Black_Ops_III#/media/File:Black_Ops_3.jpg',
        title: 'Call of Duty - Black Ops III',
        description: 'First-Person Shooter',
        price: 45
    }),
    new Product({
        imagePath: 'https://en.wikipedia.org/wiki/Fortnite#/media/File:Fortnite_logo.jpg',
        title: 'Fortnite',
        description: 'First-Person Shooter',
        price: 30
    }),
    new Product({
        imagePath: 'https://en.wikipedia.org/wiki/Cities:_Skylines#/media/File:Cities_Skylines_cover_art.jpg',
        title: 'City Skylines',
        description: 'Simulation',
        price: 9.99
    })
];

//check counter for how many items have been saved
let done = 0;

//saving all the items in product collection
for ( let i = 0; i < products.length; i++) {
    products[i].save(function(err, result) {
        done++;
        if (done === products.length) {
            exit();
        }
    });
}

// Once all items have been saved, only then disconnect with the database.
function exit() {
    mongoose.disconnect();
}