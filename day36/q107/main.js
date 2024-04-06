// this function checks if a number is divisible by both 2 and 3
function divisibilityCheck(num) {
    return num % 2 === 0 && num % 3 === 0; //checks if number is divisible by both 2 and 3
}
console.log(divisibilityCheck(6)); //true, because 6 is divisible by 2 and 3 both
console.log(divisibilityCheck(15)); //false, because 15 is not divisible by 2 and 3 both
