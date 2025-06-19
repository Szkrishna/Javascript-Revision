//Scope ans shadowing in js

let b = 10;
function a() {
    let b = 20;
    console.log(b);
}

a();
console.log(b);


var d = 10;
function c() {
    let d = 20;
    console.log(d);
}

c();
console.log(d);


const f = 10;
function e() {
    var f = 20;
    console.log(f);
}

e();
console.log(f);