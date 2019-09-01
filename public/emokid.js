var c = document.getElementById("peli");
var ctx = c.getContext("2d");

c.width = window.innerWidth - 10;
c.height = window.innerHeight - 10;

var verticalCenter = c.height / 2;
var horizontalCenter = c.width / 2;
var char = {};
char.width = 50;
char.height = 50;
char.x = c.width / 2 + c.width / 4 - char.width / 2;
char.y = verticalCenter - c.height / 4 - char.height / 2;
var up = true;
console.log(char);

var spike = {};
spike.width = 50;
spike.height = 50;
spike.x = 0;
spike.y = verticalCenter - spike.height / 2;

var SU = setInterval(function() {
    c.width = c.width;
    ctx.fillStyle = "#000000";
    ctx.fillRect(char.x, char.y, char.width, char.height);
    ctx.fillStyle = "#ff0000";
    ctx.fillRect(spike.x, spike.y, spike.width, spike.height);
}, 10);

function switchSides() {
    if (up) {
        up = false;
        char.y = verticalCenter + c.height / 4 - char.height / 2;
    } else {
        up = true;
        char.y = verticalCenter - c.height / 4 - char.height / 2;
    };
};

window.addEventListener("keydown", function(e) {
    console.log(e.keyCode);
    switch(e.keyCode) {
        case 32:
            switchSides();
            break;
    };
});



var titanic = new Audio("titanic.m4a");
function loser() {
    titanic.play();
    clearInterval(SU);
    ctx.font = "50px Ubuntu";
    ctx.textAlign = "center";
    ctx.fillStyle = "#000000";
    ctx.fillText("You suck!", horizontalCenter, verticalCenter); 
}

var spikeMove = c.width / 50
var spikeUp;
var spikeBool = false;

var spikeInterval = setInterval(function() {
    console.log("spike interval")
    if (Math.floor(Math.random() * 3) == 0) {
        if (!spikeBool) {
            console.log("spike send")
            spikeBool = true;
            if (Math.floor(Math.random() * 2) == 0) {
                spike.y = verticalCenter - c.height / 4 - char.height / 2;
                spikeUp = true;
            } else {
                spike.y = verticalCenter + c.height / 4 - char.height / 2;
                spikeUp = false;
            }
            var spikeComing = setInterval(function() {
                spike.x += spikeMove;
                if (spike.x > char.x) {
                    console.log("spike is at the end");
                    if (spikeUp == up) {
                        console.log("fuufuu hävisit");
                        loser();
                    }
                    spike.x = 0;
                    clearInterval(spikeComing);
                    spikeBool = false;
                }
            }, 10)
        };
    };
}, 750);