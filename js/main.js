$(document).ready(function(){
  var mouseX, mouseY;
  var ww = $( window ).width();
  var wh = $( window ).height();
  var traX, traY;
  $(document).mousemove(function(e){
    mouseX = e.pageX;
    mouseY = e.pageY;
    traX = ((15 * mouseX) / 500) + 40;
    traY = ((15 * mouseY) / 500) + 50;
    console.log(traX);
    $(".title").css({"background-position": traX + "%" + traY + "%"});
  });
});
