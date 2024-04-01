function removeLastElement(arr: any[]): any {
    return arr.pop();   //returns and removes last element from the array
}

let favFruits: string[] = ['apple', 'banana', 'mango'];
let numbers: number[] = [21, 42, 5, 754];

console.log(removeLastElement(favFruits));
console.log(removeLastElement(numbers));