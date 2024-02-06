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

/*const buttons = document.querySelectorAll("button");

for (const button of buttons) {
  button.addEventListener("click", changeBackground);
}*/

// keydown property
const textBox = document.querySelector("#textBox");
const output = document.querySelector("#output");
textBox.addEventListener("keydown", (event) => {
  output.textContent = `You pressed "${event.key}".`;
});

// Prevent default 
const form = document.querySelector("form");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const para = document.querySelector("p");

form.addEventListener("submit", (e) => {
  if (fname.value === "" || lname.value === "") {
    e.preventDefault();
    para.textContent = "*Some fields are empty";
    para.style.color=`rgb(255,0,0)`;
  }
});
const bton=document.querySelector('.greet');
const controller=new AbortController();

bton.addEventListener('click',(event)=>{
  console.log("greet",event)
}, {signal:controller.signal})


