var fixedRct;
var movingRect;


function setup() {
  createCanvas(800,400);
 movingRect = createSprite(400, 200, 50, 50);
 fixedRct = createSprite(400,100,20,20);
}

function draw() {

  background(255,255,255);  

movingRect.x = mouseX
movingRect.y = mouseY

if (movingRect.x-fixedRct.x <= movingRect.width/2+fixedRct.width/2 && 
  fixedRct.x-movingRect.x < movingRect.width/2+fixedRct.width/2 &&
   movingRect.y-fixedRct.y <= movingRect.width/2+fixedRct.width/2 && 
  fixedRct.y-movingRect.y < movingRect.width/2+fixedRct.width/2){
    movingRect.shapeColor = "green";
  }
  else {
    movingRect.shapeColor = "grey"; 
  }


  drawSprites();
}