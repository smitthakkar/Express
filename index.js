var express = require('express');
var app = express();

var allThingsRouter= require('./things.js');

app.use('/things',allThingsRouter);

app.get('/getBookId/:id([0-9]{5})',function(req,res){
res.send('Book number requested : '+middleWare(req.params.id));

});

function middleWare(id){
  return 'Processing Id:' + id; 
}
app.listen(3000,()=>console.log("Hello World!"));