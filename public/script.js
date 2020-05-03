function setup() {
    createCanvas(600,400);
    background(0)
};

function draw() {
    background(0, 0, 0, 6);
    noStroke();
    for (let i = 0; i < 100; i++) {
        fill(color(255, 255-map(i, 0, 100, 0, 255), 255-map(i, 0, 100, 0, 255)));
        ellipse(map(mouseX, 0, width, i*i, width-(i*i)), (i*4), 25, 25);
    };
};