var myBall = new Ball(100, 100);
myBall.speed.x = 2;
myBall.speed.y = 2;

setup = function () {
  createCanvas(600, 400);
};

draw = function () {
  background(100);
  myBall.update();
  myBall.display();
};
