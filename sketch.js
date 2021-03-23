var bullet, speed, weight;
var wall, thickness;

function setup() {
  createCanvas(1600,400);
  speed = random(223,321);
  weight = random(30,52);
  thickness= random(22, 83);
  bullet = createSprite(50, 200, 50, 50);
  bullet.velocityX = speed;
  wall = createSprite(1200,200,thickness, height/2);
}

function draw() {
  background("black");  
  
if(wall.x - bullet.x < (bullet.width + wall.width) /2) 
{
 bullet.velocityX = 0;
 var damage = 0.5* weight* speed* speed/(thickness* thickness* thickness)
 if(damage > 10)
 {
  wall.shapeColor = "green"
 }
 if(damage < 10)
 {
  wall.shapeColor = "red"
 }
}
drawSprites();
}
function hasCollided(lbullet,lwall){

  bulletRightEdge=lbullet.x +lbullet.width;
  wallLeftEdge=Iwall.x;
    if(bulletRightEdge>=wallLeftEdge){
  return true 
  }
  return false;
 }
  
