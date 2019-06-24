function valmis() {
    setTimeout(function() {
        document.getElementById("rotating").innerHTML = "SPIN THE WHEEL MY";
        setTimeout(function() {
            document.getElementById("rotating").innerHTML = "SPIN THE WHEEL MY BABY";
        }, 250);
    }, 500);
}
var deg = 10000.0;
function spin() {
    document.getElementById("rotating").style.transform = "rotate(" + deg + "deg)";
    deg = deg * 0.995;
    if (deg > 0.5) {
        setTimeout(function() {
            spin();
        }, 1);
    }
    else {
        valmis();
    }
}
spin();