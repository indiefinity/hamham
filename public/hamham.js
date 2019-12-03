
var canvas = document.getElementById("pepe");
var context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;



var pepe = {
    "width":30,
    "height":30
}
pepe.x = canvas.width / 2 - pepe.width / 2;
pepe.y = canvas.height / 2 - pepe.height / 2;

context.fillStyle = "black";

setInterval(function() {
    canvas.width = canvas.width
    context.fillRect(pepe.x, pepe.y, pepe.width, pepe.height);
    
    context.stroke();
}, 5)

var kakka = 0

setInterval(function()  {
    pepe.y =  (canvas.height / 2 - pepe.height / 2) + (canvas.height / 4) * Math.sin(kakka * 6.3);
    pepe.x =  (canvas.width / 2 - pepe.width / 2) + (canvas.height / 4)  * Math.cos(kakka * 6.3);
    console.log(Math.sin(1000 * kakka * 6.3))
    kakka += 0.001;
}, 5);
