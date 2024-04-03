function getNextBirthday(month: number, day: number): Date {
    const today = new Date();
    let year = today.getFullYear();
    const birthday = new Date(year, month - 1, day);
    if (birthday < today){
        birthday.setFullYear(year + 1);
    }
    return birthday
}

console.log(`Next birthday on '${getNextBirthday(12, 28).toLocaleDateString()}'`);
