var names = ['admin', 'user1', 'user2', 'user3'];
names.forEach(function (username) {
    if (username == 'admin') {
        console.log('Hello admin, I am practicing TypeScript.');
    }
    else {
        console.log("Hello ".concat(username, ", how are you?"));
    }
});
//using for loop
/*for (let i = 0; i < names.length; i++){
    if (names[i] == 'admin'){
        console.log('Hello admin, I am practicing TypeScript.');
    }else{
        console.log(`Hello ${names[i]}, how are you?`);
    }
}*/ 
