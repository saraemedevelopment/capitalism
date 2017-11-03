function Bullet(x, y) {
  this.x = x;
  this.y = y;
  this.vy = 10;
  this.element = $("<div>").attr("class", "bullet");
  this.element.css({
    top: this.x,
    left: this.y
  });
  $("#board").append(this.element);

}

Bullet.prototype.updateShot = function() {
  this.y -= this.vy;
  this.element.css({
    top: this.y,
    left: this.x
  });

};
