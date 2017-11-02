flowers.play();

var player = new Player();
var trump = new Evil(10, 20);


  $(".badge").text(trump.lifes);

var bullets = [];

document.onkeydown = function(e) {
  switch (e.keyCode) {
    case 37:
      player.moveLeft();
      break;
    case 39:
      player.moveRight();
      break;
    case 32:
      bullets.push(new Bullet(player.x, player.y));
      throwing.play();
      break;
  };
};

function ballOut() {
  bullets.forEach(function(bullet) {
    if (bullet.y < 0){
      bullet.element.css({display: "none"});
      bullets.shift();
    }
  });
};


function checkObstacles() {
  bullets.forEach(function(bullet) {
  if ($(".bullet").collision(".evil").length > 0) {
    bullet.element.css({display: "none"});
    bullets.shift();
    trump.lifes-=1;
    pain.play();
    $(".badge").text(trump.lifes);
    changeEvil();

    }
});};





$(document).ready(function() {
  setInterval(function() {
    player.updatePlayer(),
      trump.updateEvil(),
      bullets.forEach(bullet => bullet.updateShot());
      ballOut();
      checkObstacles();

  }, 1000 / 60);
});

function changeEvil(){

  if(trump.lifes<=0){
    if(!alert("WOW...Ready for next level??")) document.location = 'level2.html';;
    trump.lifes=0;
  };

};
