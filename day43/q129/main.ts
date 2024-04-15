const traditionalVsArrow = {
    value: 'traditionalVsArrow value',
    tradionalFunction: function (){
        console.log('Traditional function:', this.value);   // 'this' refers to traditionalVsArrow object
    },
    arrowFunction: () => {
        console.log('Arrow function:', this.value);   // 'this' refers to the scope in which traditionalVsArrow object was defined
    }
};

traditionalVsArrow.tradionalFunction();
traditionalVsArrow.arrowFunction();