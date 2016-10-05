type Car = '1' | '2' | '3';

function restOperator(a: number, ...numbers: number[]): number {
    numbers.forEach((n) => a += n);

    return a;
}

console.log(restOperator(1, 2, 3, 4, 5));
