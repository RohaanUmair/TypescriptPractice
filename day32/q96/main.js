function calcSum(numbers) {
    return numbers.reduce(function (sum, currentVal) { return sum + currentVal; }, 0); //starts from 0, adds all values
}
var numbers = [1, 23, 87, 5, 10];
console.log(calcSum(numbers));
