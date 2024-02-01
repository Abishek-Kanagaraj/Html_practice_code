const str = 'String Methods';

// length of the string
let len = str.length;
console.log(len);

// retrieving a string character
let char = str[2];
console.log(char, str[0]);
console.log(str[str.length - 1]);// retrieves last element of the string

// string contains substring
console.log(str.includes("etho"));
console.log(str.startsWith('Str'));
console.log(str.endsWith('ring'));
console.log(str.startsWith('Meth'));
console.log(str.endsWith('hods'));
// substring position
console.log(str.indexOf("Methods"));
console.log(str.indexOf("x"));//substring that not present return -1
// slicing
console.log(str.slice(0, 5));

// changing case
console.log(str.toLowerCase());
console.log(str.toUpperCase());
// Updating parts of string
const str1 = str.replace('String', 'Array');
console.log(str1);
