var blockY = 50;

var c = document.getElementById("peli");
var ctx = c.getContext("2d");
c.width = screen.width;
c.height = screen.height;
var img = new Image();
img.src = "iik.png"
var velli;
function jump() {
    if (blockY == 50) {
        velli = 10;
        var timo = setInterval(function() {

            c.width = c.width;
            ctx.fillStyle = "#000000";
            ctx.drawImage(img, c.width / 2 - 400 / 2, c.height - blockY, 400, 400);
            if (velli > 5) { console.log("ylös"); } else { console.log("alas"); }
            blockY += 2 * (velli - 5);
            velli *= 0.995;
            if (blockY < 50) {
                
                clearInterval(timo)
                blockY = 50;
                console.log("landed")
            }
        }, 1)
    }
}

setInterval(function() {
    if (Math.floor(Math.random() * 30) == 0) {
        jump(); 
        console.log("mamaaa")
        if (Math.floor(Math.random() * 5) == 0) {
            img.src = "aak.png";
            console.log("omg its angri")
        } else {
            img.src = "iik.png"
            
        }
    }
}, 100)
