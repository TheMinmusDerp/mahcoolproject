var canvas;
var database;
var research = null;
var scanner = null;
var shipyard = null;
var habitat = null;
var station = [research, scanner, shipyard, habitat];


function preload(){
  // Loading planet images
  type0 = loadImage("images/type0.png");
  type1 = loadImage("images/type1.png");
  type2 = loadImage("images/type2.png");
  type3 = loadImage("images/type3.png");
  type4 = loadImage("images/type4.png");
  type5 = loadImage("images/type5.png");
  type6 = loadImage("images/type6.png");
  type7 = loadImage("images/type7.png");
  type8 = loadImage("images/type8.png");
  type9 = loadImage("images/type9.png");
  type10 = loadImage("images/type10.png");
  type11 = loadImage("images/type11.png");
  // Loading star images
  Ogiant = loadImage("images/Ogiant.png");
  Omainsequence = loadImage("images/Omainsequence.png")
  Osubdwarf = loadImage("images/Osubdwarf.png");
  Asupergiant = loadImage("images/Asupergiant.png");
  Amainsequence = loadImage("images/Amainsequence.png");
  Fbrightgiant = loadImage("images/Fbrightgiant.png");
  Fmainsequence = loadImage("images/Fmainsequence.png");
  Gmainsequence = loadImage("images/Gmainsequence.png");
  Ksupergiant = loadImage("images/Ksupergiant.png");
  Kbrightgiant = loadImage("images/Kbrightgiant.png");
  Kgiant = loadImage("images/Kgiant.png");
  Kmainsequence = loadImage("images/Kmainsequence.png");
  Msupergiant = loadImage("images/Msupergiant.png");
  Mgiant = loadImage("images/Mgiant.png");
  Mmainsequence = loadImage("images/Mmainsequence.png");
  Msubdwarf = loadImage("images/Msubdwarf.png");
  Lsupergiant = loadImage("images/Lsupergiant.png");
  Lbrowndwarf = loadImage("images/Lbrowndwarf.png");
  Tbrowndwarf = loadImage("images/Tbrowndwarf.png");
  Ybrowndwarf = loadImage("images/Ybrowndwarf.png");
  WolfRayet = loadImage("images/Wolf-rayet.png");
  NeutronStar = loadImage("images/Neutronstar.png");
  BlackHole = loadImage("images/Blacchole.png");
  WhiteDwarf = loadImage("images/WhiteDwarf.png");
  // Loading spacecraft images
  Transport = loadImage("images/Transport.png");
  Miner = loadImage("images/Miner.png");
  ColonyShip = loadImage("images/ColonyShip.png");
  ColonyShip2 = loadImage("images/ColonyShip2.png");
  Habitat = loadImage("images/ColonyShip.png");
  Probe = loadImage("images/Probe.png");
  Shipyard = loadImage("images/Shipyard.png");
  ResearchStation = loadImage("images/ResearchStation.png");
  Scanner = loadImage("images/Scanner.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  p1 = new Plernert(100, 4, 300,300);
  p2 = new Plernert(300, 10, 600,400);
  p3 = new Plernert(90,3,400,600);
  s1 = new Sterr("G", "mainsequence", 1000,400);
}

function draw(){
  background(0);
  p1.display();
  p2.display();
  p3.display();
  drawSprites();

}
