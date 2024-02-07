function changeColor(newColor) {
  const elem = document.getElementById("para");
  elem.style.color = newColor;
}

const parentDOM = document.getElementById("parent-id");

const test = parentDOM.getElementsByClassName("test");
console.log(test);//gives htmlcollection with index

const testTarget = parentDOM.getElementsByClassName("test"); 
console.log(testTarget[0]);//first element of the class test

const up_names = document.getElementsByName("up");
console.log(up_names[0].tagName); // displays "INPUT"
