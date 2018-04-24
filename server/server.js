const express = require('express');
const mongoose = require('mongoose');

const books = require('./routes/book.route');

const Book = require('./models/book.schema');

const app = express();
const PORT = process.env.PORT || 5000;

//identify database and connect to it with mongoose
const databaseUrl = 'mongodb://localhost:27017/library';
mongoose.connect(databaseUrl);

mongoose.connection.on('connected', () => {
    console.log(`mongoose connected to ${databaseUrl}`);
});

mongoose.connection.on('error', () => {
    console.log('mongoose connection error', error); 
});

//end connecting to mongo

app.use('/books', books);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});