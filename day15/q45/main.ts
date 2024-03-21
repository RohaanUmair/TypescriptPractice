function makeCar(manufacturer: string, model: string, ...options: [string, any][]): object{
    let car = {manufacturer, model}
    options.forEach(([key, value]) => car[key] = value);
    return car;
}

console.log(makeCar('Toyota', 'Corolla', ['color', 'white'], ['year', 2020]));