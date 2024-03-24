var mixedArray = [2, 'apple', false, 'banana', 34, 'pineapple', true];
var filteredArray = mixedArray.filter(function (item) {
    return typeof item === 'string';
});
console.log(filteredArray);
