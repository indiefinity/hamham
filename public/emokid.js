var blockY = 50;
var dir = 0;


var c = document.getElementById("peli");
var ctx = c.getContext("2d");


var tonks = setInterval(function() {

    c.width = c.width;
    ctx.fillStyle = "#000000";
    ctx.fillRect(100, c.height - blockY, 50, 50);
}, 10);
function jump() {
    if (blockY < 500) {
        var velli = 10;
        var up = setInterval(function() {
            blockY += velli;
            velli *= 0.95;
            if (velli < 0.1) {
                console.log(velli)
                clearInterval(up);
                var down = setInterval(function() {
                    blockY -= velli;
                    velli *= 1.05;
                    if (blockY < 50) {
                        console.log(velli);
                        clearInterval(down);
                        blockY = 50;
                    };
                }, 10);
            };
        }, 10);
    };
};
window.addEventListener( "keypress", doKeyDown, false);
c.addEventListener( "keydown", doKeyDown, true);
function doKeyDown(e) {
    console.log(e.keyCode);
    switch(e.keyCode) {
        case 32:
            jump();
            break;
    };
};