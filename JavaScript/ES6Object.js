// Object
const person={
    name:"Abishek",
    YOB:2001,
    Employee:true
};
console.log(person.name);
person.name="Manoj";
console.log(person.name);

let {name, YOB, isEmployee} = person;
console.log(name, YOB, isEmployee);

