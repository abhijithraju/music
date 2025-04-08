function setup() {
  let canvas = createCanvas(400, 400);
  canvas.position(800,370);
  canvas.parent('canvas-container');
  frameRate(10);
  // background(220);
}
fiba=[0,1,];

 
function draw() {
 
  fiba.push(fiba[frameCount]+fiba[frameCount-1]);
  //console.log(fiba[frameCount]);
  if(frameCount>=4){
    stroke(random(0,255),random(0,255),random(0,255));
     noFill();
    
    arc(100, 200,200,50*PI*sin(fiba[frameCount]),PI*sin(fiba[frameCount]) ,PI*sin(fiba[frameCount-1]) )
  
    
 
   
  
  }
  
}