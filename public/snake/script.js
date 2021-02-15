let snake;
let direction;
let fruit = {};
let game = {
  "gridSize":64
}
let alive;
function setup() {
  createCanvas(innerWidth, innerHeight);
  frameRate(20);
  noStroke();

  game.width = Math.floor(width / game.gridSize);
  game.height = Math.floor(height / game.gridSize);

  game.offsetX = (width % game.gridSize) / 2;
  game.offsetY = (height % game.gridSize) / 2;

  
  textAlign(CENTER, CENTER);
  textSize(100);

  start();
}

function start() {
  
  snake = [{}];
  snake[0].x = Math.floor(random(game.width));
  snake[0].y = Math.floor(random(game.height));
  direction = {"x":0,"y":0}
  fruit.x = Math.floor(random(game.width));
  fruit.y = Math.floor(random(game.height));
  alive = true;
}

let pop;
function draw() {
  if (moves[0] == 0) {
    if (!(direction.x == 0 && direction.y == 1)) {
      direction = {"x":0, "y":-1}
    }
  }
  else if (moves[0] == 1) {
    if (!(direction.x == 0 && direction.y == -1)) {
      direction = {"x":0, "y":1}
    }
  }
  else if (moves[0] == 2) {
    if (!(direction.x == 1 && direction.y == 0)) {
      direction = {"x":-1, "y":0}
    }
  }
  else if (moves[0] == 3) {
    if (!(direction.x == -1 && direction.y == 0)) {
      direction = {"x":1, "y":0}
    }
  }

  moves.shift();
  background(230, 230, 200);
  fill(245,245,235);
  for (let x = 0; x < game.width; x++) {
    for (let y = 0; y < game.height; y++) {
      rect(2 + game.offsetX + (x * game.gridSize), 2 + game.offsetY + (y * game.gridSize), game.gridSize - 4, game.gridSize - 4, game.gridSize / 3)
    }
  }
  
  snake.unshift({"x":snake[0].x + direction.x,"y":snake[0].y + direction.y});
  
  if (snake[0].x < 0 || snake[0].x >= game.width || snake[0].y < 0 || snake[0].y >= game.height) {
    alive = false;
  }
  if (snake.length > 2) {
    for (let i = 3; i < snake.length; i++) {
      if (snake[0].x == snake[i].x && snake[0].y == snake[i].y) {
        console.log("bob")
        alive = false;
      }
    }
  }
  
  if (alive) {
    pop = true;
  
    for (let i = 0; i < snake.length; i++) {
      if (snake[i].x == fruit.x && snake[i].y == fruit.y) {
        console.log("joo")
        fruit.x = Math.floor(random(game.width));
        fruit.y = Math.floor(random(game.height));
        pop = false
      } 
  
    }
    if (pop) {
      snake.pop();
    }
    
  
    
    fill(100,225,0);
    for (let i = 0; i < snake.length; i++) {
      rect(game.offsetX + (snake[i].x * game.gridSize), game.offsetY + (snake[i].y * game.gridSize), game.gridSize, game.gridSize, game.gridSize / 6)
    }
    fill(255,50,0);
    circle((game.gridSize / 2) + game.offsetX + (fruit.x * game.gridSize), (game.gridSize / 2) + game.offsetY + (fruit.y * game.gridSize), game.gridSize * 0.8)
  }
  else {
    start();
  }
  

}

let moves = []

function keyPressed() {
  switch(keyCode) {
    case 38:
      moves.push(0);
      break;
    case 40:
      moves.push(1);
      break;
    case 37:
      moves.push(2);
      break;
    case 39:
      moves.push(3);
      break;
  }
}
