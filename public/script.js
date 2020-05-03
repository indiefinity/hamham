let balls = [];
function setup() {
    createCanvas(600,400);
    for (let i = 0; i < 1000; i++) {
        balls[i] = new Ball();
    }
};

function draw() {
    background(0);
    for (let i = 0; i < balls.length; i++) {
        balls[i].move();
        balls[i].show();
    }
};


class Ball {
    constructor() {
        this.x = random(width);
        this.y = random(height);
        this.r = random(10, 50);
    };
    
    move() {
        this.x += random(-5, 5);
        this.y += random(-5, 5);
    };

    show() {
        noStroke();
        fill(255, 10)
        ellipse(this.x, this.y, this.r);
    };
}