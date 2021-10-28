var aDias = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
var sDia = aDias[new Date().getDay()];
var divDia = document.getElementById("divDia");

MostrarDia();
AnadirClicks();

function MostrarDia() {
  for (i = 0; i < sDia.length; i++) {
    divDia.innerHTML += `<img id="imgDia${i}" src="../letras/${sDia[i]}.gif">`;
  }
}

function AnadirClicks() {
  var aImgs = document.querySelectorAll("img");
  aImgs.forEach((e) => {
    e.addEventListener("click", QuitarImagen);
  });
}

function QuitarImagen() {
  // Para saber si se puede quitar la imagen, obtener su src
  // Pero como el src es algo como 'file:///C:/Users/2daw3/Dev/DWC/DWCWebs/Public/Controlurur/letras/s.gif'
  // Y en cada ordenador será distinto, obtener la última parte desde el último '/'
  var iPosicion = this.src.lastIndexOf("/");
  var sSrc = this.src.substring(iPosicion + 1);
  if (sSrc == "Blanco.gif") {
    alert("No se puede quitar la imagen");
  } else {
    this.src = "../letras/Blanco.gif";
  }
}
