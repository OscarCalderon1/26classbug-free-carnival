
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var btn2;

var angle=60;
var ground;

var fan, fan1, fan2, fan3;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  
   btn2 = createImg('up.png');
  btn2.position(350,30);
  btn2.size(50,50);
  btn2.mouseClicked(vForce);

  fan=new Ground(50,370,50,30)
  fan1=new Ground(150,370,50,30)
  fan2=new Ground(250,370,50,30)
  fan3=new Ground(350,370,50,30)


  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
 con=Matter.Constraint.create({
   pointA:{x:200,y:20},
   bodyB:ball,
   pointB:{x:0,y:0},
   lenght:100,
   stiffness:0.1
 })
World.add(world,con);

  ground = Bodies.rectangle(0,400,400,20,ground_options);
  World.add(world,ground); 
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,650,20);
 
//console.log(ground.position.y);
fan.show();
fan1.show();
fan2.show();
fan3.show();

push();
  line(con.pointA.x,con.pointA.y,ball.position.x,ball.position.y)
  strokeWeight(2);
  stroke(255)
  pop();
}

function vForce()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
}
  