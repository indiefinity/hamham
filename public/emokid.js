function fuu() {
  var context = new AudioContext()
  var o = context.createOscillator()
  var  gain= context.createGain()
  o.connect(gain)
  gain.connect(context.destination)
  o.type = "triangle"
  o.frequency.value = document.getElementById("pepe").value;
  o.start(0)
  gain.gain.linearRampToValueAtTime(0, 0.75)
  setTimeout(function() {
    fuu();
  }, 1000)
}
function start() {
  document.getElementById("nappula").style.display = "none";
  document.getElementById("pepe").style.display = "";
  fuu();
}
