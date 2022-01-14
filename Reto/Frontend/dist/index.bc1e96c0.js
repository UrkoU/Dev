let aBalizas;
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
$("#hideButton").click(()=>{
    $("#map").toggle("fade", 100);
});

//# sourceMappingURL=index.bc1e96c0.js.map
