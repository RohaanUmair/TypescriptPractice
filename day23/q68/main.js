function multiplyDecimalNums(num1, num2) {
    return Math.round((num1 * num2) * 100) / 100;
}
console.log(multiplyDecimalNums(0.2, 9.55));
