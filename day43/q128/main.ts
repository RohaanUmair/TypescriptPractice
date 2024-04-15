// Arrow function that calculates the product of all the parameters
const calcProduct = (...numbers: number[]) => numbers.reduce((total, currentVal) => total * currentVal, 1);

console.log(calcProduct(2, 3, 4, 5));   // Outputs 120