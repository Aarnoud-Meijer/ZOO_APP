<?php	// ZOO APP

namespace zoo;
define('APPLICATION_PATH', realpath('../'));
define('DS', DIRECTORY_SEPARATOR);

// security check!
// if not devined WEBROOT_PATH
if(!defined('WEBROOT_PATH')) die();

// config
include('config.php');

// controller

// simple view for now
include('view/home.php');
?>
