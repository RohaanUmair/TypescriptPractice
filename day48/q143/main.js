//  A promise that resolves or rejects based on the condition
var conditionalPromise = new Promise(function (resolve, reject) {
    var success = Math.random() < 0.5; // Randomly choose success or failure
    if (success) {
        resolve('Success!');
    }
    else {
        reject(new Error('Failure'));
    }
});
conditionalPromise
    .then(function (result) { return console.log(result); }) // Handles a successful resolution
    .catch(function (error) { return console.log(error.message); }); // Handles a rejection
