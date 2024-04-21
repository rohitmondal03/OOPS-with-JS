// Factory function

function drawCircle(radius) {
  return {
    radius,
    draw: function() {
      console.log("draw");
    }
  }
}

const draw= drawCircle(3);
draw.draw();



// Constructor function
function DrawCircle(radius) {
  console.log("this", this)

  this.radius = radius;
  this.draw = function() {
    console.log("draw")
  }
}

const anotherDraw = new DrawCircle(1);
console.log(anotherDraw.draw())