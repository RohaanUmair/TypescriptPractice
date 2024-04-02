function filterGreaterThanTen(numbers: number[]): number[] {
    return numbers.filter((num) => num > 10);   //filter numbers greater than 10
}

const numbers: number[] = [23, 9, 7, 10, 21];


console.log(filterGreaterThanTen(numbers));   //this array only contains numbers greater than 10