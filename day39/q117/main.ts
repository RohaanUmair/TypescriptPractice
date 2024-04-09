function evaluateGrade(grade: string): void {
    switch (grade){
        case 'A':
            console.log('Excellent');
            break;
        case 'B':
            console.log('Good');
            break;
        case 'C':
            console.log('Fair');
            break;
        case 'D':
            console.log('Poor');
            break;
        case 'F':
            console.log('Fail');
            break;
        default:
            console.log('Invalid Grade');
            break;
    }
}


evaluateGrade('B');   // Outputs 'Good'
evaluateGrade('H');   // Outputs 'Invalid Grade'