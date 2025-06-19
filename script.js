// function a(){
//     let i = 1;

//     setTimeout(() => {
//         console.log("Value of i ==>", i);
//     }, 3000);

//     console.log("Hello Krishna");
// }

// a();


function b() {
    for(var i = 0; i < 5; i++) {
        setTimeout(() => {
            console.log("Value of i from var ==>", i);
        }, i*1000);
    }
}

b();


function c() {
    for(let i = 1; i <= 5; i++) {
        setTimeout(() => {
            console.log("Value of i from let ==>", i);
        }, i*1000); 
    }
}

c();