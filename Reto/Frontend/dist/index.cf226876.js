let tTimeout,iconoDefecto,aBalizas=[],oTiempo1={},sColorPrincipal="",sColorSecundario="",bLogueado=!1,iMaxGuardados=5;function PreLogin(){CargarLocalStorage(),CargarColorInicial(),CrearSlider()}function PostLogin(){GetOpcionesUsuario(usuario.id).then((o=>{aGuardados=JSON.parse(o),CargarAjustes(),OcultarLogin(),CargarMapa(),ObtenerBalizas(),setInterval(ActualizarDatos,1e4)}))}function ObtenerBalizas(){GetBalizas().then((function(o){aBalizas=JSON.parse(o),CargarMarcadores(),CargarCartas(aGuardados)}))}function ObtenerTiempo(o){GetTiempo(o).then((function(o){oTiempo1=JSON.parse(o),AnadirCarta(oTiempo1)}))}function MostrarLogin(){$("#divBlur").css("display","flex"),$("#divLoginContainer").css("display","flex"),$("#divLogin").css("display","flex")}function OcultarLogin(){$("#divBlur").css("display","none"),$("#divLoginContainer").css("display","none"),$("#divLogin").css("display","none")}function MostrarCartaGrande(o){$("#divBlur").show(),$("#divCartaGrande").css("display","flex"),$("#grTitulo").text(o.nombre),$("#grTemperatura").text(o.temperatura),$("#grSensacionTermica").text(o.sensacionTermica),$("#grHumedad").text(o.humedad),$("#grPresionAtmosferica").text(o.presionAtmosferica),$("#grVelocidadViento").text(o.velocidadViento),$("#grHoraAmanecer").text(new Date(1e3*parseInt(o.horaAmanecer)).customFormat("#hhhh#:#mm#")),$("#grHoraAtardecer").text(new Date(1e3*parseInt(o.horaAtardecer)).customFormat("#hhhh#:#mm#")),$("#grLatitud").text(o.latitud),$("#grLongitud").text(o.longitud),$("#divBlur").click((()=>{OcultarCartaGrande()})),$("#grImg").attr("src",`./images/${o.descripcion.toLowerCase()}-white.png`),$("#grFlecha").attr("src",`./images/arrow-${sColorPrincipal}.png`),$("#grFlecha").css({transform:"rotate("+o.direccionViento+"deg)"}),console.log(o)}function OcultarCartaGrande(){$("#divBlur").hide(),$("#divCartaGrande").css("display","none"),console.log("OCULTAR CARTA GRANDE")}function MostrarError(o=limitError){clearTimeout(tTimeout),$("#divError").text(o),$("#divError").removeClass("hidden"),tTimeout=setTimeout((()=>{$("#divError").addClass("hidden")}),2e3)}function CargarCartas(o){$("#divContainer").empty(),o.forEach((o=>{ObtenerTiempo(o.codigoBaliza)}))}function CargarColorInicial(){let o,r;aColores.forEach((e=>{e.nombre==sColorPrincipal&&(o=e.valor),e.nombre==sColorSecundario&&(r=e.valor)})),CambiarColorPrimario(sColorPrincipal,o,!0),CambiarColorSecundario(sColorSecundario,r)}function CambiarColorPrimario(o,r,e=!1){sColorPrincipal=o,localStorage.setItem("sColorPrimario",o),document.documentElement.style.setProperty("--main-color",r),iconoDefecto=L.icon({iconUrl:`../images/marker-${o}.png`,iconSize:[41,41]}),e||CargarMarcadores()}function CambiarColorSecundario(o,r){sColorSecundario=o,localStorage.setItem("sColorSecundario",o),document.documentElement.style.setProperty("--secondary-color",r)}function CargarAjustes(){let o=document.getElementById("divColoresPrincipales"),r=document.getElementById("divColoresSecundarios");o.innerHTML="",r.innerHTML="",$("#textUser").html(usuario.username),sColorPrincipal=localStorage.getItem("sColorPrimario"),sColorSecundario=localStorage.getItem("sColorSecundario"),aColores.forEach((e=>{o.innerHTML+=`<button class="color-button color-button-small" style="background-color: ${e.valor}" onclick="CambiarColorPrimario('${e.nombre}', '${e.valor}')"></button>`,r.innerHTML+=`<button class="color-button color-button-small" style="background-color: ${e.valor}" onclick="CambiarColorSecundario('${e.nombre}', '${e.valor}')"></button>`}))}$("document").ready((function(){PreLogin(),1==bLogueado&&usuario?(console.log(usuario),PostLogin()):MostrarLogin()})),$("#mapTop").click((()=>{$("#map").toggle()})),$("#btnLogout").on("click",(()=>{Logout()})),$(".settings").hover((function(){$(this).css("background","url(../images/settings.gif)"),$(this).css("background-repeat","no-repeat"),$(this).css("background-position","center"),$(this).css("background-size","3.5em")})),$(".settings").mouseleave((function(){$(this).css("background","url(../images/settings-stopped.gif)"),$(this).css("background-repeat","no-repeat"),$(this).css("background-position","center"),$(this).css("background-size","3.5em")})),$("#show").on("mouseover",(function(){$("#colores").removeClass("hidden")})),$("#show").on("mouseout",(function(){$("#colores").addClass("hidden")}));
//# sourceMappingURL=index.cf226876.js.map