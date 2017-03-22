
var path = require('path'),
    bodyParser = require('body-parser'),
    express = require('express');


module.exports = function(app){ 
    var server = app.drivers.express.server;
        server.use( bodyParser.json() );       
        server.use(bodyParser.urlencoded({    
            extended: true
        }));
       
    
        server.get('/' , function(req,res){           
            res.sendFile(path.resolve('views/index.html'));
        });
            


        server.use('/js', express.static('views/assets/js'));
        server.use('/css', express.static('views/assets/css'));
        server.use('/img', express.static('views/assets/img'));
    
    
    server.post('/api/drink' , function(req, res){
        var drink = new app.models.drink(app,{
                name : req.body.name,
                liquor : req.body.liquor,
                ingredient01 : req.body.ingredient01,
                ingredient02 : req.body.ingredient02,
                ingredient03 : req.body.ingredient03
        });
                
        drink.register(function(rows){
            res.send(rows);
        });   
        
    });
    
    server.get('/api/drink', function(req,res){
        var id = req.query.id;
        
        var drink = new app.models.drink(app,{ id : id});
        drink.get(function(rows){
            res.send(rows);
        });
    });
    
    server.delete('/api/drink', function(req,res){
        
        var drink = new app.models.drink(app,{
                name : req.body.name        
        });
                
        drink.delete(function(rows){
            res.send(rows);
        }); 
        
    });
  
    
    
}