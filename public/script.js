let balls = [];
function setup() {
    createCanvas(600,400);
    angleMode(DEGREES);
    for (let i = 0; i < 25; i++) {
        balls[i] = new Ball();
    }
}

function draw() {
    background(0);
    for (let i = 0; i < balls.length; i++) {
        balls[i].move();
        balls[i].draw();
    }
}

class Ball {
    constructor() {
        
        this.r = 15;
        this.x = random(this.r, width - this.r);
        this.y = random(this.r, height - this.r);
        this.d = random(360);
    }
    draw() {
        noStroke();
        circle(this.x, this.y, this.r*2);
    }
    move() {
        this.x += cos(this.d);
        this.y += sin(this.d);

        if (this.x - this.r < 0 ||
            this.x + this.r > width) {this.d = 180 - this.d;};

        if (this.y - this.r < 0 ||
            this.y + this.r > height) {this.d = 360 - this.d;};
    }
}