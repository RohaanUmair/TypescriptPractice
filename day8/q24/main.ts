//Equality with strings
console.log('Testing with strings');
console.log('apple' == 'apple'); //true
console.log('apple' == 'Apple'); //false


//using lower case method
console.log('Testing after changing string into lower case');
console.log('apple' == 'Apple'.toLocaleLowerCase()); //true


//Numbers
console.log('Testing numbers');
console.log(9 > 8); //true
console.log(10 <= 4); //false


// using and, or
console.log('using "or" and "and" operators');
console.log(true && false); //false
console.log(true || false); //true


//Testing whether an item is in an array or not in the array
console.log('testing if an item is in an array or not');
let numbers = [22, 54, 4 ,6, 90];
console.log(numbers.includes(4)); //true
console.log(numbers.includes(20)); //false

console.log(!numbers.includes(4)); //false