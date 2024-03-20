let currentUsers: string[] = ['user1', 'admin', 'user3', 'user4', 'user5'];
let newUsers:string[] = ["User1", "User6", "user7", "admin", "User9"];

newUsers.forEach(function(newUser){
    if (currentUsers.some(function(currentUser){
        return currentUser.toLowerCase() === newUser.toLowerCase();
    })){
        console.log(`${newUser} username not available`);   
    }
    else {
        console.log(`${newUser} is available.`);
    }
})