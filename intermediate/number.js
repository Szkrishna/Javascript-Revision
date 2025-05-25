const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);

// #Important number methods
const val = "1023.45";
console.log(Number(val));
// convert string to number

console.log(parseInt(val));
// convert string to integer

let val2 = "abcdef";
// console.log(parseInt(val2));

console.log(parseFloat(val));
// convert string to float

console.log(balance.toString());
// convert number to string

const num1 = 100.23
console.log(num1.toFixed(1));
// convert number to string with 1 decimal place


console.log(num1.toPrecision(4)); 
// convert number to string with 4 significant digits

const num2 = 1000000
console.log(num2.toLocaleString());
// convert number to string with locale formatting

console.log(num2.toLocaleString('en-IN')); 
// convert number to string with Indian locale formatting

console.log(Number.isInteger(score));
// check if value is an integer

console.log(Number.isNaN(score));
// check if value is NaN


`
#Summary (These are important method which is used for number in javaScript)
1. Number() - converts a string to a number
2. parseInt() - converts a string to an integer
3. parseFloat() - converts a string to a float
4. Number.isInteger() - checks if a value is an integer
5. Number.isNaN() - checks if a value is NaN (Not a Number)
6. toString() - converts a number to a string
7. toFixed() - converts a number to a string with a fixed number of decimal places
8. toPrecision() - converts a number to a string with a fixed number of significant digits
9. toLocaleString() - converts a number to a string with locale formatting
10. toLocaleString('en-IN') - converts a number to a string with Indian locale formatting
11. new Number() - creates a Number object
`