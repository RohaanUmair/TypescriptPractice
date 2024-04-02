function calcSum(numbers: number[]): number {
    return numbers.reduce((sum, currentVal) => sum + currentVal, 0);   //starts from 0, adds all values
}

const numbers: number[] = [1, 23, 87, 5, 10];

console.log(calcSum(numbers));