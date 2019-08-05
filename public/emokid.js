var ut = new SpeechSynthesisUtterance();
function speak(what, speed) {
    ut.rate = speed;
    ut.text = what;
    window.speechSynthesis.cancel(ut);
    window.speechSynthesis.speak(ut);
}

var red = 255;
var blue = 0;
var green = 0;
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