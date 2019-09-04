var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var BookSchema = new Schema({
    author: { type: String, required: true},
    title: {type: String, required: true },
    description: String,
    image: String,
    link: String
    });


var Book = mongoose.model("Book", BookSchema);

module.exports = Book;