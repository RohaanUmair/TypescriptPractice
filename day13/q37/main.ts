function make_shirt(size: string = 'large', message: string = 'I love coding'){
    console.log(`Make a t-shirt of ${size} size with a message "${message}".`);
}

make_shirt();
make_shirt('medium');
make_shirt('small', 'TypeScript is good');