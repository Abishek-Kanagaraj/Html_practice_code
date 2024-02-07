const obj = { foo: "bar", baz: 42 };
// Iterate through the object without loop
console.log(Object.entries(obj));
// assigns value from one object to another
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);
console.log(returnedTarget);
console.log(target);// same as returnedTarget

const object = {
    a: 'somestring',
    b: 42,
    c: false,
};
// extract values alone
console.log(Object.values(object));
//   extract keys alone
console.log(Object.keys(object));

/*to find the existence of the key
const object1 = {
    prop: 'exists',
};
const value=Object.hasOwn(object1, 'prop');
console.log(value);returns boolean*/

// to create object
const object3 = Object.create(object);
console.log(object3.a);

// defineProperty
Object.defineProperty(object3, 'newProperty', { value: 55, writable: true, });//if the writable is false you can't reassign the value for the property
object3.newProperty = 29;
console.log(object3.newProperty);

// freeze prevent from reassigning and modifications
Object.freeze(object3);
console.log(Object.isFrozen(object3));//returns boolean value

// fromEntries convert map or arrays to object
const map = new Map([
    ["foo", "bar"],
    ["baz", 42],
]);
const obj1 = Object.fromEntries(map);
console.log(obj1);
const arr = [
    ["0", "a"],
    ["1", "b"],
    ["2", "c"],
];
const obj2 = Object.fromEntries(arr);
console.log(obj2);

// seal used to prevent from deletion of objects but allows reassigning
Object.seal(object);
object.b = 55;
delete object.b;
console.log(object.b);
let obj3={username:"Abishek",
id:"11645"}
let keys =Object.keys(obj3);
console.log(keys);
Object.keys(obj3).map((key)=>console.log(obj3[key]));


