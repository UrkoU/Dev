let div = document.createElement("div");
let i = 0;
div.setAttribute("id", "divNoticias");

aNoticias.forEach((noticia) => {
  console.log(noticia);
  div.innerHTML += `
  <div id="noticia${i}" onclick="mostrar('${i}')">
    ${noticia[0]}
    <div id="contenido${i}" class="oculto">
        <img src="${noticia[2]}">
        ${noticia[1]}
    </div>
  </div>`;
  i++;
});

$("body").append(div);
$(".oculto").hide();

function mostrar(noticia) {
  if ($(`#contenido${noticia}`).is(":visible")) $(`#contenido${noticia}`).hide();
  else
    for (j = 0; j < aNoticias.length; j++) {
      if ($(`#contenido${j}`).is(":visible") && noticia != j) $(`#contenido${j}`).hide();
      else $(`#contenido${noticia}`).show();
    }
}
