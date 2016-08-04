function setup() {
  createCanvas (640, 480);
  background (51);
}
function circle(x, y, diameter) {
  ellipse(x, y, diameter, diameter);
}

function draw() {
  circle(320, 240, 80);
  fill('255')
  circle(320, 240, 50);
  fill('red')
  circle(320, 240, 20);
}