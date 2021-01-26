const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var PC,GROUND,mountains;
var canvas;

function preload() {
  mountains = loadImage("mountains.jpg")
}

function setup(){
canvas = createCanvas(displayWidth,displayHeight-125);
engine = Engine.create();
world = engine.world;
GROUND = new Ground(900,620,2000,10);
  PC = Bodies.rectangle(100,615,100,100,{
    isStatic: false
  });
  World.add(world,PC);
}

function draw(){
    background(mountains);
    Engine.update(engine);
    GROUND.display();
    push();
    translate(PC.position.x,PC.position.y);
    rotate(PC.angle);
    rectMode(CENTER);
    rect(0,0,100,100);
    pop();
    GROUND.body.position.x =  GROUND.body.position.x - 4;
    if(GROUND.body.position.x < 350){
      GROUND.body.position.x = 900;
    }
    creepers();
}

function creepers(){
  creeper = Bodies.rectangle(800,100,100,100,{
    isStatic:false
  });
  translate(creeper.position.x,creeper.position.y);
  rotate(creeper.angle);
  rectMode(CENTER);
  rect(0,0,100,100);
}
