
const arrowfunc=(num1,num2=3)=> num1+num2;
``
let sum=arrowfunc(2);
console.log(sum);


const person={
name:"Abishek",
age:"20"
}
let{name,age}=person

console.log(person.name,name,person['name']);
const arr=[2,5,7];
let [num1,num2,num3]=arr;

console.log(num1,num2,num3);

