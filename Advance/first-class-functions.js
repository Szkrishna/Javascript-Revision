// function decleation or function statement
function a() {
    console.log("Hello Krishna");
}


//  function expression 
// 1. with ananymous function
var x = function () {
    console.log("Hello Krishna");
}

// 2. with named function 
var y = function abc() {
    console.log("Hello Krishna");
}


// anonymous function 
const regexVar = function () {
    console.log("Hello Krishna");
};

// we cannot write annonymous function as this will give us synax error
// function () {
//     console.log("Hello Krishna");
// };


// function paramaeter 
function paramFunction(a, b) {
    console.log("Hello Krishna", a, b);
}


// function argument
paramFunction(3, 4);


// first class function
// 1. Passing Function as Argument
function welcome(user, fn) {
  return fn(user);
}

function greet(name) {
  return "Hi, " + name;
}

console.log(welcome("Krishna", greet));

// 2.Returning a Function from Another Function
function outer() {
  return function inner() {
    return "Inner function executed!";
  };
}

const func = outer();
console.log(func());