let c = document.getElementById("pepe");
let ctx = c.getContext("2d");

c.width = window.innerWidth;
c.height = window.innerHeight;

let char = {};
char.w = c.height * 0.1;
char.h = c.height * 0.1;
char.x = c.width / 2 - char.w / 2;
char.y = c.height / 2 - char.h / 2;
char.v = 1.0;
char.d = Math.floor(Math.random() * Math.PI * 2);

var aa = new Audio("aa.m4a");


setInterval(function() {
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(char.x, char.y, char.w, char.h);
    char.x += (char.v - 1) * Math.sin(char.d);
    char.y += (char.v - 1) * Math.cos(char.d);
    if (char.v > 1) {char.v *= 0.9;} else {char.v = 1.0}
    

}, 1000 / 60);
document.onmousedown = function() {
    aa.play();
    aa.currentTime = 0;
    char.v = 20.0;
    char.d = Math.random() * Math.PI * 2;
};