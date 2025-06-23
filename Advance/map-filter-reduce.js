const arr =  [1, 2, 3, 4, 5];

// map examples
let bi = arr.map(double);
console.log(bi);
// sorter syntax
bi = arr.map((item) => item*2);
console.log(bi);

let tri = arr.map(triple);
console.log(tri);
// sorter syntax
tri = arr.map((item) => item*3);
console.log(tri);

let bin = arr.map(binary);
console.log(bin);
// sorter syntax
bin = arr.map((item) => item.toString(2));
console.log(bin);

function double(x) {
    return 2*x;
}

function triple(x) {
    return 3*x;
}

function binary(x) {
    return x.toString(2);
}



// filter example
let odds = arr.filter((item) => item%2 != 0);
let evens = arr.filter((item) => item%2 == 0);
let greaterThenThree = arr.filter((item) => item > 3);

console.log(odds); 
console.log(evens); 
console.log(greaterThenThree); 



// reduce example
let sum = arr.reduce((curr, acc) => curr + acc, 0);
console.log(sum);

let multiply = arr.reduce((curr, acc) => curr * acc, 1);
console.log(multiply);

let greater = arr.reduce((curr, acc) => curr > acc ? curr : acc, 0);
console.log(greater);

let smaller = arr.reduce((curr, acc) => curr < acc ? curr : acc, 0);
console.log(smaller);