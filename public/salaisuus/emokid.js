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
  if (deggo >= 357.5) {
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
goLeft();