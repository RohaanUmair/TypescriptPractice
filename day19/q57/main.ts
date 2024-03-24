let grades = [87, 89, 91, 75, 88];
let averageGrades = grades.reduce((total, grades) => total + grades, 0) / grades.length;

console.log(averageGrades);