// Arrow function that calculates the product of all the parameters
var calcProduct = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (total, currentVal) { return total * currentVal; }, 1);
};
console.log(calcProduct(2, 3, 4, 5)); // Outputs 120
