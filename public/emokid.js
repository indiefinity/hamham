var num1;
var num2;
function startMath() {
  num1 = Math.ceil(Math.random() * 10);
  num2 = Math.ceil(Math.random() * 10);
  document.getElementById("pepe").innerHTML = (num1 + "*" + num2);
}
startMath();
var input = document.getElementById("inp");
input.addEventListener("keydown", function(event) {

  if (event.keyCode === 13) {
    event.preventDefault();

    if (Number(input.value) == num1 * num2) {
      document.getElementById("pepe").innerHTML = "gud";
      setTimeout(function() {
      document.getElementById("pepe").innerHTML = num1 + "" + num2;
    },500);

  }
});