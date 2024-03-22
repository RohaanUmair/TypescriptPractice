function logHobbies(...hobbies: string[]){
    hobbies.forEach(hobby => {
        console.log(`I enjoy ${hobby}.`);
    });
}

logHobbies('cycling', 'gaming', 'coding');