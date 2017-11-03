function Chronometer(nombre) {
  this.element = $("<div>").attr("id", nombre);
  $("#board").append(this.element);
  this.time = 19;
};
Chronometer.prototype.updateChrono= function(){
  console.log(this.time);
  $(".seconds").text(chrono.time);

  this.time =Math.floor(this.time-1);
};
