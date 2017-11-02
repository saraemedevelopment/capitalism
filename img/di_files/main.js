var player = new Player();
var trump = new Evil(5, 5);
var tomato;

console.log(player.x);
$( document ).ready(function() {
  setInterval(function()  {
  player.updatePlayer(), trump.updateEvil();
  if(tomato){tomato.updateShot();}
},1000/80);
});


document.onkeydown = function(e) {
    switch (e.keyCode) {
    case 37:
      player.moveLeft();
      break;
    case 39:
      player.moveRight();
      break;
    case 32:
      tomato = new Bullet(player.x, player.y);
      break;
  };
};
