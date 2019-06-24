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
var finalDeg;
function spin() {
    speed *= 0.995;
    finalDeg = deg + speed;
    document.getElementById("rotating").style.transform = "rotate(" + finalDeg + "deg)";
    if (speed < 1) {
        valmis();
    }
    else {
        setTimeout(function() {
            spin();
        }, 1);
    }

}
spin();