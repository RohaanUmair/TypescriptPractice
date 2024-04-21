// This array of numbers would be filtered
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Using .filter() to filter out numbers greater than 5
var filteredNumbers = numbers.filter(function (number) { return number > 5; });
console.log(filteredNumbers);
