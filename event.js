const btn = document.querySelector("button");

function random(number) {
    return Math.floor(Math.random() * (number + 1));
}

/*btn.addEventListener("click", () => {
    const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
    document.body.style.backgroundColor = rndCol;
});*/
// can also make it in a function
function changeBackground(){
    const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
    document.body.style.backgroundColor = rndCol;
}
btn.addEventListener("click", changeBackground);
// removes the eventhandle
btn.removeEventListener("click",changeBackground);

const buttons = document.querySelectorAll("button");

for (const button of buttons) {
  button.addEventListener("click", changeBackground);
}


