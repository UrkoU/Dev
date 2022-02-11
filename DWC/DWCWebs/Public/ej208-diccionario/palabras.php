<?php
$servername = "localhost";
$username = "urko";
$password = "urko";
// Conexión a la base de datos:
$link = @new mysqli($servername, $username, $password, "urko");

if ($link->connect_errno) {
    die('Connect Error: ' . $link->connect_error);
}
// Consulta
$sql = "SELECT * FROM diccionario";
$resultado = $link->query($sql);
$filas=$resultado->num_rows;

for ($i=0;$i<$filas;$i++){
    $fila = mysqli_fetch_array($resultado);
    // Crear el array de objetos con ciudad y tiempo
    $miArray[$i] = array("Id"=>$fila["Id"], "Hitza"=>$fila["Hitza"], "Palabra"=>$fila["Palabra"],"Word"=>$fila["Word"], "Parole"=>utf8_encode($fila["Parole"]));
    // $miArray[$i] = array("Id"=>$fila["Id"], "Palabra"=>$fila["Palabra"]);
}

echo json_encode($miArray);
mysqli_close($link);
?>