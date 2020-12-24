
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof =new Roof(400,height,800,50);

	bob1=new Bob(200,200)
	bob2 = new Bob(230,200)
	bob3 = new Bob(260,200);
	bob4 = new Bob(170,200)
	bob5 = new Bob(140,200)

	rope=new Rope(bob1.body,roof.body,-bobDiameter*2,0);
	rope=new Rope(bob2.body,roof.body,-bobDiameter*2,0);
	rope=new Rope(bob3.body,roof.body,-bobDiameter*2,0);
	rope=new Rope(bob4.body,roof.body,-bobDiameter*2,0);
	rope=new Rope(bob5.body,roof.body,-bobDiameter*2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display(); 
}



