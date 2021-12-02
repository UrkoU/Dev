const aContenido = [
  `<div class="w-100 h-100 flex-center"><img src="imagenes/wip.png" height="480px"></div>`,
  `<div class="subject-selector h-15">
  <select class="selector" id="subject-selector" onchange="CambiarAsignatura()">
    <option class="selector-option">Desarrollo Web Entorno Cliente</option>
    <option class="selector-option last-option">Diseño de Interfaces Web</option>
  </select>
</div>
<div class="exercises h-85 w-100" id="divExercises">
  <div class="card-row">
    <div class="card no-top-margin" onclick="location.href='../Public/ej1-sellos/index.html'">
      <img class="rounded-image card-image" onerror="ImageError(this)" src="./imagenes/ej1-sellos.png" />
      Sellos
    </div>
    <div class="card no-top-margin" onclick="location.href='../Public/ej2-contadorRegresivo/index.html'">
      <img class="rounded-image card-image" onerror="ImageError(this)" src="./imagenes/ej2-regresivo.png" />
      Contador Regresivo
    </div>
  </div>
  <div class="card-row">
    <div class="card white-text" onclick="location.href='../Public/ej3-reloj/index.html'">
      <img class="rounded-image card-image" onerror="ImageError(this)" src="./imagenes/ej3-reloj.png" />
      Reloj
    </div>
    <div class="card white-text" onclick="location.href='../Public/ej4-stringsImagenes/index.html'">
      <img class="rounded-image card-image" onerror="ImageError(this)" src="./imagenes/ej4-string-imagenes.png" />
      String imagenes
    </div>
  </div>
  <div class="card-row">
    <div class="card white-text" onclick="location.href='../Public/ej5-stringsImagenesRelojes/index.html'">
      <img class="rounded-image card-image" onerror="ImageError(this)" src="./imagenes/ej5-string-imagenes-relojes.png" />
      Strings imágenes relojes
    </div>
    <div class="card white-text" onclick="location.href='../Public/ej6-juegoRecapitulacion/index.html'">
      <img class="rounded-image card-image" onerror="ImageError(this)" src="./imagenes/ej6-recapitulacion.png" />
      Recapitulación
    </div>
  </div>
  <div class="card-row">
    <div class="card white-text" onclick="location.href='../Public/ej7-actividadTest/index.html'">
      <img class="rounded-image card-image" onerror="ImageError(this)" src="./imagenes/ej7-actividadTest.png" />
      Actividad test
    </div>
    <div class="card white-text" onclick="location.href='../Public/ej8-procedimental1-parejas/index.html'">
      <img class="rounded-image card-image" onerror="ImageError(this)" src="./imagenes/ej8-procedimental1-parejas.png" />
      Procedimental parejas
    </div>
  </div>
</div>`,
  `<div class="w-100 h-100" style="display: flex; flex-direction: row">
  <div class="h-100 w-75">
    <div class="w-100 info-item">
      <div class="rounded-pill bold-text black-text">Estudios</div>
      <div class="info-item-content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>
    </div>
    <div class="w-95 info-item">
      <div class="rounded-pill bold-text black-text">Experiencia profesional</div>
      <div class="info-item-content">
        <ul class="no-margin no-padding">
          <li class="li-image logo-ceit">
            <b>Centro de Estudios e Investicación Técnica de Gipuzkoa, Ceit: Marzo-2020/Junio-2021: </b> Desarrollo de aplicaciones
            móviles con <b>React Native</b> y Expo, desarrollo de páginas web con <b>React</b> y diseño y desarrollo en
            <b>Unity</b> con C# para las <b>Microsoft Hololens</b>.
          </li>
        </ul>
      </div>
    </div>
    <div class="w-95 info-item">
      <div class="rounded-pill bold-text black-text">Conocimientos técnicos</div>
      <div class="info-item-content">
        <ul class="no-margin no-padding">
          <li class="li-image"><b>Programación: </b> C, C++, C#, Java, JS, VB .Net.</li>
          <li class="li-image">Desarrollo de <b>Android</b> con Java, desarrollo <b>Android y iOS</b> con <b>React Native</b>.</li>
          <li class="li-image">Desarrollo en <b>Unity</b> para Microsoft <b>Hololens</b>.</li>
          <li class="li-image"><b>Bases de datos: </b>SQL Server 2017, SqlLite, Linq.</li>
          <li class="li-image"><b>Desarrollo web: </b>React, Html, CSS, JS, Asp .Net.</li>
        </ul>
      </div>
    </div>
    <div class="w-95 info-item">
      <div class="rounded-pill bold-text black-text">Otros conocimientos</div>
      <div class="info-item-content">
        <ul class="no-margin no-padding">
          <!-- <li></li> -->
        </ul>
      </div>
    </div>
  </div>
  <div class="h-100 w-25" style="display: flex; flex-direction: column">
    <img class="rounded-image" style="justify-content: right" onerror="ImageError(this)" src="a" />
    <div class="w-100 h-25 flex" style="flex-direction: column; padding-top: 1em">
      <b class="centered-text w-100">01-05-1999, Donostia</b>
      <b class="centered-text w-100">650989938</b>
    </div>
  </div>
</div>`,
];

const aColores = [
  { name: "blue", value: "rgb(151, 210, 247)" },
  { name: "green", value: "rgb(151, 247, 186)" },
  { name: "yellow", value: "rgb(247, 247, 151)" },
  { name: "purple", value: "rgb(223, 151, 247)" },
  { name: "red", value: "rgb(247, 151, 151)" },
];

const aEjercicios = [
  [
    {
      nombre: "Sellos",
      descripcion:
        "Portafolio con distintos sellos, donde cada tipo de sello redirige a una página distinta, y en cada una hemos visto cómo utilizar distintos eventos con DreamWeaver",
      href: "../Public/ej1-sellos/index.html",
      image: "./imagenes/ej1-sellos.png",
    },
    {
      nombre: "Contador regresivo",
      descripcion:
        "Dos cuadros de texto, uno con la cantidad de dígitos, el otro con el número desde el que empezar. Es una cuenta atrás, con la que aprendemos a utilzar relojes y cambios dinámicos de imágenes",
      href: "../Public/ej2-ContadorRegresivo/index.html",
      image: "./imagenes/ej2-regresivo.png",
    },
    {
      nombre: "Reloj",
      descripcion: "Un simple reloj que muestra los minutos y segundos del equipo cliente",
      href: "../Public/ej3-reloj/index.html",
      image: "./imagenes/ej3-reloj.png",
    },
    {
      nombre: "Strings imágenes",
      descripcion:
        "Escribiendo el texto que queramos en el cuadro de texto, nos lo mostrará en imágenes. Mejoramos nuestra habilidad para cambiar dinámicamente imágenes",
      href: "../Public/ej4-stringsImagenes/index.html",
      image: "./imagenes/ej4-string-imagenes.png",
    },
    {
      nombre: "Strings imágenes relojes",
      descripcion:
        "Aquí se juntan nuestros conocimientos en relojes y cambios de imágenes, así como cierta lógica añadida a la hora de cambiar las palabras",
      href: "../Public/ej5-stringsImagenesRelojes/index.html",
      image: "./imagenes/ej5-string-imagenes-relojes.png",
    },
    {
      nombre: "Recapitulación",
      descripcion:
        "Un minijuego de lógica con cierta dificultad para elaborar, así como crear las primeras validaciones comprobando el final del juego y más.",
      href: "../Public/ej6-juegoRecapitulacion/index.html",
      image: "./imagenes/ej6-recapitulacion.png",
    },
    {
      nombre: "Actividad test",
      descripcion: "Una simple actividad para trabajar con checkboxes y estilos",
      href: "../Public/ej7-actividadTest/index.html",
      image: "./imagenes/ej7-actividadTest.png",
    },
    {
      nombre: "Procedimental parejas",
      descripcion:
        "Juego de memoria, con unas cuantas validaciones y comprobaciones, así como ciertos estilos algo más avanzados que los vistos anteriormente",
      href: "../Public/ej8-procedimental1-parejas/index.html",
      image: "./imagenes/ej8-procedimental1-parejas.png",
    },
    {
      nombre: "Ofertas de empleo",
      descripcion: "Primer ejercicio con un json, además de funciones como sort y orderby, que no se habían utilizado hasta ahora",
      href: "../Public/ej9-ofertasEmpleo/index.html",
      image: "./imagenes/ej9-ofertasEmpleo.png",
    },
    {
      nombre: "Carrito",
      descripcion: "Primera interacción con sessionstorage para simular un carrito de la compra, con actualizaciones y pago",
      href: "../Public/ej10-carrito/index.html",
      image: "./imagenes/ej10-carrito.jpg",
    },
  ],
  // DIW
  [
    {
      nombre: "Radio patio",
      descripcion: "",
      href: "../Public/diw-ejAudio/index.html",
      image: "./imagenes/diw-ejAudio.png",
    },
    {
      nombre: "Video patio",
      descripcion: "",
      href: "../Public/diw-ejVideo/index.html",
      image: "./imagenes/diw-ejVideo.png",
    },
  ],
];

var aFooterLinks = document.querySelectorAll(".footer-link");
var divActivePage = document.querySelector(".activePage");
var divMain = document.getElementById("divMain");

var index = 0;
var iContenidoActual = 0;
var iAsignatura = 0;

function Iniciar() {
  CambiarLinks(1, true);
  CargarColorInicial();
  CargarBotonesColor();
  CargarEventosBotonFlotante();
}

function CambiarLinks(i, bPrimeraCarga) {
  // Cambia el link activo del footer
  aFooterLinks.forEach((e) => {
    e.classList.remove("active-page");
  });
  CambiarContent(i, bPrimeraCarga);
  aFooterLinks[i].classList.add("active-page");
}

let aAsignaturas = [
  "Desarollo Web Entorno Cliente 1ra evaluación",
  "Desarollo Web Entorno Cliente 2da evaluación",
  "Diseño de Interfaces 1ra evaluación",
  "Diseño de Interfaces 2da evaluación",
];

function CambiarContent(i, bPrimeraCarga = false) {
  // Cambiar el contenido del div principal
  if (iContenidoActual != i || bPrimeraCarga)
    if (i == 1) {
      // Select de ejercicios
      // document.getElementById("divMain").innerHTML = `
      // <div class="subject-selector h-15">
      // <select class="selector" id="subject-selector" onchange="CambiarAsignatura()">
      //   <option class="selector-option">Desarrollo Web Entorno Cliente</option>
      //   <option class="selector-option last-option">Diseño de Interfaces Web</option>
      // </select>
      // </div>
      // <div class="exercises h-85 w-100" id="divExercises"></div>
      // `;
      // // Cargar la vista de ejercicios
      // CargarEjercicios();
      let div = "";
      aAsignaturas.forEach((asignatura) => {
        div += `<div id="divExercises">${() => {
          CargarEjercicios();
        }}</div>`;
      });
      $("#divMain").html(div);
    } else {
      divMain.innerHTML = aContenido[i];
    }
  iContenidoActual = i;
  // Scroll arriba
  divMain.scrollTop = 0;
}

function CambiarAsignatura() {
  // Cambia la asignatura escogida
  let selector = document.getElementById("subject-selector");
  let selectedOption = selector.selectedIndex;
  iAsignatura = selectedOption;

  CargarEjercicios();
}

function CargarEjercicios() {
  // Carga los ejercicios dependiendo de la asignatura escogida
  var divEjercicios = document.getElementById("divExercises");
  console.log(divEjercicios);
  var impar = true;
  let divCard = document.createElement("div");
  divCard.classList.add("card-row");
  divEjercicios.innerHTML = "";
  let item = "";

  aEjercicios[iAsignatura].forEach((ejercicio) => {
    item = `
    <div class="card white-text" onclick="location.href='${ejercicio.href}'">
      <img class="rounded-image card-image" onerror="ImageError(this)" src="${ejercicio.image}" alt="${ejercicio.descripcion}"/>
      <div style="padding:0.5em 1em 0em 1em; overflow:auto">
        <h4 style="margin:0">${ejercicio.nombre}</h4>
        <p style="margin:0;margin-top:0.5em">${ejercicio.descripcion}</p>
      </div>
    </div>`;
    if (impar) {
      divCard.innerHTML = "";
      divCard.innerHTML += item;
    } else {
      // Mete nuevos ejercicios de dos en dos, cuando va por el segundo
      divCard.innerHTML += item;
      divEjercicios.innerHTML += divCard.outerHTML;
    }
    impar = !impar;
  });

  // Si se queda en el último ejercicio, lo añade solo
  if (!impar) {
    divCard.innerHTML = item;
    divEjercicios.innerHTML += divCard.outerHTML;
  }
}

function CargarColorInicial() {
  // Carga el color inicial según la cookie
  let color = ConsultarCookie("color");
  if (typeof color == "undefined") color = "green";
  let valor;
  aColores.forEach((element) => {
    if (element.name == color) {
      valor = element.value;
    }
  });
  CambiarColor(color, valor);
}

function CambiarColor(sName, sValue) {
  // Cambia el color predominante de la web, cambiando la variable --main-color del css
  MandarCookie("color", sName);
  document.documentElement.style.setProperty("--main-color", sValue);
  document.getElementsByTagName("body")[0].style.backgroundImage = `url('imagenes/background-${sName}.png')`;
  CargarBotonesColor();
}

function CargarBotonesColor() {
  // Carga los botones de los colores != mainColor
  let divBotones = document.getElementById("divButtonList");
  divBotones.innerHTML = "";
  let sColor = getComputedStyle(document.documentElement).getPropertyValue("--main-color");
  let i = 0;
  aColores.forEach((oColor) => {
    // Si no es el color principal, añade el botón
    if (oColor.value.replace(/ /g, "") == sColor.replace(/ /g, "")) {
      // document.getElementById("divBotonColor");
    } else {
      divBotones.innerHTML += `<button class="color-button color-button-small" style="background-color: ${oColor.value}" onclick="CambiarColor('${oColor.name}', '${oColor.value}')"></button>`;
      i++;
    }
  });
}

function CargarEventosBotonFlotante() {
  // Cuando se haga hover sobre show, mostrará divButtonList
  document.querySelector("#show").addEventListener("mouseover", function () {
    document.getElementById("divButtonList").style.display = "flex";
  });
  document.querySelector("#show").addEventListener("mouseout", function () {
    document.getElementById("divButtonList").style.display = "none";
  });
}

// Cookies
function MandarCookie(sNombre, sValor, fCaducidad = new Date(new Date().getDay + 15)) {
  // Manda una cookie
  document.cookie = sNombre + "=" + escape(sValor) + (fCaducidad == null ? "" : "; expires=" + fCaducidad.toGMTString());
}

function ConsultarCookie(sNombre) {
  // Consulta una cookie
  var sBuscamos = sNombre + "=";
  if (document.cookie.length > 0) {
    i = document.cookie.indexOf(sBuscamos);
    if (i != -1) {
      i += sBuscamos.length;
      j = document.cookie.indexOf(";", i);
      j = document.cookie.indexOf(";", i);
      if (j == -1) j = document.cookie.length;
      // console.log("Consultar cookie: " + nombre + " " + unescape(document.cookie.substring(i, j)));
      return unescape(document.cookie.substring(i, j));
    }
  }
}
