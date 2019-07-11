var deggo = 500;
var context = new AudioContext()
var o = context.createOscillator()
o.connect(context.destination)
function fuu() {
  o.frequency.value = document.getElementById("pepe").value;
  setTimeout(function() {
    fuu();
  },  10)
}
function startWave() {
  o.start()
  fuu();
}
function startSine() {
  o.type = "sine"
  startWave()
}
function startSaw() {
  o.type = "sawtooth"
  startWave()
}
function startSqu() {
  o.type = "square"
  startWave()
}
function startTri() {
  o.type = "triangle"
  startWave()
}
