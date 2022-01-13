let aBalizas;
$("document").ready(function() {
    ObtenerBalizas();
});
async function ObtenerBalizas() {
    aBalizas = await GetBalizas();
    console.log(aBalizas);
    CargarMarcadores();
}
$("#hideButton").click(()=>{
    $("#map").toggle("slide", {
        direction: "down"
    }, 200);
// $("#map").height("0%");
});

//# sourceMappingURL=index.bc1e96c0.js.map
