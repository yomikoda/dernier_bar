module.exports = function(app, data){
    var mysql = app.drivers.mysql;
    
    this.table = 'cocktail';
    this.id = data.id || null;
    this.name = data.name;
    this.liquor = data.liquor;
    this.ingredient01 = data.ingredient01;
    this.ingredient02 = data.ingredient02;
    this.ingredient03 = data.ingredient03;
    
    
    this.get = function(cb){
        var q = "SELECT * FROM " + this.table;
        
        mysql.query(q,function(rows){
            cb(rows);
            console.log(q);
        });
        
    }
    
    console.log('BAM');
    
    this.register = function(cb){
        var me = this;
        var q = "INSERT INTO "+this.table+" (name,liquor,ingredient01,ingredient02,ingredient03) VALUES ( '"+this.name+"','"+this.liquor+"' , '"+this.ingredient01+"', '"+this.ingredient02+"', '"+this.ingredient03+"'  )";
        
        mysql.query(q,function(rows){
            me.id = rows.insertId;
            cb(me);
        });  
    }
    
    
    
    this.deleteD = function(cb){
        var me = this,
            q = " DELETE FROM '"+this.table+"' WHERE name="+this.name;
       
         mysql.query(q,function(rows){
            me.id = rows.insertId;
            cb(me);
        });  
        
    }
    
   return this;
    
}