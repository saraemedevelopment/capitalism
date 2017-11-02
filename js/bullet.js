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

// Bullet.prototype.createBullet = function() {
//   this.element = $("<div>").attr("class", "bullet");
//   this.element.css({
//     top: this.x,
//     left: this.y
//   });
//   $("#board").append(this.element);
//   if (this.y < 0) {
//     $(".bullet").remove();
//   }
//
// };

Bullet.prototype.updateShot = function() {
  this.y -= this.vy;
  this.element.css({
    top: this.y,
    left: this.x
  });


};

// Bullet.prototype.collision = function() {
//   if (this.x < Evil.x + Evil.width &&
//     this.x + this.width > Evil.x &&
//     this.y < Evil.y + Evil.height &&
//     this.height + this.y > Evil.y) {
//     $(".bullet").remove();
//     console.log("collision");
//     Evil.lifes--;
//
//   }
//
// };
