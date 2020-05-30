var a,b,num,c,destructers,clouds,gameState;
// Create a sprite
var bi,di,ci;
// var player = createSprite(190, 375,20,20);
function preload(){
bi = loadImage("human.jpg");
di = loadImage("car.png")
ci = loadImage("wheel.jpg")

}
function setup(){

 b = createSprite(200, 350,20,20);


 clouds =   createSprite(0,0,50,50);

 destructers = createSprite(200,0,50,50)
}

function draw() {
  background("black");

  b.addImage(bi);


  if (b.y>400) {
    b.y = 200;
  b.addImage(bi)
  }
  
  
  
  if(b.collide(clouds) || b.collide(destructers)){

b .destroy();
clouds.destroy();
gameState = END;
}

  if (World.frameCount%180===0) {
     clouds = createSprite(200,0,50,50);
    //clouds.depth = 0.21 
  clouds.x = random(40, 330)
  clouds.velocityY = random(10,15);
clouds.addImage(ci)
  clouds.scale = 0.25
  //console.log(trex.depth)
  clouds.shapeColor = "red"
  clouds.depth = 1
 // trex.depth = clouds.depth +1
 
clouds.lifetime = 133.3333333333;
  
}
  



   
  if (World.frameCount%100===0) {
     destructers = createSprite(200,0,50,50);
    //clouds.depth = 0.21 
  destructers.x = random(50, 400)
  destructers.velocityY = random(15,25);
destructers.addImage(di)
  destructers.scale = 0.1755
  //console.log(trex.depth)

  
 // trex.depth = clouds.depth +1
 
destructers.lifetime = 133.3333333333;
  
} 
  
  createEdgeSprites();
  // Move the player sprite about the Mouse X direction.
 
  b.x = World.mouseX;
  b.shapeColor = "gold";

 
  
  drawSprites();
  
  
}

