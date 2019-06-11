function sound() {
    var bohe = new Audio(Math.ceil(Math.random() * 3) + ".mp3")
    bohe.pause();
    bohe.currentTime = 0;
    bohe.play();
    document.getElementById("pappa").src = "aak.png";
    document.getElementById("pappa").height = 125;
    setTimeout(function(){
        document.getElementById("pappa").src = "iik.png";
        document.getElementById("pappa").height = 100;
    }, 1000);
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
