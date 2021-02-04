const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var player,ground,mountains,playerimage,zombie,sword,swordImg,creeperImg,invisGround;
var canvas;
var itemsGroup;
//var rand = Math.round(random(1,2));

function preload() {
  playerimage = loadImage("my player.png");
  mountains = loadImage("my background.jpg");
  swordImg = loadImage("netherite sword.png");
  creeperImg = loadImage('charged creeper.png');
}

function setup(){
canvas = createCanvas(displayWidth,displayHeight-125);
engine = Engine.create();
world = engine.world;
invisGround = createSprite(900,600,2000,10);
ground = new Ground(900,620,2000,10);
  player = Bodies.rectangle(100,425,450,400,{
    isStatic: true
  });
  World.add(world,player);
  //if(rand === 1){
  //zombie = new zombies(300,300,100,200);
  //}else if(rand === 2){
  zombie = new zombies(300,300,200,400);
//}
  sword = createSprite(player.position.x+120,player.position.y-20,250,200);
  sword.addImage("sword",swordImg);
  sword.scale = 8;
  itemsGroup = new Group();
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
   
    //if(rand === 1 || rand === 2){
    zombie.display();
  //}
    
    drawSprites();
    spawnpoint();
}

function creepers(){
  creeper = Bodies.rectangle(800,200,100,100,{
    isStatic:false
  });
  World.add(world,creeper);
  push();
  translate(creeper.position.x,creeper.position.y);
  rotate(creeper.angle);
  imageMode(CENTER);
  image(creeperImg,0,0,250,400);
  pop();
}

function spawnpoint(){
  if(frameCount%100 === 0){
  item = createSprite(random(0,900),20,20,20);
  item.velocityY = 3;
  
  itemsGroup.add(item);
  itemsGroup.collide(invisGround);
  }
}