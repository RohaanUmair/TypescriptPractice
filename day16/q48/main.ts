let prices1 = [1200, 1500, 1100];
let prices2 = [1000, 1300, 1600];

let combinedPrices = [...prices1, ...prices2].sort((a, b) => a - b);
console.log(combinedPrices);
