
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var Roof,Bobobj1,Bobobj2,Bobobj3,Bobobj4,Bobobj5,ropeobj1,ropeobj2,ropeobj3,ropeobj5,world,Bob;
function setup() {
createCanvas(1500, 800);
  engine = Engine.create();
	world = engine.world;
  
  Bobobj1 = new bob(400,500,50);
  Bobobj2 = new bob(450,500,50);
  Bobobj3 = new bob(500,500,50);
  Bobobj4 = new bob(550,500,50);
  Bobobj5 = new bob(600,500,50);
  Roof = new roof(600,200,500,20);
  ropeobj1 = new rope(Bobobj1.body,Roof.body,-100,0);
  ropeobj2 = new rope(Bobobj2.body,Roof.body,-50,0);
  ropeobj3 = new rope(Bobobj3.body,Roof.body,0,0);
  ropeobj4 = new rope(Bobobj4.body,Roof.body,+50,0);
  ropeobj5 = new rope(Bobobj5.body,Roof.body,+100,0);
  Engine.run(engine);
  }
  
function draw() {
  rectMode(CENTER);
  background(230);
  Roof.display();
  ropeobj1.display();
  ropeobj2.display();
  ropeobj3.display();
  ropeobj4.display();
  ropeobj5.display();
  Bobobj1.display();
  Bobobj2.display();
  Bobobj3.display();
  Bobobj4.display();
  Bobobj5.display();
}
function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(Bobobj1.body,Bobobj1.body.position,{x:-50,y:-45});
  }
}
