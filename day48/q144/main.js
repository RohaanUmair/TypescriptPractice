var promise1 = Promise.resolve(3);
var promise2 = 45;
var promise3 = new Promise(function (resolve) {
    setTimeout(resolve, 100, 'foo');
});
Promise.all([promise1, promise2, promise3]).then(function (values) {
    console.log(values);
});
// Promise.all() waits for all promises to be resolved
