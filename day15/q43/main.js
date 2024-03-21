var magicians = ["Alice", "David", "Chris"];
function makeGreat(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] += ' the great';
        console.log(magicians[i]);
    }
}
function showMagicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
console.log('Original Magicians:');
showMagicians(magicians);
var greatMagicians = magicians.slice(0);
console.log('Great magicians:');
makeGreat(greatMagicians);
