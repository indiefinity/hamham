var left = 101;
var yipii = new Audio("yipii.mp3")
function fuu() {
    if (left <= 1) {
        yipii.play()
        document.getElementById('pepe').innerHTML = 'good';
    }
    else {
        left--;
        document.getElementById('pepe').innerHTML = left;
    }
}