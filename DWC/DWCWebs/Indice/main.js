const content = [
  ``,
  `<div class="card-row">
  <div class="card white-text" onclick="location.href='../Public/ej1-sellos'">
    <img class="rounded-image card-image" onerror="ImageError(this)" src="./imagenes/ej1-sellos.png" />
    Sellos
  </div>
  <div class="card white-text" onclick="location.href='../Public/ej2-contadorRegresivo'">
    <img class="rounded-image card-image" onerror="ImageError(this)" src="./imagenes/ej2-regresivo.png" />
    Contador Regresivo
  </div>
</div>
<div class="card-row">
  <div class="card white-text" onclick="location.href='../Public/ej3-reloj'">
    <img class="rounded-image card-image" onerror="ImageError(this)" src="./imagenes/ej3-reloj.png" />
    Reloj
  </div>
  <div class="card white-text" onclick="location.href='../Public/ej4-stringsImagenes'">
    <img class="rounded-image card-image" onerror="ImageError(this)" src="./imagenes/ej4-string-imagenes.png" />
    String imagenes
  </div>
</div>
<div class="card-row">
  <div class="card white-text" onclick="location.href='../Public/ej5-stringsImagenesRelojes'">
    <img class="rounded-image card-image" onerror="ImageError(this)" src="./imagenes/ej5-string-imagenes-relojes.png" />
    Strings imágenes relojes
  </div>
  <div class="card white-text" onclick="location.href='../Public/ej6-juegoRecapitulacion'">
    <img class="rounded-image card-image" onerror="ImageError(this)" src="./imagenes/ej6-recapitulacion.png" />
    Recapitulación
  </div>
</div>
<div class="card-row">
  <div class="card white-text" onclick="location.href='../Public/ej5-stringsImagenesRelojes'">
    <img class="rounded-image card-image" onerror="ImageError(this)" src="./imagenes/ej5-string-imagenes-relojes.png" />
    Strings imágenes relojes
  </div>
  <div class="card white-text" onclick="location.href='../Public/ej6-juegoRecapitulacion'">
    <img class="rounded-image card-image" onerror="ImageError(this)" src="./imagenes/j6-recapitulacion.png" />
    Ejercicio no encontrado
  </div>
</div>`,
  `<div class="rounded-pill bold-text">Estudios</div>
  <div class="rounded-pill bold-text">Experiencia profesional</div>
  <img class="rounded-image card-image" onerror="ImageError(this)" src="a" />`,
];

var footerLinks = document.querySelectorAll(".footer-link");
var activePage = document.querySelector(".activePage");

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
  if (current != i) document.getElementById("divExercises").innerHTML = content[i];
  current = i;
}
