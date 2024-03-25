function quotientAndRemainder(num1: number, num2: number): { quotient: number; remainder: number }{
    let quotient = Math.floor(num1 / num2);
    let remainder = num1 % num2;
    return { quotient, remainder };
}

console.log(quotientAndRemainder(17, 5));
