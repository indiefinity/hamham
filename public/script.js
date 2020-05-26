let balls = [];
function setup() {
    createCanvas(innerWidth, innerHeight);
    background(0);
    angleMode(DEGREES);
    for (let i = 0; i < 1000; i++) {
        balls[i] = new Ball();
        console.log("aa")
    }
}
function draw() {
    colorMode(RGB)
    background(0);
    for (let i = 0; i < balls.length; i++) {
        balls[i].move();
        balls[i].draw();
    }
    console.log(balls[0].x, balls[0].y, balls[0].v)
}

class Ball {
    constructor() {
        this.r = 15;
        this.v = 0.1;
        this.x = random(this.r, width - this.r);
        this.y = random(this.r, height - this.r);
        this.d = random(360);
    }
    draw() {
        noStroke();
        colorMode(HSB);
        fill(map(this.v, 0, 20, 0 , 255) % 255, 255, 255);
        circle(this.x, this.y, this.r*2);
    }
    move() {
        

        this.v *= sqrt(dist(this.x, this.y, mouseX, mouseY));
        this.v *= 0.94
        if (this.v < 0.1) {this.v = 0.1}
        this.x += this.v * cos(this.d);
        this.y += this.v * sin(this.d);
        if (this.x - this.r < 0 ||
            this.x + this.r > width) {this.d = 180 - this.d;};

        if (this.y - this.r < 0 ||
            this.y + this.r > height) {this.d = 360 - this.d;};
    }
}
