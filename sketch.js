const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myWorld,myEngine,ball,dustbin;

function setup() {
  createCanvas(800,400);

  myEngine = Engine.create();

  myWorld = myEngine.world;
  
  ball = new Paper(200,200,10);
  dustbin = new Dustbin(width-100,height-20);

  ground = new Ground(width/2,height-10,width,10);

  
}

function draw() {
  background("Black");  

  Engine.run(myEngine);
  //console.log(dustbin.leftWall.restitution);
  ball.display();
  dustbin.display();
  
  //keyPressed();

  console.log(ball.body.position.x);
  console.log(ball.body.position.y);

  ground.display();

}

function keyPressed(){
  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(ball.body,ball.body.position,{x:5,y:-15});
  
  }
  if (keyCode === LEFT_ARROW) {

    //Matter.Body.applyForce(ball.body,ball.body.position,{x:-15,y:-0});
  
  }
  
}