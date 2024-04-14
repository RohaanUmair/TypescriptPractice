// An object with multiple properties and a method
var rectangle = {
    length: 5,
    width: 10,
    calcArea: function () {
        return this.length * this.width;
    }
};
console.log(rectangle.calcArea());
