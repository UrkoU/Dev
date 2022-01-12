<meta charset = "utf-8"/>
<?php // Datos
    $pais[0]="spain"; $pais[1]="mexico"; $pais[2]="argentina"; $pais[3]="colombia";
    $ciudad[0][0]="Madrid"; $ciudad[0][1]="Barcelona"; $ciudad[0][2]="Valencia"; $ciudad[0][3]="Sevilla";
    $ciudad[0][4]="Zaragoza"; $ciudad[0][5]="Málaga"; $ciudad[0][6]="Murcia"; $ciudad[0][7]="Irún";
    $ciudad[1][0]="México D.F."; $ciudad[1][1]="Ecatepec"; $ciudad[1][2]="Guadalajara"; $ciudad[1][3]="Puebla";
    $ciudad[1][4]="Juárez"; $ciudad[1][5]="Tijuana"; $ciudad[1][6]="León"; $ciudad[1][7]="Zapopan";
    $ciudad[2][0]="Buenos Aires"; $ciudad[2][1]="Córdoba"; $ciudad[2][2]="Rosario"; $ciudad[2][3]="La Plata";
    $ciudad[2][4]="Mar del Plata"; $ciudad[2][5]="San Miguel de Tucumán"; $ciudad[2][6]="Ciudad de Salta";
    $ciudad[3][0]="Bogotá"; $ciudad[3][1]="Medellín"; $ciudad[3][2]="Cali"; $ciudad[3][3]="Barranquilla";
    $ciudad[3][4]="Cartagena"; $ciudad[3][5]="Cúcuta"; $ciudad[3][6]="Soledad"; $ciudad[3][7]="Ibagué";

    // Recuperamos el parámetro pais que nos llega mediante la url que invoca xmlhttp
    $paisRecibido=$_REQUEST["pais"];
    $existePais = false;

    for ($i = 0; $i<count($pais) ; $i++) {
        if ($paisRecibido == $pais[$i]) {
            $indicePais = $i;
            $existePais=true;
        }
    }

    $msg = 'El pais recibido por get en segundo plano es '.$paisRecibido ;

    if ($existePais) {
        $msg = $msg. ' y tiene indice '.$indicePais;
    }

    $ciudadesRespuesta = "";

    //  Creamos el array a devolver
    for ($i = 0; $i<count($ciudad[$indicePais]) ; $i++) {
        $ciudadesRespuesta .= ",".$ciudad[$indicePais][$i];
    }

    echo $msg.$ciudadesRespuesta;
?>