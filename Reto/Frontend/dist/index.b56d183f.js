function CargarLocalStorage(){sColorPrincipal=localStorage.getItem("sColorPrimario")||"green",sColorSecundario=localStorage.getItem("sColorSecundario")||"blue",bLogueado="true"===localStorage.getItem("logueado")||!1;var e=localStorage.getItem("usuario")||null;usuario=e?JSON.parse(Desencriptar(e)):{};var a=localStorage.getItem("sToken")||null;sToken=a?Desencriptar(a):"",iMaxGuardados=localStorage.getItem("iMaxGuardados")||5}function GuardarMarcadores(e){e.forEach((e=>{PutOpcionesUsuario(e.usuarioId,e)}))}function ObtenerMarcadores(){GetOpcionesUsuario(usuario.id).then((e=>{e}))}function ObtenerGuardadoPorId(e){return aGuardados.find((a=>a.codigoBaliza===e))}function ObtenerIndiceGuardado(e){return aGuardados.findIndex((a=>a.codigoBaliza===e))}function ActualizarDatos(){console.log("Actualizar datos"),aGuardados.forEach((e=>{GetTiempo(e.codigoBaliza).then((function(e){oTiempo=JSON.parse(e),ActualizarCarta(oTiempo)}))}))}Date.prototype.customFormat=function(e){var a,r,o,t,c,l,u,i,s,n,d,p,g,h,m,M,D,S,y,b,f,G;return r=((a=this.getFullYear())+"").slice(-2),c=(l=this.getMonth()+1)<10?"0"+l:l,t=(o=["January","February","March","April","May","June","July","August","September","October","November","December"][l-1]).substring(0,3),s=(n=this.getDate())<10?"0"+n:n,i=(u=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][this.getDay()]).substring(0,3),G=n>=10&&n<=20?"th":1==(f=n%10)?"st":2==f?"nd":3==f?"rd":"th",e=e.replace("#YYYY#",a).replace("#YY#",r).replace("#MMMM#",o).replace("#MMM#",t).replace("#MM#",c).replace("#M#",l).replace("#DDDD#",u).replace("#DDD#",i).replace("#DD#",s).replace("#D#",n).replace("#th#",G),0==(h=p=this.getHours())&&(h=24),h>12&&(h-=12),g=h<10?"0"+h:h,d=p<10?"0"+p:p,b=(y=p<12?"am":"pm").toUpperCase(),m=(M=this.getMinutes())<10?"0"+M:M,D=(S=this.getSeconds())<10?"0"+S:S,e.replace("#hhhh#",d).replace("#hhh#",p).replace("#hh#",g).replace("#h#",h).replace("#mm#",m).replace("#m#",M).replace("#ss#",D).replace("#s#",S).replace("#ampm#",y).replace("#AMPM#",b)};
//# sourceMappingURL=index.b56d183f.js.map