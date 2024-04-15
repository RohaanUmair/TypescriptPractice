var _this = this;
var traditionalVsArrow = {
    value: 'traditionalVsArrow value',
    tradionalFunction: function () {
        console.log('Traditional function:', this.value); // 'this' refers to traditionalVsArrow object
    },
    arrowFunction: function () {
        console.log('Arrow function:', _this.value); // 'this' refers to the scope in which traditionalVsArrow object was defined
    }
};
traditionalVsArrow.tradionalFunction();
traditionalVsArrow.arrowFunction();
