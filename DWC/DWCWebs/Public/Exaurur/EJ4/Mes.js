const aMes = [
  ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
  ["urtarrila", "otsaila", "martxoa", "apirila", "maiatza", "ekaina", "uztaila", "abuztua", "iraila", "urria", "azaroa", "abendua"],
  ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"],
];

// iIdioma es el idioma guardado o el por defecto, 0 (castellano)
var iIdioma = localStorage.getItem("idioma") || 0;
localStorage.setItem("idioma", iIdioma);

var dFecha = new Date();
var sMes = aMes[iIdioma][dFecha.getMonth()];
let tTimeout, iInterval;

function Iniciar() {
  // Se ejecuta al inicio de la aplicación
  CargarIdioma();
  MostrarMes();
  tTimeout = setTimeout(QuitarLetras, 5000);
}

function CambiarIdioma(iValor) {
  // Se ejecuta al cambiar el idioma en el select
  clearTimeout(tTimeout);
  clearInterval(iInterval);

  GuardarIdioma(iValor);
  MostrarMes();
  tTimeout = setTimeout(QuitarLetras, 5000);
}

function CargarIdioma() {
  // Carga el idioma en el select
  document.getElementById("selectIdioma").selectedIndex = iIdioma;
}

function MostrarMes() {
  // Muestra el mes
  sMes = aMes[iIdioma][dFecha.getMonth()];
  let divMes = document.getElementById("divMes");
  divMes.innerHTML = "";
  for (let i = 0; i < sMes.length; i++) {
    divMes.innerHTML += `<img id="imgLetra${i}"" src="Letras/${sMes[i]}.gif"></img>`;
  }
}

function GuardarIdioma(iValor) {
  // Guarda el idioma en el local storage
  // iIdioma = document.getElementById("selectIdioma").value;
  localStorage.setItem("idioma", i);
  iIdioma = i;
}

function QuitarLetras() {
  // Quita las letras una a una si siguen quedando
  clearInterval(iInterval);
  let i = sMes.length - 1;
  iInterval = setInterval(() => {
    if (i > -1) {
      document.getElementById(`imgLetra${i}`).remove();
      i--;
    } else {
      clearInterval(iInterval);
    }
  }, 500);
}
