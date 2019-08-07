var carX = 200; 
var carY = 100;
var dir = 0;


var c = document.getElementById("peli");
var ctx = c.getContext("2d");


var tonks = setInterval(function() {

    c.width = c.width;
    ctx.fillStyle = "#000000";
    ctx.fillRect(carX, carY, 10, 10);
}, 10);

window.addEventListener( "keypress", doKeyDown, false )
c.addEventListener( "keydown", doKeyDown, true);
function doKeyDown(e) {
    console.log(e.keyCode)
    switch(e.keyCode) {
        case 100:
            if (dir == 3) {dir = 0;}
            else {dir++;}
            break;
        case 97:
            if (dir == 0) {dir = 3;}
            else {dir--;}
            break;
        case 119:
            switch (dir) {
                case 0:
                    carY -= 10;
                    break;
                case 1:
                    carX += 10;
                    break;
                case 2:
                    carY += 10;
                    break;
                case 3:
                    carX -= 10;
                    break;
            }
            break;
    }
}


