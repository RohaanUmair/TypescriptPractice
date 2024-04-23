console.log('Start');

setTimeout(() => {
    console.log('Callback executed.');
}, 0);

console.log('end');

// "Callback executed" is logged after "end" because of the event loop