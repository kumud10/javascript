class Person{

    constructor(name) {
        console.log("Constructor Called");
        this.name = name
    }
}

const myobject = new Person("Ash");

console.log(myobject.name);