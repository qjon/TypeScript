// iteration by string
let fullName: string = 'Kelly Davis';

for (let letter of fullName) {
    console.log(letter);
}


// iteration by array
let lottoNumbers: number[] = [1, 13, 17, 20, 23, 40];

for (let number of lottoNumbers) {
    console.log(number);
}


// iteration by object
let Person: any = {
    firstName: 'Kelly',
    lastName: 'Davis',
    age: 36
};

for (let property in Person) {
    console.log(property, Person[property]);
}
