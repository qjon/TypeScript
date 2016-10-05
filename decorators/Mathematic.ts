function log(target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) {
    let originalMethod = descriptor.value; // save a reference to the original method

    // NOTE: Do not use arrow syntax here. Use a function expression in
    // order to use the correct value of `this` in this method (see notes below)
    descriptor.value = function(...args: any[]) {
        let className: string = target.constructor['name'];
        let arg = JSON.stringify(args);
        let result = originalMethod.apply(this, args);               // run and store the result
        let res = JSON.stringify(result);

        console.log(`Method "${propertyKey}" from class "${className}" have been called with ${arg} and return value ${res}`);

        return result;                                               // return the result of the original method
    };


    return descriptor;
}

class Mathematic {

    @log
    add(a: number, ...b: number[]): number {
        b.forEach((value) => a += value);

        return a;
    }
}

let math = new Mathematic();
math.add(3,4,5);
