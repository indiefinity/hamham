var c = document.getElementById("peli");
var ctx = c.getContext("2d");

c.width = window.innerWidth;
c.height = window.innerHeight;

var char = {};
char.width = 50;
char.height = 50;
char.x = c.width / 2 - char.width / 2;
char.y = c.height / 2 - char.height / 2;

console.log(char)
var SU = setInterval(function() {
    c.width = c.width;
    ctx.fillStyle = "#000000";
    ctx.fillRect(char.x, char.y, char.height, char.width);
    console.log("SU")
}, 20)
