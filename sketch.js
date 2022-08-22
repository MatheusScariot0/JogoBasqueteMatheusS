const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var left;
var right;
var bottom;
var cesta;
var bola;
var quadra;
var arremessadorIMG;
var cestaIMG;

//aqui
//var radius = 20;

function preload() {
	cestaIMG = loadImage("./assets/cesta.png")
	arremessadorIMG = loadImage("./assets/arremessador.png")
	bola = loadImage("./assets/ball.png");
	quadra = loadImage("./assets/quadra.jpg")
}

function setup() {
	createCanvas(1300, 400);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options = {
		isStatic: false,
		restitution: 0.5,
		friction: 0,
		density: 1.2
	}
	var options = {
		isStatic: true
	}
	//aqui
	ball = Bodies.circle(650, 100, 20 / 2, ball_options);
	World.add(world, ball);

	ground = Bodies.rectangle(650, 300, 1300, 20, options);
	World.add(world, ground);

	left = Bodies.rectangle(260, 230,10, 310, options);
	World.add(world, left);

	cesta = Bodies.rectangle(300, 220, 20, 50, options);
	World.add(world, cesta);

	// bottom = Bodies.rectangle(10,200,160,10, options);
	// World.add(world, bottom)


	Engine.run(engine);

	//ellipseMode(RADIUS);
}


function draw() {
	background("purple");
	rectMode(CENTER);
	image(quadra, 0, 0, 1300, 400)
	
	//rect(ground.position.x, ground.position.y, width, 20);
	//rect(left.position.x, left.position.y, 20, 310);

	
	push();
	imageMode(CENTER);
	image(bola,ball.position.x, ball.position.y, 30, 30);
	image(cestaIMG, cesta.position.x, cesta.position.y, 70, 40);
	pop();
	// keyPressed();

	// Engine.run(engine);

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		//aqui
		Matter.Body.applyForce(ball, ball.position, { x: -20, y: -10 });
	}

}