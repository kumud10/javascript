// Javascript default parameters
function sum(x = 5, y = 5) {
    return x + y;
}

console.log(sum(2, 1));  //3
console.log(sum(9));     //14
console.log(sum());      //10
