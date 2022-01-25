let aBalizas = [];
let oTiempo = {};

let sColorPrincipal = "";

let iconoDefecto;

$("document").ready(function () {
  CargarColorInicial();
  CargarBotonesColor();

  ObtenerBalizas();
});

function ObtenerBalizas() {
  var promise = GetBalizas();
  promise.then(function (data) {
    aBalizas = JSON.parse(data);
    CargarMarcadores();
  });
}

function ObtenerTiempo(id = "C080") {
  var promise = GetTiempo(id);
  promise.then(function (data) {
    oTiempo = JSON.parse(data);
    let oBaliza = aBalizas.find((element) => (element.codigo = id));
    AnadirTiempo(oTiempo, oBaliza);
  });
}

$("#mapTop").click(() => {
  $("#map").toggle("fade", 100);
});

let tTimeout;
function MostrarError(error = limitError) {
  clearTimeout(tTimeout);
  $("#divError").text(error);
  // Mostrar error, esperar 2 segundos, ocultar
  $("#divError").removeClass("hidden");
  tTimeout = setTimeout(() => {
    $("#divError").addClass("hidden");
  }, 2000);
}

function CargarColorInicial() {
  // Carga el color inicial según el local storage
  sColorPrincipal = localStorage.getItem("color") || "green";
  let sValor;
  aColores.forEach((element) => {
    if (element.nombre == sColorPrincipal) {
      sValor = element.valor;
    }
  });

  CambiarColor(sColorPrincipal, sValor, true);
}

function CambiarColor(sColor, sValor, bInicio = false) {
  // Cambia el color predominante de la web, cambiando la variable --main-color del css
  localStorage.setItem("color", sColor);
  document.documentElement.style.setProperty("--main-color", sValor);
  iconoDefecto = L.icon({
    iconUrl: `../images/marker-${sColor}.png`,
    iconSize: [41, 41],
  });
  if (!bInicio) CargarMarcadores();
  // document.getElementsByTagName("body")[0].style.backgroundImage = `url('imagenes/background-${sColor}.png')`;
}

function CargarBotonesColor() {
  // Carga los botones de los colores != mainColor
  let divBotones = document.getElementById("divButtonList");

  divBotones.innerHTML = "";

  sColorPrincipal = localStorage.getItem("color");
  aColores.forEach((oColor) => {
    // Si no es el color principal, añade el botón
    divBotones.innerHTML += `<button class="color-button color-button-small" style="background-color: ${oColor.valor}" onclick="CambiarColor('${oColor.nombre}', '${oColor.valor}')"></button>`;
  });
}

// Gif de ajustes en hover
$(".settings").hover(function () {
  $(this).css("background", "url(../images/settings.gif)");
  $(this).css("background-repeat", "no-repeat");
  $(this).css("background-position", "center");
  $(this).css("background-size", "3.5em");
});

$(".settings").mouseleave(function () {
  $(this).css("background", "url(../images/settings-stopped.gif)");
  $(this).css("background-repeat", "no-repeat");
  $(this).css("background-position", "center");
  $(this).css("background-size", "3.5em");
});

// Eventos botón flotante
$("#show").on("mouseover", function () {
  $("#divButtonList").removeClass("hidden");
  $("#divButtonList").css("display", "flex");
});
$("#show").on("mouseout", function () {
  $("#divButtonList").addClass("hidden");
});
