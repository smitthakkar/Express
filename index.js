var express = require('express');
var app = express();
const port = 3100;

var allThingsRouter = require('./things.js');

app.use('/things', allThingsRouter);

app.get('/', (req, res) => res.send('Welcome to Express!'))

app.get('/getBookId/:id([0-9]{5})', function (req, res) {
  res.send('Book number requested : ' + middleWare(req.params.id));

});

function middleWare(id) {
  return 'Processing Id:' + id;
}
app.listen(port, () => console.log(`Server listening at port ${port}!`));