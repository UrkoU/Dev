<?php
    $servername = "localhost";
      //Conexi√≥nalabasededatos:
    $link = @new mysqli($servername, "urko", "urko", "urko");
    
    if ($link->connect_errno) {
        die('ConnectError:' . $link->connect_error);
    }

    //Consulta
    $sql = "SELECT * FROM elecciones ORDER BY Votos DESC";
    $resultado = $link->query($sql);
    $filas = $resultado->num_rows;

    for ($i = 0; $i < $filas; $i++) {
        $fila = mysqli_fetch_array($resultado);
        $miArray[$i] = array("Partido"=>utf8_encode($fila["Partido"]),"Votos"=>$fila["Votos"]);
    }

    echo json_encode($miArray);
    mysqli_close($link);
?>