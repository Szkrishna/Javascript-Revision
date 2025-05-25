// console.log(Math);
// // This code will log the Math object to the console, which contains properties and methods for mathematical constants and functions.

// // #Important Math methods in JavaScript
// const num = -18;
// console.log(Math.abs(num));
// // This code will log the absolute value of -18, which is 18.

// const num2 = 4.36;
// console.log(Math.round(num2));
// // This code will log the rounded value of 4.36, which is 4.

// console.log(Math.ceil(num2));
// // This code will log the smallest integer greater than or equal to 4.36, which is 5.

// console.log(Math.floor(num2));
// // This code will log the largest integer less than or equal to 4.36, which is 4.

// console.log(Math.max(1, 2, 3, 4, 5));
// // This code will log the maximum value among the provided numbers, which is 5.

// console.log(Math.min(1, 2, 3, 4, 5));
// // This code will log the minimum value among the provided numbers, which is 1.

// const num3 = 25;
// console.log(Math.sqrt(num3));
// // This code will log the square root of 25, which is 5.

// console.log(Math.pow(num3, 2));
// // This code will log 2 raised to the power of 3, which is 8.

// console.log(Math.random());
// // This code will log a random number between 0 (inclusive) and 1 (exclusive).

// let newNumber = Math.round(Math.random() * 6);
// console.log(newNumber);
// // This code will log a random integer between 0 and 6 (inclusive) by multiplying a random number by 6 and rounding it to the nearest integer.


let draw = 5;
let occurance = [];
while (occurance.length < draw) {
  let newNumber = Math.round(Math.random() * 100);
  if (!occurance.includes(newNumber)) {
    if (newNumber < 10) {
        newNumber = "0" + newNumber;
    } else {
        newNumber = newNumber.toString();
    }
    occurance.push(newNumber);
  }
}
console.log(occurance);
// This code generates 5 unique random numbers between 0 and 100, formats them to be two digits (adding a leading zero if necessary), 
// and logs the resulting array of numbers to the console.
// The while loop continues until the length of the `occurance` array is less than `draw`, ensuring that only unique numbers are added.
// The `Math.random()` function generates a random number between 0 and 1, which is then multiplied by 100 to get a number between 0 and 100.
// The `Math.round()` function rounds the number to the nearest integer.
// The `includes()` method checks if the generated number is already in the `occurance` array to ensure uniqueness.
// The `if` statement checks if the number is less than 10, and if so, it adds a leading zero to format it as a two-digit string.
// The final result is an array of unique two-digit random numbers, which is logged to the console.

`
#Summary (These below method are important method used to manipulate strings in JavaScript)
1. abs - get absolute value of a number
2. round - round a number to the nearest integer
3. ceil - round a number up to the nearest integer
4. floor - round a number down to the nearest integer
5. max - get the maximum value from a set of numbers
6. min - get the minimum value from a set of numbers
7. sqrt - get the square root of a number
8. pow - raise a number to the power of another number
9. random - generate a random number between 0 and 1
10. random with range - generate a random number within a specified range
11. random unique numbers - generate unique random numbers within a specified range
`