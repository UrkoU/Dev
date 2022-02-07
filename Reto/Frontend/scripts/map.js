import L from "leaflet";

// Así se pueden guardar los marcadores para cambiar el color
let aMarcadores = new L.layerGroup();

let mapa;

const iconoSeleccionado = L.icon({
  iconUrl: "../images/marker-selected.png",
  iconSize: [41, 41],
});

function CargarMapa() {
  // Carga el mapa de leaflet
  if (mapa) mapa.remove();
  mapa = L.map("map").setView([42.983333333333, -2.6166666666667], 8.4);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(mapa);
  if (aGuardados.length > 0) $("#map").hide();
}

function CargarMarcadores() {
  // Carga los marcadores
  EliminarMarcadores();
  aMarcadores = new L.LayerGroup();
  aMarcadores.clearLayers();
  // Cargar los marcadores de cada baliza
  aBalizas.forEach((oBaliza) => {
    let icono;
    if (bBalizaExiste(oBaliza.codigo)) {
      icono = iconoSeleccionado;
    } else {
      icono = iconoDefecto;
    }
    const marcador = L.marker([oBaliza.latitud, oBaliza.longitud], {
      customId: `marcador${oBaliza.codigoBaliza}`,
      icon: icono,
    });
    marcador.bindPopup(`${oBaliza.nombre}`);
    marcador.on("click", (marc) => {
      AnadirAMapa(marc, oBaliza);
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

  if (aGuardados.length < iMaxGuardados && !bBalizaExiste(oBaliza.codigo)) {
    CambiarIconoMarcador(clickedElement, iconoSeleccionado);

    ObtenerTiempo(oBaliza.codigo);

    aGuardados.push({
      idUsuario: usuario.id,
      codigoBaliza: oBaliza.codigo,
      temperatura: true,
      sensacionTermica: true,
      humedad: true,
      velocidadViento: false,
      direccionViento: false,
      horaAmanecer: false,
      horaAtardecer: false,
      presionAtmosferica: false,
    });
    GuardarMarcadores(aGuardados);
  } else {
    if (bBalizaExiste(oBaliza.codigo)) {
      // Si el código ya está, elimina la baliza y lo guarda en el local storage
      let s = aGuardados.findIndex((e) => e.codigoBaliza == oBaliza.codigo);
      aGuardados.splice(s, 1);
      DeleteOpcionUsuario(usuario.id, oBaliza.codigo);
      // aGuardados.delete(oBaliza.codigo);
      GuardarMarcadores(aGuardados);
      $(`#div${oBaliza.codigo}`).remove();
      CambiarIconoMarcador(clickedElement, iconoDefecto);
    } else {
      MostrarError(limitError);
    }
  }
}

function AnadirCarta(oTiempo) {
  // Añade la carta seleccionada a la lista
  let oOpciones = ObtenerGuardadoPorId(oTiempo.codigo);
  $("#divContainer").append(
    `<div id="div${oTiempo.codigo}" class="infoTiempo mw-50 droppableItem">
      <div class="d-flex justify-content-between align-items-center">
        <span class="cardTitle" id="nombre${oTiempo.codigo}">${oTiempo.nombre}</span>
        <img id="img${oTiempo.codigo}" class="cardImg" alt="${
      oTiempo.descripcion
    }" src="images/${oTiempo.descripcion.toLowerCase()}-white.png" >
      </div>
    </div>`
  );

  $(`#div${oTiempo.codigo}`).on("click", () => {
    MostrarCartaGrande(oTiempo);
  });

  $(`#div${oTiempo.codigo}`).hover(function () {
    $(this).css("cursor", "pointer");
  });

  $(`#div${oTiempo.codigo}`).append(`<div id="info${oTiempo.codigo}" ></div>`);
  for (const key in oPropiedadesCortas) {
    if (!key.includes("Nombre"))
      if (key == "horaAtardecer" || key == "horaAmanecer") {
        let f = new Date(parseInt(oTiempo[key]) * 1000);

        $(`#info${oTiempo.codigo}`).append(
          `<div id="${key}${oTiempo.codigo}">${oPropiedadesCortas[key + "Nombre"]}
          <span id="value${key}${oTiempo.codigo}">${f.customFormat("#hhhh#:#mm#")}</span>
          ${oPropiedadesCortas[key]}</div>`
        );
      } else
        $(`#info${oTiempo.codigo}`).append(
          `<div id="${key}${oTiempo.codigo}">${oPropiedadesCortas[key + "Nombre"]}
          <span id="value${key}${oTiempo.codigo}">${oTiempo[key]}</span>
           ${oPropiedadesCortas[key]}</div>`
        );
  }
  for (const key in oOpciones) {
    if (!oOpciones[key]) {
      $(`#${key}${oOpciones.codigoBaliza}`).hide();
    }
  }

  CrearDroppables();
}

function ActualizarCarta(oTiempo) {
  for (const key in oPropiedadesCortas) {
    if (!oPropiedadesCortas[key].includes("Nombre")) {
      $(`#value${oPropiedadesCortas[key]}${oTiempo.codigo}`).val(oTiempo[key]);
    }
  }
}

function bBalizaExiste(codigoBaliza) {
  return aGuardados.some((e) => e.codigoBaliza === codigoBaliza);
}

window.CargarMapa = CargarMapa;
window.CargarMarcadores = CargarMarcadores;
window.AnadirCarta = AnadirCarta;
window.ActualizarCarta = ActualizarCarta;
window.aMarcadores = aMarcadores;
