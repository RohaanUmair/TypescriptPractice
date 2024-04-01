function replaceBananaWithMango(fruits: string[]): void {
    const index = fruits.indexOf('banana');   //finds index of banana
    if (index !== -1){
        fruits[index] = 'mango';   //replaces 'banana' with 'mango'
    }
}

const fruits: string[] = ['grapes', 'orange', 'banana', 'cherry'];
replaceBananaWithMango(fruits);

console.log(fruits);