let aBalizas = [];
let oTiempo = {
};
let sColorPrincipal = "";
let sColorSecundario = "";
let bLogueado = "";
let iconoDefecto;
let aGuardados = new Set();
$("document").ready(function() {
    CargarLocalStorage();
    CargarColorInicial();
    if ((bLogueado == true || bLogueado == "true") && window.location.href.indexOf("index.html") == -1) {
        console.log(window.location.href);
        window.location = "index.html";
        console.log("HERE" + bLogueado);
        CargarMapa();
        CargarBotonesColor();
        ObtenerBalizas();
    } else if (window.location.href.indexOf("login.html") == -1) {
        console.log("LOGIN" + bLogueado);
        window.location = "login.html";
    }
});
function ObtenerBalizas() {
    var promise = GetBalizas();
    promise.then(function(data) {
        aBalizas = JSON.parse(data);
        CargarMarcadores();
        CargarCartas(aGuardados);
    });
}
function ObtenerTiempo(id = "C080") {
    var promise = GetTiempo(id);
    promise.then(function(data) {
        oTiempo = JSON.parse(data);
        let oBaliza = aBalizas.find((element)=>element.codigo == id
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
function CargarCartas(balizas) {
    console.log();
    balizas.forEach((element)=>{
        ObtenerTiempo(element);
    });
}
function CargarLocalStorage() {
    sColorPrincipal = localStorage.getItem("sColorPrimario") || "green";
    sColorSecundario = localStorage.getItem("sColorSecundario") || "blue";
    bLogueado = localStorage.getItem("logueado") || false;
    aGuardados = ObtenerMarcadores();
    console.log("CargarLocalStorage");
    console.log(aGuardados);
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
function CargarBotonesColor() {
    // Carga los botones de los colores != mainColor
    let divColoresPrincipales = document.getElementById("divColoresPrincipales");
    let divColoresSecundarios = document.getElementById("divColoresSecundarios");
    sColorPrincipal = localStorage.getItem("sColorPrimario");
    sColorSecundario = localStorage.getItem("sColorSecundario");
    aColores.forEach((oColor)=>{
        // Si no es el color principal, añade el botón
        divColoresPrincipales.innerHTML += `<button class="color-button color-button-small" style="background-color: ${oColor.valor}" onclick="CambiarColorPrimario('${oColor.nombre}', '${oColor.valor}')"></button>`;
        divColoresSecundarios.innerHTML += `<button class="color-button color-button-small" style="background-color: ${oColor.valor}" onclick="CambiarColorSecundario('${oColor.nombre}', '${oColor.valor}')"></button>`;
    });
}
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
