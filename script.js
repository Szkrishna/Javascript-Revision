// // Callback Functions
// function greetUser(name, callback) {
//   console.log("Hello " + name);
//   callback();
// }

// function sayGoodbye() {
//   console.log("Goodbye!");
// }

// greetUser("Krishna", sayGoodbye);

// // Using SetTimeOut
// setTimeout(function () {
//   console.log("Executed after 2 seconds");
// }, 2000);


const button = document.getElementById('btn');

// Named
// function handleClick() {
//   console.log("Button clicked!");
// }
// button.addEventListener("click", handleClick);

// // Anonymous
// button.addEventListener("click", function () {
//   console.log("Button clicked!");
// });

// // Arrow
// button.addEventListener("click", () => {
//   console.log("Button clicked!");
// });

function countButtonClicked() {
    let count = 0;
    button.addEventListener("click", () => {
        console.log("Button clicked!", ++count);
    });
}

countButtonClicked();