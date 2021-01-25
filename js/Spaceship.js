class Spaceship {
  constructor(shiptype){
    this.shiptype = shiptype;
    this.spaceship = createSprite(shipyard.x,shipyard.y+50,10,10);
  }
  display(){
    if(this.shiptype === "transport"){
      this.image = Transport;
    }
    if(this.shiptype === "miner"){
      this.image = Miner;
    }
    if(this.shiptype === "colonyship"){
      this.image = ColonyShip;
    }
    if(this.shiptype === "interstellar"){
      this.image = ColonyShip2;
    }
    if(this.shiptype === "probe"){
      this.image = Probe;
    }
    /*if(mousePressedOver(this.spaceship)){
      this.spaceship.x += 2;
      this.spaceship.y += 2;
      //this.spaceship.x = 300;
      //this.spaceship.y = 350;
    }*/
    this.spaceship.addImage(this.image);
    this.spaceship.scale = 0.05;
  }
}