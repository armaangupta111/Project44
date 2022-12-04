var bg,bgImg;
var player, shooterImg, shooter_shooting;
var zombie, zombieImg

function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")

  zombieImg = loadImage("assets/zombie.png")

  bgImg = loadImage("spookyforest.png")
  
}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
bg = createSprite(displayWidth/2+30,displayHeight/2-40,500,500)
//bg = createSprite(windowWidth, windowHeight, 20,20)
bg.addImage(bgImg)
bg.scale = 2.4
  

//creating the player sprite
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.3
   player.debug = true
   player.setCollider("rectangle",0,0,300,300)


}

function draw() {
  background(0); 


spawnZombies()

  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-15
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+15
}
if(keyDown("RIGHT_ARROW")||touches.length>0){
  player.x = player.x+15
}
if(keyDown("LEFT_ARROW")||touches.length>0){
  player.x = player.x-15
}
//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 
  player.addImage(shooter_shooting)
 
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  player.addImage(shooterImg)
}

drawSprites();

}

function spawnZombies(){
if(frameCount%70===0){
zombie = createSprite(1500,random(0,800),50,50)
zombie.addImage(zombieImg)
zombie.velocityX = random(-1,-5)
zombie.scale = 0.15
}
}