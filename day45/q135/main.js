var person = {
    name: 'Alice',
    age: 18,
    grade: 12,
};
// Converting the object into a JSON string with indentation
var jsonString = JSON.stringify(person, null, 4); // This specifies number of white spaces to be 4
console.log(jsonString); /* Outputs:
{
    "name": "Alice",
    "age": 18,
    "grade": 12,
}
*/
