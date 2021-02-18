class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.reset = createButton('Reset');
    this.button1 = createButton("Play with Friends")
    this.button2 = createButton("Tiger")
    this.button3 = createButton("Goat")
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();


  }

  display(){
    this.title.html("Lambs And The Tiger");
    this.title.position(displayWidth/2 - 50, 0);

    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 30, displayHeight/2);
    this.reset.position(displayWidth-100,20);
    

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
      this.button1.position(displayWidth/2 - 50,displayHeight/2 - 100);
    });

    this.button1.mousePressed(()=>{
       this.button1.hide();
       this.button2.position(displayWidth/2 - 50,displayHeight/2 -100);
       this.button3.position(displayWidth/2   + 35,displayHeight/2 -100);


    })
    this.button2.mousePressed(()=>{
       this.button3.hide();

    })

    this.button3.mousePressed(()=>{
      this.button2.hide();

   })

    this.reset.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);
    });

  }
}
