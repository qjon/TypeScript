export class Person {
    constructor(private _name: string) {}

    get name() {
        return this._name;
    }
}