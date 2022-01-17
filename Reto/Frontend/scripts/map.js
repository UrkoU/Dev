import L from "leaflet";

let aMarcadores = [];

let aGuardados = [];

// Máximo de Marcadores guardados
let iMaxGuardados = 10;

const mapa = L.map("map").setView([42.983333333333, -2.6166666666667], 8.4);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(mapa);

var iconoDefecto = L.icon({
  iconUrl: "../images/marker-green.png",
  iconSize: [41, 41],
});

var iconoSeleccionado = L.icon({
  iconUrl: "../images/marker-selected.png",
  iconSize: [41, 41],
});

function CargarMarcadores() {
  // Cargar los marcadores de cada baliza
  aBalizas.forEach((item) => {
    const marcador = L.marker([item.latwgS84, item.lonwgS84], { icon: iconoDefecto }).addTo(mapa);
    marcador.bindPopup(`${item.nombre}`);
    marcador.on("click", (e) => {
      // CambiarIcono(e, item);
      AnadirAMapa(e, item);
    });
    aMarcadores.push(marcador);
  });
}

function CambiarIcono(element, icono) {
  element.target.setIcon(icono);
  // aMarcadores.forEach((i) => {
  //   i.setIcon(iconoDefecto);
  // });
  // console.log(item.codigo);
  // element.target.setIcon(iconoSeleccionado);
}

function AnadirAMapa(element, item) {
  if (aGuardados.length < iMaxGuardados) {
    CambiarIcono(element, iconoSeleccionado);
    $("#divPrincipal").append(`<div id="div${item.codigo}">${item.codigo}</div>`);
    aGuardados.push(item);
  } else {
  }
}

window.CargarMarcadores = CargarMarcadores;
