

// use autoloader
// head.js("js/building.js");


//class zoo extends building implements actions {
class zoo extends building {
	constructor(properties){
		console.log(properties);
		super(properties);
		this.animals =[];
	}

	credentials(){
		// credit
	}

	// factory
	getAnimals(total=0){
		//console.log(total);
		 for(var i=0; i<total; i++){
			this.animals[i] = new dog(); 
		}
	}
}


// age range
