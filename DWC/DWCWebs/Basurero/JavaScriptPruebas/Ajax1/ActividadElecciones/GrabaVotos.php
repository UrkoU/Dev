<?php
$partido=utf8_encode($_REQUEST["partido"]); 
$votos=utf8_encode($_REQUEST["votos"]); 
$servername = "localhost";
$username = "urko";
$password = "urko";
// Conexión a la base de datos:
$link = @new mysqli($servername, $username, $password, "urko");

if ($link->connect_errno) {
    die('Connect Error: ' . $link->connect_error);
}
// Consulta
$sql = "UPDATE elecciones SET Votos = $votos WHERE Partido = $partido";
// $resultado = $link->query($sql);

// for ($i=0;$i<$filas;$i++){
//     $fila = mysqli_fetch_array($resultado);
//     // Crear el array de objetos con ciudad y tiempo
//     $miArray[$i] = array("Pais"=>$fila["Pais"], "Oro"=>$fila["Oro"], "Plata"=>$fila["Plata"], "Bronce"=>$fila["Bronce"]);
// }
// Control de si se ha realizado o no el update
if ($link->query($sql) === TRUE) {
    echo "'$sql' <a href='Votacion.html'>Volver</a>";
}else {
    echo "ERROR";
}
// echo  `UPDATE elecciones SET Votos = $votos WHERE Partido = $partido`;
// echo `<button onclick="console.log('here')">`
// echo $votos;
mysqli_close($link);
?>