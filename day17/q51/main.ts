function calcArea(height: number, width: number){
    let area = height * width;
    return area;
}

let calcAreaArrow = (height: number, width: number): number => width * height;

console.log(calcArea(2, 8));