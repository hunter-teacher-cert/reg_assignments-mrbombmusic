let sliderX = document.getElementById("sliderX");
let sliderY = document.getElementById("sliderY");
let button = document.getElementById("button");

let x = 100;
let y = 200;

let size = 50;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  x = sliderX.value;
  y = sliderY.value;

  ellipse(x, y, size);
}

function resize() {
  if(size == 50) {
  size = 150;
  } else {
    size = 50;
  }
}
