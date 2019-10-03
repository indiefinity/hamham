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
beep();