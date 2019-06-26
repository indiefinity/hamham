function thing() {
  setTimeout(function() {
    thing();
  }, 1);
  document.getElementById("pepe").style.transform = "rotate(" + Math.ceil(Math.random() * 22.5 - 11.25) + "deg)"
}
thing();