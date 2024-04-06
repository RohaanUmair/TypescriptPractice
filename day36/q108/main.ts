// This function checks if both strings are identical or not, ignoring case sensitivity
function areStringsEqual(str1: string, str2: string): boolean {
    return str1.toLowerCase() === str2.toLowerCase();   // Converts both strings into lowerCase to ignore case sensitivity
}

console.log(areStringsEqual('Hello', 'HEllo'));   // true
console.log(areStringsEqual('Hello', 'World'));   // false