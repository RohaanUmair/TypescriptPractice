function swapValues(){
    let a: number = 10;
    let b: number = 5;
    console.log(`Initially a is '${a}' and b is '${b}'`);   //logs the initial values of a and b
    
    let c = a;
    a = b;
    b = c;
    console.log(`After swap, a is '${a}' and b is '${b}'`);   //logs the swapped values of a and b
}

swapValues();