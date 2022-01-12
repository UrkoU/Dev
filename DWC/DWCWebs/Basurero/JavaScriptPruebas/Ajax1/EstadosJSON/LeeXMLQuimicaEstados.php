<?php
$Estado=utf8_encode($_REQUEST["estado"]); 
$Salida="";
if (file_exists('Quimica.xml')) {
 $contenido = utf8_encode(file_get_contents('Quimica.xml'));
 $xml = simplexml_load_string($contenido) or die("Error: No se pudo crear el objeto");

 // Recorrer todos los elementos
 for ($i = 0; $i < count($xml); $i++) {
  // Si el estado es igual que el recibido, sumar Nombre del nuevo elemento
  if ( $xml -> Elemento[$i] -> Estado == $Estado){
    $Salida = $Salida . $xml -> Elemento[$i] -> Nombre . ", ";
  }
 }
 echo $Salida;
} else {
    exit('Error abriendo archivo.xml.');
}
?>