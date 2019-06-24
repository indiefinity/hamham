function valmis() {
    setTimeout(function() {
        document.getElementById("rotating").innerHTML = "SPIN THE WHEEL MY";
        setTimeout(function() {
            document.getElementById("rotating").innerHTML = "SPIN THE WHEEL MY BABY";
        }, 250);
    }, 500);
}
var deg = Math.random() * 180 - 90;
var speed = 10000;
var deggo;
function spin() {
    speed *= 0.995;
    deggo = deg + speed;
    document.getElementById("rotating").style.transform = "rotate(" + deggo + "deg)";
    setTimeout(function() {
        spin();
    }, 1);
}
spin();