<?php

// namespace


$z = new XMLReader;
$z->open('data.xml');

$doc = new DOMDocument;

// move to the first <product /> node
while ($z->read() && $z->name !== 'product');

// now that we're at the right depth, hop to the next <product/> until the end of the tree
while ($z->name === 'product')
{
	// either one should work
	//$node = new SimpleXMLElement($z->readOuterXML());
	$node = simplexml_import_dom($doc->importNode($z->expand(), true));

	// now you can use $node without going insane about parsing
	var_dump($node->element_1);

	// go to next <product />
	$z->next('product');
}

?>
