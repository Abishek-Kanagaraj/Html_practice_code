// Inheritance
class Vehicle{
	constructor(name,engine){
		this.name = name;
		this.engine = engine;
	}
    start(){
        console.log("Engine starts...");
    }
}

class Bike extends Vehicle{

}
const bike=new Bike('Gixxer','250cc');
bike.start();
console.log(bike.engine);