
var express = require('express');
var allThingsRouter = express.Router();

allThingsRouter.get('/getAllBooks', function (req, res) {
    books = ["Book 1", "Book 2"]
    res.send(books);
});

allThingsRouter.post('/insertBook', function (req, res) {
    res.send('Inserting Book');
});

module.exports = allThingsRouter;