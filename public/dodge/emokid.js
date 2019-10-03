var c = document.getElementById("peli");
var ctx = c.getContext("2d");

c.width = window.innerWidth - 10;
c.height = window.innerHeight - 10;

var char = {};
char.width = c.width / 16;
char.height = c.width / 16;
char.x = c.width / 2 + c.width / 4 - char.width / 2;
char.y = c.height / 2 - c.height / 4 - char.height / 2;
var up = true;

var spike = {};
spike.width = c.width / 16;
spike.height = c.width / 16;
spike.x = 0;
spike.y = c.height / 2 - spike.height / 2;

var SU = setInterval(function() {
    c.width = c.width;
    ctx.drawImage(document.getElementById('iik'), char.x, char.y, char.width, char.height);
    if (spike.x != 0) {
        ctx.drawImage(document.getElementById('aak'), spike.x, spike.y, spike.width, spike.height);
    }
    
}, 5);

var velli = 0.025;
function switchSides() {
    if(char.y == c.height / 2 - c.height / 4 - char.height / 2 || char.y == c.height / 2 + c.height / 4 - char.height / 2) {
        
        if (up) {
            up = "kek";
            var switchInterval = setInterval(function() {
                char.y += velli * c.height; 
                if (char.y > c.height / 2 + c.height / 4 - char.height / 2) {
                    up = false;
                    clearInterval(switchInterval);
                    char.y = c.height / 2 + c.height / 4 - char.height / 2;
                }
            }, 5)
        } else {
            up = "kek";
            var switchInterval = setInterval(function() {
                char.y -= velli * c.height; 
                if (char.y < c.height / 2 - c.height / 4 - char.height / 2) {
                    up = true;
                    clearInterval(switchInterval);
                    char.y = c.height / 2 - c.height / 4 - char.height / 2;
                }
            }, 5)
        };
    };
};

window.addEventListener("mousedown", function() {
    switchSides();
    if(heIsALoser) {
        this.location.reload();
    }
});

var heIsALoser = false;
var titanic = new Audio("titanic.m4a");
function loser() {
    heIsALoser = true;
    titanic.play();
    clearInterval(SU);
    clearInterval(spikeInterval);
    ctx.font = `${c.width / 20}px Ubuntu`;
    ctx.textAlign = "center";
    ctx.fillStyle = "#000000";
    ctx.fillText("This is so sad!", c.width / 2, c.height / 2); 
}

var spikeMove = c.width / 125
var spikeUp;
var spikeBool = false;

var spikeInterval = setInterval(function() {
    console.log("spike interval")
    if (Math.floor(Math.random() * 3) == 0) {
        if (!spikeBool) {
            console.log("spike send")
            spikeBool = true;
            if (Math.floor(Math.random() * 2) == 0) {
                spike.y = c.height / 2 - c.height / 4 - spike.height / 2;
                spikeUp = true;
            } else {
                spike.y = c.height / 2 + c.height / 4 - spike.height / 2;
                spikeUp = false;
            }
            var spikeComing = setInterval(function() {
                spike.x += spikeMove;
                if (spike.x > char.x - spike.width) {
                    console.log("spike is at the end");
                    if ((spikeUp && char.y < c.height / 2 - c.height / 4 + char.height / 2) || (!spikeUp && char.y > c.height / 2 + c.height / 4 - char.height * 1.5)) {
                        console.log("fuufuu hävisit");
                        loser();
                    }
                    if (spike.x - char.width > char.x) {
                        spike.x = 0;
                        spike.y = c.height / 2 - spike.height / 2;
                        clearInterval(spikeComing);
                        spikeBool = false;
                    }
                    
                }
            }, 5)
        };
    };
}, 500);