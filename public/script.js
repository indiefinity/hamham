let balls = [];
let mouse;
function setup() {
  createCanvas(innerWidth, innerHeight);
  for (let i = 0; i < 1000; i++) {
    balls[i] = new Ball();
  }
  noStroke();
  colorMode(HSB)
}

function draw() {
  background(0, 240);
  mouse = createVector(mouseX, mouseY);
  for (let i = 0; i < balls.length; i++) {
    balls[i].do();
  }
}

let mousepressed = false;

function mousePressed() {
  mousepressed = true;
}

function mouseReleased() {
  mousepressed = false;
}

class Ball {
  constructor() {
    this.p = createVector(random(width), random(height));
    this.v = createVector(0,0);
  }

  do() {
    fill(map(this.v.mag(), 0, 50, 0, 255),255,255);
    if(mousepressed) {
      let x = p5.Vector.sub(mouse, this.p); //laskee cursorin ja pallon välin
      this.v.add(x.setMag(1));
    }
    this.v.mult(0.99)
    this.p.add(this.v);
    circle(this.p.x, this.p.y, 10);
  }
}


