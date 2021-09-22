var startingX = 100;
var size = 50;


function setup() {
  // put setup code here
  createCanvas(500,500);
  //background(150,180,255);
}

function draw() {
//sin(frameCount/frequency)*amplitude
  noStroke();
  background(150,180,255);
  let range = 200;
  let change1 = frameCount%range;
  //what is map
  let change2 = map(mouseX,0,199,255,0);
  //frameRate(1);
  background(change1,change2,0);
  print("change1", change1);
  print("change2", change2);

  //text(frameCount, width/2, height/2);


}

// textSize(100);
// fill(255,0,255);
//
// //ellipse(frameCount%width, height/2, 50,50);
// for (let i=0; i<5;i++){
//   //fill(random(255),random(255),random(255));
//   ellipse((i*size)+(sin(frameCount/8))*(width/5),
//   100,
//    size,size);
// }
//
// ellipse(frameCount%width,
// height/2+(sin(frameCount/8)*size), size,size);

  //text("clouds..... sick lol", 100,100);
// for (let i = 0; i<5; i++){
//   for (let j = 0; j<5; j++){
//     noStroke();
//
//     ellipse(startingX+(i*(size+40)), height/2+(j*size),
//     size,size);
//     ellipse(startingX+(i*(size+40)), (height/2)+10+(j*size),
//     size*1.5,size/2);
//     ellipse(startingX-25+(i*(size+40)),
//     (height/2)-2, size*.5, size*.5);
//     ellipse(startingX+25+(i*(size+40)),
//     (height/2)-2, size*.5, size*.5);
//     print(i);
//   }
//
// }

// for (let i = 0; i<=500; i+=20){
//   stroke(255,0,255);
//   line(i,0,i+(i/2), 80);
//   line(i+(i/2), 80,i*1.2,120);
//   line(width/2, height/2, i, (height));
// }
