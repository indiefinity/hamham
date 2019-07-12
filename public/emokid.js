var context ;
var o;
var  gain;
var waveType;
var onMenu = false;
context = new AudioContext();
o = context.createOscillator();
gain= context.createGain();
console.log("lol")
function fuu() {
  setTimeout(function() {
    if (!onMenu) {
      fuu();
    }
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
  document.getElementById("back").style.display = "";
  onMenu = false;
  fuu();
}
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
function back() {
  onMenu = true;
  document.getElementById("sine").style.display = "";
  document.getElementById("triangle").style.display = "";
  document.getElementById("square").style.display = "";
  document.getElementById("sawtooth").style.display = "";
  document.getElementById("pepe").style.display = "none";
  document.getElementById("back").style.display = "none";
}

