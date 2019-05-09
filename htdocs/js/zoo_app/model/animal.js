

class animal {
	// define properties
	//var this.test = 0;

	constructor(properties) {
		// set all properties
		for (var key in properties) {
			this[key] = properties[key];
			// console.log(key);
			// console.log(this[key]+":"+this.key);
			// this[key] wil print the method; like this.age <- if method excists
		}
		console.log(this.age);
		this.getAge();
	}

	make_noise(){
		if(this.sound !=""){
			console.log(this.sound);
		}else{
			// silent
		}
	}

	getAge(){
		// return currenttime - this.dob
		if(this.age != ""){
			console.log(this.age);
		}
	}

	calc_energy(){
	
	}

	consume(food){
		// drink / eat
		// read food.energy
		// read food.costenergy // needed to consume
	}

	setname(name){
		
	}
	
	getname(){
		
	}


	
	state(){
		
	}

	action(){
		// set random action / state
	}

}





