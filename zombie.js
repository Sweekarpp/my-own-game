class zombies{
  constructor(x,y){
  this.body = Bodies.rectangle(x,y,100,100,{
    isStatic:false
  });
  World.add(world,this.body);
}
display(){
  push();
  translate(this.body.position.x,this.body.position.y);
  rotate(this.body.angle);
  rectMode(CENTER);
  rect(0,0,100,100);
  pop();
}
}
