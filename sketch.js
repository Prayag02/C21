
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;


function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(width/2, 670, width, 20);
	leftSide = new Ground(700,600,20,120);
	rightSide = new Ground(850,600,20,120);




	var options = {
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	ball = Bodies.circle(200,100,20,options);
	World.add(world,ball);


	rectMode(CENTER);
	ellipseMode(RADIUS);
}


function draw() {
  background(0);

  ellipse(ball.position.x,ball.position.y,20,20);

  ground.display();
  leftSide.display();
  rightSide.display();


  Engine.run(engine);

  drawSprites();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:20,y:10},{x:25,y:-100});
	}
}

