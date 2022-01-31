function GuardarMarcadores(marcadores) {
    console.log(marcadores);
    let arrayGuardados = Array.from(marcadores);
    localStorage.setItem("aGuardados", JSON.stringify(arrayGuardados));
}
function EliminarMarcadoresLS() {
    localStorage.removeItem("aGuardados");
}
function ObtenerMarcadores() {
    let setGuardados = new Set();
    let sGuardados = localStorage.getItem("aGuardados");
    if (sGuardados != null) {
        sGuardados = JSON.parse(sGuardados);
        console.log(sGuardados);
        sGuardados.forEach((element)=>{
            setGuardados.add(element);
        });
        return setGuardados;
    } else return new Set();
}

//# sourceMappingURL=index.777fa4b9.js.map
