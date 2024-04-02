function filterGreaterThanTen(numbers) {
    return numbers.filter(function (num) { return num > 10; }); //filter numbers greater than 10
}
var numbers = [23, 9, 7, 10, 21];
console.log(filterGreaterThanTen(numbers)); //this array only contains numbers greater than 10
