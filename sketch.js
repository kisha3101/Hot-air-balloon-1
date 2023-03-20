var hotAirBalloon , hotAirBalloon_img;
var coins , coinsImg ;
var bgImg ;






function preload(){
  hotAirBalloon_img = loadImage("assets/hotair-ballon.png");
  coinsImg = loadImage("assets/coins.png");
  bgImg = loadImage("assets/bg-2.png");
}

function setup() {
  createCanvas(windowWidth , windowHeight)

  hotAirBalloon = createSprite(100 , 600 , 50 , 50);
  hotAirBalloon.addImage(hotAirBalloon_img);

  coins = createSprite(random(400 , 1400), random(100 , 400) , 10 , 10);
  coins.addImage(coinsImg);
  coins.scale = 0.1;



  
  
}

function draw() {
  background(0)
  image(bgImg , 0 , 0 , windowWidth , windowHeight);
  background.velocityX = -600;

  if(keyDown("UP_ARROW")){
    hotAirBalloon.y = hotAirBalloon.y-10;
  }

  if(keyDown("DOWN_ARROW")){
    hotAirBalloon.y = hotAirBalloon.y+10;
  }

  if(keyDown("RIGHT_ARROW")){
    hotAirBalloon.x = hotAirBalloon.x+10;
  }

  if(keyDown("LEFT_ARROW")){
    hotAirBalloon.x = hotAirBalloon.x-10;
  }

  if(background.x < 0){
    background.x = background.width/2;
   
  }

  spawnCoins();


  coins.rotation = 360;
  text(" x "+World.mouseX +" "+" y "+World.mouseY,World.mouseX,World.mouseY)
  drawSprites();
}

function spawnCoins(){
  if(frameCount % 50 === 0){
  coins = createSprite(random(400 , 1400), random(100 , 400) , 10 , 10);
  coins.addImage(coinsImg);
  coins.scale = 0.1;
  coins.velocityX = +1;
  }
}