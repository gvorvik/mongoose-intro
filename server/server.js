const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

const bookCollection = [
    {
        title: "A Tale of Two Cities",
        author: "Charles Dickens",
        edition: 2,
    },
    {
        title: "Murder on the Orient Express",
        author: "Agatha Christie",
        edition: 2
    },
    {
        title: "Snow Crash",
        author: "Neal Steve",
        edition: 1.2,
        ratings: [
            { score: 5 },
            { score: 1 }
        ]
    },
    {
        title: "Catcher in the Rye",
        author: "Someone",
        edition: 1,
        ratings: [
            { score: 2 },
            { score: 5 },
            { score: 3.5 },
            { score: 4 }
        ]
    }
];


app.get('/books', (req, res) => {
    res.send(bookCollection);
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});