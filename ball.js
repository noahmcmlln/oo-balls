var Ball = function(x, y) {
  this.x = x;
  this.y = y;

  this.speed = {x: 1, y: 1}; // because our speed is represented by an object, we *must* put it in the constructor
};

Ball.prototype = {

  radius: 7,

  update: function() {
    this.bounce();
    this.x += this.speed.x;
    this.y += this.speed.y;
  },

  display: function() {
    ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
  },

  bounce: function() {
    this.bounceX();
    this.bounceY();
  },

  bounceX: function() {
    if (this.x + this.radius > width) {
      this.speed.x *= -1;
    }
    if (this.x - this.radius < 0) {
      this.speed.x *= -1;
    }
  },

  bounceY: function() {
    if (this.y + this.radius > height) {
      this.speed.y *= -1;
    }
    if (this.y - this.radius < 0) {
      this.speed.y *= -1;
    }
  }
};
