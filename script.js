const arr =  [1, 2, 3, 4, 5];

// map examples

// let bi = arr.map(double);
// console.log(bi);

// sorter syntax
bi = arr.map((item) => item*2);
console.log(bi);

// let tri = arr.map(triple);
// console.log(tri);

// sorter syntax
tri = arr.map((item) => item*3);
console.log(tri);

// let bin = arr.map(binary);
// console.log(bin);

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