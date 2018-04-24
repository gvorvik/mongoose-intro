const express = require('express');
const router = express.Router();
const Book = require('../models/book.schema');

//get route for /books
router.get('/', (req, res) => {
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

module.exports = router;