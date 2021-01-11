class Plernert {

  constructor(radius, type, x,y) {
    this.radius = radius;
    this.type = type;
    this.x = x;
    this.y = y;
    this.planet = createSprite(this.x,this.y,this.radius,this.radius);
    this.dockposition = {
      x:this.x,
      y:this.y
    }
  }
  display(){
    if(this.type===0){
      this.image = type0;
    }
    else if(this.type===1){
      this.image = type1;
    }
    else if(this.type===2){
      this.image = type2;
    }
    else if(this.type===3){
      this.image = type3;
    }
    else if(this.type===4){
      this.image = type4;
    }
    else if(this.type===5){
      this.image = type5;
    }
    else if(this.type===6){
      this.image = type6;
    }
    else if(this.type===7){
      this.image = type7;
    }
    else if(this.type===8){
      this.image = type8;
    }
    else if(this.type===9){
      this.image = type9;
    }
    else if(this.type===10){
      this.image = type10;
    }
    else if(this.type===11){
      this.image = type11;
    }
    this.planet.addImage(this.image);
    this.planet.scale = this.radius/700;
  }
}
/* 
type 0 = rocky boring mercury-like planets
type 1 = venuslike planets
type 2 = marslike planets
type 3 = earthlike planets
type 4 = LAVA
type 5 = uranus-neptune like planets, mucho cold
type 6 = hot version of type 5
type 7 = saturnlike, low density
type 8 = hot version of type 7
type 9 = jupiterlike, super big
type 10 = hot version of type 9
type 11 = cold version of type 0
*/
