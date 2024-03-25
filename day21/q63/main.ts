type Shape = {
    kind: 'circle' | 'rectangle';
    radius?: number;
    width?: number;
    height?: number;
};

let circle: Shape = {
    kind: 'circle',
    radius: 5
};

let rectangle: Shape = {
    kind: 'rectangle',
    width: 10,
    height: 15
};

console.log(circle);
console.log(rectangle);