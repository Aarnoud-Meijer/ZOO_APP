'use strict';
// bootstrap zoo app

// config


// autoload


head.js("js/jquery.min.js")
.js("js/building.js")
.js("js/zoo.js")
.js("js/animal.js")
.js("js/dog.js")
.js("js/config.js")
;

// init - within callback
head.ready(function() {
	//
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
	//zoo2 = new building(credentials);

//	animal = new animal();
var dogsetting = {
	age:15,
	name:"Arjan",
	weigth:50, //Kg
	height:75, //cm
	energy:50, // julles
};

	// warning!
	// dog = new dog(dogsetting); <- wil override the dog class
	var dog1 = new dog(dogsetting);
	var dog2 = new dog(dogsetting);
//	dogs = new dog({age:21,name:"bla"});

	dog1.getAge();
	console.log(dog1.name);
//	console.log(dog.key);

//dog.age=1;
//delete dog.age;
});



