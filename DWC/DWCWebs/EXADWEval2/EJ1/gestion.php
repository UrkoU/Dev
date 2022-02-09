<?php 
    $id=utf8_encode($_REQUEST["id"]); 

    // conexion a la base de datos
    $link = @new mysqli("localhost", "urko", "urko", "urko");
    if ($link->connect_errno) {
        die('Connect Error: ' . $link->connect_error);
    }

    // Suma 1 al número de la sección deseada
    $sql = "UPDATE supermercado SET Numero=Numero+1 where Id=$id;";
    $link->query($sql); 

    // Obtenemos la fila de la sección para devolverla
    $sql = "SELECT * from supermercado WHERE Id=$id;";
    $resultado = $link->query($sql); 

    $fila = mysqli_fetch_array($resultado);
    $respuesta = $fila["Numero"];
    echo json_encode($respuesta);
    mysqli_close($link);
?>