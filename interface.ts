interface IAnimal {
    name: string;
    age: number;

    getName(): string;
}

class Animal implements IAnimal {
    constructor(public name: string, public age: number) {

    }

    public getName() {
        return this.name;
    }
}

let cat = <IAnimal>{};

cat.getName = function () {

}


console.log(cat.getName());
