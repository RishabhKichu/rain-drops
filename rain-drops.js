class RainDrop {
  constructor(x, y, radius) {
    const options = {
      restituion: 0.3,
      friction: 0.1,
      density: 0.3,
      isStatic: false,
    };

    this.radius = radius;

    this.body = Bodies.circle(x, y, radius, options);
    World.add(world, this.body);

    this.height = this.radius * 2;
    this.width = this.radius * 2;
  }

  display() {
    ellipseMode(CENTER);
    var pos = this.body.position;
    var angle = this.body.angle;
    console.log("helo");
    push();
    fill(74, 43, 236);
    translate(pos.x, pos.y);
    rotate(angle);
    ellipse(0, 0, this.height, this.width);
    pop();

    if (this.body.position.y > height) {
      Matter.Body.setPosition(this.body, {
        x: random(0, 400),
        y: random(0, 400),
      });
    }
  }
}
