class Person{
    constructor(name){
        this.name = name
    }

    greet() {
        console.log('Hello ${this.name}');
    }
}

let person1 = new Person('Ash');

console.log(person1.name);

person1.greet();


