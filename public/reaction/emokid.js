function start() {
    document.getElementById("papa").style.display = ""
    document.getElementById("pepe").style.display = "none"
}
function fuu() {
    
    document.body.style.background = "rgb(255, 0, 0)"
    document.getElementById("papa").style.display = "none"
    document.getElementById("pepe").style.display = ""

   
    setTimeout(function() {
        var start = Date.now();
        document.body.style.background = "rgb(0, 230, 0)"
    }, Math.ceil(Math.random() * 5000))
}
start();