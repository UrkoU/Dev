var diaActual;
var dia;
var dias;
cogerMes();

//funcion de coger mes
function cogerMes() {
  //coger el mes
  var fecha = new Date();
  dia = fecha.getDay();
  //crear array con los meses
  dias = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
  setInterval(mostrarFotos, 2000);
}

//funcion de mostrar palabra en imagenes
function mostrarFotos() {
  let diaActual = dias[dia];
  //inicializar a vacio
  document.getElementById("fotos").innerHTML = "";
  //coger letras de la palabra
  for (i = 0; i < diaActual.length; i++) {
    //coger letra
    var letra = diaActual[i];
    //concatenar letras
    document.getElementById("fotos").innerHTML += `<img id="img${i}" src="letras/${letra}.gif" >`;
  }
  dia++;
  if (dia == 7) dia = 0;
}

function empezarSiguiente() {}
