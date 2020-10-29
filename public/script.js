let balls = [];
let mouse;
function setup() {
  createCanvas(innerWidth, innerHeight);
  for (let i = 0; i < 1000; i++) {
    balls[i] = new Ball();
  }
}

function draw() {
  background(0);
  mouse = createVector(mouseX, mouseY);
  for (let i = 0; i < balls.length; i++) {
    balls[i].do();
  }
}

class Ball {
  constructor() {
    this.p = createVector(random(width), random(height));
    this.v = createVector(0,0);
  }

  do() {
    let x = p5.Vector.sub(mouse, this.p); //laskee cursorin ja pallon välin
    this.v.add(x.setMag(1));
    this.p.add(this.v);
    circle(this.p.x, this.p.y, 10);
  }
}


