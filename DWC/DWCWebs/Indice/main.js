const content = [
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

var footerLinks = document.querySelectorAll(".footer-link");
var activePage = document.querySelector(".activePage");
var divMain = document.getElementById("divMain");

var index = 0;
var current = 0;

footerLinks.forEach((link) => {
  link.i = index;
  link.addEventListener("click", function () {
    CambiarLinks(link.i);
  });
  index++;
});

function CambiarLinks(i) {
  footerLinks.forEach((e) => {
    e.classList.remove("active-page");
  });
  CambiarContent(i);
  footerLinks[i].classList.add("active-page");
}

function CambiarContent(i) {
  if (current != i) divMain.innerHTML = content[i];
  current = i;
  // Scroll to top
  divMain.scrollTop = 0;
}

const asignaturas = [
  {
    id: "DWC",
    html: `<div class="card-row">
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
</div>`,
  },
  { id: "DIW", html: `` },
];

function CambiarAsignatura() {
  let selector = document.getElementById("subject-selector");
  let selectedOption = selector.selectedIndex;
  console.log("selected option " + selectedOption.toString());

  document.getElementById("divExercises").innerHTML = asignaturas[selectedOption].html;
}
