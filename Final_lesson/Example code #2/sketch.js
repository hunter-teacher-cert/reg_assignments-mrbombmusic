let redSlider = document.getElementById("redSlider");
let greenSlider = document.getElementById("greenSlider");
let blueSlider = document.getElementById("blueSlider");
let button = document.getElementById("button");

let r = 200;
let g = 200;
let b = 200;

let c = false;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  r = redSlider.value;
  g = greenSlider.value;
  b = blueSlider.value;
  if(c){
    background(200);
    fill(r, g, b);
  } else {
  background(r, g, b);
  fill(255)
  }
  ellipse(200, 200, 200);
}

function resize() {
  if(c == false) {
    c = true;
  } else {
    c = false;
  }
}
