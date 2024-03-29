function logObjectProperties(obj) {
    for (var property in obj) {
        console.log("".concat(property, ": ").concat(obj[property])); //logs property and its value
    }
}
logObjectProperties({
    make: 'Toyota',
    model: 'Corolla',
    year: 2020
});
