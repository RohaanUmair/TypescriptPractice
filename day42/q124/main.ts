const person = {
    name: 'Ali',
    getName: function (){
        return this.name;
    }
};

console.log(person.getName());