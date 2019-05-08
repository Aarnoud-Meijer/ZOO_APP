'use strict';
// bootstrap zoo app

// config


// autoload


head.js("js/jquery.min.js")
.js("js/building.js")
.js("js/zoo.js")
;

// init
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
});


