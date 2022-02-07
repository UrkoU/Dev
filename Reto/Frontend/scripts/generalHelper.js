/**
 * Funciones generales del proyecto
 */

// Devuelve el contenido del local storage
function CargarLocalStorage() {
  sColorPrincipal = localStorage.getItem("sColorPrimario") || "green";
  sColorSecundario = localStorage.getItem("sColorSecundario") || "blue";

  bLogueado = localStorage.getItem("logueado") === "true" || false;

  var us = localStorage.getItem("usuario") || null;
  us ? (usuario = JSON.parse(Desencriptar(us))) : (usuario = {});

  var token = localStorage.getItem("sToken") || null;
  token ? (sToken = Desencriptar(token)) : (sToken = "");

  iMaxGuardados = localStorage.getItem("iMaxGuardados") || 5;
}

// Guarda los marcadores en bbdd escogidos por el usuario
function GuardarMarcadores(marcadores) {
  marcadores.forEach((element) => {
    PutOpcionesUsuario(element.usuarioId, element);
  });
}

// Obtiene los marcadores de bbdd
function ObtenerMarcadores() {
  var marcadores;
  var promesa = GetOpcionesUsuario(usuario.id);
  promesa.then((res) => {
    marcadores = res;
  });
}

// Entre los guardados, devuelve el escogido
function ObtenerGuardadoPorId(codigo) {
  return aGuardados.find((e) => e.codigoBaliza === codigo);
}

// Entre los guardados, devuelve el índice del escogido
function ObtenerIndiceGuardado(codigo) {
  return aGuardados.findIndex((e) => e.codigoBaliza === codigo);
}

// Actualiza los datos
function ActualizarDatos() {
  console.log("Actualizar datos");
  aGuardados.forEach((element) => {
    var promise = GetTiempo(element.codigoBaliza);
    promise.then(function (data) {
      oTiempo = JSON.parse(data);
      ActualizarCarta(oTiempo);
    });
  });
}

// Devuelve la fecha en el formato deseado
Date.prototype.customFormat = function (formatString) {
  var YYYY, YY, MMMM, MMM, MM, M, DDDD, DDD, DD, D, hhhh, hhh, hh, h, mm, m, ss, s, ampm, AMPM, dMod, th;
  YY = ((YYYY = this.getFullYear()) + "").slice(-2);
  MM = (M = this.getMonth() + 1) < 10 ? "0" + M : M;
  MMM = (MMMM = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][
    M - 1
  ]).substring(0, 3);
  DD = (D = this.getDate()) < 10 ? "0" + D : D;
  DDD = (DDDD = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][this.getDay()]).substring(0, 3);
  th = D >= 10 && D <= 20 ? "th" : (dMod = D % 10) == 1 ? "st" : dMod == 2 ? "nd" : dMod == 3 ? "rd" : "th";
  formatString = formatString
    .replace("#YYYY#", YYYY)
    .replace("#YY#", YY)
    .replace("#MMMM#", MMMM)
    .replace("#MMM#", MMM)
    .replace("#MM#", MM)
    .replace("#M#", M)
    .replace("#DDDD#", DDDD)
    .replace("#DDD#", DDD)
    .replace("#DD#", DD)
    .replace("#D#", D)
    .replace("#th#", th);
  h = hhh = this.getHours();
  if (h == 0) h = 24;
  if (h > 12) h -= 12;
  hh = h < 10 ? "0" + h : h;
  hhhh = hhh < 10 ? "0" + hhh : hhh;
  AMPM = (ampm = hhh < 12 ? "am" : "pm").toUpperCase();
  mm = (m = this.getMinutes()) < 10 ? "0" + m : m;
  ss = (s = this.getSeconds()) < 10 ? "0" + s : s;
  return formatString
    .replace("#hhhh#", hhhh)
    .replace("#hhh#", hhh)
    .replace("#hh#", hh)
    .replace("#h#", h)
    .replace("#mm#", mm)
    .replace("#m#", m)
    .replace("#ss#", ss)
    .replace("#s#", s)
    .replace("#ampm#", ampm)
    .replace("#AMPM#", AMPM);
};
