/**
 * Funciones del login, para iniciar sesión, cerrar, encriptar y desencriptar
 */

$("#btnLogin").on("click", IniciarSesion);
let usuario = {};

const passPhrase = "fjosiddnkadbalseelfeaono";

function IniciarSesion() {
  let sUser = $("#inputUser").val();
  let sPass = $("#inputPass").val();
  if (sUser.length != 0 && sPass.length != 0) {
    var promesa = LoginApi(sUser, sPass);
    promesa.then(async (result) => {
      usuario = result;
      sToken = result.token;
      localStorage.setItem("logueado", true);
      localStorage.setItem("sToken", Encriptar(sToken));
      localStorage.setItem("usuario", Encriptar(JSON.stringify(usuario)));
      PostLogin();
    });
  }
}

function Logout() {
  localStorage.setItem("sToken", "");
  localStorage.setItem("logueado", false);
  localStorage.setItem("usuario", JSON.stringify({}));
  localStorage.setItem("iMaxGuardados", 5);
  MostrarLogin();
}

function Encriptar(message) {
  return CryptoJS.AES.encrypt(message, passPhrase).toString();
}

function Desencriptar(message) {
  return CryptoJS.AES.decrypt(message, passPhrase).toString(CryptoJS.enc.Utf8);
}
