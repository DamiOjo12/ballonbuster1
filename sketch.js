var blueBalloon,greenBalloon,pinkBalloon,redBalloon;
var ground;
var bow;
var arrow;



function preload(){
 //load your images here 
 ground1 = loadImage("background0.png");
  bow1 = loadImage("bow0.png");
  arrow1 = loadImage("arrow0.png")
  blueballoon1 = loadImage("blue_balloon0.png");
  greenballoon2 = loadImage("green_balloon0.png");
  pinkballoon3 = loadImage("pink_balloon0.png");
  redballoon4 = loadImage("red_balloon0.png");
    
}

function setup() {
  createCanvas(600, 600);
  
  //add code here
  ground = createSprite(400,210,600,600);
  ground.addImage("gro", ground1);
  ground.scale = 2.3;
  
  bow = createSprite(590,300,10,10);
  bow.addImage("bo", bow1);
  
  arrow = createSprite(570,300,10,10);
  arrow.addImage("ar", arrow1);
  arrow.scale = 0.20;
  
  for (var a = 32; a < 550; a=a+68) {
  var blueBalloon = createSprite(25, a, 20, 20);
  blueBalloon.addImage("bal", blueballoon1);
  blueBalloon.scale = 0.1;
}

  for (var b = 100; b < 500; b=b+72) {
  var greenBalloon = createSprite(70, b, 20, 20);
  greenBalloon.addImage("bal", greenballoon2);
  greenBalloon.scale = 0.09;
}

  for (var c = 165; c < 450; c=c+78) {
  var redBalloon = createSprite(110, c, 20, 20);
  redBalloon.addImage("bal", redballoon4);
  redBalloon.scale = 0.09;
}
  
  for (var d = 250; d < 340; d=d+75) {
  var pinkBalloon = createSprite(150, d, 20, 20);
  pinkBalloon.addImage("bal", pinkballoon3);
  pinkBalloon.scale = 1.2;
}

  
}

function draw() {

  //add code here
  ground.velocityX = -1;
  if(ground.x<150){
    ground.x = ground.width/2;
  }
  
  bow.y = mouseY;
  arrow.y = bow.y;
  if(keyDown("space")){
    arrow.velocityX = -2;
  }
  if(arrow.x<0){
    arrow.x = 570;
  }
  
  
  drawSprites();
}

