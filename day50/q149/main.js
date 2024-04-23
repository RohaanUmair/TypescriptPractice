console.log('Start');
setTimeout(function () {
    console.log('Callback executed.');
}, 0);
console.log('end');
// "Callback executed" is logged after "end" because of the event loop
