var Engine, World, Bodies;

var engine;
var kelkka;
var ground;

var groundVerts;

function setup() {
  createCanvas(innerWidth, innerHeight);

  Engine = Matter.Engine;
  World = Matter.World;
  Bodies = Matter.Bodies;

  engine = Engine.create();

  kelkka = Bodies.rectangle(width / 2, 40, 160, 80);
  World.add(engine.world, [kelkka]);
  

  groundVerts = [];
}

function drawFromVertices(vertices) {
  for (var i = 0; i < Object.keys(vertices).length; i++) {
    line(vertices[i].x, vertices[i].y, vertices[(i + 1) % (Object.keys(vertices).length)].x, vertices[(i + 1) % (Object.keys(vertices).length)].y)
  }
}

function draw() {
  background(210);

  if (ground != null) {
    drawFromVertices(ground.vertices)
  }
  
  if (mouseIsPressed) {
    groundVerts.push({x: mouseX, y: mouseY});
  }


  drawFromVertices(kelkka.vertices)
  stroke(0);

}

function mouseReleased() {
  ground = Bodies.fromVertices(width / 2, height / 2, groundVerts, { isStatic: true })
  World.add(engine.world, [ground]);
  
  Engine.run(engine)
} 
  