//Nested Object
var person = {
    firstName: "Kumud" ,
    lastName: "Rajpurohit" ,
    cars: {
        car1: "Lamborghini" ,
        car2: "Rolls Royce"
    } 
}

console.log(person.cars.car1);
console.log(person.cars['car2']);

