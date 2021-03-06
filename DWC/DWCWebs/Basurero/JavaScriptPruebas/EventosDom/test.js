let json = `[
    {
      "ID": "1",
      "NUMTEST": "2",
      "ENUNCIADO": "Si circula de noche con su turismo por una vía urbana insuficientemente iluminada, ¿qué luces debe encender?",
      "RESP1": "Las de posición y las de cruce.",
      "RESP2": "Las de posición y las de carretera, sustituyendo las de carretera por las de cruce.",
      "RESP3": "Las de posición y, las de cruce y carretera, indistintamente.",
      "CORRECTA": "A",
      "FOTO": ""
    },
    {
      "ID": "2",
      "NUMTEST": "2",
      "ENUNCIADO": "Por la vía que se observa en la fotografía, Ud. no podrá circular con su turismo, sin causa justificada, a una velocidad inferior a...",
      "RESP1": "60 kilómetros por hora si entorpece la marcha normal de otros vehículos circulando.",
      "RESP2": "60 kilómetros por hora, circulen o no otros vehículos.",
      "RESP3": "50 kilómetros por hora, circulen o no otros vehículos.",
      "CORRECTA": "B",
      "FOTO": "T0202"
    },
    {
      "ID": "3",
      "NUMTEST": "2",
      "ENUNCIADO": "Si su turismo queda inmovilizado de día y con tiempo claro en el arcén de una autopista a causa de una avería, ¿debe encender alguna luz en su vehículo?",
      "RESP1": "Sí, las luces de posición, siempre.",
      "RESP2": "No.",
      "RESP3": "Sí, la señal de emergencia si el vehículo la lleva.",
      "CORRECTA": "C",
      "FOTO": ""
    },
    {
      "ID": "4",
      "NUMTEST": "2",
      "ENUNCIADO": "En esta intersección en la que no existe línea de detención pintada en la calzada, ¿dónde debe detenerse?",
      "RESP1": "Al lado de la señal, sin rebasarla.",
      "RESP2": "En la intersección, siempre que la posición de mi vehículo no modifique la trayectoria normal de los vehículos que circulen por la vía transversal.",
      "RESP3": "Inmediatamente antes de llegar a la intersección, es decir, en la unión de las dos vías.",
      "CORRECTA": "C",
      "FOTO": "T0204"
    },
    {
      "ID": "5",
      "NUMTEST": "2",
      "ENUNCIADO": "La maniobra de marcha atrás, en los casos en que, excepcionalmente, está permitida, ¿puede efectuarse en toda clase de vías?",
      "RESP1": "No, porque está absolutamente prohibida en autopistas y autovías.",
      "RESP2": "Sí.",
      "RESP3": "No, porque sólo está permitida en vías dentro de poblado.",
      "CORRECTA": "A",
      "FOTO": ""
    },
    {
      "ID": "6",
      "NUMTEST": "2",
      "ENUNCIADO": "En vías de dos sentidos y un carril para cada sentido, siempre que el conductor de un vehículo advierta que va a ser adelantado, debe...",
      "RESP1": "disminuir la velocidad..",
      "RESP2": "indicar con el indicador de dirección derecho, que permite el adelantamiento.",
      "RESP3": "ceñirse al borde derecho de la calzada.",
      "CORRECTA": "C",
      "FOTO": ""
    },
    {
      "ID": "7",
      "NUMTEST": "2",
      "ENUNCIADO": "Circula con su turismo a la velocidad mínima establecida para la autovía por una pendiente ascendente. Teniendo en cuenta la señal, ¿por qué carril debe circular?",
      "RESP1": "Por el derecho, aunque si las circunstancias lo permiten podré circular por el central o por el izquierdo.",
      "RESP2": "Por el derecho, únicamente.",
      "RESP3": "Por el central o por el izquierdo, pero nunca por el derecho, que está reservado para el tráfico rápido.",
      "CORRECTA": "B",
      "FOTO": "T0207"
    },
    {
      "ID": "8",
      "NUMTEST": "2",
      "ENUNCIADO": "En una glorieta en la que no está regulada la preferencia de paso por señal, Ud. pretende acceder a ella, pero observa que, dentro de la vía circular, por su izquierda, circula otro vehículo, ¿debe cederle el paso?",
      "RESP1": "No, porque sólo debo ceder el paso a los vehículos que se aproximen por mi derecha.",
      "RESP2": "Sí, pero únicamente cuando se trate de vehículos automóviles.",
      "RESP3": "Sí, porque circula dentro de la vía circular.",
      "CORRECTA": "C",
      "FOTO": ""
    },
    {
      "ID": "9",
      "NUMTEST": "2",
      "ENUNCIADO": "¿Es correcta su posición en la calzada de acuerdo con las circunstancias que se observan en la fotografía?",
      "RESP1": "Sí, porque así dejo el carril de la derecha para los vehículos que vayan a entrar o salir de la autopista.",
      "RESP2": "Sí, porque en esta vía de varios carriles para el mismo sentido, se puede circular por el que se crea más conveniente.",
      "RESP3": "No, porque deberé circular por el carril de la derecha y sólo utilizaré los restantes cuando las circunstancias del tráfico o de a vía lo aconsejen.",
      "CORRECTA": "C",
      "FOTO": "T0209"
    },
    {
      "ID": "10",
      "NUMTEST": "2",
      "ENUNCIADO": "Conduce su turismo por una carretera convencional con un carril para cada sentido, sin arcén, y desea adelantar al turismo que circula a 90 kilómetros por hora delante de Ud., ¿a qué velocidad máxima puede adelantarlo?",
      "RESP1": "A 110 kilómetros por hora.",
      "RESP2": "No está permitido el adelantamiento porque el turismo que circula delante lo hace a la velocidad máxima permitida para este tipo de vías.",
      "RESP3": "A 120 kilómetros por hora.",
      "CORRECTA": "B",
      "FOTO": ""
    }
  ]
  `;

let aTest = JSON.parse(json);

let divTest = document.getElementById("divTest");

// divTest.innerHTML += "<table>";

aTest.forEach((element) => {
  //   console.log(element.ID);
  divTest.innerHTML += `<div id="div${element.ID}" class="bloque">
  <div class="pregunta">
    ${element.ID}  - 
    ${element.ENUNCIADO}
  </div>
  <div id="foto${element.ID}"></div>
    <div class="opciones${element.ID}">
        <div id="div${element.ID}-A" onclick="CambiarRadio('cb${element.ID}-A')">A<input type="radio" name="cb${element.ID}" id="cb${element.ID}-A"/>${element.RESP1}<br/></div>
        <div id="div${element.ID}-B" onclick="CambiarRadio('cb${element.ID}-B')">B<input type="radio" name="cb${element.ID}" id="cb${element.ID}-B"/>${element.RESP2}<br/></div>
        <div id="div${element.ID}-C" onclick="CambiarRadio('cb${element.ID}-C')">C<input type="radio" name="cb${element.ID}" id="cb${element.ID}-C"/>${element.RESP3}<br/></div>
    </div>
  </div>`;
  if (element.FOTO != "") {
    document.getElementById(`foto${element.ID}`).innerHTML = `<img src="Imagenes/${element.FOTO}.jpg">`;
  }
});

function CambiarRadio(id) {
  document.getElementById(id).checked = true;
}

function Corregir() {
  let fallos = 0;
  let letras = ["A", "B", "C"];
  aTest.forEach((element) => {
    letras.forEach((e) => {
      document.getElementById(`div${element.ID}-${e}`).style.backgroundColor = "white";
    });

    if (!document.getElementById(`cb${element.ID}-${element.CORRECTA}`).checked) {
      fallos++;
      for (i = 0; i < 3; i++) {
        if (document.getElementById(`cb${element.ID}-${letras[i]}`).checked)
          document.getElementById(`div${element.ID}-${letras[i]}`).style.backgroundColor = "red";
      }
    }
    document.getElementById(`div${element.ID}-${element.CORRECTA}`).style.backgroundColor = "green";
  });
  if (fallos > 3) console.log("Suspendido con " + fallos + " fallos.");
  else {
    console.log("Aprobado con " + fallos + " fallos.");
  }
}
// document.body.style.backgroundColor = "red";
// divTest.innerHTML += "</table>";
