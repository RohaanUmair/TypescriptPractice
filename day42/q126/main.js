// Demonstrate 'this' behavior in nested function
var myObject = {
    property: 'Value',
    outerMethod: function () {
        var _this = this;
        console.log(this.property); // Logs 'Value'
        var innerMethod = function () {
            console.log(_this.property); // Still accesses myObject's property because of arrow function capturing 'this' from outer scope
        };
        innerMethod();
    }
};
myObject.outerMethod();
