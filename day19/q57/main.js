var grades = [87, 89, 91, 75, 88];
var averageGrades = grades.reduce(function (total, grades) { return total + grades; }, 0) / grades.length;
console.log(averageGrades);
