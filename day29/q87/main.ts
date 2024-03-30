// this function extratcs first 10 characters from the any text
function extractFirstTenChars(str: string): string {
    return str.substring(0, 10);   //gets characters from index 0 up to, but not including, index 10
}

console.log(extractFirstTenChars('Hello World!'));