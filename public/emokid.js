var ut = new SpeechSynthesisUtterance();
function joke() {
    $.ajax({
        url: 'https://icanhazdadjoke.com/',
        beforeSend: function(xhr) {
            xhr.setRequestHeader("Accept", "application/json");
        }, success: function(data){
            console.log(data);
            if (Math.floor(Math.random() * 5) == 0) {
                ut.text = `My daughter woke me around 11:50 last night. My wife and I had picked her up from her friend Sally's birthday party, brought her home, and put her to bed. My wife went into the bedroom to read while I fell asleep watching the Braves game."Daddy," she whispered, tugging my shirt sleeve. "Guess how old I'm going to be next month.""I don't know, beauty," I said as I slipped on my glasses. "How old?"She smiled and held up four fingers.It is 7:30 now. My wife and I have been up with her for almost 8 hours. She still refuses to tell us where she got them.`;
                ut.pitch = 0.5;
                clearInterval(fade);
                document.body.style.backgroundColor = "rgb(0, 0, 0)";
                document.getElementById("pepe").onclick = "";
            }
            else {
                ut.text = data.joke + " hahahahahahaha";
                if (Math.floor(Math.random() * 4) == 0) {
                    ut.text = ut.text + " why aren't you laughing.";
                };
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
