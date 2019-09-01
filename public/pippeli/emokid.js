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
}
function fuu() {
    document.getElementById("napi").style.display = "none";
    setTimeout(function() {
        fuu();
    }, document.getElementById("beepFreqBlank").value);
    play(document.getElementById("beepFreq").value, document.getElementById("freq").value, "square");
}