async function fetchData(){
    // Assuming fetchSomething returns a promise
    const data = await fetchSomething();
    console.log(data);
    // The await keyword pauses the execution until the promise settles
}