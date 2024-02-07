// Inheritance
class Vehicle {
	constructor(name, engine) {
		this.name = name;
		this.engine = engine;
	}
	start() {
		console.log("Engine starts...");
	}
}

class Bike extends Vehicle {

}
const bike = new Bike('Gixxer', '250cc');
bike.start();
console.log(bike.engine);

class Person {
	name;
	constructor(name) {
		this.name = name;
	}

	introduceSelf() {
		console.log(`Hi! I'm ${this.name}`);
	}
}
class Professor extends Person {
	teaches;
	constructor(name, teaches) {
		super(name);
		this.teaches = teaches;
	}

	introducemySelf() {
		console.log(
			`My name is ${this.name}, and I will be your ${this.teaches} professor.`
		);
	}
}
const Abishek = new Professor('Abishek');
Abishek.introduceSelf();
