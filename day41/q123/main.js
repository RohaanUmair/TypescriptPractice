// This function iterates through string until it founds a vowel
function findVowel(str) {
    var vowels = 'aeiouAEIOU';
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var char = str_1[_i];
        if (vowels.includes(char)) {
            console.log("Found first vowel: ".concat(char));
            break;
        }
        console.log(char); // Logs each character until a vowel is found
    }
}
findVowel('Flying bird');
