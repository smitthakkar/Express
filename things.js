
var express = require('express');
var allThingsRouter = express.Router();


allThingsRouter.get('/getAllBooks',function(req,res){
   res.send('Dummy Books');
});

allThingsRouter.post('/insertBook',function(req,res){
    res.send('Inserting Book');
});

module.exports= allThingsRouter;