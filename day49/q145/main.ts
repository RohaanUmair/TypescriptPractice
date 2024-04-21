function executeCallback(
    callback: (arg1: number, arg2: number) => void,
    arg1: number,
    arg2: number
): void {
    callback(arg1, arg2);
}


const add = (a: number, b: number) => {
    console.log(a + b);
}


executeCallback(add, 5, 4);