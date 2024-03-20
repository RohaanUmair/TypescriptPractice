let magicians: string[] = ["Alice", "David", "Chris"];

function makeGreat(magicians: string[]){
    for (let i = 0; i < magicians.length; i++){
        magicians[i] += ' the great';
    }
}

makeGreat(magicians);
console.log(magicians);