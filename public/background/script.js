let balls = [];

function setup() {
  angleMode(DEGREES);
  createCanvas(innerWidth, innerHeight);
  for (let i = 0; i < 25; i++) {
    balls[i] = new Ball(i);
  }
  

}

function draw() {
  background(0)

  for (let i = 0; i < balls.length; i++) {
    balls[i].do();
  }
}


class Ball {
  constructor(id) {
    this.id = id;
    this.p = createVector(random(width), random(height));
    this.m = createVector(1,0).setHeading(random(360));
  }

  do() {
    this.p.add(this.m);

    stroke(255, 255, 255);
    strokeWeight(10)
    point(this.p.x, this.p.y)

    strokeWeight(2);
    for (let i = this.id + 1; i < balls.length; i++) {
      let dist = this.p.dist(balls[i].p)
      console.log(dist)
      stroke(255, 255, 255, map(dist, 0, 300, 255, 0))
      line(this.p.x, this.p.y, balls[i].p.x, balls[i].p.y)
    }

    if(this.p.x < -300) {this.p.x = width + 300}
    else if(this.p.x > width + 300) {this.p.x = -300};
    if(this.p.y < -300) {this.p.y = height + 300}
    else if(this.p.y > height + 300) {this.p.y = -300};
  }
}