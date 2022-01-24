<?php
// $ComunidadParam=utf8_encode($_REQUEST["comunidad"]); 
$servername = "localhost";
$username = "urko";
$password = "urko";
$Salida = "";
// Conexión a la base de datos:
$link = @new mysqli($servername, $username, $password, "urko");

if ($link->connect_errno) {
    die('Connect Error: ' . $link->connect_error);
}
// Consulta
$sql = "SELECT * from Meteorologia";
$resultado = $link->query($sql);
$filas=$resultado->num_rows;

for ($i=0;$i<$filas;$i++){
    $fila = mysqli_fetch_array($resultado);
    // Crear el array de objetos con ciudad y tiempo
    $miArray[$i] = array("Ciudad"=>$fila["Ciudad"], "Tiempo"=>$fila["Tiempo"]);
}

echo  json_encode($miArray);
mysqli_close($link);
?>