function convertCase(str: string){
    let upperCase = str.toUpperCase();   //converts to upper case
    let lowerCase = str.toLowerCase();   //converts to lower case

    console.log(`
    Upper case: ${upperCase}
    Lower case: ${lowerCase}
    `);
}

convertCase('Hello World!');