let aBalizas;

$("document").ready(function () {
  ObtenerBalizas();
  var bootstrap_enabled = typeof $().modal == "function";
  console.log("Bootstrap: " + bootstrap_enabled);
});

function ObtenerBalizas() {
  var promise = GetBalizas();
  promise.then(function (data) {
    aBalizas = JSON.parse(data);
    CargarMarcadores();
  });
}

$("#hideButton").click(() => {
  $("#map").toggle("fade", 100);
});
