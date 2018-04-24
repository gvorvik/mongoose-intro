const express = require('express');
const mongoose = require('mongoose');

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

//get route for /books
app.get('/books', (req, res) => {
    //data is the data response from the database
    //This is the basic setup for the database queries
    //This particular one is a database read/find
    Book.find({})
        //promise runs when data comes back (Success!)
        .then((data) => {
            console.log('data from database', data);  
            res.send(data);          
        })
        //catches errors (Fail!)
        .catch((error) => {
            console.log('error with Book.find', error);
            res.sendStatus(500);
        });










    
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});