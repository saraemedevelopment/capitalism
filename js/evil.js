function Evil(vx, lifes) {
  this.x = 100;
  this.y = 100;
  this.vx = vx;
  this.lifes = lifes;
  this.element = $("<div>").attr("class", "evil");
  this.element.css({
    top: this.x,
    left: this.y
  });
  $("#board").append(this.element);

};


Evil.prototype.updateEvil = function() {
  this.x += this.vx;
  this.element.css({
    top: this.y,
    left: this.x
  });
  if (this.x >= $("#board").width() - 70 || this.x <= 0) {
    this.vx *= -1;
  };
};
