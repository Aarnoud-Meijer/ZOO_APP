
class actions{

//	constructor(){
		
//	}

	feed(){
		
	}

	sleep(){
		
	}

	walk(){
		
	}

	_getallmethods(){
		var res = Object.getOwnPropertyNames(this).concat(Object.getOwnPropertyNames(this.__proto__));
		for (let m in res)
		console.log(res[m]);
	}
}
