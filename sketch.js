//Create variables here
var dog
var happyDog
var Database
var foodS
var foodStock
function preload()
{
  //load images here
  dog=loadImage("Dog.png")
  happyDog=loadImage("happydog.png")
}

function setup() {
  Database=firebase.database();

  createCanvas(500,500);
  DOG=createSprite(200,380,400,10)
  DOG.addImage(dog)
  DOG.scale=0.3
  
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  
}


function draw() { 
  background(46,139,87) 

  if(keyWentDown(UP_ARROW)){
    writeStock(food5);
    dog.addImage(happyDog);
  }

  drawSprites();
  //add styles here
  function readStock(data){
    foodS=data.val();
  }

  function writeStock(x){

    database.ref('/').update({
      Food: x
    })
  }

}



