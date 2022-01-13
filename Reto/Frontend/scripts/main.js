let aBalizas;

$("document").ready(function () {
  ObtenerBalizas();
});

async function ObtenerBalizas() {
  aBalizas = await GetBalizas();
  console.log(aBalizas);
  CargarMarcadores();
}

$("#hideButton").click(() => {
  $("#map").toggle("slide", { direction: "down" }, 200);
  // $("#map").height("0%");
});
