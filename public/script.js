let balls = [];
let mouse;
function setup() {
  createCanvas(innerWidth, innerHeight);
  for (let i = 0; i < 10; i++) {
    balls[i] = new Ball();
  }
}

function draw() {
  background(255);
  mouse = createVector(mouseX, mouseY);
  for (let i = 0; i < balls.length; i++) {
    balls[i].do();
  }
}

class Ball {
  constructor() {
    this.p = createVector(random(width), random(height));
  }

  do() {
    drawArrow(this.p, p5.Vector.sub(mouse, this.p).setMag(40), "red");
  }
}


function drawArrow(base, vec, myColor) {
  push();
  stroke(myColor);
  strokeWeight(3);
  fill(myColor);
  translate(base.x, base.y);
  line(0, 0, vec.x, vec.y);
  rotate(vec.heading());
  let arrowSize = 7;
  translate(vec.mag() - arrowSize, 0);
  triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
  pop();
}