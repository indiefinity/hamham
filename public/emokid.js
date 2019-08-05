var ut = new SpeechSynthesisUtterance();
function joke() {
    ut.text = `Empty spaces, what are we living for?
    Abandoned places, I guess we know the score
    On and on, does anybody know what we are looking for?
    Another hero, another mindless crime
    Behind the curtain, in the pantomime
    Hold the line, does anybody want to take it anymore?
    The show must go on
    The show must go on
    Yeah
    Inside my heart is breaking
    My make-up may be flaking
    But my smile still stays on
    Whatever happens, I'll leave it all to chance
    Another heartache, another failed romance
    On and on, does anybody know what we are living for?
    I guess I'm learning (I'm learning), I must be warmer now
    I'll soon be turning (turning, turning, turning), 'round the corner now
    Outside the dawn is breaking
    But inside in the dark I'm aching to be free`;
    window.speechSynthesis.cancel(ut);
    window.speechSynthesis.speak(ut);
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
    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    setTimeout(function(){
        lol();
    }, 10);
}
lol();