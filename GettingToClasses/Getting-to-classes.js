class A_School_Class {
    constructor(_name, _class, _rollno) { //a constructor gets called when you declare an object using the new keyword
            this.name = _name;
            this.class = _class;
            this.rollno = _rollno;
        }
        // Methods
    OverallDiscription() {
        console.log(`The name of student is ${this.name} and the class is ${this.class} and roll-no is ${this.rollno}`);
    }
}

var Student1 = new A_School_Class('Harsh', '7', '12') // arguments
var Student2 = new A_School_Class('Harsh2', '7', '40') // New Keyword creates a new object(Empty) and calls the constructor method
    // Arguments given here are given to the constructor of the particular class