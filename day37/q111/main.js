// This function tells age group of the given age
function ageGroup(age) {
    if (age < 13) {
        return 'Child';
    }
    else if (age <= 19) {
        return 'Teenager';
    }
    else {
        return 'Adult';
    }
}
console.log(ageGroup(12)); // Outputs 'Child'
console.log(ageGroup(18)); // Outputs 'Teenager'
console.log(ageGroup(30)); // Outputs 'Adult'
