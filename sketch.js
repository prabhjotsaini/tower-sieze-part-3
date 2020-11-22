var a;
var circles=[];
var score=0

function setup() {
  createCanvas(800,800);
  stroke(255)
  polygon=Bodies.circle(50,200,20)
  World.add(world,polygon);
 this.polygon= loadImage("polygon.png")
ImageMode(Center)
Image(polygon_img,polygon.position.x,polygon.position.y,40,40)
slingShot=new SlingShot(this.polygon,{x:100,y:200})

  ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

   block8=new Box(330,235,30,40) 
   block9=new Box(360,235,30,40) 
   block10=new Box(390,235,30,40) 
   block11=new Box(420,235,30,40) 
   block12=new Box(450,235,30,40) 
   block13=new Box(360,195,30,40) 
   block14=new Box(390,195,30,40) 
   block15=new Box(420,195,30,40) 
   block16=new Box(390,155,30,40) 
 // camera=new Camera(width/2,height/2,0.5);
  //camera.on();
  a=height;
  circles.push(width/2)
}

function draw() {
  //camera.zoom=camera.zoom+1
  background(0);  

  noStroke()
    textSize(30)
    fill("White")
    text("score"+Score,width-300,100)
    Engine.update(engine);
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  
  block8.score()
  block9.score()
  block10.score()
  block11.score()
  block12.score()
  block13.score()
  block14.score()
  block15.score()
  block16.score()
  

  platform.display();
  ground.display();

  a=a-1;
  //camera.zoom=camera.zoom+0.01
 //camera.position={x:width/2,y:a}
 
  
  for (i=0;i<circles.length;i++)
{
	circle(circles[i], height/2,20)
}
if(camera.position.x%width===0)
{
	circles.push(camera.position.x+width/2)
}
 // camera(0, 0, 20 + sin(frameCount * 0.01) * 10, 0, 0, 0, 0, 1, 0);
 drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
     slingshot.attach(bird.body);
  }
  if(keyCode === RIGHT_ARROW)
  {
    if(keyIsDown(RIGHT_ARROW))
    {
      camera.position.x=camera.position.x+10;
    }
  }
} 