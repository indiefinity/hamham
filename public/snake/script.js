let snake;
let direction;
let fruit = {};
let game = {
  "gridSize": 64
}
let pop;
let deathTimer = 0;
let reducer = 0;
let rainbow = false;
let rave;
let rate;
let ding;

function preload() {
  ding = new Audio('https://hamham.tk/snake/big.mp3');
}

function setup() {
  createCanvas(innerWidth, innerHeight);
  frameRate(60);
  noStroke();

  game.width = floor(width / game.gridSize);
  game.height = floor(height / game.gridSize);

  game.offsetX = (width % game.gridSize) / 2;
  game.offsetY = (height % game.gridSize) / 2;



  start();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  game.width = floor(width / game.gridSize);
  game.height = floor(height / game.gridSize);

  game.offsetX = (width % game.gridSize) / 2;
  game.offsetY = (height % game.gridSize) / 2;
}

function start() {

  snake = [{}];
  snake[0].x = floor(random(game.width));
  snake[0].y = floor(random(game.height));
  direction = { "x": 0, "y": 0 }
  fruit.x = floor(random(game.width));
  fruit.y = floor(random(game.height));
  rave = 0;
  rate = 4;
  if (floor(random(10)) == 0) {
    rainbow = true;
  }
  else {
    rainbow = false;
  }
  ding.pause();
  ding.currentTime = 0; 
}


function draw() {
  if (reducer == 0) {
    reducer = rate;
    updt();
  }
  reducer--;



  background(230, 230, 220);

  fill(245, 245, 240);
  for (let x = 0; x < game.width; x++) {
    for (let y = 0; y < game.height; y++) {
      rect(2 + game.offsetX + (x * game.gridSize), 2 + game.offsetY + (y * game.gridSize), game.gridSize - 4, game.gridSize - 4, game.gridSize / 3)
    }
  }
  fill(100, 225, 0);
  if (rave > 0) {
    if(rave == 1) {
      ding.pause();
      ding.currentTime = 0;
    }
    rave--;
    colorMode(HSB)
    fill(random(255), 255, 255);
    colorMode(RGB)
  }
  else {
    rate = 4;
  }

  for (let i = 0; i < snake.length; i++) {
    rect(game.offsetX + (snake[i].x * game.gridSize), game.offsetY + (snake[i].y * game.gridSize), game.gridSize, game.gridSize, game.gridSize / 6)
  }
  if (rainbow) {
    colorMode(HSB);
    fill(random(255), 255, 255);
    colorMode(RGB);
  }
  else {
    fill(255, 50, 0);
  }

  circle((game.gridSize / 2) + game.offsetX + (fruit.x * game.gridSize), (game.gridSize / 2) + game.offsetY + (fruit.y * game.gridSize), game.gridSize * 0.8)

  if (deathTimer > 0) {
    fill(0);
    if (deathTimer > 20) {
      rect(0, 0, width, map(deathTimer, 30, 20, 0, height))
    }
    else if (deathTimer > 10) {
      rect(0, 0, width, height);
      if (deathTimer == 11) {
        start();
      }
    }
    else {
      rect(0, map(deathTimer, 10, 0, 0, height), width, height)
    }

    deathTimer--;
  }
}

function updt() {
  if (moves[0] == 0) {
    if (!(direction.x == 0 && direction.y == 1)) {
      direction = { "x": 0, "y": -1 }
    }
  }
  else if (moves[0] == 1) {
    if (!(direction.x == 0 && direction.y == -1)) {
      direction = { "x": 0, "y": 1 }
    }
  }
  else if (moves[0] == 2) {
    if (!(direction.x == 1 && direction.y == 0)) {
      direction = { "x": -1, "y": 0 }
    }
  }
  else if (moves[0] == 3) {
    if (!(direction.x == -1 && direction.y == 0)) {
      direction = { "x": 1, "y": 0 }
    }
  }

  moves.shift();

  snake.unshift({ "x": snake[0].x + direction.x, "y": snake[0].y + direction.y });

  if (deathTimer == 0) {
    if (snake[0].x < 0 || snake[0].x >= game.width || snake[0].y < 0 || snake[0].y >= game.height) {


      deathTimer = 30;
    }
    if (snake.length > 2) {
      for (let i = 3; i < snake.length; i++) {
        if (snake[0].x == snake[i].x && snake[0].y == snake[i].y) {

          deathTimer = 30;
        }
      }
    }
  }

  pop = true;

  for (let i = 0; i < snake.length; i++) {
    if (snake[i].x == fruit.x && snake[i].y == fruit.y) {
      console.log("joo")
      if (rainbow) {
        rave = 4 * 60;
        ding.play();
        rate = 2
      }
      if (floor(random(10)) == 0) {
        rainbow = true;
      }
      else {
        rainbow = false;
      }
      fruit.x = floor(random(game.width));
      fruit.y = floor(random(game.height));
      pop = false
    }

  }
  if (pop) {
    snake.pop();
  }
}



let moves = []

function keyPressed() {
  switch (keyCode) {
    case 38:
    case 87:
      moves.push(0);
      break;
    case 40:
    case 83:
      moves.push(1);
      break;
    case 37:
    case 65:
      moves.push(2);
      break;
    case 39:
    case 68:
      moves.push(3);
      break;
  }
}


