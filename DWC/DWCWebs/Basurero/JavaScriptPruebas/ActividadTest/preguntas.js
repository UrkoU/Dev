// JavaScript Document
var iPreguntas = 6;
var aPreguntas = new Array();
var aRespuestas = new Array();
aPreguntas[0] = "Quiero irme a casa";
aRespuestas[0] = "V";
aPreguntas[1] = "París es la capital de Alemania";
aRespuestas[1] = "F";
aPreguntas[2] = "El grillo es un insecto";
aRespuestas[2] = "V";
aPreguntas[3] = "El instituto Plaiaundi está en Hondarribia";
aRespuestas[3] = "F";

var index = 0;

Mostrar();

function Mostrar() {
  // Mostrar cada pregunta y un checkbox a su lado
  aPreguntas.forEach((element) => {
    document.getElementById("divPreguntas").innerHTML +=
      `<p id="pPregunta${index}">` + element + `<input type="checkbox" id="cb${index}"/></p>`;
    index++;
  });
  document.getElementById("divPreguntas").innerHTML += `<button onclick="Corregir()">Corregir</button>`;
}

function Corregir() {
  var i = 0;
  var respuestas = [];
  var aciertos = 0;
  var puntos = 0;

  // Guardar las respuestas de las preguntas
  aPreguntas.forEach(() => {
    respuestas.push(document.getElementById(`cb${i}`).checked);
    i++;
  });
  for (let j = 0; j < aRespuestas.length; j++) {
    // Comprobar las respuestas, V = true, F = false
    if ((aRespuestas[j] == "V" && respuestas[j]) || (aRespuestas[j] == "F" && !respuestas[j])) {
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
  document.getElementById("divResultado").innerHTML = `<p>` + aciertos + "/" + aRespuestas.length + `</p><p>Puntuación: ` + puntos + `</p>`;
}
