var rect = require('./rectangle');

function solveRect (l,b) {
    console.log("Solving for the area and perimeter of rectangle with l = " + l + " and b = " + b);
    if (l<=0 || b<=0) {
        console.log("The Dimensions of the rectangle should be greater than 0: l = " + l + " , and b = " + b);
    }
    
    else {
        console.log("The perimeter of the rectangle is " + rect.perimeter(l,b) + " ,and the are of the rectangle is " + rect.area(l,b));
    }
    console.log("\n");
}

solveRect(3,5);
solveRect(2,4);
solveRect(3,0);
solveRect(-3, 5);