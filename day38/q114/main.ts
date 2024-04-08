const students = new Map<number, string>();
students.set(1, 'Ali');
students.set(2, 'Shahid');
students.set(3, 'Jawad');


students.forEach((names ,id) => {
    console.log(`Students ID: ${id}, Student's Name: ${names}`);
});