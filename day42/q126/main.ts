// Demonstrate 'this' behavior in nested function
const myObject = {
    property: 'Value',
    outerMethod: function (){
        console.log(this.property);   // Logs 'Value'

        const innerMethod = () => {
            console.log(this.property);   // Still accesses myObject's property because of arrow function capturing 'this' from outer scope
        };

        innerMethod();
    }
};

myObject.outerMethod();