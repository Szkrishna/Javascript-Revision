// callback function
const area = function (radius) {
    return (Math.PI * radius * radius);
}

const parimeter = function (radius) {
    return (2 * Math.PI * radius);
}

const diameter = function (radius) {
    return (2 * radius);
}


// higher order function
function calculate (radius, logic) {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(logic(radius[i]));
    }
    return output;
}

const radius = [1, 2, 3, 4];


// // using map
// const res1 = radius.map(area);
// console.log(res1);

// const res2 = radius.map(parimeter);
// console.log(res2);

// const res3 = radius.map(diameter);
// console.log(res3);


// function invocation
let result1 = calculate(radius, area);
console.log(result1);

let result2 = calculate(radius, parimeter);
console.log(result2);

let result3 = calculate(radius, diameter);
console.log(result3);