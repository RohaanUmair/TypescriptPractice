{
    let blockLet = 'any value';
    const blockConst = 'any value';
    console.log(blockConst, blockLet);
}

try {
    console.log(blockConst, blockLet);
} catch (error){
    console.log('not accessible outside the block');
}