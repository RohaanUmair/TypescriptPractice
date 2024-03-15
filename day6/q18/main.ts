let places: string[] = ["New Zealand", "Iceland", "Japan", "Switzerland", "Norway"]


console.log('original order:', places);

console.log('alphabetical order:', [...places].sort());

console.log('reversed alphabetical order:', [...places].sort().reverse());