const btn = document.querySelector(".button");

// btn.style.background = "red";

btn.addEventListener("click", () => {
    btn.style.background = "green";
    i++;
    document.getElementById("text").innerHTML = `<div>You clicked me ${i} times`
});

let i = 0;


