var ut = new SpeechSynthesisUtterance();
function joke() {
    $.ajax({
        url: 'https://icanhazdadjoke.com/',
        beforeSend: function(xhr) {
            xhr.setRequestHeader("Accept", "application/json");
        }, success: function(data) {
            console.log(data);
            document.getElementById("papa").innerHTML = data.joke;
            ut.text = data.joke + " hahahahahahaha";
            if (Math.floor(Math.random() * 4) == 0) {
                ut.text = ut.text + " why aren't you laughing.";
            };
            window.speechSynthesis.cancel(ut);
            window.speechSynthesis.speak(ut);
        }
    });
};


var red = 255;
var green = 0;
var blue = 0;

var fade = setInterval(function(){
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
},10);
