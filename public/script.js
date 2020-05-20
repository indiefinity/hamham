var balls = [];
function setup() {
    createCanvas(innerWidth, innerHeight);
    background(0);
    for(var i = 0; i < 100; i++) {
        balls[i] = new Ball();
    }
}

function moreballsplease(num) {
    for(var i = 0; i < num; i++) {
        balls[i] = new Ball();
    }
}

function draw() {
    background(0, 25);
    noStroke();
    for(var i = 0; i < balls.length; i++) {
        balls[i].update();
        balls[i].draw();
    }
    
}


class Ball {
    constructor() {
        this.x = random(width);
        this.y = random(height);
        this.s = random(10,40);
        this.d = random(PI * 2);
        this.v = random(1,10);
        this.r = 255;
        this.g = 0;
        this.b = 0;
        this.c = [this.r, this.g, this.b];
    }

    update() {
        this.d += random(-PI/8, PI/8);
        this.x += this.v * sin(this.d);
        this.y += this.v * cos(this.d);
        this.v += random(-0.1, 0.1);
        if (this.x < 0 || this.x > width || this.y < 0 || this.y > height) {
            this.d += PI;
        }

        if (this.r > 0 && this.b == 0) {
            this.r -= this.v/8;
            this.g += this.v/8;
        }
        else if (this.g > 0) {
            this.g -= this.v/8;
            this.b += this.v/8;
        }
        else if (this.b > 0) {
            this.b -= this.v/8;
            this.r += this.v/8;
        };
        if (this.r > 255) {this.r = 255};
        if (this.r < 0) {this.r = 0};
        if (this.g > 255) {this.g = 255};
        if (this.g < 0) {this.g = 0};
        if (this.b > 255) {this.b = 255};
        if (this.b < 0) {this.b = 0};
        this.c = [this.r, this.g, this.b];








    }

    draw() {
        fill(this.c)
        circle(this.x,this.y,this.s);
    }
}
