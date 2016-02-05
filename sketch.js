var ballpit = [];

ballpit.push(new Ball(100, 200));
ballpit.push(new Ball(75, 250));
ballpit.push(new Ball(200, 200));

ballpit[0].speed.x = 2
ballpit[0].speed.y = 3

ballpit[1].speed.x = 4

setup = function () {
  createCanvas(600, 400);
};

draw = function () {
  background(100);
  ballpit.forEach(function updateAndDisplay (ball) {
    ball.update();
    ball.display();
  });
};
