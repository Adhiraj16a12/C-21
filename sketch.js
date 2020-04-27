var fixedRect, movingRect;
var gameobject1,gameobject2;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

 gameobject1 = createSprite(200,200,50,80);
 gameobject1.shapeColor = "pink";

 gameobject2 = createSprite(400,100,80,30);
 gameobject2.shapeColor = "blue" ; 
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
  bounceOff(movingRect,fixedRect);
   if (isTouching(fixedRect,gameobject2)){
     movingRect.shapeColor = "red";
     gameobject2.shapeColor = "yellow";

   }
else{
  movingRect.shapeColor = "blue";
  gameobject2.shapeColor = "pink";
}
   

  drawSprites();
}
