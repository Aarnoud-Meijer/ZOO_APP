'use strict';

class zoo extends building{
	constructor( credentials) {
		console.log(credentials);
	}

	credentials(){
		
	}
}

var credentials = {
	name:"Zoo",
	city:"Groningen",
//	age:new Date("January 1 1978 12:00"),
// location
// m2 size
// monney
// entre_cost
};

zoo = new zoo(credentials);
