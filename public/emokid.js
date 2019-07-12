var context = new AudioContext(),
    oscillator,
    waveType;

function playOscillator(time, freq) {
    oscillator = context.createOscillator();
    oscillator.connect(context.destination);
    oscillator.frequency.value = freq;
    oscillator.type = waveType;
    oscillator.start(context.currentTime);
    oscillator.stop(context.currentTime + time / 1000);
}
function fuu() {
  document.getElementById("napi").style.display = "none";
  document.getElementById("pepe").style.display = "";
  document.getElementById("sine").style.display = "";
  document.getElementById("triangle").style.display = "";
  document.getElementById("square").style.display = "";
  document.getElementById("sawtooth").style.display = "";
  setInterval(function() {
    playOscillator(250, document.getElementById("pepe").value);
  },500);
}
function sine() {
  waveType = "sine";
}
function triangle() {
  waveType = "triangle";
}
function square() {
  waveType = "square";
}
function sawtooth() {
  waveType = "sawtooth";
}
