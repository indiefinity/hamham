var context = new AudioContext(),
    oscillator,
    waveType;

function play(time, freq, type) {
    oscillator = context.createOscillator();
    oscillator.connect(context.destination);
    oscillator.frequency.value = freq;
    oscillator.type = type;
    oscillator.start(context.currentTime);
    oscillator.stop(context.currentTime + time / 1000);
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
    if (beepOn) {play(document.getElementById("beepLength").value, document.getElementById("freq").value, "sine");}
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
