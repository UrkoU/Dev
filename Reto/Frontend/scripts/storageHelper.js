function CargarLocalStorage() {
  sColorPrincipal = localStorage.getItem("sColorPrimario") || "green";
  sColorSecundario = localStorage.getItem("sColorSecundario") || "blue";

  bLogueado = localStorage.getItem("logueado") || false;

  usuario = localStorage.getItem("usuario");

  sToken = localStorage.getItem("sToken");

  aGuardados = ObtenerMarcadores();
  // console.log("CargarLocalStorage");
  // console.log(aGuardados);
}

function GuardarMarcadores(marcadores) {
  console.log(marcadores);
  // let arrayGuardados = Array.from(marcadores);
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
    sGuardados.forEach((element) => {
      setGuardados.add(element);
    });
    return setGuardados;
  } else return new Set();
}
