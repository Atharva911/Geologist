const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var cube;
var bodies
var cube2


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    cube = new Box(600,300,100,100)
    bodies = new Log(300,300,250,100)
    cube2 = new Box2(1000,300,100,100)

  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    cube.display();
    bodies.display();
    cube2.display();
    
 
}