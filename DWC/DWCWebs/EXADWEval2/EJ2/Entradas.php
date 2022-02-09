<?php
$servername = "localhost";
// Conexión a la base de datos:
$link = @new mysqli($servername, "urko", "urko", "urko");
if ($link->connect_errno) {
    die('Connect Error: ' . $link->connect_error);
}
// Consulta
$sql = "SELECT * from Entradas";
$resultado = $link->query($sql);
$filas=$resultado->num_rows;
for ($i=0;$i<$filas;$i++){
	$fila = mysqli_fetch_array($resultado);
	$miArray[$i]= array("Ocupacion"=>$fila["Ocupacion"]);
}
echo  json_encode($miArray);
mysqli_close($link);
?>
