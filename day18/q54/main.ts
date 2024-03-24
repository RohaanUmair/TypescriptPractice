function createObject(key: string, value: string){
    let object = {};
    object[key] = value;
    return object;
}

console.log(createObject('color', 'blue'));