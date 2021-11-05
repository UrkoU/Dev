// JavaScript Document
var iPreguntas = 6;
var aPreguntas = new Array();
var aRespuestas = new Array();
aPreguntas[0] = "Trump fue presidente de EEUU";
aRespuestas[0] = "V";
aPreguntas[1] = "París es la capital de Alemania";
aRespuestas[1] = "F";
aPreguntas[2] = "El grillo es un insecto";
aRespuestas[2] = "V";
aPreguntas[3] = "El instituto Plaiaundi está en Hondarribia";
aRespuestas[3] = "F";
aPreguntas[4] = "El tomate es una verdura";
aRespuestas[4] = "F";
aPreguntas[5] = "Esta página tiene el fondo verde";
aRespuestas[5] = "F";
aPreguntas[6] = "Pasapalabra no es un programa original";
aRespuestas[6] = "V";
aPreguntas[7] = "Hoy es " + new Date();
aRespuestas[7] = "V";
aPreguntas[8] = "Estamos en 1934";
aRespuestas[8] = "F";

var index = 0;

var divPreguntas = document.getElementById("divPreguntas");

Mostrar();

function Mostrar() {
  // Mostrar cada pregunta y un checkbox a su lado
  aPreguntas.forEach((element) => {
    divPreguntas.innerHTML += `<p id="pPregunta${index}">` + element + `<input type="checkbox" id="cb${index}"/></p>`;
    index++;
  });
  divPreguntas.innerHTML += `<button onclick="Corregir()">Corregir</button>`;
  Indeterminar();
}

function Indeterminar() {
  let cbs = document.querySelectorAll("input[type=checkbox]");
  cbs.forEach((cb) => (cb.indeterminate = true));
}

function Corregir() {
  var i = 0;
  var respuestas = [];
  var aciertos = 0;
  var puntos = 0;

  // Guardar las respuestas de las preguntas
  aPreguntas.forEach(() => {
    if (document.getElementById(`cb${i}`).indeterminate) respuestas.push("indeterminate");
    else respuestas.push(document.getElementById(`cb${i}`).checked);
    i++;
  });
  for (let j = 0; j < aRespuestas.length; j++) {
    // Comprobar las respuestas, V = true, F = false
    if (respuestas[j] == "indeterminate") {
      document.getElementById(`pPregunta${j}`).setAttribute(`style`, `background-color: gray`);
    } else if ((aRespuestas[j] == "V" && respuestas[j]) || (aRespuestas[j] == "F" && !respuestas[j])) {
      // Si es verdadero, fondo en blanco, sumar un punto y un acierto
      document.getElementById(`pPregunta${j}`).setAttribute(`style`, `background-color: white`);
      aciertos++;
      puntos++;
    } else {
      // Si es falso, fondo en rojo, restar 0.25 puntos
      document.getElementById(`pPregunta${j}`).setAttribute(`style`, `background-color: red`);
      puntos -= 0.25;
    }
  }

  // Mostrar aciertos y puntos
  document.getElementById("divResultado").innerHTML =
    `<p> Aciertos: ` + aciertos + "/" + aRespuestas.length + `</p><p>Puntuación: ` + puntos + `</p>`;
}
