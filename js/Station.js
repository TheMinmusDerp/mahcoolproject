class Station {
    constructor(type,x,y){
        this.type = type;
        this.x = x;
        this.y = y;
        this.spacestation = createSprite(this.x,this.y,10,10);
    }
    display(){
        // type may be set to "shipyard" "scanner" "habitat" "researchstation"
        if(this.type === "shipyard"){
            this.image = Shipyard;
        }
        if(this.type === "scanner"){
            this.image = Scanner;
        }
        if(this.type === "habitat"){
            this.image = Habitat;
        }
        if(this.type === "researchstation"){
            this.image = ResearchStation;
        }
        this.spacestation.addImage(this.image);
        this.spacestation.scale = 0.1;
    }
}