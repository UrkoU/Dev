<?php
$servername = "localhost";
$username = "urko";
$password = "urko";
$hitza = ($_REQUEST["hitza"]);
$palabra = ($_REQUEST["palabra"]);
$word = ($_REQUEST["word"]);
$parole = ($_REQUEST["parole"]);
// Conexión a la base de datos:
$link = @new mysqli($servername, $username, $password, "urko");

if ($link->connect_errno) {
    die('Connect Error: ' . $link->connect_error);
}
// Consulta
$sql = "INSERT INTO diccionario (Hitza, Palabra, Word, Parole) VALUES('$hitza', '$palabra', '$word', '$parole')";
$resultado = $link->query($sql);

echo 'OK';
mysqli_close($link);
?>