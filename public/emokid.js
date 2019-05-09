var num1;
var num2;
function mathStart() {
  num1 = Math.ceil(Math.random() * 10);
  num2 = Math.ceil(Math.random() * 10);
  document.getElementById("pepe").innerHTML = num1 + "*" + num2;
}
mathStart();
document.getElementById("inputi")
.addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    if (Number(document.getElementById("inputi").value) == num1 * num2) {
      document.getElementById("pepe").innerHTML = "hyvä";
      setTimeout(function() {
        mathStart();
      }, 500);
    }
    else {
      document.getElementById("pepe").innerHTML = "huono";
      setTimeout(function() {
        mathStart();
      }, 500);
    }
    document.getElementById("inputi").value = "";
  }
});
