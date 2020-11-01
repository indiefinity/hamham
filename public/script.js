let balls = [];
let mouse;
let ballCount = 1000;

function setup() {
  createCanvas(innerWidth, innerHeight);
  noStroke();
  colorMode(HSB)

  balls = [];
  for (let i = 0; i < ballCount; i++) {
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
let gravity = false;

function keyPressed() {
  switch(keyCode) {
    case 66:
      if (borders) {
        console.log("borders off");
        borders = false;
      }
      else {
        console.log("borders on");
        borders = true;
      }
      break;

    case 38:
      console.log("ballcount increased");
      ballCount *= 2;
      while (balls.length < ballCount) {
        balls[balls.length] = new Ball();
      }
      break;

    case 40:
      console.log("ballcount decreased");
      ballCount *= 1 / 2;
      while (balls.length > ballCount) {
        delete balls[balls.length - 1];
        balls.pop();
      }
      break;

    case 71:
      if (gravity) {
        console.log("gravity off");
        gravity = false;
      }
      else {
        console.log("gravity on");
        gravity = true;
      break;
    }
  }
}


class Ball {
  
  constructor() {
    this.p = createVector(random(width), random(height));
    this.v = createVector(0,0);
  }

  do() {
    fill(map(this.v.mag(), 0, 50, 0, 255),255,255);
    
    if (borders) {
      if (this.p.x < 0) {
        console.log(this.v.x)
        this.p.x = -this.p.x;
        this.v.x *= -1;
      }
      else if (this.p.x > width) {
        this.p.x = width - (width - this.p.x);
        this.v.x *= -1;
      }
      else if (this.p.y < 0) {
        this.p.y = -this.p.y;
        this.v.y *= -1;
      }
      else if (this.p.y > height) {
        this.p.y = height - (height - this.p.y);
        this.v.y *= -1;
      }
    }
    
    
    
    if(mouseIsPressed) {
      let x = p5.Vector.sub(mouse, this.p);
      this.v.add(x.setMag(1));
      
    }
    else {
      if (gravity) {
        this.v.add(0, 0.5);
      }
    }
    
    this.v.mult(0.99);
    this.p.add(this.v);
    
    circle(this.p.x, this.p.y, 10);
  }
}


