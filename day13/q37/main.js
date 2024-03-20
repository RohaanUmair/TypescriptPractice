function make_shirt(size, message) {
    if (size === void 0) { size = 'large'; }
    if (message === void 0) { message = 'I love coding'; }
    console.log("Make a t-shirt of ".concat(size, " size with a message \"").concat(message, "\"."));
}
make_shirt();
make_shirt('medium');
make_shirt('small', 'TypeScript is good');
