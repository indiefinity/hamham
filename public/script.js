let balls = [];
let mouse;
let ballCount = 1000;

function setup() {
  createCanvas(innerWidth, innerHeight);
  makeBalls(ballCount);
  noStroke();
  colorMode(HSB)
}

function makeBalls(amount) {
  balls = [];
  for (let i = 0; i < amount; i++) {
    balls[i] = new Ball();
  }
}


function draw() {
  background(0, 240);
  mouse = createVector(mouseX, mouseY);
  for (let i = 0; i < balls.length; i++) {
    balls[i].do();
  }
}

let borders = false;

function keyPressed() {
  
  if (keyCode === 66) {
    if (borders) {
      console.log("borders off");
      borders = false;
    }
    else {
      console.log("borders on");
      borders = true;
    }
  }
  
  if (keyCode === 38) {
    ballCount *= 1.25;
    console.log("ballcount increased");
    makeBalls(ballCount);
  }
  else if (keyCode === 40) {
    ballCount *= 1 / 1.25;
    console.log("ballcount decreased");
    makeBalls(ballCount);
  }
}

let mousepressed = false;


class Ball {
  
  constructor() {
    this.p = createVector(random(width), random(height));
    this.v = createVector(0,0);
  }

  do() {
    fill(map(this.v.mag(), 0, 50, 0, 255),255,255);
    
    if (borders) {
      if (this.p.x < 0) {
        this.p.x = 0;
        this.v.x *= -1;
      }
      else if (this.p.x > width) {
        this.p.x = width;
        this.v.x *= -1;
      }
      else if (this.p.y < 0) {
        this.p.y = 0;
        this.v.y *= -1;
      }
      else if (this.p.y > height) {
        this.p.y = height;
        this.v.y *= -1;
      }
    }
    
    if(mouseIsPressed) {
      let x = p5.Vector.sub(mouse, this.p);
      this.v.add(x.setMag(1));
    }
    
    this.v.mult(0.99);
    this.p.add(this.v);
    
    circle(this.p.x, this.p.y, 10);
  }
}


