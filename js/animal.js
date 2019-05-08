$(function(){

	class animal {
		// define properties

		constructor(array properties) {
			
			//this.height = height;
			//this.width = width;
		}

		make_noise(){
			// print sound
		}

		calc_energy(){
		
		}

		consume(){
			// drink / eat
		}

		setname(name){
			
		}
		
		getname(){
			
		}

		age(){
			
		}

	}



	class dog extends animal {
		speak() {
			console.log(this.name + ' barks.');
		}
	}

});
