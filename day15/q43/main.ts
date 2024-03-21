let magicians: string[] = ["Alice", "David", "Chris"];

function makeGreat(magicians: string[]){
    for (let i = 0; i < magicians.length; i++){
        magicians[i] += ' the great';
        console.log(magicians[i]);
    }
}

function showMagicians(magicians: string[]){
    magicians.forEach(magician => {
        console.log(magician);
    });
}


console.log('Original Magicians:');
showMagicians(magicians);

let greatMagicians = magicians.slice(0);   //to make a copy of the original array
console.log('Great magicians:');
makeGreat(greatMagicians);