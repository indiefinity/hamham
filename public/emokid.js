var context ;
var o;
var  gain;
var waveType;
function fuu() {
  setTimeout(function() {
    fuu();
  }, 1000)
  context = new AudioContext();
  o = context.createOscillator();
  gain= context.createGain();
  o.type = waveType;
  o.connect(gain);
  gain.connect(context.destination);
  o.frequency.value = document.getElementById("pepe").value;
  o.start(0);
  
  console.log(o.type)
  gain.gain.linearRampToValueAtTime(0, 0.25);
}
function start() {
  document.getElementById("sine").style.display = "none";
  document.getElementById("triangle").style.display = "none";
  document.getElementById("square").style.display = "none";
  document.getElementById("sawtooth").style.display = "none";
  document.getElementById("pepe").style.display = "";
}
fuu();
function sine()  {
  waveType = "sine";
  start();
}
function triangle()  {
  waveType = "triangle";
  start();
}
function square()  {
  waveType = "square";
  start();
}
function sawtooth()  {
  waveType = "sawtooth";
  start();
}



