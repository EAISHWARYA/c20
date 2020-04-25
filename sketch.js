var car ,wall,deformation;

function setup() {
  createCanvas(1600,400);
 car=createSprite(50, 200, 30, 30);
 wall=createSprite(1200, 200, 20, 150);
 car.shapeColor="white";
 wall.shapeColor=rgb(80,80,80);
 
car.weight=random(400,1500);
 car.velocityX=random(30,95);

}

function draw() {
  background("black");  

  deformation= Math.round(0.5* car.weight* car.velocityX * car.velocityX /22500);

  console.log(deformation);
 if(car.collide(wall) ){
 if(deformation<100){
  car.shapeColor="green";
 }
 else if(deformation>100 && deformation<180) {
  car.shapeColor="yellow";
 }
 else if( deformation>180) {
  car.shapeColor="red";
 } }
 car.collide(wall);
  drawSprites();
}