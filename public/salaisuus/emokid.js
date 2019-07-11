
var deggo = 1;
function goLeft() {
  if (deggo <= 2.5) {
    goRight();
  }
  else {
    setTimeout(function() {
      goLeft();
    }, 10);
    deggo *= 0.99;
  }
  document.getElementById("pepe").style.transform = "rotate(" + deggo + "deg)"
}
function goRight() {
  document.title = Math.random();
  if (Math.ceil(Math.random() * 10) == 1) {
    var context = new AudioContext()
    var o = context.createOscillator()
    o.type = "sine"
    o.connect(context.destination)
    o.start()
    document.getElementById("pepe").style.transform  = "rotate(" + Math.ceil(Math.random() * 360) + "deg)";
    setTimeout(function() {
      goRight();
    }, 10);
  }
  else {
    if (deggo >= 357.5) {
      o.stop();
      goLeft();
    }
    else {
      setTimeout(function() {
        goRight();
      }, 10);
      deggo *= 1.01;
    }
    document.getElementById("pepe").style.transform = "rotate(" + deggo + "deg)"
  }
}
goLeft();