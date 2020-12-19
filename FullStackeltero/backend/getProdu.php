<?php

require "product.php";

header("Access-Control-Allow-Origin:*");
header("Content-type: application/json");

$products = Product::getAll();

echo json_encode($products);