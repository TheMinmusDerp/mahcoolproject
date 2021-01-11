class Sterr {
  constructor(spectralclass,lumclass,x,y){ // Sidenote: Stars are at a different scale to planets.
    this.spectralclass=spectralclass;
    this.lumclass = lumclass;
    this.x = x;
    this.y = y;
    this.star = createSprite(this.x,this.y,10,10);
  }
  display(){
    /* 
    You may set the value of spectralclass to the following:
    "O" "B" "A" "F" "G" "K" "M" "L" "T" "Y" "blackhole" "neutronstar" "D"
    And you may set the value of lumclass to the following:
    "subdwarf" "mainsequence" "subgiant" "giant" "brightgiant" "supergiant" "accretiondisk" "wolfrayet"

    If the spectral class is "L", the image will default to a brown dwarf-y look unless the luminosity class is "supergiant". This reflects real life.
    
    If the spectral class is "T" or "Y", the image will always default to a brown dwarf-y look.
    
    If the spectral class is "blackhole", the star will not be visible unless the lumclass is "accretiondisk", this lumclass will not work for any other spectral class.
    
    If the spectral class is "neutronstar", the image will default to a tiny bright dot taking up a few pixels on the screen with jets emanating from it.

    If the spectral class is "D", the image will always default to a white dwarf, no matter the value of the lumclass.

    If the lumclass is "subdwarf", nothing will change from the lumclass "mainsequence" unless the spectral type is "O", "B", "A", "K", or "M";

    If the lumclass is "wolfrayet", it will default to wolf-rayet.png no matter the spectral class.
    */
    if(this.spectralclass === "O" || this.spectralclass === "B"){
      if(this.lumclass === "supergiant" || this.lumclass === "brightgiant" || this.lumclass === "giant"){
        this.image = Ogiant;
        this.star.scale = 0.4;
      }
      if(this.lumclass === "mainsequence" || this.lumclass === "subgiant"){
        this.image = Omainsequence;
        this.star.scale = 0.2
      }
      if(this.lumclass === "subdwarf"){
        this.image = Osubdwarf;
        this.star.scale = 0.02
      }
    }
    if(this.spectralclass === "A"){
      if(this.lumclass === "supergiant" || this.lumclass === "brightgiant" || this.lumclass === "giant"){
        this.image = Asupergiant;
        this.star.scale = 0.45
      }
      if(this.lumclass === "subgiant" || this.lumclass === "mainsequence"){
        this.image = Amainsequence;
        this.star.scale = 0.15
      }
      if(this.lumclass === "subdwarf"){
        this.image = Amainsequence; 
        this.star.scale = 0.05
        // these are very rare in real life and most likely will not exist unless artificial, but I am including them for the hell of it ;)
      }
    }
    if(this.spectralclass === "F"){
      if(this.lumclass === "supergiant" || this.lumclass === "brightgiant" || this.lumclass === "giant"){
        this.image = Fbrightgiant;
        this.star.scale = 0.45;
      }
      if(this.lumclass === "subgiant" || this.lumclass === "mainsequence" || this.lumclass === "subdwarf"){
        this.image = Fmainsequence; 
        this.star.scale = 0.13
      }
    }
    if(this.spectralclass === "G"){
      if(this.lumclass === "supergiant" || this.lumclass === "brightgiant" || this.lumclass === "giant"){
        this.image = Fbrightgiant; // They look very similar.
        this.star.scale = 0.4;
      }
      if(this.lumclass === "subgiant" || this.lumclass === "mainsequence" || this.lumclass === "subdwarf"){
        this.image = Gmainsequence;
        this.star.scale = 0.1
      }
    }
    if(this.spectralclass === "K"){
      if(this.lumclass === "supergiant"){
        this.image = Ksupergiant;
        this.star.scale = 0.55
      }
      if(this.lumclass === "brightgiant"){
        this.image = Kbrightgiant;
        this.star.scale = 0.4
      }
      if(this.lumclass === "giant"){
        this.image = Kgiant;
        this.star.scale = 0.3;
      }
    }
    if(this.spectralclass === "M"){
      if(this.lumclass === "supergiant"){
        this.image = Msupergiant;
        this.star.scale = 0.65;
      }
      if(this.lumclass === "brightgiant" || this.lumclass ==="giant"){
        this.image = Mgiant;
        this.star.scale = 0.35;
      }
      if(this.lumclass === "subgiant" || this.lumclass === "mainsequence"){
        this.image = Mmainsesquence;
        this.star.scale = 0.2;
      }
      if(this.lumclass === "subdwarf"){
        this.image = Msubdwarf;
        this.star.scale = 0.15;
      }
    }
    if(this.spectralclass === "L"){
      if(this.lumclass === "supergiant"){
        this.image = Lsupergiant;
        this.star.scale = 0.6;
      }
      else{
        this.image = Lbrowndwarf;
        this.star.scale = 0.1;
      }
    }
    if(this.spectralclass === "T"){
      this.image = Tbrowndwarf;
      this.star.scale = 0.1;
    }
    if(this.spectralclass === "Y"){
      this.image = Ybrowndwarf;
      this.star.scale = 0.1;
    }
    if(this.lumclass === "wolfrayet"){
      this.image = WolfRayet;
      this.star.scale = 0.3;
    }
    if(this.spectralclass === "neutronstar"){
      this.image = NeutronStar;
      this.star.scale = 0.005;
    }
    if(this.spectralclass === "blackhole"){
      this.image = BlackHole;
      this.star.scale = 0.01;
    }
    if(this.spectralclass === "D"){
      this.image = WhiteDwarf;
      this.star.scale = 0.05
    }
    this.star.addImage(this.image);
  }
}
