// Javascript Document

var Parrafos = document.getElementsByTagName("p");

for (var i = 0; i < Parrafos.length; i++) {
  Parrafos[i].addEventListener("click", CambiarColor);
}

function CambiarColor() {
  if (this.style.backgroundColor == "red") this.style.backgroundColor = "white";
  else this.style.backgroundColor = "red";
}
