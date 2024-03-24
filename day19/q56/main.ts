let mixedArray = [2, 'apple', false, 'banana', 34, 'pineapple', true];

let filteredArray = mixedArray.filter(item => 
    typeof item === 'string');

console.log(filteredArray);
