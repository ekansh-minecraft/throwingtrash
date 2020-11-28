
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ballObj
var dustbinObj
var groundObj
var READY = 5
var LAUNCED = 8
var shootState = READY


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world; 

     
	groundObj = new Ground(width/2,665,4000,10, world)
	ballObj = new paperBall(width/2-150,393, 20,world)
	dustbinObj = new dustbin(width/2+130,600,100,100,world)
	
    
     
	Engine.run(engine);
}
 
function keyPressed()
{
   
}


function draw() {
  rectMode(CENTER);	
  background("turquoise");

  groundObj.display()
  ballObj.display()
  dustbinObj.display()

  keyPressed()


  if(shootState === READY)
  {
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(ballObj.paper,ballObj.paper.position,{x:0.11,y:-0.22})
		shootState = LAUNCED
	}
  }

  if(shootState === LAUNCED)
  {
	textSize(19)
	fill("black")
	text("Press r to restart",300,100)
	if(keyDown("r"))
	{
		ballObj.x = 150
		ballObj.y = 393
		shootState = READY
	}
  }

  drawSprites();

}


