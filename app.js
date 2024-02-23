console.log("Hello World!\n==========\n");

// Exercise 1 Section
function printOdds(count) {
    for (let i = 1; i <= count; i++ ) {
        if (i % 2 != 0) {
            console.log(i);
        }
    }
}

printOdds(10);
printOdds(100);


// Exercise 2 Section
function checkAge(name, age) {
    let oldEnoughMsg = `Congrats ${name}! You can drive!!`;
    let tooYoungMsg = `Sorry ${name}, you have to wait until you are ${16} years old until you can drive.`

    if (age < 16) {
        console.log(tooYoungMsg);
    } else {
        console.log(oldEnoughMsg);
    }
}
checkAge("Mikey", 9);
checkAge("Alex", 16);
checkAge("C.J.", 22);



// Exercise 3 Section
 function checkQuadrant(x, y) {
    if (x > 0 && y >0) {
        return "Quadrant 1";
    } else if (x < 0 && y > 0) {
        return "Quadrant 2";
    } else if (x < 0 && y < 0) {
        return "Quadrant 3";
    } else if (x > 0 && y > 0) {
        return "Quadrant 4";
    } else if (x == 0 && y != 0) {
        return "X Axix";
    } else if (x != 0 && y == 0) {
        return "Y Axix";
    } else {
        return "Orgin";
    }
 }

console.log(checkQuadrant(1, 1));
console.log(checkQuadrant(-1, 1));
console.log(checkQuadrant(-1, -1));
console.log(checkQuadrant(1, -1));
console.log(checkQuadrant(0, -1));
console.log(checkQuadrant(1, 0));
console.log(checkQuadrant(0, 0));



// Exercise 4 
function isValidTriangle(e, f, g) {
    return e + f > g && e + g > f && f + g > e
    }

    function checkTriangle(e, f, g) {
        let isValid = isValidTriangle(e, f, g);
        if (isValid) {
        if (e == f && f == g) {
            return `Equilateral Triangle`;
        } else if (e == f || f == g || e == g){
            return `Isosceles`;
        } else {
            return `Scalene`;
        }
         } else {
            return `Not a valid triangle.`;
         }
    }
   console.log(checkTriangle(1, 2, 2));
    console.log(checkTriangle(1, 1, 2));
    console.log(checkTriangle(2, 3, 4));
    console.log(checkTriangle(2, 2, 2));


// Exercise 5
