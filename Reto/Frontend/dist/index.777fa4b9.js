function CargarLocalStorage() {
    sColorPrincipal = localStorage.getItem("sColorPrimario") || "green";
    sColorSecundario = localStorage.getItem("sColorSecundario") || "blue";
    bLogueado = localStorage.getItem("logueado") || false;
    usuario = JSON.parse(localStorage.getItem("usuario")) || null;
    sToken = localStorage.getItem("sToken");
// console.log("CargarLocalStorage");
// console.log(aGuardados);
}
function GuardarMarcadores(marcadores) {
    console.log("GUARDAR MARCADORES");
    PutOpcionesUsuario(usuario.id, JSON.stringify(marcadores));
    // let arrayGuardados = Array.from(marcadores);
    let arrayGuardados = Array.from(marcadores);
    localStorage.setItem("aGuardados", JSON.stringify(arrayGuardados));
}
function EliminarMarcadoresLS() {
    localStorage.removeItem("aGuardados");
}
function ObtenerMarcadores() {
    var marcadores;
    var promesa = GetOpcionesUsuario(usuario.id);
    promesa.then((res)=>{
        marcadores = res;
    });
}

//# sourceMappingURL=index.777fa4b9.js.map
