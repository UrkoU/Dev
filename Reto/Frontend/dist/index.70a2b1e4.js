$("#btnLogin").on("click", IniciarSesion);
let usuario = "";
const passPhrase = "fjosiddnkadbalseelfeaono";
function IniciarSesion() {
    let sUser = $("#inputUser").val();
    let sPass = $("#inputUser").val();
    console.log(sUser);
    if (sUser.length != 0 && sPass.length != 0) {
        var promesa = LoginApi(sUser, sPass);
        promesa.then((result, result2, result3)=>{
            usuario = sUser;
            console.log(result, result2, result3);
            sToken = result.token;
            localStorage.setItem("usuario", usuario);
            localStorage.setItem("logueado", true);
            localStorage.setItem("sToken", sToken);
            OcultarLogin();
            CargarMapa();
            ObtenerBalizas();
        });
    }
}
function Encriptar(message) {
    return CryptoJS.AES.encrypt(message, passPhrase);
}
function Desencriptar(message) {
    return CryptoJS.AES.decrypt(message, passPhrase);
}

//# sourceMappingURL=index.70a2b1e4.js.map
