var footerLinks = document.querySelectorAll(".aFooterLink");
var activePage = document.querySelector(".activePage");

var index = 0;

footerLinks.forEach((e) => {
  e.myParam = index;
  e.addEventListener("click", function () {
    CambiarLinks(e.myParam);
  });
  index++;
});

function CambiarLinks(i) {
  footerLinks.forEach((e) => {
    e.classList.remove("active-page");
  });

  footerLinks[i].classList.add("active-page");
}

function ImageError(self) {
  console.log(self);
  self.onerror = null;
  self.src = "/Indice/imagenes/default.png";
}
