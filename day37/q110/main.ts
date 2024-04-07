function assignGrade(percentage: number){
    if (percentage < 0 || percentage > 100){
        console.log('Please enter a valid percentage.');
    } else if (percentage < 50){
        console.log('F');
    } else if (percentage < 65){
        console.log('D');
    } else if (percentage < 80){
        console.log('C');
    } else if (percentage < 90){
        console.log('B');
    } else if ( percentage >= 90){
        console.log('A');
    }
}

assignGrade(45);   // Outputs F
assignGrade(90);   // Outputs A
assignGrade(72);   // Outputs C