class Animal {
    constructor (private _name: string) {

    }

    get name() {
        return this._name;
    }

    getName() {
        return this._name;
    }
}

class Cat extends Animal {
    private _age: number = 0;

    constructor (private _name: string) {
        super(_name);
    }

    get age() {
        return this._age;
    }

    set age(age: number) {
        this._age = age;
    }

    getName() {
        return 'Cat: ' + super.getName();
    }
}

let cat = new Cat('Charlie');
console.log(cat.age); // 0
console.log(cat.name); // Charlie

cat.age = 7;
console.log(cat.age); // 7
console.log(cat.getName()); // Cat: charlie
