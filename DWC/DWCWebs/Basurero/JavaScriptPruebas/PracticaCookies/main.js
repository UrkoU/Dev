var sNombre = "idioma";
var iIdiomaActual;

const CambiarIdioma = async (sValor) => {
  console.log("Cambiar idioma a " + sValor);
  await mandarCookie(sNombre, sValor);

  iIdiomaActual = await consultarCookie(sNombre);

  NavegarA();
};

function GrabarCookie(sValor) {
  mandarCookie(sNombre, sValor);
}

function ConsultarCookie() {
  iIdiomaActual = consultarCookie(sNombre);
}

function NavegarA() {
  switch (parseInt(iIdiomaActual)) {
    case 1:
      window.location = "Castellano.html";
      break;
    case 2:
      window.location = "Euskera.html";
      break;
    case 3:
      window.location = "Frances.html";
      break;
    case 4:
      window.location = "Ingles.html";
      break;
    default:
      iIdiomaActual = 0;
      mandarCookie(sNombre, iIdiomaActual);
      window.location = "Castellano.html";
      break;
  }
  console.log("iIdiomaActual" + iIdiomaActual);
}

function MostrarBotones() {
  let idiomas = ["Castellano", "Euskera", "Frances", "Ingles"];
  let divBotones = document.getElementById("divBotones");
  for (let i = 0; i < idiomas.length; i++) {
    divBotones.innerHTML += `<button id="btnIdioma${i}" onclick="CambiarIdioma(${i})">${idiomas[i]}</button>`;
  }
  // document.getElementById(`btnIdioma${iIdiomaActual}`).disabled = true;
}
