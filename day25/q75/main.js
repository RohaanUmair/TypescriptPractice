function compoundOperators() {
    var x = 10;
    console.log("Initial value of x is ".concat(x));
    x += 2; //adds 2 in the current value of x
    console.log("After addition, the value of x is ".concat(x)); //logs value of x after adding 2
    x -= 3; //subtracts 3 from the current value of x
    console.log("After subtraction, the value of x is ".concat(x)); //logs the value of x after subtracting 3
    x *= 2; //multiplies the current value of x by 2
    console.log("After multiplication, the value of x is ".concat(x)); //logs the value of x after multiplying by 2
    x /= 6; //divides the current value of x by 6
    console.log("After division, the value of x is ".concat(x)); //logs the value of x after dividing by 6
}
compoundOperators();
