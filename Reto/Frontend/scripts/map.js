import L from "leaflet";

// Así se pueden guardar
let aMarcadores = new L.layerGroup();
// Balizas guardadas
// let aGuardados = new Set();

// Máximo de Marcadores guardados
let iMaxGuardados = 5;

const iconoSeleccionado = L.icon({
  iconUrl: "../images/marker-selected.png",
  iconSize: [41, 41],
});

const mapa = L.map("map").setView([42.983333333333, -2.6166666666667], 8.4);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(mapa);

function CargarMarcadores() {
  EliminarMarcadores();
  aMarcadores = new L.LayerGroup();
  // console.log();
  aMarcadores.clearLayers();
  // Cargar los marcadores de cada baliza
  console.log("aGuardados");
  console.log(aGuardados);
  aBalizas.forEach((baliza) => {
    let icono;
    if (aGuardados.has(baliza.codigo)) {
      icono = iconoSeleccionado;
    } else icono = iconoDefecto;
    const marcador = L.marker([baliza.latitud, baliza.longitud], { customId: `marcador${baliza.codigo}`, icon: icono });
    marcador.bindPopup(`${baliza.nombre}`);
    marcador.on("click", (marc) => {
      AnadirAMapa(marc, baliza);
    });
    aMarcadores.addLayer(marcador);
  });
  mapa.addLayer(aMarcadores);
}

function EliminarMarcadores() {
  mapa.removeLayer(aMarcadores);
}

function CambiarIconoMarcador(element, icono) {
  element.target.setIcon(icono);
}

function AnadirAMapa(clickedElement, oBaliza) {
  // const marker = aMarcadores.forEach((element) => {
  //   // Recorremos los Id y se guarda el correspondiente
  //   if (element.options.customId == `marcador${oBaliza.codigo}`) {
  //     marker = element;
  //   }
  // });
  // Comprueba límite de guardados y que no esté ya seleccionado

  if (aGuardados.size < iMaxGuardados && !aGuardados.has(oBaliza.codigo)) {
    CambiarIconoMarcador(clickedElement, iconoSeleccionado);

    ObtenerTiempo(oBaliza.codigo);
    aGuardados.add(oBaliza.codigo);
    GuardarMarcadores(aGuardados);
  } else {
    if (aGuardados.has(oBaliza.codigo)) {
      // Si el código ya está, elimina la baliza y lo guarda en el local storage
      aGuardados.delete(oBaliza.codigo);
      GuardarMarcadores(aGuardados);
      $(`#div${oBaliza.codigo}`).remove();
      CambiarIconoMarcador(clickedElement, iconoDefecto);
    } else {
      MostrarError(limitError);
    }
  }
}

function AnadirTiempo(oTiempo, oBaliza) {
  $("#divContainer").append(
    `<div id="div${oBaliza.codigo}" class="infoTiempo mw-50 droppableItem"><h4 id="nombre${oBaliza.codigo}">${oBaliza.nombre}</h4></div>`
  );
  // Añade los datos de tiempo, aunque ocultos todos menos la temperatura y humedad
  $(`#div${oBaliza.codigo}`).append(
    `<div id="info${oBaliza.codigo}" >
        <div id="temp${oBaliza.codigo}">${oTiempo.temperatura} º</div>
        <div id="humedad${oBaliza.codigo}">${oTiempo.humedad} %</div>
        <div id="precip${oBaliza.codigo}">${oTiempo.precipitacionAcumulada} l/m2</div>
        <div id="vel${oBaliza.codigo}">${oTiempo.velocidadViento} km/h</div>
      </div>`
  );
  $(`#precip${oBaliza.codigo}`).hide();
  $(`#vel${oBaliza.codigo}`).hide();

  CrearDroppables();
}

window.CargarMarcadores = CargarMarcadores;
window.AnadirTiempo = AnadirTiempo;
window.aMarcadores = aMarcadores;
