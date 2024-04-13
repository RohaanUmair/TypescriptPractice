// This function iterates through string until it finds a vowel
function findVowel(str: string): void {
    const vowels: string = 'aeiouAEIOU';
    for (const char of str){
        if (vowels.includes(char)){
            console.log(`Found first vowel: ${char}`);
            break;
        }
        console.log(char);   // Logs each character until a vowel is found
    }
}

findVowel('Flying bird');