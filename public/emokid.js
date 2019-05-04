var guess;
guess = 0;
var oikee;
oikee = Math.ceil(Math.random * 100);
function check() {
    if (document.getElementByID('tonttu').value == oikee) {
        document.getElementById('pepe').innerHTML = 'Good, your guesses: ' + guess;
    }
    else if (documet.getElementByID('tonttu').value > oikee) {
        document.getElementById('pepe').innerHTML = 'too big';
    }
    else if (documet.getElementByID('tonttu').value < oikee) {
        document.getElementById('pepe').innerHTML = 'too smell';
    }
}