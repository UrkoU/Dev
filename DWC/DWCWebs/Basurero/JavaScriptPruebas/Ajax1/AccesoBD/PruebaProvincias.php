<?php
$ComunidadParam=utf8_encode($_REQUEST["comunidad"]); 
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
$sql = "SELECT * from Provincias WHERE Comunidad = '" . $ComunidadParam ."'";
$resultado = $link->query($sql);
$filas=$resultado->num_rows;

for ($i=0;$i<$filas;$i++){
    $fila = mysqli_fetch_array($resultado);
    $miArray[$i] = array("Provincia"=>$fila["Provincia"]);
}
// echo $ComunidadParam
echo  json_encode($miArray);
mysqli_close($link);
?>