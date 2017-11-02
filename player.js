function Player() {
  this.x = 550;
  this.y = 400;
  this.vx = 20;
  this.element = $("<div>").attr("class", "player");
  this.element.css({
    top: this.y,
    left: this.x
  });
  $("#board").append(this.element);

};


Player.prototype.moveRight = function() {
  if (this.x <= $('#board').width() - 25) {
    this.x += this.vx;
  }
};

Player.prototype.moveLeft = function() {
  if (this.x <= 5) {} else {
    this.x -= this.vx;
  }
};


Player.prototype.updatePlayer = function() {
  this.element.css({
    top: this.y,
    left: this.x,
    position: 'absolute'
  });

  if (this.x >= $("#board").width() || this.x <= 0) {
    this.vx *= -1;
  }
};
