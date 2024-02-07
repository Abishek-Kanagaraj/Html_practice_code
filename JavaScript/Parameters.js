// Default parameter
function fun( a=1,b=1){
	return a + b;
}
console.log("Default Parameter:");
console.log(fun(5,2));
console.log(fun());

// ES6 rest parameter(...)
function func(...input){
	let sum = 0;
	for(let i of input){
		sum += i;
	}
	return sum;
}
console.log("Rest Parameter:");
console.log(func(1,2)); 
console.log(func(1,2,3));  
console.log(func(1,2,3,4,5));

// Spread operator
let arr = [1,2,3,-1];
console.log("Spread Operator")
console.log(...arr);
console.log(Math.max(...arr));

