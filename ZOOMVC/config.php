<?php

namespace zoo\config;

// security check if file is directly called
if(!defined('APPLICATION_PATH')) die();

$config = array(
	'config_file' => dirname(__FILE__).DIRECTORY_SEPARATOR.__FILE__, // use DS

);

?>
