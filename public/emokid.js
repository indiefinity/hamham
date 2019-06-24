var deg = 1.0;
function spin() {
    document.getElementById("rotating").style.transform = "rotate(" + deg + "deg)";
    setTimeout(function() {
        spin();
    }, 1);
    deg = deg * 1.005;
}
spin();