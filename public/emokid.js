var guess;
guess = 0;
var oikee;
oikee = Math.ceil(Math.random * 100);
function check() {
    if (document.getElementById('tonttu').value == oikee) {
        document.getElementById('pepe').innerHTML = 'Good, your guesses: ' + guess;
    }
    else if (document.getElementById('tonttu').value > oikee) {
        document.getElementById('pepe').innerHTML = 'too big';
    }
    else if (document.getElementById('tonttu').value < oikee) {
        document.getElementById('pepe').innerHTML = 'too small';
    }
}