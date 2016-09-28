function returnValue<T>(arg: T): T {
    return arg;
}

let output = returnValue<string>('some string');
let output2 = returnValue<number>(5);

function inverse<T>(arg: T[]): T[] {
    return arg.reverse();
}

let inversedArray = inverse<number>([1, 4, 10]);

console.log(inversedArray);
