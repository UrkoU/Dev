$("#btnLogin").on("click", IniciarSesion);
let usuario = {
};
const passPhrase = "fjosiddnkadbalseelfeaono";
function IniciarSesion() {
    let sUser = $("#inputUser").val();
    let sPass = $("#inputPass").val();
    console.log(sUser);
    if (sUser.length != 0 && sPass.length != 0) {
        var promesa = LoginApi(sUser, sPass);
        promesa.then(async (result)=>{
            usuario = result;
            console.log(usuario);
            sToken = result.token;
            var promesa2 = GetOpcionesUsuario(usuario.id);
            promesa2.then((res)=>{
                aGuardados = JSON.parse(res);
                console.log(aGuardados);
                OcultarLogin();
                CargarMapa();
                ObtenerBalizas();
                localStorage.setItem("usuario", JSON.stringify(usuario));
                localStorage.setItem("logueado", true);
                localStorage.setItem("sToken", sToken);
            });
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
