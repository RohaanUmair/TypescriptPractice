var students = new Map();
students.set(1, 'Ali');
students.set(2, 'Shahid');
students.set(3, 'Jawad');
students.forEach(function (names, id) {
    console.log("Students ID: ".concat(id, ", Student's Name: ").concat(names));
});
