<?php
// Conexión a la base de datos:
$link = @new mysqli("localhost", "urko", "urko", "urko");

if ($link->connect_errno) {
    die('Connect Error: ' . $link->connect_error);
}
// Consulta
$sql = "SELECT * from supermercado";
$resultado = $link->query($sql);
$filas=$resultado->num_rows;

for ($i=0;$i<$filas;$i++){
    $fila = mysqli_fetch_array($resultado);
    $miArray[$i] = array("Seccion"=>$fila["Seccion"],"Numero"=>$fila["Numero"]);
}
// echo $ComunidadParam
echo  json_encode($miArray);
mysqli_close($link);
?>