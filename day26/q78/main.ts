//function declaration 
function squareDeclaration(num: number){
    return num ** 2;
}

// function expression
let squareExpression = function(num: number){
    return num ** 2;
}

console.log(squareDeclaration(3));   //logs 9
console.log(squareExpression(3));   //logs 9
//both logs square of 3 