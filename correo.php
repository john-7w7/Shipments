<?php

$destino = "shipments2.0@gmail.com";
$nombre = $_POST['nombre'];
$email = $_POST['email'];
$telefono = $_POST['telefono'];
$asunto = $_POST['asunto'];
$mensaje = $_POST['mensaje'];


$header = "Envio desde el formulario";
$mesajeCompleto = "\n Nombre: " . $nombre . "\n" "Email: " . $email . "\n" "telefono: " . $telefono . "\n" "Asunto: " . $asunto . "\n" "Mensaje: " . $mensaje;
mail($destino, $asunto, $mensajeCompleto, $header);
header("Location: formulario.html");


?>