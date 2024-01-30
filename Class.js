// Classes in ES6
class Vehicle{
	constructor(name,engine){
		this.name = name;
		this.engine = engine;
	}
}

const bike1 = new Vehicle('Ninja ZX-10R','998cc');
const bike2 = new Vehicle('Duke','390cc');

console.log(bike1.name);  
console.log(bike2.name); 
console.log(bike2.engine);
