const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
//var ball;
var box1,box2;
var ground;

function setup(){
    createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1=new Box(200,200,40,60);
box2=new Box(230,130,40,60)
ground=new Ground(200,380,400,20);
    //ball = Bodies.circle(200,100,20, ball_options);
    //World.add(world,ball);

    
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();

    //ellipseMode(RADIUS);
   // ellipse(ball.position.x, ball.position.y, 20, 20);
}