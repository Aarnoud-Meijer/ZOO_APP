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

	getAllMethods(){
		return Object.getOwnPropertyNames( this.prototype );
		obj =this;
	//	console.log(obj);
		return Object.getOwnPropertyNames(this)
			.filter(function(prop) {
				return typeof obj[prop] == 'function';
			});
	}
}
