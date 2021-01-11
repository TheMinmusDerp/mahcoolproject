class Spaceship {
  constructor(shiptype){
    this.shiptype = shiptype;
    this.spaceship = createSprite(0,0,10,10);
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
      this.image = Probe
    }
    this.spaceship.addImage(this.image);
    this.spaceship.scale = 0.01;
  }
}