
var balls = [];
function setup() {
    createCanvas(innerWidth, innerHeight);
    background(0);
    angleMode(DEGREES);
    noStroke();
    
    
    for(var i = 0; i < 1000; i++) {
        balls[i] = new Ball();
    }
};

function draw() {
    colorMode(RGB);
    background(0, 25);
    
    for(var i = 0; i < balls.length; i++) {
        balls[i].update();
        balls[i].draw();
    }
<<<<<<< HEAD
    
}
=======
};
>>>>>>> parent of 07eeb59... ms paint is old


class Ball {
    constructor() {
        this.x = random(width);
        this.y = random(height);
<<<<<<< HEAD
        this.s = random(10,40);
        this.d = random(360);
        this.v = random(0,10);

        this.c = [this.r, this.g, this.b];
    }

    update() {
        this.d += random(-22.5, 22.5);
        this.x += this.v * sin(this.d);
        this.y += this.v * cos(this.d);
        this.v += random(-0.5, 0.5);
        if (this.x < 0 || this.x > width || this.y < 0 || this.y > height) {
            this.d += 180;
        }




    }

    draw() {
        
        colorMode(HSB);
        fill(map(this.v % 10, 0, 10, 0, 255), 255, 255)
        circle(this.x,this.y,this.s);
    }
}
=======
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
>>>>>>> parent of 07eeb59... ms paint is old
