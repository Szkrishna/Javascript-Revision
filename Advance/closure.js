//basic example
function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  };
}

const counter = outer();
counter(); // 1
counter(); // 2


// nasted closure function example
function a() {
    const x = 3;
    return function b() {
        const y = 5;
        const mul1 = x * y;
        return function c(z) {
            const mul2 = mul1 * z;
            console.log(`Mutliply of ${x}, ${y} and ${z} is ${mul2}`);
        }
    }
}

const c1 = a();
const c2 = c1();
c2(2);
c2(3);
c2(4);
c2(5);