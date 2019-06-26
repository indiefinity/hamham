function thing() {
  document.getElementById("pepe").style.top = Math.ceil(Math.random() * 250) + "px";
  document.getElementById("pepe").style.left = Math.ceil(Math.random() * 250) + "px";
  setTimeout(function() {
    thing();
  }, 100);
}
thing();