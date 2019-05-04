var guess;
guess = 0;
var oikee = 0;
console.log(oikee);
oikee = Math.round(Math.random() * 100);
console.log(oikee);
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