//function declaration 
function squareDeclaration(num) {
    return Math.pow(num, 2);
}
// function expression
var squareExpression = function (num) {
    return Math.pow(num, 2);
};
console.log(squareDeclaration(3)); //logs 9
console.log(squareExpression(3)); //logs 9
//both logs square of 3 
