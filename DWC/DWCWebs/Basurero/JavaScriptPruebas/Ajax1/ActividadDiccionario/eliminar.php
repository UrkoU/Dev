<?php
$servername = "localhost";
$username = "urko";
$password = "urko";
$id = ($_REQUEST["id"]); 
// Conexión a la base de datos:
$link = @new mysqli($servername, $username, $password, "urko");

if ($link->connect_errno) {
    die('Connect Error: ' . $link->connect_error);
}
// Consulta
$sql = "DELETE FROM diccionario WHERE Id='$id'";
$resultado = $link->query($sql);

echo 'OK';
mysqli_close($link);
?>