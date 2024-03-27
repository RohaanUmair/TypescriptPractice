function swapValues() {
    var a = 10;
    var b = 5;
    console.log("Initially a is '".concat(a, "' and b is '").concat(b, "'")); //logs the initial values of a and b
    var c = a;
    a = b;
    b = c;
    console.log("After swap, a is '".concat(a, "' and b is '").concat(b, "'")); //logs the swapped values of a and b
}
swapValues();
