var deg;
var speed;
var finalDeg;
function startSpin() {
    var dadJoke;
    switch (Math.ceil(Math.random() * 8)) {
        case 1:
            dadJoke = "I have the heart of a lion... and a lifetime ban from the San Diego Zoo.";
            break;
        case 2:
            dadJoke = "Why was ten scared of seven? Because seven ate nine.";
            break;
        case 3:
            dadJoke = "What do you call a group of disorganized cats? A cat-tastrophe.";
            break;
        case 4:
            dadJoke = "Where does batman go to the bathroom? The batroom.";
            break;
        case 5:
            dadJoke = "How do locomotives know where they're going? Lots of training";
            break;
        case 6:
            dadJoke = "I wear a stethoscope so that in a medical emergency I can teach people a valuable lesson about assumptions.";
            break;
        case 7:
            dadJoke = "I really want to buy one of those supermarket checkout dividers, but the cashier keeps putting it back.";
            break;
        case 8:
            dadJoke = "My dog used to chase people on a bike a lot. It got so bad I had to take his bike away.";
            break;
    }
    document.getElementById("text").innerHTML = dadJoke;
    document.getElementById("butt").style.display = "none";
    deg = Math.random() * 45 - 22.5;
    speed = 1000;
    finalDeg;
    spin();
}
function spin() {   
    if (speed < 1) {
        document.getElementById("butt").style = "";
        var audio = new Audio('bohe.mp3');
    }
    else {
        setTimeout(function() {
            spin();
        }, 1);
    }
    speed *= 0.995;
    finalDeg = deg + speed;
    document.getElementById("text").style.transform = "rotate(" + finalDeg + "deg)";
    
}
