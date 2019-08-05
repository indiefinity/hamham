var ut = new SpeechSynthesisUtterance();
function joke() {
    ut.text = `
    On May 28, 2016, a three-year-old boy climbed into a gorilla enclosure at the Cincinnati Zoo and Botanical Garden and was grabbed and dragged by Harambe, a 17-year-old Western lowland gorilla. Fearing for the boy's life, a zoo worker shot and killed Harambe. The incident was recorded on video and received broad international coverage and commentary, including controversy over the choice to kill Harambe. A number of primatologists and conservationists wrote later that the zoo had no other choice under the circumstances, and that it highlighted the danger of zoo animals in close proximity to humans and the need for better standards of care.
    `;
    window.speechSynthesis.cancel(ut);
    window.speechSynthesis.speak(ut);
}

var red = 255;
var blue = 0;
var green = 0;
function lol() {
    if (red > 0 && blue == 0) {
        red--;
        green++;
    }
    else if (green > 0) {
        green--;
        blue++;
    }
    else if (blue > 0) {
        blue--;
        red++;
    }
    document.body.style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue +")";
    setTimeout(function(){
        lol();
    }, 10);
}
lol();