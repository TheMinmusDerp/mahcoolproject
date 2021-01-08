var canvas;

var database;

function preload(){
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
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  p1 = new Plernert(100, 4, 300,300);
  p2 = new Plernert(300, 10, 600,400);
  p3 = new Plernert(90,3,400,600)
}

function draw(){
  background(0);
  p1.display();
  p2.display();
  p3.display();
  drawSprites();

}
