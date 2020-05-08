class Form {
  constructor() {
    
  }

  display(){
    var title = createElement('h1')
    title.html("SURVEY");
    title.position(135, 0);
    var greeting = createElement('h2');
    greeting.html("Hello!" + name )
    greeting.position(40,50);
    var greeting2 = createElement('h3')
    greeting2.html( "Answer the Questions" + name )
    greeting2.position(20, 80);

   
    var input = createInput("Name");
    var button = createButton('Start Survey');
    input.position(130, 160);
    button.position(250, 200);
    button.mousePressed(function(){
      input.hide();
      button.hide();
    
    

    var input2 = createInput("Do you have masks at home ?");
    var button21 = createButton('YES ');
    var button22 = createButton('NO');
    input2.position(130, 160);
    button21.position(250, 200);
    button22.position(268, 250);

    button21.mousePressed(function(){
      input2.hide();
      button21.hide();
      button22.hide();
      
      button22.mousePressed(function(){
     input2.hide();
     button22.hide();
     button21.hide();

    var input3 = createInput("Do you have sanitisers at home ?")
    input3.position(130, 160);
    var button31 = createButton('YES')
    button31.position(250, 200)
    var button32 = createButton('NO')
    button32.position(268,250)
     
    button31.mousePressed(function(){
      input3.hide();
      button31.hide();
      button32.hide();
      
      button32.mousePressed(function(){
     input3.hide();
     button32.hide();
     button31.hide();
      
      });
      
     
    });

  });

});

  });









    
   

  }
}
