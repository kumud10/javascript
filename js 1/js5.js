class Person{
    constructor(name,age){
        console.log("Constructor Called");
        this.myname = name
        this.myage = age
    }
}

const myobject = new Person("Ash", "38");

console.log(myobject);
console.log(myobject.myname);
console.log(mypbject.myage);