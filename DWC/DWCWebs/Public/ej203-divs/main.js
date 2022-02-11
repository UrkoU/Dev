let div = document.createElement("div");
let i = 0;
div.setAttribute("id", "divNoticias");

aNoticias.forEach((noticia) => {
  div.innerHTML += `
  <div id="noticia${i}" class="item">
    <div id="titular${i}" onclick="mostrar('${i}')" class="titular">
    <h2>${noticia[0]}<h2>
    </div>
    <div id="contenido${i}" class="oculto contenido">
        <img src="${noticia[2]}" class="img">
        <div class="noticia">${noticia[1]}</div>
    </div>
  </div>`;
  i++;
});

$("body").append(div);
$(".oculto").hide();

function mostrar(noticia) {
  let tiempo = 250;
  let item = $(`#contenido${noticia}`);
  let titular = $(`#titular${noticia}`);
  titular.removeClass("active");
  if (item.is(":visible")) item.hide(tiempo);
  else
    for (j = 0; j < aNoticias.length; j++) {
      if ($(`#contenido${j}`).is(":visible") && noticia != j) {
        $(`#contenido${j}`).hide(tiempo);
        $(`#titular${j}`).removeClass("active");
      } else {
        item.show(tiempo);
        titular.addClass("active");
      }
    }
}
