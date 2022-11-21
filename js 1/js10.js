class Person {
    constructor(name) {
        this.name = name;
    }

    get personName() {
        return this.name;
    }

    set personName(x) {
        this.name = x;
    }
}

let person1 = new Person('Ash');
console.log(person1.name);

person1.personName = 'Nirav';
console.log(person1.name);