console.log("inside warmup file");

//Create a class called Circle. It should have one property called radius

class Circle {
    constructor(radius) {
      this.radius = radius;
    }

    getDiameter() {
        return Math.PI * this.radius * 2;
      }
    
    getCircumference() {
        return Math.PI * this.radius * 2;
      }

    getArea() {
        return Math.PI * this.radius * this.radius;
    }
}
const circle = new Circle(10);
console.log(circleTen.getDiameter()); // 20)
console.log(circleTen. getCircumference());
console.log(circleTen. getArea());