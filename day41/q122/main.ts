// This loop counts down from 10 to 1 but the loop stops when it reaches 5
var count = 10;
while (count >= 1){
    if (count === 5) {
        break;   // Breaks when count is 5
    }
    console.log(count);
    count--;
}
