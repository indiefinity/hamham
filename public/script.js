c = document.getElementById("pepe");
ctx = c.getContext("2d");

c.width = window.innerWidth;
c.height = window.innerHeight;
w = c.width;
h = c.height;

redCar = document.getElementById("redCar");
car = {
    "w":h/20,
    "h":h/20,
    "d":0
};
car.x = w/2 - (car.w/2);
car.y = h/2 - (car.h/2);
var speed = 0;
var slide;






fullWindowState = true;




update = setInterval(function() {
    fullWindowState = true;
    document.body.scrollTop = 0;

    if (car.x < 0) {car.x = 0};
    if (car.x + car.w > w) {car.x = w - car.w};
    if (car.y < 0) {car.y = 0};
    if (car.y + car.h > h) {car.y = h - car.h};
    if ((speed != 0 && !forward && !back) || speed > 2) {speed *= 0.99;};
    if (forward && speed < 2) {
        if (speed < 0.25) {speed = 0.25;} else {speed *= 1.025;};
    };
    if (back) {
        if (speed > -0,25) {speed = -0.25;} else {speed *= 1.025;};
    };
    if (left) {car.d -= speed/75;};
    if (right) {car.d += speed/75;};
    if (speed < 3) {slide = car.d}
    car.x += h*speed/1000 * Math.cos(slide);
    car.y += h*speed/1000 * Math.sin(slide);



    c.width = c.width;



    ctx.translate(car.x + (car.w / 2), car.y + (car.h / 2));
    ctx.rotate(car.d);
    ctx.drawImage(redCar, -car.w / 2, -car.h / 2, car.w, car.h);
    ctx.rotate(-car.d);
    ctx.translate(-(car.x + (car.w / 2)), -(car.y + (car.h / 2)));
}, 1 / 24);

var forward, left, right, back;

document.body.onkeydown = function(e){
    if(e.key == "w"){forward = true;};
    if(e.key == "a"){left = true;};
    if(e.key == "s"){back = true;};
    if(e.key == "d"){right = true;};
    if(e.key == " "){speed = 7.5;};
};
document.body.onkeyup = function(e){
    if(e.key == "w"){forward = false;};
    if(e.key == "a"){left = false;};
    if(e.key == "s"){back = false;};
    if(e.key == "d"){right = false;};
};




