


var ut = new SpeechSynthesisUtterance();
function joke() {
    $.ajax({
        url: 'https://icanhazdadjoke.com/',
        beforeSend: function(xhr) {
            xhr.setRequestHeader("Accept", "application/json");
        }, success: function(data){
            console.log(data);
            ut.text = data.joke;
            window.speechSynthesis.cancel(ut);
            window.speechSynthesis.speak(ut);
        }
    });
};


var red = 255;
var green = 0;
var blue = 0;

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
    };

    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    
    setTimeout(function(){
        lol();
    }, 10);
};
lol();