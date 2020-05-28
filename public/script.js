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
    let x = p5.Vector.sub(mouse, this.p);
    drawArrow(this.p, x.setMag(40), "red");
    this.p = p5.Vector.add(this.p, x.setMag(20));
  }
}


