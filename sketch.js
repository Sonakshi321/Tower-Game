//const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var sling;
var hex;

var b1; 
var b2;
var b3;
var b4;
var b5;
var b6;
var b7;
var b8;
var b9;
var b10;
var b11;
var b12;
var b13;
var b14;
var b15;
var b16;
var b17;
var b18;
var b19;
var b20;
var b21;
var b22;
var b23;
var b24;
var b25;


function preload() {
    
}

function setup(){
    var canvas = createCanvas(1200,400);
    //engine = Engine.create();
    //world = engine.world;

        
        hex = new Box(100,100);
        
        //Tower 1
        //layer3
        b1 = new Box(330,235,30,40);
        b2 = new Box(360,235,30,40);
        b3 = new Box(390,235,30,40);
        b4 = new Box(420,235,30,40);
        b5 = new Box(450,235,30,40);
        //layer2
        b6 = new Box(360,195,30,40);
        b7 = new Box(390,195,30,40);
        b8 = new Box(420,195,30,40);
        //layer1
        b9 = new Box(390,155,30,40);

        //Tower 2
        //layer4
        b10 = new Box(330,235,30,40);
        b11 = new Box(330,235,30,40);
        b12 = new Box(330,235,30,40);
        b13 = new Box(330,235,30,40);
        b14 = new Box(330,235,30,40);
        b15 = new Box(330,235,30,40);
        b16 = new Box(330,235,30,40);
        //layer3
        b17 = new Box(330,235,30,40);
        b18 = new Box(330,235,30,40);
        b19 = new Box(330,235,30,40);
        b20 = new Box(330,235,30,40);
        b21 = new Box(330,235,30,40);
        //layer2
        b22 = new Box(330,235,30,40);
        b23 = new Box(330,235,30,40);
        b24 = new Box(330,235,30,40);
        //layer1
        b25 = new Box(330,235,30,40);
    

        sling = new SlingShot(hex.body,{x:200,y:50});
}

function draw(){
    background("white");
    Engine.update(engine);
    text(mouseX + "," +mouseY , mouseX,mouseY);
    strokeWeight(4);
    hex.display();

        b1.display();
        b2.display();
        b3.display();
        b4.display();
        b5.display();
        b6.display();
        b7.display();
        b8.display();
        b9.display();
        b10.display();
        b11.display();
        b12.display();
        b13.display();
        b14.display();
        b15.display();
        b16.display();
        b17.display();
        b18.display();
        b19.display();
        b20.display();
        b21.display();
        b22.display();
        b23.display();
        b24.display();
        b25.display();

    sling.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(hex.body, {x: mouseX , y: mouseY});
}
