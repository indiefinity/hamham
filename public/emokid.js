var c = document.getElementById("peli");
var ctx = c.getContext("2d");

c.width = window.innerWidth - 10;
c.height = window.innerHeight - 10;

var verticalCenter = c.height / 2;
var horizontalCenter = c.width / 2;
var char = {};
char.width = 50;
char.height = 50;
char.x = horizontalCenter + c.width / 4 - char.width / 2;
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
    ctx.drawImage(document.getElementById('iik'), char.x, char.y, char.width, char.height);
    ctx.drawImage(document.getElementById('aak'), spike.x, spike.y, spike.width, spike.height);
}, 10);

var velli = 0.050;
function switchSides() {
    if(char.y == verticalCenter - c.height / 4 - char.height / 2 || char.y == verticalCenter + c.height / 4 - char.height / 2) {
        
        if (up) {
            up = "kek";
            var switchInterval = setInterval(function() {
                char.y += velli * c.height; 
                if (char.y > verticalCenter + c.height / 4 - char.height / 2) {
                    up = false;
                    clearInterval(switchInterval);
                    char.y = verticalCenter + c.height / 4 - char.height / 2;
                }
            }, 10)
        } else {
            up = "kek";
            var switchInterval = setInterval(function() {
                char.y -= velli * c.height; 
                if (char.y < verticalCenter - c.height / 4 - char.height / 2) {
                    up = true;
                    clearInterval(switchInterval);
                    char.y = verticalCenter - c.height / 4 - char.height / 2;
                }
            }, 10)
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
    ctx.fillText("This is so sad!", horizontalCenter, verticalCenter); 
}

var spikeMove = c.width / 75
var spikeUp;
var spikeBool = false;

var spikeInterval = setInterval(function() {
    console.log("spike interval")
    if (Math.floor(Math.random() * 2) == 0) {
        if (!spikeBool) {
            console.log("spike send")
            spikeBool = true;
            if (Math.floor(Math.random() * 2) == 0) {
                spike.y = verticalCenter - c.height / 4 - spike.height / 2;
                spikeUp = true;
            } else {
                spike.y = verticalCenter + c.height / 4 - spike.height / 2;
                spikeUp = false;
            }
            var spikeComing = setInterval(function() {
                spike.x += spikeMove;
                if (spike.x > char.x - spike.width) {
                    console.log("spike is at the end");
                    if ((spikeUp && char.y < verticalCenter - c.height / 4 + char.height / 2) || (!spikeUp && char.y > verticalCenter + c.height / 4 - char.height * 1.5)) {
                        console.log("fuufuu hävisit");
                        loser();
                    }
                    if (spike.x - char.width > char.x) {
                        spike.x = 0;
                        spike.y = verticalCenter - spike.height / 2;
                        clearInterval(spikeComing);
                        spikeBool = false;
                    }
                    
                }
            }, 10)
        };
    };
}, 1000);

