var express = require('express'),
    mysql = require('./mysql');
module.exports = {
    server : null,
    
    init : function(){
        
       
        var      app = express();
        
            
        
        
        app.listen(3000,function(){
            console.log('listening on *3000')
        });
        
        this.server = app; // -> app.drivers.express.server
        
    }
    
}