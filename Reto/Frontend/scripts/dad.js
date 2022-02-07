/**
 * Drag'n drop y slider, todo de Jquery UI
 */

// Crea las imágenes draggables
$(".imgDraggable").draggable({
  revert: true,
  clone: true,
  revertDuration: 700,
  start: function (ui, event) {
    // Recorre los divs y añade color rojo/verde según acepten
    aGuardados.forEach((element) => {
      if ($(`#${ui.target.id}${element.codigoBaliza}`).is(":visible")) {
        $(`#div${element.codigoBaliza}`).addClass("cannotAccept");
      } else {
        $(`#div${element.codigoBaliza}`).addClass("canAccept");
      }
    });
  },
  stop: function (ui, event) {
    aGuardados.forEach((element) => {
      $(`#div${element.codigoBaliza}`).removeClass("cannotAccept");
      $(`#div${element.codigoBaliza}`).removeClass("canAccept");
    });
  },
});

function CrearDroppables() {
  $(".droppableItem").droppable({
    drop: function (event, ui) {
      let destId = event.target.id;
      destId = destId.replace("div", "");
      if (!$(`#${ui.draggable[0].id}${destId}`).is(":visible")) {
        $(`#${ui.draggable[0].id}${destId}`).show();
        let indice = ObtenerIndiceGuardado(destId);
        aGuardados[indice][ui.draggable[0].id] = true;
        PutOpcionesUsuario(usuario.id, aGuardados[indice]);
      }
    },
  });
  $(".droppableItem").disableSelection();
  $(".droppableItem").css("cursor", "default");
}

function CrearSlider() {
  console.log("Crear slider");
  $("#spanMaximoMunicipios").text(iMaxGuardados);
  $("#slider").slider({
    range: "min",
    min: 3,
    max: 10,
    value: iMaxGuardados,
    classes: {
      "ui-slider": "slider",
      "ui-slider-handle": "slider-handle",
      "ui-slider-range": "slider-range",
    },
    slide: function (event, ui) {
      let max = ui.value;
      $("#spanMaximoMunicipios").text(max);
      iMaxGuardados = max;
      localStorage.setItem("iMaxGuardados", max);
    },
  });
}
