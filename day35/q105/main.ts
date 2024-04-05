//this function returns a value in between 1 and 6
function rollDice(): number {
    return Math.floor(Math.random() * 6) + 1; //generates a random integar from 1 to 6
}

console.log(rollDice());
