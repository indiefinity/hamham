function setup() {
    createCanvas(600,400);
    background(0)
};

function draw() {
    background(0, 0, 0, 6);
    noStroke();
    for (let i = 0; i < 100; i++) {
        ellipse(map(mouseX, 0, width, i*i, width-(i*i)), (i*5), 25, 25);
    };
};