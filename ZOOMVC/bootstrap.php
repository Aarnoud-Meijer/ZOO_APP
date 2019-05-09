<?php	// ZOO APP

namespace zoo;
define('APPLICATION_PATH', realpath('../'));
define('DS', DIRECTORY_SEPARATOR);

// security check!
// if not devined WEBROOT_PATH

// config
include('config.php');



// simple view for now
include('view/home.php');
?>
