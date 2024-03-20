var magicians = ["Alice", "David", "Chris"];
function makeGreat(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] += ' the great';
    }
}
makeGreat(magicians);
console.log(magicians);
