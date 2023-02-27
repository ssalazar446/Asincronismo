<?php

$nombre = $_POST ["nombre"]; // forma sencilla
$descripcion = isset($_POST ["descripcion"])?$_POST["descripcion"]:""; //Forma mas completa
$precio = isset($_POST ["precio"])?$_POST["precio"]:""; //Forma mas completa
$cantidad = isset($_POST ["cantidad"])?$_POST["cantidad"]:""; //Forma mas completa
$total = $cantidad * $precio;

echo "El producto tiene los siguientes datos: </br>";
echo "Nombre: $nombre </br>";
echo "Descripción: $descripcion </br>";
echo "Precio: $precio </br>";
echo "Total: $total </br>";


?>