// JS to JSON & JSON to JS Object
let users = {
    FName: "Kumud" ,
    LName: "Rajpurohit" ,
    Age: 20 ,
    Contact: 1234567890
}

console.log(users);

let mydata = JSON.stringify(users);

console.log(mydata);

let a = JSON.parse(myadata);
console.log(a);

