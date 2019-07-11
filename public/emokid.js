var frequency;
var context;
var o;
function fuu() {
  frequency = Math.ceil(Math.random() * 500 )+ 500;
  context = new AudioContext();
  o = context.createOscillator();
  o.type = "sawtooth";
  o.connect(context.destination);
  o.frequency.value = frequency;
  o.start();
}
function notFuu() {
  window.close();
}