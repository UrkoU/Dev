const content = [
  ``,
  `<div class="card-row">
    <div class="card white-text" onclick="location.href='../Public/ej1-sellos/index.html'">
      <img class="rounded-image card-image" onerror="ImageError(this)" src="./imagenes/ej1-sellos.png" />
      Sellos
    </div>
    <div class="card white-text" onclick="location.href='../Public/ej2-contadorRegresivo/index.html'">
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
    <div class="card white-text" onclick="location.href='../Public/ej6-juegoRecapitulacion'">
      <img class="rounded-image card-image" onerror="ImageError(this)" src="./imagenes/j6-recapitulacion.png" />
      Ejercicio no encontrado
    </div>
  </div>`,
  `<div class="w-100 h-100" style="display: flex; flex-direction: row">
  <div class="h-100 w-75">
    <div class="w-100 h-40">
      <div class="rounded-pill bold-text">Estudios</div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>
    </div>
    <div class="w-133 h-40">
      <div class="rounded-pill bold-text">Experiencia profesional</div>
      <div class="w-100 h-60">
        <ul>
          <li class="li-image logo-ceit">
            <b>Centro de Estudios e Investicación Técnica de Gipuzkoa, Ceit: Marzo-2020/Junio-2021: </b> Desarrollo de aplicaciones
            móviles con <b>React Native</b> y Expo, desarrollo de páginas web con <b>React</b> y diseño y desarrollo en
            <b>Unity</b> con C# para las <b>Microsoft Hololens</b>.
          </li>
          <li class="li-image"></li>
        </ul>
      </div>
    </div>
    <div class="w-133 h-40">
      <div class="rounded-pill bold-text">Conocimientos técnicos</div>
      <div class="w-100 h-60">
        <ul>
          <li class="li-image"><b>Programación: </b> C, C++, C#, Java, JS, VB .Net.</li>
          <li class="li-image">Desarrollo de <b>Android</b> con Java, desarrollo <b>Android y iOS</b> con <b>React Native</b>.</li>
          <li class="li-image">Desarrollo en <b>Unity</b> para Microsoft <b>Hololens</b>.</li>
          <li class="li-image"><b>Bases de datos: </b>SQL Server 2017, SqlLite, Linq.</li>
          <li class="li-image"><b>Desarrollo web: </b>React, Html, CSS, JS, Asp .Net.</li>
        </ul>
      </div>
    </div>
    <div class="w-133 h-40">
      <div class="rounded-pill bold-text">Otros conocimientos</div>
      <div class="w-100 h-60">
        <ul>
          <li></li>
        </ul>
      </div>
    </div>
  </div>
  <div class="h-100 w-25" style="display: flex; justify-content: flex-end">
    <img class="rounded-image card-image" style="justify-content: right" onerror="ImageError(this)" src="a" />
  </div>
</div>`,
];

var footerLinks = document.querySelectorAll(".footer-link");
var activePage = document.querySelector(".activePage");
var divExercises = document.getElementById("divExercises");

var index = 0;
var current = 0;

footerLinks.forEach((e) => {
  e.myParam = index;
  e.addEventListener("click", function () {
    CambiarLinks(e.myParam);
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
  if (current != i) divExercises.innerHTML = content[i];
  current = i;
  // Scroll to top
  divExercises.scrollTop = 0;
}
