$(function(){

	class animal {
		// define properties

		constructor(properties) {
			
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

// child of / family
// dob / day of birth

	class dog extends animal {
		speak() {
			console.log(this.name + ' barks.');
		}
	}

});
