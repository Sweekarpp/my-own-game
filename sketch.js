const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var player,ground,mountains,playerimage,zombie,sword,swordImg;
var canvas;
var rand = Math.round(random(1,2));

function preload() {
  playerimage = loadImage("my player.png");
  mountains = loadImage("my background.jpg");
  swordImg = loadImage("netherite sword.png");
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
  if(rand === 1){
    zombie = new zombies(300,300,100,200);
  }else if(rand === 2){
  zombie = new zombies(300,300,200,400);
}
  sword = createSprite(player.position.x+120,player.position.y-20,250,200);
  sword.addImage("sword",swordImg);
  sword.scale = 8;
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
    if(rand === 1 || rand === 2){
    zombie.display();
  }
    drawSprites();
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
