let userProfile = (function(){
    let name = 'Ali';
    let age = 20;
    return {
        displayInfo: function(){
            console.log(`Name: ${name}, Age:${age}`);
        }
    }
})();

userProfile.displayInfo();