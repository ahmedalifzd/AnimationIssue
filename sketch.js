
//animation bug , not loading in

//all vars here
var player
var player_moving
var ground
var ground_moving
var sky
var sky_moving
var invisGround1
var invisGround2
var invisGround3
var invisGround4
var TOP
var bullet
var bullet_moving
var flying
var inviswall1
var inviswall2
var inviswall3
var inviswall4
var castle
var castle_load
var score = 0
var health = 3

function preload(){

  //load images and animation before using them
  player_moving = loadAnimation ("player.png","player2.png")
  ground_moving = loadImage("ground.png")
  sky_moving = loadImage("sky.png")
  bullet_moving = loadImage("bullet.png")
  castle_load = loadImage("castle.png")
}


function setup(){
  
  
  createCanvas(700,700);
  

//place your sprites here

//sky
sky = createSprite(350,350,50,50)
sky.addImage("sky",sky_moving)

//castle
castle = createSprite(270,357,50,50)
castle.addImage("castle",castle_load)
castle.scale =.8 

//ground
ground = createSprite(350,348,50,50)
ground.addImage("ground",ground_moving)



//invisble ground
invisGround1 = createSprite(350,390,700,5)
invisGround1.visible = false

invisGround2 = createSprite(0,200,100,5)
invisGround2.visible = false

invisGround3 = createSprite(600,365,265,5)
invisGround3.visible = false

invisGround4 = createSprite(100,260,100,5)
invisGround4.visible = false

TOP = createSprite(350,0,700,5)

//invisble wall
inviswall1 = createSprite(160,605,5,700)
inviswall1.visible = false

inviswall2 = createSprite(0,350,5,700)
inviswall2.visible = false

inviswall3 = createSprite(700,350,5,700)
inviswall3.visible = false

inviswall4 = createSprite(-30,480,5,400)
inviswall4.visible = false
//PLAYER 
player = createSprite(350,350,5,55)
player.addAnimation("player",player_moving)
player.scale = 2
player.setCollider("rectangle",0,-10,20,35)

}



function draw() {

 //shooting
 if (keyDown("space")&& frameCount % 5 === 0){

  bullet = createSprite(player.x+50,player.y-35,15,3)
  bullet.velocityX = 50
  bullet.addImage("bullet",bullet_moving)
  bullet.scale=.1
  bullet.lifetime=50
  bullet.setCollider("rectangle",-1,0,5,1)

 }
 
 
//movement

if (keyDown("D")){
 
  player.x +=10
 
}
if (keyDown("A")){

  player.x -=10
  
}
if (keyDown("W")){

  player.y -=30
  
}
if (keyDown("S")){
   
  player.y +=10
}
//velocities of characters
player.velocityY = 5



//all collide 
player.collide(invisGround1) 
player.collide(invisGround2) 
player.collide(invisGround3) 
player.collide(invisGround4) 
player.collide(inviswall1) 
player.collide(inviswall2) 
player.collide(inviswall3) 
player.collide(inviswall4)
player.collide(TOP)

  drawSprites()

  //score and health
  score += 1

  

  //texts
text("SCORE : "+score,350,70)
text("HEALTH : "+health,140,70)
}
