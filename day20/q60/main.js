var userProfile = (function () {
    var name = 'Ali';
    var age = 20;
    return {
        displayInfo: function () {
            console.log("Name: ".concat(name, ", Age:").concat(age));
        }
    };
})();
userProfile.displayInfo();
