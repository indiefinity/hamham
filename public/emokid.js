var c = document.getElementById("peli");
var ctx = c.getContext("2d");

c.width = window.innerWidth - 10;
c.height = window.innerHeight - 10;

var char = {};
char.width = 50;
char.height = 50;
char.x = c.width / 2 - char.width / 2;
char.y = c.height / 2 - char.height / 2;

console.log(char)

var verticalCenter = c.height / 2;

var up = true;

ctx.fillStyle = "blue";
ctx.fillRect(0, 0, c.width, c.height);

var SU = setInterval(function() {
    c.width = c.width;
    ctx.fillStyle = "#000000";
    ctx.fillRect(char.x, char.y, char.width, char.height);
    console.log("SU")
}, 20)

function switchSides() {
    if (up) {
        up = false;
        char.y = verticalCenter + (c.height / 4 - char.height / 2);
    } 
    else {
        up = true;
        char.y = verticalCenter - (c.height / 4 - char.height / 2);
    }

}


window.addEventListener("keydown", function(e) {
    console.log(e.keyCode);
    switch(e.keyCode) {
        case 32:
            switchSides();
            break;
    }
});