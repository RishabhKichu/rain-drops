const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var drops = [];
var maxdrops = 100;
var man;

function preload() {
  man = loadImage("images/Walking Frame/walking_1.png");
}

function setup() {
  var canvas = createCanvas(400, 600);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  for (var i = 0; i < maxdrops; i++) {
    console.log("Hi!");
    drops.push(new RainDrop(random(0, 400), random(0, 400), 5));
  }
  var options = {
    friction: 1,
    density: 1,
    isStatic: true,
  };

  var umbrella = Bodies.circle(170, 330, 40, options);
}

function draw() {
  background(0);

  image(man, 70, 330, 250, 300);

  for (a = 0; a < maxdrops - 1; a++) {
    drops[a].display();
  }

  Engine.update(engine);
}

function createUmbrella() {
  var options = {
    friction: 1,
    density: 1,
    isStatic: true,
  };

  var umbrella = Bodies.circle(170, 330, 40, options);
}
