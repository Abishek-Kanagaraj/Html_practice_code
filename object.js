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

// to find the existence of the key
const object1 = {
    prop: 'exists',
};

console.log(Object.hasOwn(object1, 'prop'));//returns boolean

