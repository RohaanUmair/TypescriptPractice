function replaceString(sentence: string): string{
    return sentence.replace(/JavaScript/g, 'TypeScript');
}

console.log(replaceString('I code in JavaScript and JavaScript is good.'));
