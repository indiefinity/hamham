var guessScore;
var guessCorrect;
function goToMenu() {
    document.getElementById("menu").style.display = "block";
    document.getElementById("guess").style.display = "none";
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
            goToMenu();
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