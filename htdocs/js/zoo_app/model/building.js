class building{
	constructor(properties){
		//this.properties = properties;
		//console.log(this.properties);
		for (var key in properties) {
			this[key] = properties[key];
		}
	}

	credentials(){
		for(var key in this.properties) {
			this[key] = properties[key];
		}
	}
}
