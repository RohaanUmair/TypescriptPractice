function greetUser(userName) {
    if (userName === void 0) { userName = 'anonymous'; }
    console.log("Hello ".concat(userName));
}
greetUser('Ali');
greetUser();
