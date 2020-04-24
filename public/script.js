c = document.getElementById("pepe");
ctx = c.getContext("2d");

c.width = window.innerWidth;
c.height = window.innerHeight;
w = c.width;
h = c.height;

redCar = document.getElementById("redCar");
car = {
    "w":h/25,
    "h":h/25,
    "d":0
};
car.x = w/2 - (car.w/2);
car.y = h/2 - (car.h/2);
var rawSpeed = 1
update = setInterval(function() {
    var speed = h*rawSpeed/1000
    console.log(rawSpeed + ", " + speed)
    if (rawSpeed > 1) {rawSpeed *= 0.99} else {rawSpeed = 1}


    if (forward) {
        car.x += speed * Math.cos(car.d);
        car.y += speed * Math.sin(car.d);
    };
    if (back) {    
        car.x -= speed * Math.cos(car.d);
        car.y -= speed * Math.sin(car.d);
    };
    if (left && forward || back) {
        car.d -= speed/75;
    };
    if (right && forward || back) {
        car.d += speed/75;
    };


    c.width = c.width;
    ctx.translate(car.x + (car.w / 2), car.y + (car.h / 2));
    ctx.rotate(car.d);
    ctx.drawImage(redCar, -car.w / 2, -car.h / 2, car.w, car.h);
    ctx.rotate(-car.d);
    ctx.translate(-(car.x + (car.w / 2)), -(car.y + (car.h / 2)));
}, 1 / 24);


var forward, left, right, back;


document.body.onkeydown = function(e){
    console.log(e.key);
    if(e.key == "w"){forward = true;};
    if(e.key == "a"){left = true;};
    if(e.key == "s"){back = true;};
    if(e.key == "d"){right = true;};
    if(e.key == " "){rawSpeed = 5;};
};
document.body.onkeyup = function(e){
    console.log(e.key);
    if(e.key == "w"){forward = false;};
    if(e.key == "a"){left = false;};
    if(e.key == "s"){back = false;};
    if(e.key == "d"){right = false;};
};