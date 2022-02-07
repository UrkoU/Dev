<?php
$partido = $_POST['Partido'];
$votos = $_POST['Votos'];

$servername = "localhost";
//Conexi√≥nalabasededatos:
$link = @new mysqli($servername, "root", "A.bc1234", "enrique");

if ($link->connect_errno) {
    die('ConnectError:' . $link->connect_error);
}

if ($link->connect_errno) {
    die('ConnectError:' . $link->connect_error);
}

//Consulta
$sql = "UPDATE elecciones SET Votos = $votos WHERE Partido = '$partido'";
$resultado = $link->query($sql);

echo "<p>UPDATE elecciones SET Votos = " . $votos . "WHERE Partido = '" . $partido . "'</p>";
echo "<button><a href='GrabaVotos.html'>Volver</a></button>";

mysqli_close($link);
