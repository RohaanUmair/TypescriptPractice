var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.forEach(function (number) {
    var suffix = '';
    if (number == 1) {
        suffix = 'st';
    }
    else if (number == 2) {
        suffix = 'nd';
    }
    else if (number == 3) {
        suffix = 'rd';
    }
    else {
        suffix = 'th';
    }
    console.log("".concat(number).concat(suffix));
});
