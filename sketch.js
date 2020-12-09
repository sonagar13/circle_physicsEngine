// module aliases;
const Engine = Matter.Engine;
//Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;




var engine;
var world;
var box1 ;
var ballA;
var boxes = [];
var ground = [];
var boundary1;

var circles = [];
//var world;

function setup(){
    background(51);
    canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    
    ground.push(new Boundary(150,height-300,240,20,0.3));
    ground.push(new Boundary(200,350,280,20,-0.3));
    Engine.run(engine);
    //console.log(ground);
    

  
}

function mouseDragged(){

    //boxes.push(new Box(mouseX, mouseY, 20,20));
    circles.push(new Circles(mouseX, mouseY, 20));

}

function draw(){

    background(51);
    
    //text(mouseX+","+ mouseY,mouseX,mouseY);
    Engine.update(engine);
    //ground[i].show();
    for(var i = 0; i<ground.length; i++){

        ground[i].show();

    }
   // for(var i = 0; i < boxes.length;i++){
   //     boxes[i].show();
   // }

   for(var i = 0; i<circles.length; i++){

    circles[i].show();
    
   }
}