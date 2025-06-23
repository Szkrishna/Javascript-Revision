`In JavaScript, every object has a hidden internal property called [[Prototype]], which refers to another object. 
This other object is the prototype, and it’s used as a fallback source for properties and methods.`


let obj = {};
console.log(obj.toString()); 
// works even though we didn’t define toString
// obj inherits toString() from Object.prototype

`Prototypal inheritance is a feature in JavaScript where one object can inherit properties and methods 
from another object using the prototype chain.`

const person = {
  greet() {
    return "Hello!";
  }
};

const student = Object.create(person); 
// student inherits from person
student.name = "Krishna";

console.log(student.greet()); // "Hello!"
console.log(student.name);    // "Krishna"
`Here, student inherits the greet() method from person through the prototype.`
