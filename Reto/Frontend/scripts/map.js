import L from "leaflet";

let aMarcadores = [];
// Balizas guardadas
let aGuardados = new Set();

// Máximo de Marcadores guardados
let iMaxGuardados = 5;

const iconoDefecto = L.icon({
  iconUrl: "../images/marker-green.png",
  iconSize: [41, 41],
});

const iconoSeleccionado = L.icon({
  iconUrl: "../images/marker-selected.png",
  iconSize: [41, 41],
});

const mapa = L.map("map").setView([42.983333333333, -2.6166666666667], 8.4);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(mapa);

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
}

function AnadirAMapa(clickedElement, oBaliza) {
  if (aGuardados.size < iMaxGuardados && !aGuardados.has(oBaliza.codigo)) {
    CambiarIcono(clickedElement, iconoSeleccionado);
    $("#divContainer").append(
      `<div id="div${oBaliza.codigo}" class="infoTiempo mw-50 droppableItem"><h4 id="nombre${oBaliza.codigo}">${oBaliza.nombre}</h4>${oBaliza.municipio}</div>`
    );
    ObtenerTiempo(oBaliza.codigo);
    aGuardados.add(oBaliza.codigo);
  } else {
    if (aGuardados.has(oBaliza.codigo)) {
      aGuardados.delete(oBaliza.codigo);
      $(`#div${oBaliza.codigo}`).remove();
      CambiarIcono(clickedElement, iconoDefecto);
    } else {
      MostrarError(limitError);
    }
  }
}

function AnadirTiempo(oTiempo, oBaliza) {
  $(`#div${oBaliza.codigo}`).append(
    `<div id="info${oTiempo.codigoBaliza}" >
        <div id="temp${oTiempo.codigoBaliza}">${oTiempo.temperatura} º</div>
        <div id="humedad${oTiempo.codigoBaliza}">${oTiempo.humedad} %</div>
        <div id="precip${oTiempo.codigoBaliza}">${oTiempo.precipitacionAcumulada} l/m2</div>
        <div id="vel${oTiempo.codigoBaliza}">${oTiempo.velocidadViento} km/h</div>
      </div>`
  );
  $(`#precip${oTiempo.codigoBaliza}`).hide();
  $(`#vel${oTiempo.codigoBaliza}`).hide();

  CrearDroppables();
}

window.CargarMarcadores = CargarMarcadores;
window.AnadirTiempo = AnadirTiempo;
window.aGuardados = aGuardados;
