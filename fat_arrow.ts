function foo() {
    this.a = 5;

    setTimeout(() => {
        console.log(this.a);
    }, 100);
}

foo();