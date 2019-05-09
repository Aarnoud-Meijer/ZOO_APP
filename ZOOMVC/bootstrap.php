<?php	// ZOO APP

namespace zoo;
define('APPLICATION_PATH', realpath('../'));
define('DS', DIRECTORY_SEPARATOR);

// security check!
// if not devined WEBROOT_PATH
if(!defined('WEBROOT_PATH')) die();

error_reporting(E_ALL);

// config
include('config.php');

// controller

// simple view for now
include('view/home.php');
?>
