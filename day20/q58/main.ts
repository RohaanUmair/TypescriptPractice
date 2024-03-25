function averageScore(...scores: number[]): number {
    let total = scores.reduce((sum, score) => sum + score, 0);
    return total / scores.length;
}

console.log(averageScore(20, 10, 5, 20, 5));        //shows the average score