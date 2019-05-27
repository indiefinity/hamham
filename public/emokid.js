var bohe = new Audio("bohe.mp3")
function sound() {
    bohe.pause();
    bohe.currentTime = 0;
    bohe.play();
}
var red = 255;
var green = 0;
var blue = 0;
function lol() {
    if (red > 0 && blue == 0) {
        red--;
        green++;
    }
    else if (green > 0) {
        green--;
        blue++;
    }
    else if (blue > 0) {
        blue--;
        red++;
    }
    document.body.style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue +")";
    setTimeout(function(){
        lol();
    }, 10);
}
lol();
