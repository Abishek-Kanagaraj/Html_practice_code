const colors = ['red', 'blue', 'green'];
console.log(colors);
const details = ['Abishek', 'lamp', [11645, 9017]];

// length of the array
console.log(colors.length, details.length);

// Accessing and Modifying
console.log(colors[1]);
colors[1] = 'voilet';
console.log(colors);
console.log(details[2][1]);

// index of items in array
console.log(details.indexOf('lamp'));
console.log(details.indexOf('Lamp'));

// add items to array
colors.push('brown');
console.log(colors);

// remove items from array
colors.pop();//remove last element
console.log(colors);

// remove items with index
const cities = ["Manchester", "Liverpool", "Edinburgh", "Carlisle"];
let index = cities.indexOf('Edinburgh');
cities.splice(index, 1);//(index of the element, number of elements)
index = cities.indexOf('Manchester');
cities.splice(index, 2)
console.log(cities);

// Accessing every item using"for-of"
for (const color of colors) {
    console.log(color);
}

// map()
const double = number => number * 2;
const nums = [2, 4, 6, 8];
const doubled = nums.map(double);
console.log(doubled);

// filter()
const highest = number => number > 5;
const high = nums.filter(highest);
console.log(high);

// Conversion between string and array
const data = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";
const city = data.split(',');//Converts the string into array
console.log(city);
console.log(city.toString());//Converts the array into string

// for-each method
colors.forEach((item, index) => { console.log(`${index}:${item}`) });
