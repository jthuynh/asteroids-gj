
var mouseXY = {};
$( document ).on( "mousemove", function( event ) {
    mouseXY.X = event.pageX; 
    mouseXY.Y = event.pageY;
});
var ship = $("#ship");
var prevXY = {X: null, Y: null};
var shipInterval = setInterval(function() {
    if (prevXY.Y != mouseXY.Y || prevXY.X != mouseXY.X && (prevXY.Y != null || prevXY.X != null)) {
      
        var shipXY = ship.position();
        var diffX = shipXY.left - mouseXY.X;
        var diffY = shipXY.top - mouseXY.Y;
        var tan = diffY / diffX;
       
        var atan = Math.atan(tan)* 180 / Math.PI;;
        if (diffY > 0 && diffX > 0) {
            atan += 180; 
        } else if(diffY < 0 && diffX > 0) {
            atan -= 180;
        }
        atan += 90;
        prevXY.X = mouseXY.X;
        prevXY.Y = mouseXY.Y;
        ship.css({transform: "rotate(" + atan + "deg)"});
    }
}, 10);