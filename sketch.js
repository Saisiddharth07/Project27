
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var object1, object2, object3, object4, object5, ground;
var rope1, rope2, rope3, rope4, rope5;
var world;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);



	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = newGround(width/2,height/4,width/7,20)
	objectDiameter = 40;
	objectpositionX=width/2
	objectpositionY=height/4+500;
	object1=new Paper(objectpositionX-objectDiameter*2,objectpositionY,objectDiameter)
	object2=new Paper(objectpositionX-objectDiameter,objectpositionY,objectDiameter)
	object3=new Paper(objectpositionX,objectpositionY,objectDiameter)
	object4=new Paper(objectpositionX+objectDiameter,objectpositionY,objectDiameter)
	object5=new Paper(objectpositionX+objectDiameter*2,objectpositionY,objectDiameter)

	var render = Render.create({
	element:document.body,
	engine:engine,
	options:{
	width:1200,
	height:700,
	wireframes:false
	}
	})

	rope1=new Rope(object1.body,groundobject.body,-objectDiameter*2,0)
	rope2=new Rope(object2.body,groundobject.body,-objectDiameter*1,0)
	rope3=new Rope(object3.body,groundobject.body,0,0)
	rope4=new Rope(object4.body,groundobject.body,objectDiameter*1,0)
	rope5=new Rope(object5.body,groundobject.body,objectDiameter*2,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  groundobject.display();
  object1.display();
  object2.display();
  object3.display();
  object4.display();
  object5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}

function keyPressed() {
	if(keyCode===UP_ARROW){
	Matter.Body.applyforce(object1.body,object1.body.position,{x:-50,y:-45})
	}
}

function drawLine(Constraint) {
	objectBodyPosition=constraint.bodyA.position;
	groundBodyPosition=constraint.bodyB.position;
	groundBodyOffset=constraint.pointB;
	groundBodyX=groundBodyPosition.x+groundBodyOffset.x;
	groundBodyY=groundBodyPosition.y+groundBodyOffset.y;
	line(objectBodyPosition.x,objectBodyPosition.y,groundBodyX,groundBodyY)
}


