let slider = document.getElementById("slider")

let size = 50;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  let x = slider.value
  console.log(x)
  ellipse(x, 200, size);
}

function resize() {
  size = 100;
}
