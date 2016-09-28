// simple function
function add (a: number, b: number) : number {
    return a + b;
}
add(3, 8); // 11

// function with default value
function incValue(value: number, inc: number = 1): number {
    return value + inc;
}

incValue(2); // 3
incValue(2, 4); // 6