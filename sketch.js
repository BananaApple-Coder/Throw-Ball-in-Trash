
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject, ball
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(800, 670, 1600, 20);
	dustbinObj=new dustbin(1200, 650);
	ball = new paper(300, 350, 100)

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  dustbinObj.display();
  ball.display()
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body, ball.body.position, {x:130, y:-145})
	}
	if (keyCode === DOWN_ARROW){
		Matter.Body.applyForce(ball.body, ball.body.position, {x:-130, y:145})
	}
}

