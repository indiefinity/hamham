var deg;
var speed;
var finalDeg;
function startSpin() {
    document.getElementById("butt").style.display = "none";
    deg = Math.random() * 45 - 22.5;
    speed = 1000;
    finalDeg;
    spin();
}
function spin() {   
    if (speed < 1) {
        document.getElementById("butt").style.display = "block";
        var audio = new Audio('bohe.mp3');
    }
    else {
        setTimeout(function() {
            spin();
        }, 1);
    }
    speed *= 0.995;
    finalDeg = deg + speed;
    document.getElementById("text").style.transform = "rotate(" + finalDeg + "deg)";
}