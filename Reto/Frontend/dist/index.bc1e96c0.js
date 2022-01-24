let aBalizas = [];
let oTiempo = {
};
const existsError = "Esta baliza ya está seleccionada";
const limitError = "Se han seleccionado todos los marcadores posibles";
$("document").ready(function() {
    ObtenerBalizas();
});
function ObtenerBalizas() {
    var promise = GetBalizas();
    promise.then(function(data) {
        aBalizas = JSON.parse(data);
        CargarMarcadores();
    });
}
function ObtenerTiempo(id = "C080") {
    var promise = GetTiempo(id);
    promise.then(function(data) {
        oTiempo = JSON.parse(data);
        // CargarMarcadores();
        let oBaliza = aBalizas.find((element)=>element.codigo = id
        );
        AnadirTiempo(oTiempo, oBaliza);
    });
}
$("#mapTop").click(()=>{
    $("#map").toggle("fade", 100);
});
let tTimeout;
function MostrarError(error = limitError) {
    clearTimeout(tTimeout);
    $("#divError").text(error);
    // Mostrar error, esperar 2 segundos, ocultar
    $("#divError").removeClass("hidden");
    tTimeout = setTimeout(()=>{
        $("#divError").addClass("hidden");
    }, 2000);
}

//# sourceMappingURL=index.bc1e96c0.js.map
