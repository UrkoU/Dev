// Array con los días de la semana (empieza en domingo la semana según el objeto Date de JS)
var aDias = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
// String del día de la semana
var sDia = aDias[new Date().getDay()];
// Div en el que mostrar las imágenes
var divDia = document.getElementById("divDia");

MostrarDia();
AnadirClicks();

function MostrarDia() {
    // Muestra el día en pantalla, con las bolitas y sus caracteres
  for (i = 0; i < sDia.length; i++) {
    divDia.innerHTML += `<img id="imgDia${i}" src="../letras/${sDia[i]}.gif">`;
  }
}

function AnadirClicks() {
    // Añade un eventListener a cada imagen, que llame a la función "QuitarImagen" en el click
  var aImgs = document.querySelectorAll("img");
  aImgs.forEach((e) => {
    e.addEventListener("click", QuitarImagen);
  });
}

function QuitarImagen() {
  // Para saber si se puede quitar la imagen, obtener su src
  // Pero como el src es algo como 'file:///C:/Users/2daw3/Dev/DWC/DWCWebs/Public/Controlurur/letras/s.gif'
  // Obtiene la posición del último '/' en el src de la imagen clickada
  var iPosicion = this.src.lastIndexOf("/");
  // Obtiene la parte después del último '/' del src de la imagen clicada
  var sSrc = this.src.substring(iPosicion + 1);
  
  // Si la imagen es Blanco.gif, no se puede clickar más en ella
  if (sSrc == "Blanco.gif") {
    alert("No se puede quitar la imagen");
    // Si no, la cambia por la bolita sin carácter
  } else {
    this.src = "../letras/Blanco.gif";
  }
}
