function spots(){
   frameRate(4);
  spot.x = random(0,width);
  spot.y = random(height, 0);
  noStroke();
  fill(col.r,col.g,col.b);
  ellipse (spot.x,spot.y,30,30);
}
console.log("RUNS")
//create function for spot location
var spot = {
  x:100,
  y:50,
}

//create function for spot color
var col = {
  r:250,
  g:230,
  b:240,
}

let canvas;
function setup() {
  let h = document.getElementById("mainWrapper").offsetHeight;
  canvas = createCanvas(windowWidth, h);
  canvas.id("p5Sketch");
}

function draw() {
  // background(0,143,132);

   background(254,143,132);

// spots();
  spots(1);
  spots(2);
  spots(3);
  spots(4);
  spots(5);
  spots(6);
  spots(7);
  spots(8);
  spots(9);
  spots(10);
  spots(11);
  spots(12);
  spots(13);
  spots(14);
  spots(15);
  spots(16);

 	col.r = random(254,143);
	col.g = random(132,143);
  col.b = random(132,254);
}
