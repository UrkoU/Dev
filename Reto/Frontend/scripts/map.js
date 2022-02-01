import L from "leaflet";

// Así se pueden guardar los marcadores para cambiar el color
let aMarcadores = new L.layerGroup();

// Máximo de Marcadores guardados
let iMaxGuardados = 5;

let mapa;

const iconoSeleccionado = L.icon({
  iconUrl: "../images/marker-selected.png",
  iconSize: [41, 41],
});

function CargarMapa() {
  mapa = L.map("map").setView([42.983333333333, -2.6166666666667], 8.4);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(mapa);
}

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
        <div id="temperatura${oBaliza.codigo}">${oTiempo.temperatura} º</div>
        <div id="humedad${oBaliza.codigo}">${oTiempo.humedad} %</div>
        <div id="presionAtmosferica${oBaliza.codigo}">${oTiempo.presionAtmosferica} l/m2</div>
        <div id="velocidadViento${oBaliza.codigo}">${oTiempo.velocidadViento} km/h</div>
      </div>`
  );
  // for (prop in aGuardados[usuario]) {
  //   console.log("PROP" + prop);
  //   if (!aGuardados[usuario][prop]) {
  //     $(`#${prop}${oBaliza.codigo}`).hide();
  //   }
  // }
  CrearDroppables();
}

function bBalizaExiste(codigoBaliza) {
  return aGuardados[usuario].filter((e) => e.baliza === codigoBaliza).length > 0;
}

window.CargarMapa = CargarMapa;
window.CargarMarcadores = CargarMarcadores;
window.AnadirTiempo = AnadirTiempo;
window.aMarcadores = aMarcadores;
