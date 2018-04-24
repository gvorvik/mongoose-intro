const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: {type: String, required: true, unique: true},
    author: {type: String, required: true},
});

//this is how mongoose knows to go to the books collection
//mongoose will lowercase and pluralize what is in quotes, so if we type 'Book' it would become 'books'
module.exports = mongoose.model('books', bookSchema);