class Car(name,color) {
    this.myname = name;
    this.mycolor = color;
}

getName(); {
    console.log("Car Name is : "+this.myname);
}
 getColor(); {
    console.log("Car Color is : "+this.mycolor);
 }
const myobject = new Car("BMW", "WHITE");

myobject.getName();
myobject.getColor();