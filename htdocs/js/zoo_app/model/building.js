class building{
	constructor(properties){
		//this.properties = properties;
		//console.log(this.properties);
		this.self = this; // hack for setinterval

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

	mymethods(){
		console.log("->"+this.name+"<-");
	//	console.log(arguments.callee.toString());
//		console.log(getFuncName())
/*
		var myName = arguments.callee.toString();
		myName = myName.substr('function '.length);
		myName = myName.substr(0, myName.indexOf('('));
		console.log(myName);
*/
		var res = Object.getOwnPropertyNames(this).concat(Object.getOwnPropertyNames(this.__proto__));
		for (let m in res)
		console.log(res[m]);
	}

}

function getFuncName() {
   return getFuncName.caller.name
}
