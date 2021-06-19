let balls = [];
let mouse;
let ballCount = Math.pow(2,3);
let frameCount = 0;

function setup() {
  createCanvas(innerWidth, innerHeight);
  noStroke();
  angleMode(DEGREES);
  textAlign(CENTER);
  textSize(50);

  balls = [];
  
  for (let i = 0; i < ballCount; i++) {
    balls[i] = new Ball(createVector(random(width) / 2 + width / 4,
    random(height) / 2 + height / 4),
    createVector(random(5) - 2.5, random(5) - 2.5), i);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


let tutorial = [
  "Hold mouse to atract balls to your cursor",
  "Use up and down arrows to manage the number of balls",
  "Press [B] to toggle borders",
  "Press [G] to toggle gravity",
  "Press [S] to toggle springy balls (laggy)"
]

function draw() {
  background(0);
  mouse = createVector(mouseX, mouseY);

  
  colorMode(HSB);
  for (let i = 0; i < balls.length; i++) {
    balls[i].do();
  }  
  
  colorMode(RGB);
  strokeWeight(3)
  if (frameCount < tutorial.length*4*60) {
    if (Math.floor(frameCount / (60)) % 4 == 0) {
      colorMode(RGB);
      fill(255, map(frameCount % 60, 0, 60, 0, 255));
      colorMode(HSB);
      stroke(frameCount % 255,255, map(frameCount % 60, 0, 60, 0, 255));
    }
    else if ( Math.floor(frameCount / (60)) % 4 == 3) {
      colorMode(RGB);
      fill(255, map(frameCount % 60, 0, 60, 255, 0));
      colorMode(HSB);
      stroke(frameCount % 255,255, map(frameCount % 60, 0, 60, 255, 0));
    }
    else {
      colorMode(RGB);
      fill(255);
      colorMode(HSB);
      stroke(frameCount % 255,255, 255)
    }
    
    
    text(tutorial[Math.floor(frameCount / (4*60))], 0, 40, width);
  }

  frameCount++;
}

let borders = true;
let gravity = false;
let springy = false;

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
        let mimic = balls[floor(random(balls.length))];
        balls[balls.length] = new Ball(p5.Vector.add(mimic.p,
        createVector(random(200) - 100, random(200) - 100)),
        createVector(mimic.v.x, mimic.v.y), balls.length);
      }
      break;

    case 40:
      console.log("ballcount decreased");
      if (ballCount > 1)
      ballCount /= 2;
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
      }
      break;

    case 83:
      if (springy) {
        console.log("springy off");
        springy = false;
      }
      else {
        console.log("springy on");
        springy = true;
      break;
    }
  }
}


class Ball {
  constructor(_p, _v, _id) {
    this.p = _p;
    this.v = _v;
    this.id = _id;
  }

  do() {
    if(springy) {
      strokeWeight(2);
      for (let i = 0; i < balls.length; i++) {
        if (i != this.id) {
          let dist = this.p.dist(balls[i].p)
          colorMode(RGB)
          stroke(255, 255, 255, map(dist, 0, 200, 127.5, 0))
          colorMode(HSB)
          line(this.p.x, this.p.y, balls[i].p.x, balls[i].p.y)
  
          this.v.add(p5.Vector.sub(balls[i].p, this.p).setMag(100/pow(dist+10, 2)))
        }

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

    if (borders) {
      if (this.p.x <= 0) {
        this.p.x = -this.p.x % width;
        this.v.x *= -1;
      }
      else if (this.p.x >= width) {
        this.p.x = width - ((this.p.x - width) % width);
        this.v.x *= -1;
      }
      if (this.p.y <= 0) {
        this.p.y = -this.p.y % height;
        this.v.y *= -1;
      }
      else if (this.p.y >= height) {
        this.p.y = height - ((this.p.y - height) % height);
        this.v.y *= -1;
      }
    }

    this.v.mult(0.99);
    this.p.add(this.v);

    stroke(map(this.v.mag(), 0, 50, 0, 255),255,255);
    strokeWeight(10)
    point(this.p.x, this.p.y)
    
    
    



  }
}
