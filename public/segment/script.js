let result;
let angle;
let radius;

function setup() {
  createCanvas(500,500);
  angleMode(DEGREES);
  textFont("Nunito");
  textSize(50);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(255);

  angle = parseFloat(document.getElementById("angle").value);

  fill(255,0,0);
  arc(250,250,400,400,-angle,0);

  fill(255);
  arc(250,250,400,400,0,360-angle);
  triangle(250,250,450,250, 250 + 200 * cos(angle), 250 - 200 * sin(angle));

  radius = parseFloat(document.getElementById("radius").value);

  result = (angle / 360 * pow(radius, 2) * PI) - radius * cos(angle / 2) * radius * sin (angle / 2);

  fill(0)
  if(isNaN(result)) {
    text("Enter all arguments", 250, 450);
  }
  else {
    text(result, 250, 450);
  }
  

}