const userName = 'Ali';
try {
    userName = 'Ali';
} catch (error){
    console.log('Error, cannote reassign a variable declared using const.');
}




let age = 20;
age = 21;
console.log(age);