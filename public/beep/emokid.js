var context = new AudioContext();
var oscillator;
var node = context.createGain();

function play() {
    oscillator = context.createOscillator();
    oscillator.connect(node);
    node.connect(context.destination);
    node.gain.value = document.getElementById("volume").value / 100;
    oscillator.frequency.value = document.getElementById("freq").value;
    oscillator.type = "sine";
    oscillator.start(context.currentTime);
    oscillator.stop(context.currentTime + document.getElementById("beepLength").value / 1000);
};
var beepOn = false;
function toggle() {
    if (beepOn) {
        beepOn = false;
    }
    else {
        beepOn = true;
    }
};

function beep() {
    setTimeout(function() {
        beep();
    }, 100000 / document.getElementById("beepFreq").value);
    if (beepOn) {
        play();
    }
};


var red = 255;
var green = 0;
var blue = 0;
beep();
var fade = setInterval(function(){
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
    };

    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
},10);
