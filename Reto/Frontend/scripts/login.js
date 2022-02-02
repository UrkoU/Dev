$("#btnLogin").on("click", IniciarSesion);
let usuario = "";

const passPhrase = "fjosiddnkadbalseelfeaono";

function IniciarSesion() {
  let sUser = $("#inputUser").val();
  let sPass = $("#inputPass").val();
  console.log(sUser);
  if (sUser.length != 0 && sPass.length != 0) {
    var promesa = LoginApi(sUser, sPass);
    promesa.then((result) => {
      usuario = sUser;
      console.log(result.id);
      sToken = result.token;
      localStorage.setItem("usuario", usuario);
      localStorage.setItem("logueado", true);
      localStorage.setItem("sToken", sToken);
      OcultarLogin();
      CargarMapa();
      ObtenerBalizas();
      // var prom = GetOpcionesUsuario(result.id);
      // prom.then((data) => {
      //   console.log(data);
      // });
    });
  }
}

function Encriptar(message) {
  return CryptoJS.AES.encrypt(message, passPhrase);
}

function Desencriptar(message) {
  return CryptoJS.AES.decrypt(message, passPhrase);
}
