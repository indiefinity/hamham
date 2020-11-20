let gongoozlers = [];

let chars = "qwertyuiopasdfghjklzxcvbnm1234567890";



class Gongoozler {
  constructor() {
    this.x = random(width);
    this.s = random(innerHeight / 25);
    this.y = random(height);
  }
  do() {
    noStroke();
    fill(35, 215, 60, 200);
    textSize(this.s)
    text(chars[floor(random(chars.length))], this.x, this.y);
    this.y += this.s;
    if (this.y > height) {
      this.y = -this.s;
      this.x = random(width)
    }
  }
}



function setup() {
  textFont('Courier')
  createCanvas(innerWidth, innerHeight);
  background(0)
  for (let i = 0; i < 100; i++) {
    gongoozlers[i] = new Gongoozler();
  }
}

function draw() {
  frameRate(30)
  background(0, 40)
  for (let i = 0; i < 100; i++) {
    gongoozlers[i].do();
  }
}



