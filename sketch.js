//Create variables here
var dog, dogImg,dogImg1;
var database;
var foodS, foodStock;

function preload()
{
	//load images here
  dogImg=loadImage("images/dogImg.png")
  dogImg1=loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(500, 500);
  database=firebase.database();

  dog = createSprite(250,300,150,150);
  dog.addImage(dogImg);
  dog.scale= 0.5 ;
  
  
  foodStock =database.ref("Food");
  foodStock.on("value",readstock)

}


function draw() {  
background("green");



if ( keyWentDown(UP_ARROW)){

writeStock(foodS);
  dog.addImage(dogImg1)
}
  drawSprites();
  //add styles here
fill ("white")
  text("food remaning : "+foodS,170,200);
  fill ("white")
  text(" NOTE: Press UP_ARROW to feed Drago Milk",130,10,300,10)

}

function readstock(data){
  foodS=data.val();

}

function writeStock(x){
  if(x<0){
    x=0;

  }
  else{
    x=x-1;
  }

database.ref("/").update({
Food:x
})


}
