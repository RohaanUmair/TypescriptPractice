const promise = new Promise<string>((resolve) => {
    setTimeout(() => {
        resolve('Hello World');
    }, 2000);
});

promise.then((message) => console.log(message));