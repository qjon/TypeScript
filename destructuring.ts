class User {
    constructor(private firstName: string, private lastName: string) {
    }

    public getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

let user = new User('Kelly', 'Davis');
let {firstName, lastName} = user;

console.log(firstName); // Kelly
console.log(lastName); // Davis
