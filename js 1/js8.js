class Car{
    constructor(model,color){
      this.model_year = model;
      this.color = color;  
    }

    getName() {
        console.log("Car Name is " + this.model_year);
    }

    getColor() {
        console.log("Car Name is " + this.color);
    }
}
i10 = new Car("2022", "White");
i20 = new Car("2020", "Black");

console.log(i10.color);
console.log(i10.model_year);

i20.getName();
i20.getColor();