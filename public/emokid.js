var deggo = 500;
var context = new AudioContext()
var o = context.createOscillator()
o.type = "sawtooth"
o.connect(context.destination)
function fuu() {
  o.frequency.value = document.getElementById("pepe").value;
  setTimeout(function() {
    fuu();
  },  10)
}
function start() {
  document.getElementById("papa").style.display = "none";
  document.getElementById("pepe").style.display = "";
  o.start()
  fuu();
}

  
