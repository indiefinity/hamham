let balls = [];
function setup() {
    createCanvas(600,400);
    for (let i = 0; i < 1000; i++) {
        balls[i] = new Ball();
    }
}

function draw() {
    background(0);
    for (let i = 0; i < balls.length; i++) {
        balls[i].move();
        balls[i].show();
    }
}

function mouseDragged() {
    for (let i = 0; i < balls.length; i++) {
        balls[i].click(mouseX, mouseY);
    }
} 

class Ball {
    constructor() {
        this.x = random(width);
        this.y = random(height);
        this.r = random(10, 25);
        this.a = 10;
    }
    
    click(x, y) {
        let d = dist(x, y, this.x, this.y)
        if (d < this.r) {
            this.a = 100;
        }
    }
    

    move() {
        this.x += random(-2.5, 2.5);
        this.y += random(-2.5, 2.5);
    }

    show() {
        if (this.a > 10) {
            this.a -= 0.25
        }
    
        noStroke();
        fill(255, this.a)
        ellipse(this.x, this.y, this.r*2);
    }
}