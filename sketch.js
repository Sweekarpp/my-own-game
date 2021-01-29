const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var player,ground,mountains,playerimage,zombie;
var canvas;

function preload() {
  playerimage = loadImage("my player.png")
  mountains = loadImage("my background.jpg")
}

function setup(){
canvas = createCanvas(displayWidth,displayHeight-125);
engine = Engine.create();
world = engine.world;
ground = new Ground(900,620,2000,10);
  player = Bodies.rectangle(100,425,450,400,{
    isStatic: true
  });
  World.add(world,player);
  zombie = new zombies(300,300);
}

function draw(){
    background(mountains);
    Engine.update(engine);
    ground.display();
    push();
    translate(player.position.x,player.position.y);
    rotate(player.angle);
    imageMode(CENTER);
    image(playerimage,0,0,450,400);
    pop();
    ground.body.velocity.x = -4;
    if(ground.body.position.x < 350){
      ground.body.position.x = 900;
    }
    creepers();
    zombie.display();
}

function creepers(){
  creeper = Bodies.rectangle(800,100,100,100,{
    isStatic:false
  });
  World.add(world,creeper);
  push();
  translate(creeper.position.x,creeper.position.y);
  rotate(creeper.angle);
  rectMode(CENTER);
  rect(0,0,100,100);
  pop();
}
