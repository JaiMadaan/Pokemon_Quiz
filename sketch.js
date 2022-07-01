var bg,bg2,form,system,code,security;
var score=0;

function preload() {
 
  
  bg= loadImage("aladdin_cave.jpg")
  //load image for the treasure background
  bg2= loadImage("download.jpeg")
  
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  security = new Security();
  system = new System();

  
  
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);
// add code for changing the background to the treasure background
  

  if(score === 25) {
    clear()
    background(bg2)
    fill("green")
    textSize(40);
    text("YOU WON",500, 50);
  }

  drawSprites()
}