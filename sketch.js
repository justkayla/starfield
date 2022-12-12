function windowResized() {
  resizeCanvas(innerWidth, innerHeight);
}

let stars = [];
// How z changes is set as global variable
let speed;

function setup() {
  createCanvas(innerWidth, innerHeight);
  // Reuse star by resetting its position in the array
  for (let i = 0; i < 2000; i++) {
    stars[i] = new Star();
  }
}

function draw() {
  speed = map(mouseX, 0, width, 0, 25);
  background(20);
  // Allows stars to move from center (not top-left)
  translate(width / 2, height / 2);
  // For each star in array, update and show them
  for (let i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
  }
}
