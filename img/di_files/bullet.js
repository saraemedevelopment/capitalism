function Bullet(x, y){
  this.x = x;
  this.y = y;
  this.vy = 10;
  var activeBullets = [];
  this.element = $("<div>").attr("class", "bullet");
  this.element.css({top: this.x, left: this.y});
  $("#board").append(this.element);

}

Bullet.prototype.createBullet = function () {
  this.element = $("<div>").attr("class", "bullet");
  this.element.css({top: this.x, left: this.y});
  $("#board").append(this.element);

};

// Bullet.prototype.shoot = function() {
//   activeBullets.push[shoot];
//   this.y -= this.vy;
//   this.element.css({top: this.y,left: this.x});
//   console.log(activeBullets);
//
// };


Bullet.prototype.updateShot = function() {
  this.y -= this.vy;
  this.element.css({top: this.y,left: this.x});
  if(this.y<0){
      $(".bullet").remove();
  }

};

Bullet.prototype.collision = function () {
  if (this.x < Evil.x + Evil.width &&
   this.x + this.width > Evil.x &&
   this.y < Evil.y + Evil.height &&
   this.height + this.y > Evil.y) {
    $(".bullet").remove();
    console.log("collision");
    $("badge").text("2")
  }

};
