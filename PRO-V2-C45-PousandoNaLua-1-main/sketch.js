let ground;
let lander;
var lander_img;
var bg_img;
var thrust;
var left;
var right;

var vx = 0;
var g = 0.05;
var vy = 0;

function preload()
{
  lander_img = loadImage("normal.png");
  bg_img = loadImage("bg.png");
  left = loadAnimation("left_thruster_1.png","left_thruster_2.png");
  right = loadAnimation("right_thruster_1.png","right_thruster_2.png");
  thrust = loadAnimation("b_thrust_1.png","b_thrust_2.png","b_thrust_3.png");
  thrust.playing = true;
  thrust.looping = false;
  left.looping = false;
  right.looping = false;
}

function setup() {
  createCanvas(1000,700);
  frameRate(80);
  thrust.frameDelay = 5;

  lander = createSprite(100,50,30,30);
  lander.addImage(lander_img);
  lander.scale = 0.1;
  lander.setCollider("rectangle", 0, 0, 400, 400);
  lander.addAnimation("thrusting",thrust);
  lander.addAnimation("lefting",left);
  lander.addAnimation("righting",right);

  rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  background(51);
  image(bg_img,0,0);
  push()
  fill(255);
  text("Velocidade Vertical: "+round(vy),800,75);
  pop();

  //descida
  vy +=g;
  lander.position.y+=vy;
  drawSprites();
}

function keyPressed () {

  if(keyCode == UP_ARROW){
    upwardThrust ();
    lander.changeAnimation("thrusting");
    thrust.nextFrame();

  }

  if(keyCode == RIGHT_ARROW) {
    rightThrust();
    lander.changeAnimation("righting");

  }

  if(keyCode == LEFT_ARROW) {
    leftThrust();
    lander.changeAnimation("lefting");
  }

}

function upwardThrust () {
  vy =- 1;
}

function rightThrust () {
  vx += 2;
}

function leftThrust () {
  vx =- 2;
}