'use strict';
// bootstrap zoo app

// config

var model = "js/zoo_app/model/";

// autoload
head.js("js/lib/jquery.min.js")
.js(model+"building.js")
.js(model+"zoo.js")
.js(model+"animal.js")
.js(model+"dog.js")
.js("js/zoo_app/config.js")
.js("js/zoo_app/start_app.js")
.js("js/zoo_app/view/view.js")
;

// use php to scan whole directory





