class User {
    private firstName: string;
    private lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

let user = new User('Kelly', 'Davis');
user.getFullName(); // Kelly Davis

class User2 {
    constructor(private firstName: string, private lastName: string) {
    }

    public getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

let user2 = new User2('Kelly', 'Davis');
user2.getFullName(); // Kelly Davis


class User3 {
    constructor(private _firstName: string, private _lastName: string) {
    }

    set firstName(name: string) {
        this._firstName = name.trim();
    }

    get firstName() {
        return this._firstName;
    }

    public getFullName() {
        return `${this._firstName} ${this._lastName}`;
    }
}

let user3 = new User3('Kelly', 'Davis');
user2.getFullName(); // Kelly Davis

user2.firstName = 'Peter';
console.log(user2.firstName); // Peter