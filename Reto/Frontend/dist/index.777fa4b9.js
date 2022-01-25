function MarcadoresAStorage() {
    let arrayGuardados = Array.from(aGuardados);
    localStorage.setItem("aGuardados", JSON.stringify(arrayGuardados));
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
    }
}

//# sourceMappingURL=index.777fa4b9.js.map
