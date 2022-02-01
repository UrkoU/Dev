$("#btnLogin").on("click", IniciarSesion);

const passPhrase = "fjosiddnkadbalseelfeaono";

function IniciarSesion() {
  let sUser = $("#inputUser").val();
  let sPass = $("#inputUser").val();
  console.log(sUser);
  var promesa = LoginApi(sUser, sPass);
  promesa.then((result, result2, result3) => {
    console.log(result, result2, result3);
    sToken = result.token;
    localStorage.setItem("logueado", true);
    window.location = "index.html";
  });
}

function Encriptar(message) {
  return CryptoJS.AES.encrypt(message, passPhrase);
}

function Desencriptar(message) {
  return CryptoJS.AES.decrypt(message, passPhrase);
}
