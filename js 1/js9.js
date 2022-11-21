class Calculator {
    constructor(no1,no2) {
        this.no1 = no1;
        this.no2= no2;
    }
    getSum() {
        return this.no1 + this.no2;

    }
}

var obj = new Calculator(10,10);

var sum = obj.getSum();
console.log("Sum is " + sum);

var sum = object.getSub();
console.log("Sub is " + sum);