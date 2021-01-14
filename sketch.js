var banana,bananaGroup,bananaImage;
var monkey,monkeyImage;
var stone,obstacleImage,obstacleGroup;
var invisibleGround,background,backgroundImage;
var score;

function preload()
{
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("stone.png");
  monkeyImage = loadAnimation("Monkey1.png","Monkey2.png","Monkey3.png","Monkey4.png","Monkey5.png","Monkey6.png","Monkey7.png",
"Monkey8.png","Monkey9.png","Monkey10.png");
  backgroundImage = loadImage("jungle.jpg");
}

function setup() {
  createCanvas(400,400);
  
  jungle = createSprite(250,385,400,20);
  jungle.addAnimation("background",backgroundImage);
  jungle.velocityX = -4;
  invisibleGround = createSprite(250,385,400,20);
  invisibleGround.visible = false;
  monkey = createSprite(60,370,30,30);
  monkey.addAnimation("monkey", monkeyImage);
  monkey.scale = 0.10;
  bananaGroup = new Group();
  obstacleGroup = new Group();
  
}

function draw() {
  background(220);
  if (jungle.x < 200)
  {
    jungle.x = jungle.width/2;
  }
  monkey.collide(invisibleGround);
  if(keyDown("space"))
    {
      monkey.velocityY = -15 ;
    }
  if (bananaGroup.isTouching(monkey)){
    monkey.scale = monkey.scale+0.2;
  }
  if (obstacleGroup.isTouching(monkey)){
    monkey.scale = monkey.scale-0.2;
  }
    monkey.velocityY = monkey.velocityY + 0.8;
  
  
    spawnBanana();
    spawnObstacle();
  drawSprites();
}
function spawnBanana() 
{
if (World.frameCount % 180 === 0) 
 {
   banana = createSprite(400,380,50,30);
  banana.addAnimation("banana",bananaImage);
  banana.scale = 0.1;
  banana.y = random(120,200);
  banana.velocityX = -3;
  banana.lifetime = 134;
   bananaGroup.add(banana);
  }
}
function spawnObstacle() 
{
if(World.frameCount % 100 === 0) 
  {
    stone = createSprite(400,360,10,40);
    stone.velocityX = - (6 + 3/100);
    stone.addAnimation("stone",obstacleImage);
    stone.scale = 0.1;
    stone.lifetime = 100;
    obstacleGroup.add(stone);
  }
}