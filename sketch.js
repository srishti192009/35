var sadDog,dog,happyDog;
var foodObj,foodS,foodStock;
var fedTime,lastFed,feed,addFood;

function preload(){
  sadDog=loadImage("dogImg.png");
  happyDog=loadImage("dogImg1.png");
}


function setup() {
  database=firebase.database();
	createCanvas(800, 700);

  foodObj=new Food();
  
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);

  dog=createSprite(800,200,150,150)
  dog.addImage(sadDog);
  dog.scale=0.15;

 
}


function draw() {  
  background(46,139,87);
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage("images/dogImg.png");
}
foodObj.display();
drawSprites();


function readStock(data){
 foodS=data.val();
 foodObj.updateFoodStock(foodS);
}

function addFoods(){
 foodS++;
 database.ref('/').update({
   Food:foodS
 })
}


}