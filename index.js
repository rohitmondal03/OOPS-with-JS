// Factory function

function drawCircle(radius) {
  return {
    radius,
    draw: function () {
      console.log("draw");
    }
  }
}

const draw = drawCircle(3);
// draw.draw();


// Constructor function
function DrawCircle(radius) {
  this.radius = radius;

  let color = "red";   // private variable

  let defaultLocation = {
    x: 10,
    y: 30,
  }

  Object.defineProperty(this, "defaultLocation", {
    get: function () {
      console.log(defaultLocation);
    },
    set: function (value) {
      if (!value.x || !value.y)
        throw new Error("Invalid object")

      defaultLocation = value
    }
  })

  this.draw = function () {
    console.log(color)
    console.log("Draw")
  }
}

// class DrawCircle {
//   constructor(radius) {
//     console.log("this", this);

//     this.radius = radius;
//     this.draw = function () {
//       console.log("draw");
//     };
//   }
// }

// DrawCircle.call({}, 1)
// DrawCircle.apply({}, 1)

const anotherDraw = new DrawCircle(1);
anotherDraw.location = { x: 1 }
anotherDraw["perimeter"] = { p: 20 }
delete anotherDraw.perimeter
// anotherDraw.defaultLocation = 10  ==> Error !!!
console.log(anotherDraw.draw())


// ENUMERATING OBJECTS
for (let k in anotherDraw) {
  console.log(k, typeof anotherDraw[k])
}
// Object.keys(anotherDraw)  ==> array of keys in object
// Object.values(anotherDraw)  ==> array of keys in object


// VALUE and REFERENCE
let x = {
  value: 10,
}
let y = x;
y.value = 20;
// console.log(x.value, y.value)