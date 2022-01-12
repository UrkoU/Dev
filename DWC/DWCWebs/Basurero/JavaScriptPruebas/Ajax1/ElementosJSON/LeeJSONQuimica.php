<?php
$Elemento=$_REQUEST["elem"]; 
$Salida="";
if (file_exists('Quimica.json')) {
    $contenido = file_get_contents('Quimica.json');
    echo $contenido;
    // $json = json_decode($contenido,true) or die("Error: No se pudo crear el objeto");
    // $myObj = array();
    // // echo $myObj;
    // $iEstados=0;
    // for ($i=0;$i<count($json);$i++) {
    //     if ($json[$i]["Nombre"]==$Elemento){
    //         $myObj[0]["Nombre"]=$json[$i]["Nombre"];
    //         $myObj[0]["Simbolo"]=$json[$i]["Simbolo"];
    //         $myObj[0]["Estado"]=$json[$i]["Estado"];
    //         break;
    //     }
    // }
    // $myJSON = json_encode($myObj);
    // echo $myJSON;
} else {
    exit('Error abriendo archivo.JSON');
}
?>