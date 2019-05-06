var guessScore;
var guessCorrect;

var mathNum1;
var mathNum2;

function goToMenu() {
    document.getElementById("menu").style.display = "block";
    document.getElementById("guess").style.display = "none";
    document.getElementById("math").style.display = "none";
}

function startGuess() {
    guessScore = 0
    guessCorrect = Math.ceil(Math.random() * 100);
    document.getElementById("guessPepe").innerHTML = "Veikkaa numero";
    document.getElementById("menu").style.display = "none";
    document.getElementById("guess").style.display = "block";
}
function guessButton() {
    if (document.getElementById("guessInput").value == guessCorrect) {
        document.getElementById("guessPepe").innerHTML = "Hyvä! Arvasit väärin " + guessScore + " kertaa";
        setTimeout(function() {
            startGuess();
        },2000);
    }
    else if (Number(document.getElementById("guessInput").value) > guessCorrect) {
        document.getElementById("guessPepe").innerHTML = "pienempi";
    }
    else if (Number(document.getElementById("guessInput").value) < guessCorrect) {
        document.getElementById("guessPepe").innerHTML = "suurempi";
    }
    else {
        document.getElementById("guessPepe").innerHTML = "mitä vittua";
    }
    guessScore++;

}
function startMath() {
    document.getElementById("menu").style.display = "none";
    document.getElementById("math").style.display = "block";
    mathNum1 = Math.ceil(Math.random() * 10);
    mathNum2 = Math.ceil(Math.random() * 10);
    document.getElementById("mathPepe").innerHTML = mathNum1 + "*" + mathNum2;
}
function mathButton() {
    if (Number(document.getElementById("mathInput").value) == mathNum1 * mathNum2) {
        mathNum1 = Math.ceil(Math.random() * 10);
        mathNum2 = Math.ceil(Math.random() * 10);
        setTimeout(function() {
            document.getElementById("mathPepe").innerHTML = mathNum1 + "*" + mathNum2;
        },500);
        document.getElementById("mathPepe").innerHTML = "hyvä";
    }
    else {
        setTimeout(function() {
            document.getElementById("mathPepe").innerHTML = mathNum1 + "*" + mathNum2;
        },500);
        document.getElementById("mathPepe").innerHTML = "oot huono";
    }
}