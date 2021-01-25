class PlernertForm {

  constructor(x,y) {
    this.spacestation = createButton('Build Space Station');
    this.stats = createButton('View Planet Statistics');
    this.x=x;
    this.y=y;
  }
  hide(){
    this.spacestation.hide();
    this.stats.hide();
  }

  display(){
    this.spacestation.position(displayWidth/2 + 30, displayHeight/2);

    this.spacestation.mousePressed(()=>{
      
    });

  }
}
