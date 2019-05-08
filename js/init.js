'use strict';
// bootstrap zoo app

// config


// autoload


head.js("js/jquery.min.js")
.js("js/building.js")
.js("js/zoo.js")
.js("js/animal.js")
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
	dog = new dog();
dog.age=1;
delete dog.age;
});




