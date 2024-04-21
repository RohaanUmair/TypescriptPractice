// This array of numbers would be filtered
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Using .filter() to filter out numbers greater than 5
const filteredNumbers: number[] = numbers.filter((number) => number > 5);

console.log(filteredNumbers);