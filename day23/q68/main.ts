function multiplyDecimalNums(num1: number, num2: number): number {
    return Math.round((num1 * num2) * 100) / 100;
}

console.log(multiplyDecimalNums(0.2, 9.55));

