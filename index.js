var rect = require('./rectangle');

function solveRect (l,b) {
    console.log("Solving for the area and perimeter of rectangle with l = " + l + " and b = " + b);
    rect(l,b, (err, rectangle) => {
        if (err) {
            console.log("ERROR: ", err.message);
        }

        else {
            console.log("The perimeter of the rectangle is " + rectangle.perimeter() + " ,and the are of the rectangle is " + rectangle.area());
        }
        console.log("\n");
    })
    console.log("\n");
}

solveRect(3,5);
solveRect(2,4);
solveRect(3,0);
solveRect(-3, 5);

