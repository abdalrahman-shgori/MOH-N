<?php
header("Access-Control-Allow-Origin: https://abdalrahman-shgori.github.io/MOH-N");
header("Access-Control-Allow-Methods: POST");
$filename = 'customer.txt';

// Read the current content of the file
$currentNumber = file_get_contents($filename);

// Parse the content as an integer and increment it
$currentNumber = intval($currentNumber) + 1;

// Write the updated number back to the file
file_put_contents($filename, $currentNumber);

http_response_code(200);
?>
