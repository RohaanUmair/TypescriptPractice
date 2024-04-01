function isValueNaN(value) {
    return isNaN(value); //checks if value is NaN or not returns true or false
}
console.log(isValueNaN('Hello')); //outputs true because 'Hello' is not a number
console.log(isValueNaN(40)); //outputs false because 40 is a number
