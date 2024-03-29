function logObjectProperties(obj: object){
    for (let property in obj) {
        console.log(`${property}: ${obj[property]}`);   //logs property and its value
    }
}

logObjectProperties({
    make: 'Toyota',
    model: 'Corolla',
    year: 2020
}
);