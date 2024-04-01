function replaceBananaWithMango(fruits) {
    var index = fruits.indexOf('banana'); //finds index of banana
    if (index !== -1) {
        fruits[index] = 'mango'; //replaces 'banana' with 'mango'
    }
}
var fruits = ['grapes', 'orange', 'banana', 'cherry'];
replaceBananaWithMango(fruits);
console.log(fruits);
