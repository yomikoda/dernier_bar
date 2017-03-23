$(function(){ 
    
    
    
$('.addDrink>h2').click(function(){
        $('.addDrink').toggleClass('clicked-board');  
       
    });
    
    $('.removeDrink>h2').click(function(){
        $('.removeDrink').toggleClass('clicked-board');  
       
    });
    
      
    $('#faqbutton').click(function(){
        $('.faq').toggleClass('faqdeploy');
        console.log('hi');
       
    });
    
        // CREATE A DRINK
        $('#addDrink').submit(function(e) {
            e.preventDefault(); // STOP THE PAGE FROM RELOADING _ THE DEFAULT ACTION
            console.log('hi');
            
            var _name = $('#name').val(),
                _liquor = $('#Liquor').val(),
                _ingredient01 = $('#ingredient01').val(),
                _ingredient02 = $('#ingredient02').val(),
                _ingredient03 = $('#ingredient03').val();
            
            
            
            $.post('api/drink', {
                name: _name,
                liquor: _liquor,
                ingredient01: _ingredient01,
                ingredient02: _ingredient02,
                ingredient03: _ingredient03
            }).done(function(data){
                alert("Cthulhu can't wait to taste your offering."  );
                
            });
            
                  console.log(_name);
        });
        
  console.log('HEY');
        
    
        // LOAD DRINK LIST
        $.get('api/drink', function(data){
                $('#drinklist').empty();
                for(var i=0; i<data.length; i++){
                    var _drink= "<div class='drink'><h3 id='drinkname'>"+ data[i].name +"</h3><ul><li clas='liquor'> "+ data[i].liquor +"</li><li clas='liquor'> "+ data[i].ingredient01 +"</li><li clas='liquor'> "+ data[i].ingredient02 +"</li><li clas='liquor'> "+ data[i].ingredient03 +"</li>";
                    $("#drinklist").append(_drink);
                    console.log(_drink);
                }   
        });
    
    
  
   // REMOVE DRINK
        $('#removeDrink').submit(function(e) {
            e.preventDefault(); 
            
               // REGISTER THE DRINK
            var name = $('#nameRemoved').val(); 
            console.log(name);
            
            $.ajax({
                url: '/api/drink',
                type: 'DELETE',
                data: { name : name },
                success: function(data) {
                    console.log(data)
                }
            });
            
            
        });
    
    
  
            
         
  
    })