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

    document.getElementById("jokediv").style = `background-color: rgb(${red}, ${green}, ${blue});`;
},10);