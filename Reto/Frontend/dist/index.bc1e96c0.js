let aBalizas = [];
let oTiempo1 = {
};
let sColorPrincipal = "";
let sColorSecundario = "";
let bLogueado = "";
let tTimeout;
let iconoDefecto;
// Máximo de Marcadores guardados
let iMaxGuardados = 5;
function PreLogin() {
    CargarLocalStorage();
    CargarColorInicial();
    CrearSlider();
}
function PostLogin() {
    var promesa2 = GetOpcionesUsuario(usuario.id);
    promesa2.then((res)=>{
        aGuardados = JSON.parse(res);
        CargarAjustes();
        OcultarLogin();
        CargarMapa();
        ObtenerBalizas();
        setInterval(ActualizarDatos, 10000);
    });
}
$("document").ready(function() {
    PreLogin();
    if (bLogueado == true || bLogueado == "true") PostLogin();
    else MostrarLogin();
});
function ObtenerBalizas() {
    var promise = GetBalizas();
    promise.then(function(data) {
        aBalizas = JSON.parse(data);
        CargarMarcadores();
        CargarCartas(aGuardados);
    });
}
function ObtenerTiempo(id) {
    var promise = GetTiempo(id);
    promise.then(function(data) {
        oTiempo1 = JSON.parse(data);
        AnadirCarta(oTiempo1);
    });
}
$("#mapTop").click(()=>{
    $("#map").toggle();
});
function MostrarLogin() {
    $("#divBlur").css("display", "flex");
    $("#divLoginContainer").css("display", "flex");
    $("#divLogin").css("display", "flex");
}
function OcultarLogin() {
    $("#divBlur").css("display", "none");
    $("#divLoginContainer").css("display", "none");
    $("#divLogin").css("display", "none");
}
function MostrarCartaGrande(oTiempo, oOpciones) {
    console.log(oTiempo);
    console.log(oOpciones);
    console.log("Not implemented");
}
function MostrarError(error = limitError) {
    clearTimeout(tTimeout);
    $("#divError").text(error);
    // Mostrar error, esperar 2 segundos, ocultar
    $("#divError").removeClass("hidden");
    tTimeout = setTimeout(()=>{
        $("#divError").addClass("hidden");
    }, 2000);
}
function CargarCartas(balizas) {
    $(`#divContainer`).empty();
    // if (oGuardados[test].length >= 0)
    balizas.forEach((element)=>{
        ObtenerTiempo(element.codigoBaliza);
    });
}
function CargarColorInicial() {
    // Carga el color inicial según el local storage
    let sValor, sValorSecundario;
    aColores.forEach((element)=>{
        if (element.nombre == sColorPrincipal) sValor = element.valor;
        if (element.nombre == sColorSecundario) sValorSecundario = element.valor;
    });
    CambiarColorPrimario(sColorPrincipal, sValor, true);
    CambiarColorSecundario(sColorSecundario, sValorSecundario);
}
function CambiarColorPrimario(sColor, sValor, bInicio = false) {
    // Cambia el color predominante de la web, cambiando la variable --main-color del css
    localStorage.setItem("sColorPrimario", sColor);
    document.documentElement.style.setProperty("--main-color", sValor);
    iconoDefecto = L.icon({
        iconUrl: `../images/marker-${sColor}.png`,
        iconSize: [
            41,
            41
        ]
    });
    if (!bInicio) CargarMarcadores();
// document.getElementsByTagName("body")[0].style.backgroundImage = `url('imagenes/background-${sColor}.png')`;
}
function CambiarColorSecundario(sColor, sValor) {
    localStorage.setItem("sColorSecundario", sColor);
    document.documentElement.style.setProperty("--secondary-color", sValor);
}
function CargarAjustes() {
    // Carga los botones de los colores != mainColor
    let divColoresPrincipales = document.getElementById("divColoresPrincipales");
    let divColoresSecundarios = document.getElementById("divColoresSecundarios");
    divColoresPrincipales.innerHTML = "";
    divColoresSecundarios.innerHTML = "";
    $(`#textUser`).html(usuario.username);
    sColorPrincipal = localStorage.getItem("sColorPrimario");
    sColorSecundario = localStorage.getItem("sColorSecundario");
    aColores.forEach((oColor)=>{
        // Si no es el color principal, añade el botón
        divColoresPrincipales.innerHTML += `<button class="color-button color-button-small" style="background-color: ${oColor.valor}" onclick="CambiarColorPrimario('${oColor.nombre}', '${oColor.valor}')"></button>`;
        divColoresSecundarios.innerHTML += `<button class="color-button color-button-small" style="background-color: ${oColor.valor}" onclick="CambiarColorSecundario('${oColor.nombre}', '${oColor.valor}')"></button>`;
    });
}
$(`#btnLogout`).on("click", ()=>{
    Logout();
});
// Gif de ajustes en hover
$(".settings").hover(function() {
    $(this).css("background", "url(../images/settings.gif)");
    $(this).css("background-repeat", "no-repeat");
    $(this).css("background-position", "center");
    $(this).css("background-size", "3.5em");
});
$(".settings").mouseleave(function() {
    $(this).css("background", "url(../images/settings-stopped.gif)");
    $(this).css("background-repeat", "no-repeat");
    $(this).css("background-position", "center");
    $(this).css("background-size", "3.5em");
});
// Eventos botón flotante
$("#show").on("mouseover", function() {
    $("#colores").removeClass("hidden");
});
$("#show").on("mouseout", function() {
    $("#colores").addClass("hidden");
});

//# sourceMappingURL=index.bc1e96c0.js.map
